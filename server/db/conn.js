const { MongoClient } = require("mongodb");
require("dotenv").config( { path: "../config.env"} );


const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db)

var _db;

async function getWords(client) {
	_db = "idiomDB"
	const DemoLibrary = await client.db(_db).collection("Libraries").findOne({ library_id:0 });
	const myWords = DemoLibrary.words
	console.log(myWords)	
};


async function run () {
	try {
		await client.connect();
		console.log("Connected successfully to server.");
		await getWords(client)
	}catch (e){
		console.error(e);
	}finally {
		await client.close()
	}
}
run().catch(console.dir);


module.exports = {
	connectToServer: function () {
		run()
	},
	getDb: function () {
		return _db;
	},
};
