// info e uso di server e lettura e stcrittura di buffer stream in diversi modi

var http = require("http"); // diciamo che stiamo facendo un import della libreria http


// lettura stream di un file, cioe *il file non viene letto tutto al primo colpo ma a vari pezzi
// il tutto è utile per inviare pagine html in modo piu veloce e migliore all'utente
var fs = require("fs");
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var myReadStream = fs.createReadStream(__dirname + "/streamBuffer.txt", "utf8"); // per leggere i dati in stream a vari blocchi
var myWriteStream = fs.createWriteStream(__dirname + "/writeStreamBuffer.txt"); // mi serve per scrivere in stream

myReadStream.on("data",function(chunk){
  console.log("nuovo chunk ricevuto");
  myWriteStream.write(chunk);  // cosi scrivo blocco per blocco ricevuto
});
*/

// alternativa piu veloce per leggere e scrivere stream e l'uso di pipe
// myReadStream.pipe(myWriteStream);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 var server = http.createServer(function(richiesta,risposta){

   risposta.writeHead(200,{"Content-Type":"text/plain"}); // si passa prima codice risposta e poi si specifica il tipo di risposta se è html.. json,...
   risposta.end("ciao amico")  // questo e quello che mi ritorna
 });

 server.listen(3000,"127.0.0.1") // la funzione/veriabile server e in ascolto su questa porta e questo url
 console.log("server in ascolto")
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// uso del server sopra commento modificato con l'uso della lettura e scritture stream con pipe
var server = http.createServer(function(richiesta,risposta){

  risposta.writeHead(200,{"Content-Type":"text/plain"}); // si passa prima codice risposta e poi si specifica il tipo di risposta se è html.. json,...
  var myReadStream = fs.createReadStream(__dirname + "/streamBuffer.txt", "utf8"); // per leggere i dati in stream a vari blocchi
  myReadStream.pipe(risposta);
});

server.listen(3000,"127.0.0.1") // la funzione/veriabile server e in ascolto su questa porta e questo url
console.log("server in ascolto")
