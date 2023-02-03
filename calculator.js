const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req,res){

    var N1 = Number(req.body.N1)
    var N2 = Number(req.body.N2)

    var result = N1 + N2

    res.send("The Addition of two numbers is: "+ result)
});

app.listen(3000, function(req,res){
    console.log("Server running on port 3000")
});