// connect to Idiom DB and pass that connection on to whole app.
require("../loadEnvironment.js");
const { MongoClient } = require("mongodb");
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString);

//establish connection or log error.
async function connectToDb (db) {
	let conn;
	try{
		conn = await client.connect();
		return db = conn.db("idiomDB");
	}catch(e){
		console.log(e);
	}
}
const dataBase = connectToDb();

module.exports = dataBase;