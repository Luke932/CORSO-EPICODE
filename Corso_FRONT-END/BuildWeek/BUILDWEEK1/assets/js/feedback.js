//PER NON ANDARE SCRIVENDO IL LINK MA VA MESSA LA CONDIZIONE ANCHE DELLE DOMANDE

window.addEventListener('load', function(){ 
   if (localStorage.getItem('cb') !== 'unchecked' && !sessionStorage.getItem('risultato')) {
      location.href = '../errore.html';
   }
});



// Seleziono tutti gli elementi "path" e crea un array
var starsArray = document.querySelectorAll("path");

// Variabile che indica se una stella è stata selezionata o meno
var isSelected = false;
var texArea = document.querySelector('input')
var buttonR_US = document.querySelector('a')


document.addEventListener('mouseup', function (event) {
   // Verifica che il click non sia avvenuto su un'area diversa da quella delle stelle selezionate,
   // che una stella sia stata selezionata, e che l'elemento cliccato non sia un input o un a
   if (
      !event.target.classList.contains('star') && isSelected && !texArea && !buttonR_US) {
      // Annulla la selezione
      clearSelection();
   }
});

// Funzione per annullare la selezione
function clearSelection() {
   isSelected = false;
   // Rimuovo la classe "star-selected" da tutte le stelle e reimposto il colore originale
   for (let i = 0; i < starsArray.length; i++) {
      starsArray[i].classList.remove('star-selected');
      starsArray[i].style.fill = "#0b113b";
   }
}

// LOOP GENERALE SU OGNI ELEMENTO dell'array "arrayStars"
for (let i = 0; i < starsArray.length; i++) {

   // Seleziono l'i-esima stella
   let star = starsArray[i];

   // Aggiungo la classe "star-transition" per abilitare le transizioni CSS
   star.classList.add('star-transition');

   // Listener per l'evento mouseenter sulla stella
   star.addEventListener('mouseenter', function () {
      // Cambio il cursore del mouse in "pointer"
      star.style.cursor = "pointer";
      if (!isSelected) {
         // Se la stella non è selezionata, la coloro di azzurro
         star.style.fill = "#00ffff";
         // Coloro di azzurro tutte le stelle precedenti
         for (let j = 0; j < i; j++) {
            starsArray[j].style.fill = "#00ffff";
         }
      }
   });

   // Listener per l'evento mouseleave sulla stella
   star.addEventListener('mouseleave', function () {
      if (!isSelected) {
         // Se la stella non è selezionata, reimposto il colore originale
         star.style.fill = "#0b113b";
         // Reimposto il colore originale a tutte le stelle precedenti
         for (let j = 0; j < i; j++) {
            starsArray[j].style.fill = "#0b113b";
         }
      }
   });

   // Listener per l'evento click sulla stella
   star.addEventListener('click', function () {
      isSelected = true;
      // Aggiungo la classe "star-selected" a tutte le stelle fino alla stella corrente e le coloro di azzurro
      for (let j = 0; j <= i; j++) {
         starsArray[j].classList.add('star-selected');
         starsArray[j].style.fill = "#00ffff";
      }
      // Rimuovo la classe "star-selected" da tutte le stelle successive e reimposto il colore originale
      for (let j = i + 1; j < starsArray.length; j++) {
         starsArray[j].classList.remove('star-selected');
         starsArray[j].style.fill = "#0b113b";
      }
   });
}
