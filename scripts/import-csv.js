const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const mysql = require("mysql2/promise");
const realisateursVus = new Set(); // Pour mémoriser les noms uniques déjà traités
const producteursVus = new Set();
const filmsVus = new Set();
const lieuxVus = new Set();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "paris_tournage",
});

const csvFilePath = path.join(
  __dirname,
  "../public/lieux-de-tournage-a-paris.csv"
);

fs.createReadStream(csvFilePath)
  .pipe(csv({ separator: ";" }))
  .on("data", async (row) => {
    const nomRealisateur = row["Réalisateur"].trim();

    if (!realisateursVus.has(nomRealisateur)) {
      realisateursVus.add(nomRealisateur); // On l’ajoute au Set

      try {
        const [existing] = await db.query(
          "SELECT id FROM realisateurs WHERE nom = ?",
          [nomRealisateur]
        );

        if (existing.length === 0) {
          await db.query("INSERT IGNORE INTO realisateurs (nom) VALUES (?)", [
            nomRealisateur,
          ]);
          console.log(`✅ Réalisateur inséré : ${nomRealisateur}`);
        } else {
          console.log(
            `↪️ Réalisateur déjà présent en base : ${nomRealisateur}`
          );
        }
      } catch (error) {
        console.error(`❌ Erreur avec le réalisateur ${nomRealisateur}`, error);
      }
    } else {
      // Déjà vu dans ce script, inutile de refaire la requête
      console.log(`⏩ Réalisateur déjà vu dans le flux : ${nomRealisateur}`);
    }

    // code pour les producteurs //

    const nomProducteur = row["Producteur"].trim();

    if (!producteursVus.has(nomProducteur)) {
      producteursVus.add(nomProducteur); // On l’ajoute au Set

      try {
        const [existing] = await db.query(
          "SELECT id FROM producteurs WHERE nom = ?",
          [nomProducteur]
        );

        if (existing.length === 0) {
          await db.query("INSERT IGNORE INTO producteurs (nom) VALUES (?)", [
            nomProducteur,
          ]);
          console.log(`✅ Producteur inséré : ${nomProducteur}`);
        } else {
          console.log(`↪️ Producteur déjà présent en base : ${nomProducteur}`);
        }
      } catch (error) {
        console.error(`❌ Erreur avec le producteur ${nomProducteur}`, error);
      }
    } else {
      console.log(`⏩ Producteur déjà vu dans le flux : ${nomProducteur}`);
    }

    const titre = row["Titre"].trim();
    const annee = parseInt(row["Année du tournage"].trim());
    const type = row["Type de tournage"].trim();

    // Clé unique pour ce film (titre + année)
    const filmKey = `${titre}_${annee}`;

    if (!filmsVus.has(filmKey)) {
      filmsVus.add(filmKey);

      try {
        // 1️⃣ On récupère l'ID du réalisateur
        const [resRealisateur] = await db.query(
          "SELECT id FROM realisateurs WHERE nom = ?",
          [row["Réalisateur"].trim()]
        );
        const idRealisateur = resRealisateur[0]?.id;

        // 2️⃣ On récupère l'ID du producteur
        const [resProducteur] = await db.query(
          "SELECT id FROM producteurs WHERE nom = ?",
          [row["Producteur"].trim()]
        );
        const idProducteur = resProducteur[0]?.id;

        // 3️⃣ On vérifie si le film existe déjà
        const [existing] = await db.query(
          "SELECT id FROM films WHERE titre = ? AND annee = ?",
          [titre, annee]
        );

        if (existing.length === 0) {
          await db.query(
            `INSERT INTO films (titre, annee, type, id_realisateur, id_producteur)
         VALUES (?, ?, ?, ?, ?)`,
            [titre, annee, type, idRealisateur, idProducteur]
          );
          console.log(`🎬 Film inséré : ${titre} (${annee})`);
        } else {
          console.log(`↪️ Film déjà présent : ${titre} (${annee})`);
        }
      } catch (error) {
        console.error(`❌ Erreur avec le film ${titre} (${annee})`, error);
      }
    } else {
      console.log(`⏩ Film déjà vu dans le flux : ${titre} (${annee})`);
    }

    // Récupération des données du lieu
    const adresse = row["Localisation de la scène"].trim();
    const codePostal = row["Code postal"].trim();
    const latitude = parseFloat(row["Coordonnée en Y"]);
    const longitude = parseFloat(row["Coordonnée en X"]);
    const lieuKey = `${adresse}_${codePostal}`;

    let idLieu;

    if (!lieuxVus.has(lieuKey)) {
      lieuxVus.add(lieuKey);

      try {
        const [existing] = await db.query(
          "SELECT id FROM lieux WHERE adresse = ? AND code_postal = ?",
          [adresse, codePostal]
        );

        if (existing.length === 0) {
          const [result] = await db.query(
            "INSERT INTO lieux (adresse, code_postal, latitude, longitude) VALUES (?, ?, ?, ?)",
            [adresse, codePostal, latitude, longitude]
          );
          idLieu = result.insertId;
          console.log(`📍 Lieu inséré : ${adresse} (${codePostal})`);
        } else {
          idLieu = existing[0].id;
          console.log(`↪️ Lieu déjà présent : ${adresse} (${codePostal})`);
        }
      } catch (error) {
        console.error(`❌ Erreur avec le lieu ${adresse}`, error);
      }
    } else {
      // Si le lieu a déjà été vu dans le flux, on récupère son ID depuis la base
      const [res] = await db.query(
        "SELECT id FROM lieux WHERE adresse = ? AND code_postal = ?",
        [adresse, codePostal]
      );
      idLieu = res[0]?.id;
    }
    const titreFilm = row["Titre"].trim();
    const anneeFilm = parseInt(row["Année du tournage"]);
    const dateDebut = row["Date de début"];
    const dateFin = row["Date de fin"];

    try {
      // Récupération de l'ID du film
      const [resFilm] = await db.query(
        "SELECT id FROM films WHERE titre = ? AND annee = ?",
        [titreFilm, anneeFilm]
      );
      const idFilm = resFilm[0]?.id;

      if (idFilm && idLieu) {
        await db.query(
          "INSERT INTO tournages (id_film, id_lieu, date_debut, date_fin) VALUES (?, ?, ?, ?)",
          [idFilm, idLieu, dateDebut, dateFin]
        );
        console.log(`🎥 Tournage inséré : ${titreFilm} → ${adresse}`);
      } else {
        console.warn(`⚠️ Film ou lieu introuvable pour : ${titreFilm}`);
      }
    } catch (error) {
      console.error(
        `❌ Erreur lors de l’insertion du tournage pour ${titreFilm}`,
        error
      );
    }
  });
