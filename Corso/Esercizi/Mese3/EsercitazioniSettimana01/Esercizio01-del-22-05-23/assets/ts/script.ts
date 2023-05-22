const btnVerifica = document.getElementById("verifica") as HTMLButtonElement;
const btnReset = document.getElementById("reset") as HTMLButtonElement;
const giocatore1 = document.getElementById("giocatore1") as HTMLInputElement;
const giocatore2 = document.getElementById("giocatore2") as HTMLInputElement;
let valore1: number;
let valore2: number;
const messaggio = document.getElementById("risultato");
let estratto: number;

window.addEventListener("load", function () {
  btnReset.setAttribute("disabled", "true");
  btnReset.style.backgroundColor = "red";
  btnReset.style.color = "white";
});

btnVerifica.addEventListener("click", function () {
  valore1 = Number(giocatore1.value);
  valore2 = Number(giocatore2.value);
  verifica();
});

const verifica = () => {
  if (!valore1 || !valore2) {
    if (messaggio !== null) {
      messaggio.innerHTML =
        "Attenzione! Entrambi i giocatori devono inserire un valore!";
    }
    return;
  } else if (valore1 < 1 || valore2 < 1 || valore1 > 100 || valore2 > 100) {
    if (messaggio !== null) {
      messaggio.innerHTML =
        "Attenzione! Inserire un valore numerico tra 1 e 100!";
    }
    return;
  } else if (valore1 === valore2) {
    if (messaggio !== null) {
      messaggio.innerHTML = "Attenzione! Inserire valori diversi!";
    }
    return;
  } else {
    estrai();
    calcola();
  }
};

const estrai = () => {
  estratto = Math.floor(Math.random() * 100 + 1);
};

const calcola = () => {
  btnReset.removeAttribute("disabled");
  btnReset.style.backgroundColor = "green";
  giocatore1.setAttribute("disabled", "true");
  giocatore1.style.backgroundColor = "lightgray";
  giocatore2.setAttribute("disabled", "true");
  giocatore2.style.backgroundColor = "lightgray";

  if (messaggio !== null) {
    document.getElementById(
      "estratto"
    )!.innerHTML = `Numero estratto: ${estratto}`;
  }

  switch (true) {
    case valore1 === estratto:
      if (messaggio !== null) {
        messaggio.innerHTML = "Il giocatore 1 ha indovinato!";
      }
      break;

    case valore2 === estratto:
      if (messaggio !== null) {
        messaggio.innerHTML = "Il giocatore 2 ha indovinato!";
      }
      break;

    case Math.abs(estratto - valore1) < Math.abs(estratto - valore2):
      if (messaggio !== null) {
        messaggio.innerHTML =
          "Nessuno ha vinto ma il giocatore 1 si è avvicinato di più";
      }
      break;

    case Math.abs(estratto - valore2) < Math.abs(estratto - valore1):
      if (messaggio !== null) {
        messaggio.innerHTML =
          "Nessuno ha vinto ma il giocatore 2 si è avvicinato di più";
      }
      break;

    default:
      if (messaggio !== null) {
        messaggio.innerHTML = "Pareggio!";
      }
      break;
  }

  btnVerifica.setAttribute("disabled", "true");
  btnVerifica.style.backgroundColor = "red";
  btnVerifica.style.color = "white";
};

btnReset.addEventListener("click", function () {
  btnVerifica.removeAttribute("disabled");
  btnVerifica.removeAttribute("style");
  giocatore1.removeAttribute("disabled");
  giocatore1.removeAttribute("style");
  giocatore2.removeAttribute("disabled");
  giocatore2.removeAttribute("style");
  giocatore1.value = "";
  giocatore2.value = "";
  if (messaggio !== null) {
    messaggio.innerHTML = "";
  }
  if (document.getElementById("estratto") !== null) {
    document.getElementById("estratto")!.innerHTML = "";
  }
  btnReset.setAttribute("disabled", "true");
  btnReset.style.backgroundColor = "red";
  btnReset.style.color = "white";
});

const numberRandom: number = Math.floor(Math.random() * 100 + 1);
  console.log(numberRandom);
  
  const player1: number = Math.floor(Math.random() * 100 + 1);
  console.log(player1);
  
  const player2: number = Math.floor(Math.random() * 100 + 1);
  console.log(player2);
  
  if (player1 === numberRandom ){
    console.log('Il player 1 ha indovinato il numero');
  } else if (player2 === numberRandom){
    console.log('Il player 2 ha indovinato il numero');
  } else if (player1 === numberRandom  && player2 === numberRandom){
    console.log('Entrambi i giocatori hanno indovinato il numero');
  }else if (Math.abs(numberRandom - player1) < Math.abs(numberRandom - player2)) {
    console.log('Nessuno ha vinto ma il player 1 si è avvicinato di più');
  }else if (Math.abs(numberRandom - player2) < Math.abs(numberRandom - player1)) {
    console.log('Nessuno ha vinto ma il player 2 si è avvicinato di più');
  }else console.log('Pareggio');


  //============================================================================================

const random = (): number => {
  return Math.floor(Math.random() * 100 + 1);
};

enum Numbers {
  player1 = random(),
  player2 = random(),
  numberRandom = random(),
}

const play = (): void => {
  console.log(`Player 1: ${Numbers.player1}`);
  console.log(`Player 2: ${Numbers.player2}`);
  console.log(`Number random: ${Numbers.numberRandom}`);

  switch (true) {
    case Number(Numbers.player1) === Numbers.numberRandom:
      console.log("Il player 1 ha indovinato");
      break;

    case Number(Numbers.player2) === Numbers.numberRandom:
      console.log("Il player 2 ha indovinato");
      break;

    case Number(Numbers.player1) === Numbers.numberRandom &&
      Number(Numbers.player2) === Numbers.numberRandom:
      console.log("Entrambi i giocatori hanno indovinato");
      break;

    case Math.abs(Numbers.numberRandom - Numbers.player1) <
      Math.abs(Numbers.numberRandom - Numbers.player2):
      console.log("Nessuno ha vinto ma il player 1 si è avvicinato di più");
      break;

    case Math.abs(Numbers.numberRandom - Numbers.player2) <
      Math.abs(Numbers.numberRandom - Numbers.player1):
      console.log("Nessuno ha vinto ma il player 2 si è avvicinato di più");
      break;

    default:
      console.log("Pareggio");
      break;
  }
};

play();