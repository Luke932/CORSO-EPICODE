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

console.log('****ESERCIZIO 1****');

const area = function (l1, l2) {
	return l1 * l2;
};
const areaResult = area(3, 4);
console.log(areaResult);

/* ESERCIZIO 2 OBB
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log('****ESERCIZIO 2****');

const crazySum = function (num1, num2) {
	if (num1 === num2) {
		return (num1 + num2) * 3;
	} else {
		return num1 + num2;
	}
};

console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log('****ESERCIZIO 3****');

const crazyDiff = function (num) {
	if (num > 19) {
		return Math.abs(num - 19) * 3;
	} else {
		return Math.abs(num - 19);
	}
};
console.log(crazyDiff(3));

/* ESERCIZIO 4 OBB
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log('****ESERCIZIO 4****');

const boundary = function (n) {
	if ((n > 20 && n <= 100) || n === 400) {
		return true;
	} else {
		return false;
	}
};

console.log(boundary(3));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log('****ESERCIZIO 5****');

const epify = function (str) {
	if (str.startsWith('EPICODE')) {
		return str;
	} else {
		return 'EPICODE ' + str;
	}
};
console.log(epify('EPICODE è un\'azienda di formazione italiana')); // EPICODERS
console.log(epify('Hello')); // EPICODE Hello

/* ESERCIZIO 6 OBB
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log('****ESERCIZIO 6****');

const check3and7 = function (n) {
	if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
		return true;
	} else {
		return false;
	}
};
console.log(check3and7(20));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log('****ESERCIZIO 7****');

const reverseString = function (str) {
	let splitString = str.split('');
	let reverseString = splitString.reverse();
	let finalString = reverseString.join('');
	return finalString;
};
console.log(reverseString('EPICODE'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log('****ESERCIZIO 8****');

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

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log('****ESERCIZIO 9****');

const cutString = function (str) {
	return str.slice(1, str.length - 1);
};
console.log(cutString('EPICODE'));

/* ESERCIZIO 10 OBB
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log('****ESERCIZIO 10****');

const giveMeRandom = function (n) {
	const arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(Math.floor(Math.random() * 10));
	}
	return arr;
};
console.log(giveMeRandom(5));

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

console.log('****EXTRA 1****');

var newArr = [2,6,3,6,8,4,7,4,2];

checkArray(newArr);

function checkArray(myArray) {
    let somma = 0;
    myArray.forEach(element => {
        if (element > 5) {
            console.log(`${element} è maggiore di 5`);
            somma += element;
        } else {
            console.log(`${element} è minore di 5`);
        }
    });
    console.log(`La somma dei numeri maggiori di 5 è ${somma}`);
}

/* EXTRA 2 Y
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

console.log('****EXTRA 2****');

var shoppingCart = [
	{
		price: 25,
		name: 'cover',
		id: 1,
		quantity: 2,
	},
	{
		price: 35,
		name: 'powerbank',
		id: 2,
		quantity: 1,
	},
	{
		price: 10,
		name: 'plug',
		id: 3,
		quantity: 5,
	},
];

var total = 0;

shoppingCartTotal();

function shoppingCartTotal() {
	shoppingCart.forEach((element) => {
		total += element.price * element.quantity;
	});
	console.log(`Il totale dovuto al negozio è di euro ${total}`);
}

/* EXTRA 3 Y
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

console.log('****EXTRA 3****');

var newObject = {
	price: 30,
	name: 'memKey',
	id: 4,
	quantity: 3,
};

addToShoppingCart(newObject);

function addToShoppingCart(article) {
	shoppingCart.push(article);
	console.log(`L'array ora contiene ${shoppingCart.length} elementi`);
	console.table(shoppingCart);
}

/* EXTRA 4 Y
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

console.log('****EXTRA 4****');

maxShoppingCart();

function maxShoppingCart() {
    var max = shoppingCart[0].price;
    var myArticle;
    var mioIndice;
	shoppingCart.map((element, i) => {
		if (element.price > max) {
            max = element.price;
            myArticle = element;
            mioIndice = i;
		}
	});
    console.log(`L'articolo con il prezzo più alto è ${myArticle.name}, che costa Euro ${max} ed è in posizione ${mioIndice}`);
}

/* EXTRA 5 Y
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

console.log('****EXTRA 5****');

latestShoppingCart();

function latestShoppingCart() {
    var last = shoppingCart.length - 1;
    console.table(shoppingCart[last]);
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

console.log('****EXTRA 6****');

let numLoop = 6;

loopUntil(numLoop);

function loopUntil(loop) {
    let stop = 0;

    do {
        let numero = Math.floor(Math.random() * 10)
        console.log(numero);
        if (numero >= loop) {
            stop++;
        }
    }
    while (stop < 3);
}

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

console.log('****EXTRA 7****');

var arrTupla = [12,2,'Pippo',37,'Pluto',24,51,'Paperino'];

average(arrTupla)

function average (tupla) {
    let media = 0;
    let count = 0
    tupla.forEach(element => {
        if (typeof(element) === 'number') {
            media += element;
            count++;
        }
    });
    media = media / count;
    console.log(media);
}

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

console.log('****EXTRA 8****');

var arrStr = ['Pippo','Pluto','Paperino','Qui','Basettoni','Topolino'];

longest(arrStr);

function longest(stringhe) {
    let lunghezza = 0;
    let parola;
    stringhe.forEach(element => {
        if (element.length > lunghezza) {
            lunghezza = element.length;
            parola = element;
        }
    });
    console.log(`La parola più lunga è ${parola}, di ${lunghezza} caratteri`);
}

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

console.log('****EXTRA 9****');

var contenuto = 'Questa mail contiene informazioni commerciali';

console.log(antiSpam(contenuto));

function antiSpam(emailContent) {
    emailContent = emailContent.toLowerCase();
    if (emailContent.indexOf('spam') > -1 || emailContent.indexOf('scam') > -1) {
        return false;
    } else {
        return true;
    }
}

/* EXTRA 10 Y
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

console.log('****EXTRA 10****');

var miaData = new Date(2023,01,02);

console.log(numGiorni(miaData));

function numGiorni(data) {
    let oggi = new Date();
    let diff = oggi - data;
    diff = Math.floor(diff/1000/60/60/24);
    return `Dal ${data} al ${oggi} sono passati ${diff} giorni`;
}

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

console.log('****EXTRA 11****');

var val1 = 4;
var val2 = 4;

matrixGenerator(val1, val2);

function matrixGenerator(num1, num2) {
    let matrix = [];
    for (let i = 0; i < num2; i++) {
        for (let j = 0; j < num1; j++) {
            matrix.push(`${i}${j}`);
        }
    }
    console.log(matrix);
}