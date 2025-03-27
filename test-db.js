import { connectToDatabase } from "./lib/db.js";

async function testConnection() {
  try {
    const db = await connectToDatabase();
    console.log(`👍 connection à MySql réeussi.`);
    await db.end();
  } catch (error) {
    console.log(`❌ Erreur de connection :`, error.message);
  }
}

testConnection();
