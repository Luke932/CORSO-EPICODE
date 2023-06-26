const conto1 = document.getElementById('conto1') as HTMLElement | null;
const primoConto = document.getElementById ('primoConto') as HTMLInputElement | null;
const btnBalance = document.getElementById ('balanceInitial') as HTMLButtonElement;
const form = document.getElementById ('topolino') as HTMLFormElement;


const primoVersamento = document.getElementById ('primoVersamento') as HTMLInputElement | null;
const btnVers = document.getElementById ('vers') as HTMLButtonElement;
const result = document.getElementById ('result') as HTMLElement | null;

const primoPrelievo = document.getElementById ('primoPrelievo') as HTMLInputElement | null;
const btnPrel = document.getElementById ('prel') as HTMLButtonElement;
const result2 = document.getElementById ('result2') as HTMLElement | null;

const secondoVersamento = document.getElementById ('secondoVersamento') as HTMLInputElement | null;
const btnVers2 = document.getElementById ('vers2') as HTMLButtonElement;
const result3 = document.getElementById ('result3') as HTMLElement | null;

const secondoPrelievo = document.getElementById ('secondoPrelievo') as HTMLInputElement | null;
const btnPrel2 = document.getElementById ('prel2') as HTMLButtonElement;
const result4 = document.getElementById ('result4') as HTMLElement | null;


form.addEventListener('submit', (e) => {
    e.preventDefault()


let valore1 = Number(primoConto?.value);
let valore2 = Number(primoVersamento?.value);
let valore3 = Number(primoPrelievo?.value);
let valore4 = Number(secondoVersamento?.value);
let valore5 = Number(secondoPrelievo?.value);

class Money {
    valore1: number;
    valore2: number;
    valore3: number;
    valore4: number;
    valore5: number;
    constructor ( _valore1: number,_valore2: number, _valore3: number, _valore4: number, _valore5: number){
        this.valore1 = _valore1;
        this.valore2 = _valore2;
        this.valore3 = _valore3;
        this.valore4 = _valore4;
        this.valore5 = _valore5;
    }
    
    getConto1(saldoIniziale:number) : any {
        return saldoIniziale;
    }

    setOneDeposit (saldoIniziale:number, versamento:number) : any {
        saldoIniziale += versamento;
        return saldoIniziale;
    }

    setOneWithDraw (saldoIniziale:number, prelievo:number) : any {
        saldoIniziale -= prelievo;
        return saldoIniziale;
    }

    setTwoDeposit (saldoIniziale:number,versamento:number) : any {
        saldoIniziale += versamento;
        return saldoIniziale;
    }

    setTwoWithDraw (saldoIniziale:number,prelievo:number) : any {
        saldoIniziale -= prelievo;
        return saldoIniziale;
    }
}

let newMoney = new Money(valore1, valore2, valore3, valore4, valore5);




if (conto1 !== null) {
    conto1.innerHTML = newMoney.getConto1(valore1);
}
if (result !== null) {
    result.innerHTML = newMoney.setOneDeposit(valore1 , valore2);
}

if (result2 !== null) {
    result2.innerHTML = newMoney.setOneWithDraw(valore1 + valore2,valore3);
}

if (result3 !== null) {
    result3.innerHTML = newMoney.setTwoDeposit(valore1 + valore2 - valore3, valore4 );
}

if (result4 !== null) {
    result4.innerHTML = newMoney.setTwoWithDraw(valore1 + valore2 - valore3 + valore4, valore5);
}

})