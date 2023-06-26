// Ricevere attraverso un form il nome e l'anno di nascità di una persona, verificare se la persona è maggiorenne o minorenne , salutarla indicando la maggiore o minore età 

/*
COMPITI
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CON IL VALORE MEMORIZZATO DAL CAMPO ANNO, CALCOLARE L'ETA' IN BASE ALL'ANNO IN CORSO
4. VERIFICARE LA MAGGIORE O MINORE ETA'
5. SCRIVERE NELL' HTML
6. CANCELLARE IL FORM

EVENTO SCATENATE PERFETTO E' IL CLICK SUL BUTTON (eventHandler)

VARIABILI
GLOBALI: btn (const), età, stato
*/

const btn = document.getElementById('verifica');
var eta; // globale perché viene valorizzata al calcolo dell'età e utilizzata nella verifica e nella stampa
var stato; // globale perché viene valorizzata in fase di verifica e usata in stampa 

btn.addEventListener('click', function() {
    let nome = document.getElementById('nome');
    let anno = document.getElementById('anno');

    calcolaEta(anno.value);
    verifica();
    scrivi(nome.value);
    cancellaForm(nome, anno);
});

function calcolaEta(anno) {
    eta = 2023 - anno;
}

function verifica (){
    stato = (eta >= 18) ? '  maggiorenne' : 'minorenne';
}

function scrivi (nome){
    document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + ' anni; sei' + stato;
}

function cancellaForm(nome, anno) {
    nome.value = '' ;
    anno.value = '' ;
}