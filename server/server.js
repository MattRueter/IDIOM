const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config( { path: "./config.env"} );
const dbo = require("./db/conn");

//const port = process.env.PORT || 5000;
const port = 5000;


app.use(cors());
//app.use(express.json());
app.use(require("./routes/testRoutes"));

app.get("/", function(req,res,next){
	res.send("listening clearly now?")
});


app.get("/words", function(req,res,next) {
	const currentWords = dbo.getMyWords()
	res.send(currentWords)
});


app.listen(port, () => {
	//perform a database connection when server starts
	dbo.connectToServer();
	console.log(`Server is running on port: ${port}`);
});
