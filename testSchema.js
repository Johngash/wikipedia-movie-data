require("dotenv").config();

const { MongoClient } = require("mongodb");
const fs = require("fs");

const uri = "process.env.DB; // MongoDB URL
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("movies"); // database
    const collection = db.collection("2010s"); // collection

    // 1️⃣ Read JSON file
    const data = fs.readFileSync("movies.json", "utf-8");
    const movies = JSON.parse(data); // array of movie objects

    // 2️⃣ Insert into MongoDB
    const result = await collection.insertMany(movies);
    console.log(`Inserted ${result.insertedCount} documents`);

    // 3️⃣ Verify
    const all = await collection.find({}).toArray();
    console.log(all);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
