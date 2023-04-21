window.addEventListener('load', function(){ //verifica se la checkbox è stata accettata 
  if(!sessionStorage.getItem('ok')){
    location.href = '../errore.html'
  }
})
//NON MI FA TORNARE ALLA PAGINA WELCOME: window.history.pushState è un metodo, 'popstate' indica il click sulla freccia per tronare indietro
window.history.pushState(null, null);
window.addEventListener('popstate', function () {
  window.history.pushState(null, null);
});

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

var count = 0;
var result = 0;
var difficulty = '';

//hard medium easy

  async function fetchJSONData(difficult) {
  const response = await fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=${difficult}`);
  const jsonData = await response.json();

  for (let i = 0; i < jsonData['results'].length; i++) {
    questions[i] = jsonData['results'][i];

  }
  populateForm(count);
  setupCounter();
  startTimer();
}

//vengono chiamate le funzioni principali della pagina
//vengono chiamate in fetchJSONData
//populateForm(count);
//setupCounter();
//startTimer();


difficulty = sessionStorage.getItem('difficulty');
fetchJSONData(difficulty);

//viene settato un compito all'azione di click del pulsante
let btn = document.getElementById('btn1');
btn.disabled = true;
btn.onclick = () => {
  check();
  next();
};


var currentSelection = [];
//funzione che popola il form delle domande
function populateForm(index) {

  if (index >= questions.length) {
    nextPage();
    return;
  }

  let title = document.getElementById('question');
  title.innerHTML = questions[count].question;
  let form = document.querySelector('form > fieldset > div');
  let element = questions[index];
  let lista = [...element.incorrect_answers, element.correct_answer];//inizializza un array cont tutte le risposte corrette e sbagliate

  lista.sort();
  form.innerHTML = '';

  for (let i = 0; i < lista.length; i++) {//ciclo che crea radio button per ciascuna risposta e li aggiunge al form

    let item = lista[i];
    let element = document.createElement('input');

    element.setAttribute('type', 'radio');
    element.setAttribute('value', item);
    element.classList = ['radio'];
    element.setAttribute('id', 'radio' + i);

    form.appendChild(element);  //mette l'elemment dentro il div (l'element creato è un input con attributo di button radio e ha come valore item che sarebbe una risposta)

    let lbl = document.createElement('label');
    lbl.setAttribute('for', 'radio' + i);
    lbl.classList = ['label'];
    lbl.innerHTML = item;
    form.appendChild(lbl);

    element.onclick = () => {//azione sul radio button
      let btn = document.getElementById('btn1');

      let lista = document.querySelectorAll('.radio');
      if (element.checked) {//se la risposta è selezionata si attiva il pulsante per procedere
        btn.disabled = false;
        currentSelection = [element.getAttribute('id')];
      }

      for (let i = 0; i < lista.length; i++) {
        let listElement = lista[i];//se l'elemento non è quello selezionato viene deselezionato
        if (currentSelection.indexOf(listElement.getAttribute('id')) == -1) {
          listElement.checked = false;
        }
      }
    };
  }
}


//titolo del footer
function setupCounter() {
  let element = document.getElementById('counter');
  element.innerHTML = "   QUESTION " + (count + 1) + "<span class=\"purple\"> / " + questions.length + "</span>";
}

/*var interval;
//funzione che attiva il timer, eseguito 30 volte similmente ad un ciclo while ------------------- TIMER MARCO
function startTimer() {
  var time = 30;
  let bar = document.querySelector('#pBar');
  bar.setAttribute('style', `--value:${30}`);
  interval = setInterval(() => {
    time--;
    if (time == 0) {

      next();

      return;
    }
    bar.setAttribute('style', `--value:${time}`);
  }, 1000);
}*/

var interval;
function startTimer() {
  let countdownTimer = document.getElementById("timerText2");
  let progressCircle = document.getElementById("progressCircle");
  let time = 31; //tempo del timer
  let progressDuration = time * 1000; //durata progress circle

  var progressKeyframes = new KeyframeEffect( // uso un costruttore animazione e gli imposto i valori dell'oggetto animazione
    progressCircle,
    [
      { strokeDasharray: '0 100' },
      { strokeDasharray: '100 100' }
    ],
    { duration: progressDuration, fill: 'forwards' }
  );

  var animation = new Animation(progressKeyframes, document.timeline); // istanzio la variabile di animazione 
  animation.play(); // invoco l'animazione

  interval = setInterval(() => { // funzione che ad intervalli di un secondo fa scalare il contatore del timer
    time--;

    if (time == 0) { // quando il timer raggiunge lo zero chiama la funzione "next()" per passare alla domanda successiva
      countdownTimer.textContent = 0;
      next(); 
      return;
    }
    countdownTimer.textContent = time;
  }, 1000);
}

//passaggio alla pagina del risultato
function nextPage() {
  localStorage.setItem('count', count);
  sessionStorage.setItem('risultato', result); //variabile che viene passata alla pagina risultati.js
  window.location = './risultati.html';

  let buttonNext = document.getElementById('btn1'); //collegato button finale alla pagina risultati
  buttonNext.addEventListener('click', () => {
    localStorage.setItem('risultato', result);
    localStorage.setItem('count', count);
    window.location.href = '../risultati.html';
  });
};


//passaggio all domanda successiva
function next() {
  count++;
  clearInterval(interval);
  if (count >= questions.length) {
    nextPage();
    return;
  }

  populateForm(count);
  setupCounter();
  startTimer();
}
//funzione che controlla se la risposta selezionata è corretta ed incrementa il risultato
function check() {
  let elements = document.querySelectorAll('input[type=\"radio\"]');
  let correct = questions[count].correct_answer;
  let answer = [];
  for (var i in elements) {
    let element = elements[i];
    if (element.checked) {
      let value = element.getAttribute('value');
      answer.push(value);
    }
  }
  if (answer.every(element => correct.indexOf(element) != -1)) {
    result++;
    showPopup('risposta corretta; risultato: ' + result + " su 10");
    setTimeout(function () {
      closePopup();
    }, 2000);
  } else {
    showPopup('risposta sbagliata; risultato: ' + result + " su 10");
    setTimeout(function () {
      closePopup();
    }, 2000);
  }
  btn.disabled = true
}

function showPopup(text) {
  let popup = document.getElementById('popup');
  let title = document.querySelector('#popup > h3');
  title.innerText = text;
  popup.style.display = 'block';
}

function closePopup() {
  let popup = document.getElementById('popup');
  popup.style.display = 'none';
}