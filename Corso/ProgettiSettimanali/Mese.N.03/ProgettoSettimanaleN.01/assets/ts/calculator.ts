interface Smartphone {
  credito: number;
  numeroChiamate: number;

  ricarica(verse: number): void;
  chiamata(minutes: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class Calculator2 implements Smartphone {
  credito: number;
  numeroChiamate: number;
  constructor(_credito: number, _numeroChiamate: number) {
    this.credito = _credito;
    this.numeroChiamate = _numeroChiamate;
  }

  ricarica(verse: number): void {
    this.credito += verse;
  }

  chiamata(minutes: number): void {
    const costoChiamata = minutes * 0.2;
    
      this.credito -= costoChiamata;
      this.numeroChiamate++;
    
  }

  numero404(): number {
    return this.credito;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const user = new Calculator2(0, 0);

const sommary = document.getElementById("sommary") as HTMLFormElement | null;
const money = document.getElementById("ricarica") as HTMLInputElement | null;
const minutes = document.getElementById("minutes") as HTMLInputElement | null;
const verifiedBtn = document.getElementById("verified-button") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;
const saldoAttuale = document.getElementById("saldoAttuale") as HTMLElement | null;
const numPhone = document.getElementById("numberPhone") as HTMLElement | null;



sommary!.addEventListener("submit", (e) => {
  e.preventDefault();
  user.ricarica(Number(money!.value));
  user.chiamata(Number(minutes!.value));
  saldoAttuale!.innerHTML = `Il tuo credito residuo è di: ${user.numero404()}`;
  numPhone!.innerHTML = `Numero di chiamate effettuate: ${user.getNumeroChiamate()}`;

});

  
  

reset!.addEventListener("click", (e) => {
  e.preventDefault();
  user.credito = 0;
  user.numeroChiamate = 0;
  saldoAttuale!.innerHTML = `Il tuo credito residuo è di: 0`;
  numPhone!.innerHTML = `Numero di chiamate effettuate: 0`;
});
