/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let nu1 = 5;
let nu2 = 7;

nu2 = (nu1 < nu2) ? console.log(nu2) : console.log(nu1);
/*Questo è un metodo per svolgere l'esercizio*/

let nu3 = 5;
let nu4 = 7;

if (nu3 > nu4) {
  console.log('nu3 è maggiore di nu4')
} else if (nu3 < nu4) {
  console.log('nu4 è maggiore di nu3');
} else console.log('n3 ed n4 sono uguali');
/*Questo è un altro metodo */

console.log((nu3 < nu4) ? nu4 : nu3);
/*Questo è un altro metodo ancora */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (nu2 != nu1);
console.log('not equal');
/*Questa è una soluzione */



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (nu1 % 5 == 0);
console.log('divisibile per 5');
/*Questa è una soluzione*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let nu5 = 16;
let nu6 = 8;

if (nu5 === 8 || nu6 === 8 || nu5 + nu6 === 8 || nu5 - nu6 === 8 || nu6 - nu5 === 8) {
  console.log('verificato');
} else console.log('non è verificato');
/*Questa è una soluzione */

if (nu5 === 8 || nu6 === 8) {
  console.log('abbiamo verificato che il valore di una delle variabili sia 8');
} else (nu5 - nu6 === 8 || nu6 - nu5 === 8)
console.log('abbiamo verificato che tramite una sottrazione abbiamo il risultato di "8"');

/*Questa è un'altra soluzione */


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 40;
let delivery = 10;

if (totalShoppingCart > 50) {
  console.log(totalShoppingCart)
}
else {
  console.log(totalShoppingCart + delivery)
}
// Questa è una soluzione 

let totalShoppingCart2 = 100;

if (totalShoppingCart2 > 50) {
  console.log(totalShoppingCart2)
}
else {
  console.log(totalShoppingCart2 + delivery)
}
// Esempio con risultato diverso 

let amount = (totalShoppingCart + delivery);

if (totalShoppingCart < 50) {
  console.log(amount);
} else console.log('totale da pagare: ' + totalShoppingCart);
// Questa è un'altra soluzione

if (totalShoppingCart2 > 50) {
  console.log(totalShoppingCart2);
} else console.log('totale da pagare: ' + amount);
// Questa è un'altra soluzione

amount = totalShoppingCart;

if (totalShoppingCart < 50) {
  amount += delivery;
}
console.log(amount);
// Questa è un'altra soluzione

amount = totalShoppingCart2;

if (totalShoppingCart2 > 50) {
  console.log(amount);
}
// Questo è un altro esempio

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

amount = (totalShoppingCart * 0.8 + delivery);

if (totalShoppingCart < 50) {
  console.log('totale da pagare: ' + amount);
} else console.log('totale da pagare: ' + totalShoppingCart);
// Questa è una soluzione 

amount = (totalShoppingCart2 * 0.8 + delivery)

if (totalShoppingCart2 < 50) {
  console.log(amount);
} else console.log('totale da pagare: ' + totalShoppingCart2 * 0.8);
// Questo è un altro esempio
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x = 1;
let y = 2;
let z = 3;

if (x > y) {
  if (z > x) {
    console.log(z, x, y);
  } else {
    if (z > y) {
      console.log(x, y, z);
    } else {
      console.log(x, y, z);
    }
  }
}else{
  if (z > x){
    console.log (z, y, x);
  }else{
    console.log (y, x, z);
  }
}
// Questa è la soluzione


  /* SCRIVI QUI LA TUA RISPOSTA */

  /* ESERCIZIO 8
    Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  */

console.log(typeof(x));
// Questa è una soluzione 

x = 'Vito';

if (typeof x === 'number'){
  console.log('questo è un numero');
}else console.log ('questo non è un numero');
// Questa è una soluzione

  /* SCRIVI QUI LA TUA RISPOSTA */

  /* ESERCIZIO 9
    Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  */

x = 10;

if (x % 2 == 0){
  console.log ('questo numero è pari')
}else console.log ('questo numero è dispari');
//Questa è la soluzione

if (x % 3 == 0){
  console.log('questo numero è pari')
}else console.log ('questo numero è dispari');
//QUesto è un altro esempio

  /* SCRIVI QUI LA TUA RISPOSTA */

  /* ESERCIZIO 10
    Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
    let val = 7
    if (val < 10) {
        console.log("Meno di 10");
      } else if (val < 5) {
        console.log("Meno di 5");
      } else {
        console.log("Uguale a 10 o maggiore");
      }
  */

      let val = 7
      if (val > 5) {
          console.log("più di 5");
        } else if (val < 10) {
          console.log("Meno di 10");
        } else {
          console.log("Uguale a 5 o maggiore");
        }
//Questa è una soluzione

  /* SCRIVI QUI LA TUA RISPOSTA */

  /* ESERCIZIO 11
    Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
  */

  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }

me.city = 'Toronto';
console.log(me);
//Questa è la soluzione

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

me.lastName = '';
console.log(me);
//Questa è la soluzione

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);
//Questa è la soluzione

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let xy = [];
xy.push  (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(xy);
//Questa è la soluzione

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

xy[9]=100;
console.log(xy);
//Questa è la soluzione

xy.splice(9, 1, 99);
console.log(xy);
//Questa è un'altra soluzione

/* SCRIVI QUI LA TUA RISPOSTA */
