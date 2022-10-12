// Usiamo il patter MVC per avere tutto piu ordinato e diviso in file
var express = require("express");
var todoController = require("./Controllers/todoController");

var app = express();
//setto l'uso di template engine
app.set("view engine","ejs");

//per usare i css che gia e stato craeto per noi
//app.use(express.static(__dirname));
app.use(express.static('public'));

//uso di controller
todoController(app);


console.log("server in funzione");
app.listen(3000);
