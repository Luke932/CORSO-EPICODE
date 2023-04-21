//PER NON ANDARE SCRIVENDO IL LINK 

window.addEventListener('load', function(){ 
    if (localStorage.getItem('cb') !== 'unchecked' && !sessionStorage.getItem('risultato')) {
      location.href = '../errore.html';
    }
});


//Dobbiamo prima passare con un localstorage il valore di result e di count

var count = localStorage.getItem('count');
var results = sessionStorage.getItem('risultato');

var percentualeCorr = ((results / count) * 100); //percentuale di risposte corrette
var percentualeIncorr = 100 - percentualeCorr; //percentuale di risposte non corrette
var frazCorr = `${results} / ${count}`; //frazione di risposte corrette 
var frazIncorr = `${count - results} / ${count}`; //frazione di risposte corrette 

var cakeT = document.getElementById('cake').getContext('2d'); // funzione predefinita per dire dove sta questo grafico e che sarà 2d.

// Definisco i dati da mostrare nel grafico
// Grafico
const ctx = document.getElementById('cake');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [percentualeCorr, percentualeIncorr],
      backgroundColor: ['#00ffff' ,'#c2128d',],
      label: '%',
      borderWidth: 1,
    }]
    },
});

//var corrette = document.getElementById('corrette').createElement('h2');

document.getElementById('corrette').innerHTML = `CORRECT: <br> ${percentualeCorr + '%'} domande corrette:<BR> ${frazCorr}`;
document.getElementById('sbagliate').innerHTML = `WRONG: <br> ${percentualeIncorr + '%'} domande sbagliate:<BR> ${frazIncorr}`;
  //var sbagliate = document.getElementById('sbagliate').createElement('h2', 'p');

  if(results < 6){
    let title = document.getElementById('score');
    title.innerHTML = 'Fail!</br><span class=\"green\">you failed the exam.<br><br></span>';
}