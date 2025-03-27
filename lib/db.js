import mysql from "mysql2/promise.js";

// Fonction asynchrone pour se connecter à la base
export async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: "127.0.0.1", // On force IPv4 pour éviter le bug "::1"
    user: "root", //
    password: "", //
    database: "paris_tournage",
  });

  return connection;
}
