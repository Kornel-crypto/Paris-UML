"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 mt-12 text-center text-sm">
      <p className="mb-2">
        © {new Date().getFullYear()} Paris UML — conçu avec ❤️ par Kornel
        Novajkay
      </p>
      <a
        href="https://github.com/Kornel-crypto/Paris-UML.git" // ← remplace par ton lien si besoin
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M12 .297a12 12 0 0 0-3.793 23.4c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.746.083-.731.083-.731 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.809 1.305 3.495.997.108-.776.418-1.306.76-1.605-2.665-.306-5.467-1.333-5.467-5.932 0-1.31.468-2.382 1.235-3.222-.124-.305-.535-1.533.117-3.194 0 0 1.008-.322 3.3 1.23a11.495 11.495 0 0 1 6 0c2.292-1.552 3.297-1.23 3.297-1.23.654 1.661.243 2.889.12 3.194.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.624-5.479 5.921.43.37.823 1.101.823 2.219v3.293c0 .319.192.694.801.576A12.005 12.005 0 0 0 12 .297" />
        </svg>
        Voir le projet sur GitHub
      </a>
    </footer>
  );
}
