const { MongoClient } = require("mongodb");
require("dotenv").config( { path: "../config.env"} );


const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db)

var _db;
var myWords;
async function getWords(client) {
	_db = "idiomDB"
	const DemoLibrary = await client.db(_db).collection("Libraries").findOne({ library_id:0 });
	myWords = DemoLibrary.words
		
};


async function run () {
	try {
		await client.connect();
		console.log("Connected successfully to server.");
		await getWords(client)
		console.log(myWords)// globabl myWords now populated.
	}catch (e){
		console.error(e);
	}finally {
		await client.close()
	}
}

module.exports = {
	connectToServer: function () {
		run()
	},
	getDb: function () {
		return _db;
	},
	getMyWords: function (){
		return myWords;
	}
};
