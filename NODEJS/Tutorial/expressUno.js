var express = require("express");  // import
var bodyParser = require("body-parser"); // dal pacchetto body-parser, serve per non passare variabili nell'url
var app = express();    //penso che cosi possiamo usare tutto quello che ce dentro express tramite la variabile app

var urlencodedParsers = bodyParser.urlencoded({extended : false}); // dal pacchetto body-parser, serve per non passare variabili nell'url

app.set("view engine", "ejs"); // se si usa ejs cioe i template enginne bisogna fare questo settaggio


app.get("/", function(richiesta,risposta){
  risposta.sendFile(__dirname+"/index.html")  // con sendFile invio html
});

app.get("/contatti", function(richiesta,risposta){
  risposta.send("questa è la pagina contatti");     // con send invio parole or stringhe
});

app.get("/chisono", function(richiesta,risposta){
  risposta.send("questa è la pagina di chi sono");
});

// Passaggio di parametri url

app.get("/profilo/:id", function(richiesta,risposta){
  risposta.send("tu sei il seguente id"+ richiesta.params.id);  // id e indicato nel rigo sopra
});


// TEMPALTE ENGINESS cioe, prendere una variabille dalla richiesta e inserirla nella pagina html che stiamo per mandare
// pero non si sua piu l'esensione html ma ejs simile, questo ultimo file va messo in una cartella denominata views
/*
app.get("/:name", function(richiesta,risposta){
  var data = {eta:18, musica: "emis", hobbies:["birra","femmine"]}; //per passare ulteriori variabili, vedere pero il file ejs perche in questo caso a differenza di nome e leggermente diverso
  risposta.render("index2ejs", {nome : richiesta.params.name, data : data}); // nome come chiave e uguale alla variabile settata nel file ejs
});
*/

//metodo post per prendere i valori dalla pagina web senza url
// il singolo url puo essere sia get che post
app.get("/forms/forms", function(richiesta,risposta){
  console.log("METODO get");
  risposta.render("forms")
});

app.post("/forms/forms", urlencodedParsers, function(richiesta,risposta){
  console.log("METODO post");
  console.log(richiesta.body); // cosi mi stampa tutte le variabili con i valori contenuti in quella pagina
  console.log(richiesta.body.fname); // cosi mi stampo il valore della vafiabile con name fname
  risposta.render("forms")
});




console.log("server in ascolto");
app.listen(3000); // questo penso che deve essere sempre l'ultimo rigo, stiamo dicendo che siamo in ascolto sulla porta 3000
