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
wordRoutes.route("/testRoute1").get(function (req, res) {
	res.send("heres looking at you kid.")
});
module.exports = wordRoutes;