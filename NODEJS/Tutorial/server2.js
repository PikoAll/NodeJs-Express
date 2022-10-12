// Server che ritorna HTML grazie a stream
var http = require("http"); // diciamo che stiamo facendo un import della libreria http

var fs = require("fs");

var server = http.createServer(function(richiesta,risposta){

// invio HTML
/*
 risposta.writeHead(200,{"Content-Type":"text/html"}); // si passa prima codice risposta e poi si specifica il tipo di risposta se è html.. json,...
 var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8"); // per leggere i dati in stream a vari blocchi
 myReadStream.pipe(risposta);
 */

//  invio json

risposta.writeHead(200,{"Content-Type":"application/json"}); // si passa prima codice risposta e poi si specifica il tipo di risposta se è html.. json,...
var json = {
  nome : "zio",
  cognome : "ziaaa"
};
risposta.end(JSON.stringify(json));

});

server.listen(3000,"127.0.0.1") // la funzione/veriabile server e in ascolto su questa porta e questo url
console.log("server in ascolto")
