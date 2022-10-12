var funzioneLunghezzaArray = function(arr){

  return " la lunghezza e: "+ arr.length;
}

var somma = function(a,b){
  return a+b;
}

var pi = 3.14;

// sto cosi indicando che la funzione puo essere importate in altri file se e solo se gli altri file usano require
module.exports.funzioneLunghezzaArray = funzioneLunghezzaArray;
module.exports.somma = somma;
module.exports.pi = pi;

// alternativa
/*
module.exports = {
  funzione1 : funzioneLunghezzaArray,
  somma : somma,
  variab : pi
}
*/
