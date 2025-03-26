export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Projet Paris Tournage
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Une application en Next.js + React pour explorer les lieux de tournage à
        Paris.
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Explorer les lieux
        </button>
        <button className="bg-white hover:bg-gray-400 border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">
          A propos du projet
        </button>
      </div>
    </main>
  );
}
