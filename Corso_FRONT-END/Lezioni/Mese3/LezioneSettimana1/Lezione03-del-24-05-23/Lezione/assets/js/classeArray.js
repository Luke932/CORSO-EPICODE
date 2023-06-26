class Voce {
    nomeVoce;
    constructor(_nomeVoce) {
        this.nomeVoce = _nomeVoce;
    }
    voceInserita() {
        return `<b>${this.nomeVoce}</b>`;
    }
}

var lista = document.querySelector('#lista');
var nuovaVoce = document.querySelector('#nuovaVoce');
var addBtn = document.querySelector('#aggiungi');

var elenco = [];

addBtn.addEventListener('click', () => {
    if (nuovaVoce.value != '') {
        let aggiunta = new Voce(nuovaVoce.value);
        document.querySelector('#voci').innerHTML = `La voce ${aggiunta.voceInserita()} è stata inserita nell'array e viene scritta qui in modo isolato`;
        elenco.push(aggiunta);
        scriviLista();
    }
});

function scriviLista() {
    lista.innerHTML = '';
    elenco.forEach((el, index) => {
        lista.innerHTML += `<li>${el.voceInserita()}</li>`;
    });
    nuovaVoce.value = '';
    console.log(elenco);
}
