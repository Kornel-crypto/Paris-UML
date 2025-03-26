
-- ===========================================
-- 🎬 SCHÉMA DE BASE DE DONNÉES - Paris Tournage
-- Fichier SQL généré pédagogiquement pour créer les tables
-- ===========================================

-- TABLE DES RÉALISATEURS
CREATE TABLE realisateurs (
    id_realisateur INT PRIMARY KEY AUTO_INCREMENT, -- Identifiant unique du réalisateur
    nom VARCHAR(255) NOT NULL                      -- Nom complet
);

-- TABLE DES PRODUCTEURS
CREATE TABLE producteurs (
    id_producteur INT PRIMARY KEY AUTO_INCREMENT,  -- Identifiant unique du producteur
    nom VARCHAR(255) NOT NULL                      -- Nom complet
);

-- TABLE DES FILMS
CREATE TABLE films (
    id_film INT PRIMARY KEY AUTO_INCREMENT,        -- Identifiant unique du film
    titre VARCHAR(255) NOT NULL,                   -- Titre du film
    id_realisateur INT,                            -- Clé étrangère vers realisateurs
    id_producteur INT,                             -- Clé étrangère vers producteurs
    FOREIGN KEY (id_realisateur) REFERENCES realisateurs(id_realisateur),
    FOREIGN KEY (id_producteur) REFERENCES producteurs(id_producteur)
);

-- TABLE DES LIEUX DE TOURNAGE
CREATE TABLE lieux (
    id_lieu INT PRIMARY KEY AUTO_INCREMENT,        -- Identifiant unique du lieu
    adresse TEXT NOT NULL,                         -- Adresse complète
    code_postal VARCHAR(10),                       -- Code postal de l'adresse
    coord_x FLOAT,                                 -- Coordonnée longitude
    coord_y FLOAT                                  -- Coordonnée latitude
);

-- TABLE DES TYPES DE TOURNAGE
CREATE TABLE types_tournage (
    id_type INT PRIMARY KEY AUTO_INCREMENT,        -- Identifiant unique du type
    nom_type VARCHAR(100) NOT NULL                 -- Exemple : "Long métrage", "Série TV"
);

-- TABLE CENTRALE DES TOURNAGES
CREATE TABLE tournages (
    id_tournage INT PRIMARY KEY AUTO_INCREMENT,    -- Identifiant unique du tournage
    date_debut DATE,                               -- Début du tournage
    date_fin DATE,                                 -- Fin du tournage
    annee INT,                                     -- Année du tournage
    id_film INT,                                   -- Clé étrangère vers films
    id_lieu INT,                                   -- Clé étrangère vers lieux
    id_type INT,                                   -- Clé étrangère vers types_tournage
    FOREIGN KEY (id_film) REFERENCES films(id_film),
    FOREIGN KEY (id_lieu) REFERENCES lieux(id_lieu),
    FOREIGN KEY (id_type) REFERENCES types_tournage(id_type)
);
