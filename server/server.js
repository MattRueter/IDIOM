const express = require("express");
//const cors = require("cors");
const app = express();


//const port = process.env.PORT || 5000;
const port = 5000;


//app.use(cors());
app.use(express.json());

app.get("/", function(req,res,next){
	res.send("listening and responding.")
});


app.get("/words", function(req,res,next) {

	res.send("The library would be sent here. Remember to check authentication.")
});


app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
