var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false})

var datiFittizi = [{item:"zio"},{item:"zia"},{item:"zii"}];

module.exports = function(app){

app.get("/todo", function(richiesta,risposta){
  risposta.render("todo",{todos : datiFittizi });
});

app.post("/todo",urlencodedParser , function(richiesta,risposta){
  console.log("dauiiii");
  datiFittizi.push(richiesta.body);
  console.log(richiesta.body);
  risposta.render("todo",{todos : datiFittizi });
  //risposta.json(datiFittizi);  // faccio cosi perche nel jquery nel ajax c'e il ricaricamento della pagina
});

app.delete("/todo/:item", function(richiesta,risposta){
  console.log("cane")
  console.log(richiesta.params.item);
  datiFittizi = datiFittizi.filter(function( obj ) {
    return obj.field !== richiesta.params.item;
});
  risposta.render("todo",{todos : datiFittizi });
  //risposta.json(datiFittizi);

});

}
