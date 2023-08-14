const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

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


app.get("/words", function(req,res,next) {

	res.send("The library would be sent here. Remember to check authentication.")
});


app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
