import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Paris UML",
  description: "Exploration des lieux de tournage à Paris",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
          <Navbar />
          <main className="pt-24 px-8 flex-grow">
            <div className="max-w-4xl mx-auto">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
