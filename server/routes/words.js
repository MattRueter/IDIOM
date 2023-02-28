const express = require("express");

//wordRoutes is an instance of the express router.
//We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const wordRoutes = express.Router();

//This will help us connect to the database.
const dbo = require("../db/conn");
//This will help convert the id from string to ObjectId for the _id.

const ObjectId = require("mongodb").ObjectId;

//This section will help you get a list of all the records.
wordRoutes.route("/words").get(function (req, res) {
	let db_connect = dbo.getDb("idiom_Client_DB");
	db_connect
		.collection("_Word_Libraries")
		.find({})
		.toArray(function (err, result){
			if(err) throw err;
			res.json(result)
		});
});
module.exports = wordRoutes;