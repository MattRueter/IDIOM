const { MongoClient } = require("mongodb");
require("dotenv").config( { path: "../config.env"} );


const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db)

var _db;

async function listDatabases(client) {
	databasesList = await client.db().admin().listDatabases();

	console.log("Databases");
	_db = databasesList.databases[0].name;
	const clientLibraries = await client.db(_db).collection("_Word_Libraries")
	const myWords = await client.db(_db).collection("_Word_Libraries").findOne({ library_id:0 });
	//console.log(clientLibraries)
	console.log(myWords)

	databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


async function run () {
	try {
		await client.connect();
		console.log("Connected successfully to server.");

		await listDatabases(client)
	}catch (e){
		console.error(e);
	}finally {
		await client.close()
	}
}
//run().catch(console.dir);


module.exports = {
	connectToServer: function () {
		run()
	},
	getDb: function () {
		return _db;
	},
};
