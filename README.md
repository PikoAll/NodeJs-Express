NPM
NPM e il gestore di pacchetti per javascript
NPM va usato nel cmd e tipo un sudo di linux
npm usato per installare pacchetti, creera una cartella nel progetto di nome node_modules, dove dentro ci saranno installati i paccheti da noi desiderati e le rispettive dipendenze di ogni nostro pacchetto.
Disinstallare  un pacchetto
il comando e: npm unistall nomePacchetto
Package.json
mi consente di gestire le dipendenze del mio progetto
appena siamo nella cartella di nostra preferenza fare:
npm init e inserire se si vuole le domande che ti fa il cmd oppure fare sempre invio
Pacchetti principale
Package.json 
appena iniziati fare npm install moment --save, moment e una cosa molto utile a javascrip ma volendo si possono installare altre cose-
poi installare express
nodemon, pacchetto utile per quando si modifica il codice, non ce bisogno di stoppare il server e riavviarlo ma la modifica si prende in automatico, per avviare pero l'app non bisogna più fare node nomeApp ma nodemon nomeApp.js. Si installa usando il peguente comando npm install nodemon -g. Una volta installato in un pc non va piu installato per ogni progetto come gli altri pachetti, perche qua si mette il -g che sta ad indicare globalmente.
pacchetto ejs si installa come i pachetti normali, serve al server per inserire una variabile nell'html al momento che il serve invia la pagina all'utente. Pero non si usa piu lestensione html ma ejs. questo ultimo file va messo in una cartella denominata views
installare body-parser un pacchetto che serve per inviare i dati dalla pagina html o ejs al server senza metterli nel URL
pacchetto mongoose per interagire con database SQL o noSql non so bene
Node js
Node js ci permette di eseguire javascript in locale cioè back-and.
aprire atom
aprire il terminale di atom
scrivere node nomefile.js e in automatico il codice viene eseguito (il terminale deve essere dove c'e il file .js)
Motore v8
E il compilatore che traduce il javascript in linguaggio macchina diciamo, vedilo un po cosi, nodejs e scritto in c++.
Protocolli
sono un insieme di regole per la comunicazione client e server.
Sochet e il canale di comunicazione tra client e server
Express
E un pacchetto aggiuntivo che va installato con NPM, e permette la gestione rei routs/percorsi e non solo.
Il pacchetto express va installato con il seguente comando, npm install express
Template enginee
e il file con estensione ejs, si scrive in html normalmente va e piu facile comunicare con node js.
in piu ci permette di creare dei template parziali, per esempio la nav bar e quindi non modificare singole pagine ma dofificando la navbar le pagine che la includono in automatico saranno aggiornate
Cartelle
nella cartella assert va il css e immagini.
nella cartella views vanno le pagine ejs
 allinterno si fa una cartella di nome partials che vanno i pezzi in ejs tipo navBar 
Info tunnel
Poiche si vede il file .js quando si ispeziona una pagina web si puo usare un sito, dove si incolla il codice js e lui lo codifica in modo strano producendo un testo illegibile, dopo di che prendere questo testo e metterlo nel file del js il compilatore comunque lo leggera tranquillamente. il sito in questione è :  obfuscator
