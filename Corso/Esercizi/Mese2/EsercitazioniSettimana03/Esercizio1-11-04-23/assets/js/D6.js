/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    return l1 * l2;
}

var risultato = area(4, 4);
console.log(risultato);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/





function crazySum(n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3;
    } else {
        return (n1 + n2);
    }
};

var u = crazySum(35, 35);
console.log(u);






/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/



function crazyDiff(x) {
    return Math.abs(x - 19);
}

var risultato2 = crazyDiff(55);
if (risultato2 > 19) {
    console.log(risultato2 * 3);
} else console.log(risultato2);


const crazyDiff1 = function (y) {
    if (y > 19) {
        return Math.abs(y - 19) * 3;
    } else {
        return Math.abs(y - 19);
    }
}

console.log(crazyDiff1(21));




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/



function boundary(n) {
    if ((n <= 100 && n >= 20) || x == 400) {
        return true;
    } else return false;
}

var risultato4 = boundary(20);
console.log(risultato4);




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
    if (str == ' EPICODE') {
        return str;
    } else {
        return str.concat(' EPICODE');
    }
}
console.log(epify(' EPICODE'));

const epify1 = function (str) {
    if (str.startsWith('EPICODE')) {
        return str;
    } else {
        return 'EPICODE ' + str;
    }
};
console.log(epify1('EPICODE è un\'azienda di formazione italiana')); // EPICODERS
console.log(epify1('Hello')); // EPICODE Hello





/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/



function check3and7(h) {
    if (h % 3 == 00 || h % 7 == 0) {
        return true;
    } else
        return false;
}

var risultato5 = check3and7(21);
console.log(risultato5);




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (strn) {
    let splitStrn = strn.split('');
    let reverseString = splitStrn.reverse();
    let finalString = reverseString.join('');
    return finalString;
}

console.log(reverseString('patata'));

const reverseString1 = function (avc) {
    return avc.split('').reverse().join('');
}

console.log(reverseString1('cazzo'));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (upper) {
    let text = upper.split(' ');
    let tx = [];
    for (let i = 0; i < text.length; i++) {
        let firstS = text[i].charAt(0);
        let upperCase = firstS.toUpperCase();
        let sliceUp = text[i].slice(1);
        let finalText = upperCase + sliceUp;
        tx.push(finalText)
    }
    console.log(tx.join(' '));
}

upperFirst('puttana maiala');

const upperFirstPhrase = function (str) {
    let words = str.split(' ');
    let finalString = [];
    for (let i = 0; i < words.length; i++) {
        let firstChar = words[i].charAt(0);
        let uppercaseChar = firstChar.toUpperCase();
        let cutString = words[i].slice(1);
        let finalWord = uppercaseChar + cutString;
        finalString.push(finalWord);
    }
    console.log(finalString.join(' '));
};

upperFirstPhrase('hello world');


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (gino) {
    let patata = gino.slice(1, -1);
    console.log(patata);
}

cutString('cazzo');

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (any) {
    const gmr = [];
    for (let i = 0; i < any; i++) {
        gmr.push(Math.floor(Math.random() * 10));

    }
    return gmr;
}

console.log(giveMeRandom(6));
/* SCRIVI QUI LA TUA RISPOSTA */
