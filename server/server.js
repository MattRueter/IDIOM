const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const dataBase = require("./db/conn.js");
let db;

require("./loadEnvironment.js");
const port = process.env.PORT || 3000;


//MIDDLEWARE:
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"))


//basic routes:
app.get("/", function(req,res,next){
	res.send("listening and responding.")
});

app.get("/word", async(req,res) => {
	const currentUser = "DEMO";
	const collection = await db.collection("users");
	const user = await collection.find({name:currentUser}).toArray();
	const words  = user[0].words;
	res.send(words)
});
app.get("/login/:username", async (req,res) => {
	let query =req.params.username;
	const collection = await db.collection("users");
	let user = await collection.find( {name:query} ).toArray();
	user = user[0]
	res.send(user)
});

//function connects to DB and assigns result to global const db;
//then spins up server. Probably a better way.
async function startServer() {
	db = await dataBase;
	app.listen(port, () => {
		console.log(`Server is running on port: ${port}`);
	});
};
startServer();