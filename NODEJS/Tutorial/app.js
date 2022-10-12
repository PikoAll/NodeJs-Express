// funzioni tradizionali
console.log("funzioni")
function funzioneUno(){
  console.log("zio");
}
funzioneUno();

// funzioni expression

var variabileFunzione  = function(){
  console.log("zio 2");
}

variabileFunzione();

//chiamata di funzioneUno  passaggio di funzione come parametro
function callFunction(fun){
  fun();
}

callFunction(variabileFunzione);   //  niente parentesi dentro

// moduli
console.log("moduli")
// uso il codice scritto nel file counter.js prima faccio un import tipo con require tramite il nome del file
// uso una variabile per indicare il file e poi con il . nome metodo uso il metodo
var count = require('./count');
console.log(count.funzioneLunghezzaArray([1,2,3,4]));
console.log(count.somma(5,6));


// scrittura e lettura file
console.log("file txt")
var fs = require("fs"); // fs e un modulo standard non creato da me ma messo a disposizione, fs e  simile a os di python
var file = fs.readFileSync("file.txt","utf8");
console.log("lettura file txt: "+ file);

fs.writeFileSync("file.txt",file+"ciao zioo"); // sovrascrve il file
