"use strict";
class Calculator2 {
    constructor(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(verse) {
        this.credito += verse;
    }
    chiamata(minutes) {
        const costoChiamata = minutes * 0.2;
        this.credito -= costoChiamata;
        this.numeroChiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const user = new Calculator2(0, 0);
const sommary = document.getElementById("sommary");
const money = document.getElementById("ricarica");
const minutes = document.getElementById("minutes");
const verifiedBtn = document.getElementById("verified-button");
const reset = document.getElementById("reset");
const saldoAttuale = document.getElementById("saldoAttuale");
const numPhone = document.getElementById("numberPhone");
sommary.addEventListener("submit", (e) => {
    e.preventDefault();
    user.ricarica(Number(money.value));
    user.chiamata(Number(minutes.value));
    saldoAttuale.innerHTML = `Il tuo credito residuo è di: ${user.numero404()}`;
    numPhone.innerHTML = `Numero di chiamate effettuate: ${user.getNumeroChiamate()}`;
});
reset.addEventListener("click", (e) => {
    e.preventDefault();
    user.credito = 0;
    user.numeroChiamate = 0;
    saldoAttuale.innerHTML = `Il tuo credito residuo è di: 0`;
    numPhone.innerHTML = `Numero di chiamate effettuate: 0`;
});
