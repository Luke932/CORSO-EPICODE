document.write('<h3>Dove sarà scritta questa frase?</h3>'); //7

document.getElementById('saluto').innerHTML = 'CIAO'; //3
document.getElementById('saluto2').innerHTML = 'ALTRO CIAO'; //4

//1 window.alert ('questo è un alert'); 
// alert(8+9); //2

console.log('verifica in console'); //5

var valore=15;
console.log(valore);
console.log(valore+3); //6 

//Alert per primo, innerthetml per secondo, console.log per terzo ed infine il document.write 


numero = 5;
document.getElementById('numero').innerHTML = numero;
document.getElementById('somma').innerHTML = numero + 6;

var altroTesto = 'numero 5';
document.getElementById('altroTesto').innerHTML = altroTesto;

function riassegna() {
    altroTesto = 'Ho cambiato il valore della variabile';
    document.getElementById('altroTesto').innerHTML = altroTesto;
}

riassegna();

var nome= 'Andrea';

if (nome === undefined) {
    document.getElementById('errore').innerHTML = 'La variabile è undefined';
} else {
    document.getElementById('errore').innerHTML = 'Il valore della variabile ' + nome;
}

var nome;

if (nome === undefined) {
    document.getElementById('errore').innerHTML = 'La variabile è undefined';
} else {
    document.getElementById('errore').innerHTML = 'Il valore della variabile è ' + nome;
}

function clicca() {
    document.write('😂😊😊😊🤣😂😂');
}