// connect to Idiom DB and pass that connection on to whole app.
require("../loadEnvironment.js");
const { MongoClient } = require("mongodb");
const connectionString = process.env.ATLAS_URI;
console.log("string below")
console.log(connectionString);
const client = new MongoClient(connectionString);

//establish connection or log error.
let conn;
let db;
async function connectToDb () {
	try{
		conn = await client.connect();
		db = conn.db( "idiomDB" );

	}catch(e){
		console.log(e);
	}
}

connectToDb()
module.exports = db;