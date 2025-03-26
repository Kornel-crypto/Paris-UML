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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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
