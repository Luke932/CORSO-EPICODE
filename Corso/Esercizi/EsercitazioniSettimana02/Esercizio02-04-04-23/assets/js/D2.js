/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
document.getElementById('title').innerHTML = 'PRINCIPALI DATATYPE IN JAVASCRIPT';
document.getElementById('text').innerHTML = 'Stringa = Si definisce un valore in forma testuale.<br> Numero = Si definisce un valore in forma numerica.<br> Booleano = Si definisce un valore che ha solo due possibilità per stabilire la verità su un operazione.<br> Null = Sarebbe un dato assente stabilito da noi intenzionalmente.<br> Undefined = In questo caso il dato assente esiste per motivo casuale<br><br><br> '
var h1 = 'PRINCIPALI DATATYPE IN JAVASCRIPT';
var p = 'Stringa = Si definisce un valore in forma testuale.<br> Numero = Si definisce un valore in forma numerica.<br> Booleano = Si definisce un valore che ha solo due possibilità per stabilire la verità su un operazione.<br> Null = Sarebbe un dato assente stabilito da noi intenzionalmente.<br> Undefined = In questo caso il dato assente esiste per motivo casuale<br><br><br> '
var h1 = 'PRINCIPALI DATATYPE IN JAVASCRIPT';
console.log (h1);
console.log (p);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
var text = 'Io sono '
var myname = 'Luca';
document.getElementById('name').innerHTML += myname;
console.log(text + myname);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
var number1 = 12;
var number2 = 20;
document.getElementById('addiction').innerHTML = number1 + number2;
console.log(number1 + number2);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
var x = 12;
document.getElementById('vabbe').innerHTML += x;
console.log(x);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
var myName1 = 'Luca ';
var myName1 = 'Giacalone ';
const myName2 = 'Ignazio'; 
document.getElementById('assegnation').innerHTML = myName1 + myName2;
console.log(myName1 + myName2);
// const myName2 = 'Vito'; // Dimostrazione che una costante non può cambiare tipo di valore.
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
var x = 12;
document.getElementById('sottrazione').innerHTML = x - 4;
console.log(x-4);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
var names1 = 'john';
var names2 = 'John';
console.log (names1 == names2);
document.getElementById('john').innerHTML = names1 == names2;
names1 = names1.toLocaleLowerCase();
names2 = names2.toLocaleLowerCase();
console.log (names1 == names2);
document.getElementById('John').innerHTML = names1 == names2;
/* SCRIVI QUI LA TUA RISPOSTA */
