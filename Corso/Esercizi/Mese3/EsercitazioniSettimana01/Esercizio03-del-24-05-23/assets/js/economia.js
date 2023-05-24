"use strict";
class Calculator {
    constructor(_codredd, _redditoAnnuoLordo) {
        this.tasseInps = 26.23;
        this.tasseIrpef = 15;
        this.codredd = _codredd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
    }
    getUtileTasse() {
        return (this.redditoAnnuoLordo * this.codredd) / 100;
    }
    getTasseInps() {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    }
    getTasseIrpef() {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }
    getRedditoAnnuoNetto() {
        return (this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()));
    }
}
let commerciante = new Calculator(40, 58000);
console.log(`utile tasse commerciante: ${commerciante.getUtileTasse()}`);
console.log(`tasse inps commerciante: ${commerciante.getTasseInps()}`);
console.log(`tasse irpef commerciante: ${commerciante.getTasseIrpef()}`);
console.log(`reddito annuo netto professionista: ${commerciante.getRedditoAnnuoNetto()}`);
console.log('==================================================================================');
let professionista = new Calculator(77, 88000);
console.log(`utile tasse professionista: ${professionista.getUtileTasse()}`);
console.log(`tasse inps professionista: ${professionista.getTasseInps()}`);
console.log(`tasse irpef professionista: ${professionista.getTasseIrpef()}`);
console.log(`reddito annuo netto professionista: ${professionista.getRedditoAnnuoNetto()}`);
console.log('==================================================================================');
let artigiano = new Calculator(86, 102000);
console.log(`utile tasse artigiano: ${artigiano.getUtileTasse()}`);
console.log(`tasse inps artigiano: ${artigiano.getTasseInps()}`);
console.log(`tasse irpef artigiano: ${artigiano.getTasseIrpef()}`);
console.log(`reddito annuo netto artigiano: ${artigiano.getRedditoAnnuoNetto()}`);
console.log('"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""');
class BiCalculator {
    constructor(_codredd, _redditoAnnuoLordo) {
        this.tasseInps = 26.23;
        this.tasseIrpef = 15;
        this.codredd = _codredd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
    }
    getUtileTasse() {
        return (this.redditoAnnuoLordo * this.codredd) / 100;
    }
    getTasseInps() {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    }
    getTasseIrpef() {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }
    getRedditoAnnuoNetto() {
        return (this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()));
    }
}
let commerciante1 = new BiCalculator(40, 58000);
console.log(`utile tasse commerciante: ${commerciante.getUtileTasse()}`);
console.log(`tasse inps commerciante: ${commerciante.getTasseInps()}`);
console.log(`tasse irpef commerciante: ${commerciante.getTasseIrpef()}`);
console.log(`reddito annuo netto professionista: ${commerciante.getRedditoAnnuoNetto()}`);
console.log('==================================================================================');
let professionista1 = new BiCalculator(77, 88000);
console.log(`utile tasse professionista: ${professionista.getUtileTasse()}`);
console.log(`tasse inps professionista: ${professionista.getTasseInps()}`);
console.log(`tasse irpef professionista: ${professionista.getTasseIrpef()}`);
console.log(`reddito annuo netto professionista: ${professionista.getRedditoAnnuoNetto()}`);
console.log('==================================================================================');
let artigiano1 = new BiCalculator(86, 102000);
console.log(`utile tasse artigiano: ${artigiano.getUtileTasse()}`);
console.log(`tasse inps artigiano: ${artigiano.getTasseInps()}`);
console.log(`tasse irpef artigiano: ${artigiano.getTasseIrpef()}`);
console.log(`reddito annuo netto artigiano: ${artigiano.getRedditoAnnuoNetto()}`);
console.log('"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""');
//?=====================================================================================================//
class CiCalculator {
    constructor(_codredd, _redditoAnnuoLordo) {
        this.codredd = _codredd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = 15;
        this.tasseIrpef = 26.23;
    }
}
class Paperino extends CiCalculator {
    constructor(_codredd, _redditoAnnuoLordo) {
        super(_codredd, _redditoAnnuoLordo);
    }
    getUtileTasse() {
        return (this.redditoAnnuoLordo * this.codredd) / 100;
    }
    getTasseInps() {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    }
    getTasseIrpef() {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }
    getRedditoAnnuoNetto() {
        return (this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()));
    }
}
;
let commerciante2 = new Paperino(40, 58000);
console.log(`utile tasse commerciante: ${commerciante.getUtileTasse()}`);
console.log(`tasse inps commerciante: ${commerciante.getTasseInps()}`);
console.log(`tasse irpef commerciante: ${commerciante.getTasseIrpef()}`);
console.log(`reddito annuo netto professionista: ${commerciante.getRedditoAnnuoNetto()}`);
console.log('==================================================================================');
let professionista2 = new Paperino(77, 88000);
console.log(`utile tasse professionista: ${professionista.getUtileTasse()}`);
console.log(`tasse inps professionista: ${professionista.getTasseInps()}`);
console.log(`tasse irpef professionista: ${professionista.getTasseIrpef()}`);
console.log(`reddito annuo netto professionista: ${professionista.getRedditoAnnuoNetto()}`);
console.log('==================================================================================');
let artigiano2 = new Paperino(86, 102000);
console.log(`utile tasse artigiano: ${artigiano.getUtileTasse()}`);
console.log(`tasse inps artigiano: ${artigiano.getTasseInps()}`);
console.log(`tasse irpef artigiano: ${artigiano.getTasseIrpef()}`);
console.log(`reddito annuo netto artigiano: ${artigiano.getRedditoAnnuoNetto()}`);
