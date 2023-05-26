"use strict";
class Calculator {
    constructor(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(verse) {
        this.credito += verse;
    }
    chiamata(minutes) {
        const costoChiamata = minutes * 0.2;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
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
let user1 = new Calculator(25, 0);
user1.ricarica(5);
user1.chiamata(30);
user1.ricarica(15);
user1.chiamata(20);
console.log("User1");
console.log('========');
console.log("Credito residuo:", user1.numero404());
console.log("Numero chiamate:", user1.getNumeroChiamate());
user1.azzeraChiamate();
console.log("Azzeramento chiamate:", user1.getNumeroChiamate());
let user2 = new Calculator(15, 0);
user2.ricarica(0);
user2.chiamata(60);
user2.ricarica(25);
user2.chiamata(5);
console.log("User2");
console.log('========');
console.log("Credito residuo:", user2.numero404());
console.log("Numero chiamate:", user2.getNumeroChiamate());
user2.azzeraChiamate();
console.log("Azzeramento chiamate:", user2.getNumeroChiamate());
let user3 = new Calculator(45, 0);
user3.ricarica(50);
user3.chiamata(240);
user3.ricarica(25);
user3.chiamata(360);
console.log("User3");
console.log('========');
console.log("Credito residuo:", user3.numero404());
console.log("Numero chiamate:", user3.getNumeroChiamate());
user3.azzeraChiamate();
console.log("Azzeramento chiamate:", user3.getNumeroChiamate());
