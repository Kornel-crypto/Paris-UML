"use client";

import Link from "next/link";

export default function Navbar() {
  const twLink = "transition duration-200 hover:text-emerald-300";
  return (
    <nav className="fixed top-0 left-0 w-full bg-emerald-600 text-gray-100 p-4 px-8 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo du site */}
        <div className="text-xl font-bold tracking-wide">🎥 PARIS UML</div>
        {/* Liens de navigations */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link href="/" className={twLink}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/explorer" className={twLink}>
              Explorer
            </Link>
          </li>
          <li>
            <Link href="/a-propos" className={twLink}>
              À propos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
