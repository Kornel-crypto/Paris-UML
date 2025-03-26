This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Illustration textuel du projet

```bash

📘 films
├─ PK id_film
├─ titre
├─ FK id_realisateur → realisateurs.id_realisateur
└─ FK id_producteur → producteurs.id_producteur

📘 realisateurs
└─ PK id_realisateur

📘 producteurs
└─ PK id_producteur

📘 lieux
└─ PK id_lieu

📘 types_tournage
└─ PK id_type

📘 tournages
├─ PK id_tournage
├─ date_debut / date_fin / annee
├─ FK id_film → films.id_film
├─ FK id_lieu → lieux.id_lieu
└─ FK id_type → types_tournage.id_type
```

## 📘 Schéma UML du projet

Voici le schéma de la base de données utilisée dans ce projet :

![Schéma UML](/public/UML.png)
