class Utente {
    nome;
    cognome;
    eta;
    constructor (_nome, _cognome, _eta) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
    }
    scrivi() {
        return `${this.nome} ${this.cognome} di anni ${this.eta}`;
    }
}

class Studente extends Utente {
    corsi = [];

    constructor(_nome, _cognome, _eta, _corsi) {
        super(_nome, _cognome, _eta);
        this.corsi = _corsi;
    }

    scrivi() {
        return `${this.nome} ${this.cognome} di anni ${this.eta}, frequenta: ${this.corsi}`;
    }
}

class Docente extends Utente {
    materie = [];

    constructor(_nome, _cognome, _eta, _materie) {
        super(_nome, _cognome, _eta);
        this.materie = _materie;
    }

    scrivi() {
        return `${this.nome} ${this.cognome} di anni ${this.eta}, frequenta: ${this.materie}`;
    }
}

let utente1 = new Utente('Mario','Rossi',35);
var studente1 = new Studente('Nicola','Bianchi',25);
studente1.corsi = ['HTML','CSS','JS','TS'];
var docente1 = new Docente('Anna','Verdi',35);
docente1.materie = ['Angular','OOP','Firebase'];

document.querySelector('#utente').innerHTML = `Utente semplice: ${utente1.scrivi()}`;
document.querySelector('#studente').innerHTML = `Studente: ${studente1.scrivi()}`;
document.querySelector('#docente').innerHTML = `Docente: ${docente1.scrivi()}`;