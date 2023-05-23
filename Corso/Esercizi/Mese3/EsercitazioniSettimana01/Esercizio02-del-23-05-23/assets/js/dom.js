"use strict";
const conto1 = document.getElementById('conto1');
const primoConto = document.getElementById('primoConto');
const btnBalance = document.getElementById('balanceInitial');
const form = document.getElementById('topolino');
const primoVersamento = document.getElementById('primoVersamento');
const btnVers = document.getElementById('vers');
const result = document.getElementById('result');
const primoPrelievo = document.getElementById('primoPrelievo');
const btnPrel = document.getElementById('prel');
const result2 = document.getElementById('result2');
const secondoVersamento = document.getElementById('secondoVersamento');
const btnVers2 = document.getElementById('vers2');
const result3 = document.getElementById('result3');
const secondoPrelievo = document.getElementById('secondoPrelievo');
const btnPrel2 = document.getElementById('prel2');
const result4 = document.getElementById('result4');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valore1 = Number(primoConto === null || primoConto === void 0 ? void 0 : primoConto.value);
    let valore2 = Number(primoVersamento === null || primoVersamento === void 0 ? void 0 : primoVersamento.value);
    let valore3 = Number(primoPrelievo === null || primoPrelievo === void 0 ? void 0 : primoPrelievo.value);
    let valore4 = Number(secondoVersamento === null || secondoVersamento === void 0 ? void 0 : secondoVersamento.value);
    let valore5 = Number(secondoPrelievo === null || secondoPrelievo === void 0 ? void 0 : secondoPrelievo.value);
    class Money {
        constructor(_valore1, _valore2, _valore3, _valore4, _valore5) {
            this.valore1 = _valore1;
            this.valore2 = _valore2;
            this.valore3 = _valore3;
            this.valore4 = _valore4;
            this.valore5 = _valore5;
        }
        getConto1(saldoIniziale) {
            return saldoIniziale;
        }
        setOneDeposit(saldoIniziale, versamento) {
            saldoIniziale += versamento;
            return saldoIniziale;
        }
        setOneWithDraw(saldoIniziale, prelievo) {
            saldoIniziale -= prelievo;
            return saldoIniziale;
        }
        setTwoDeposit(saldoIniziale, versamento) {
            saldoIniziale += versamento;
            return saldoIniziale;
        }
        setTwoWithDraw(saldoIniziale, prelievo) {
            saldoIniziale -= prelievo;
            return saldoIniziale;
        }
    }
    let newMoney = new Money(valore1, valore2, valore3, valore4, valore5);
    if (conto1 !== null) {
        conto1.innerHTML = newMoney.getConto1(valore1);
    }
    if (result !== null) {
        result.innerHTML = newMoney.setOneDeposit(valore1, valore2);
    }
    if (result2 !== null) {
        result2.innerHTML = newMoney.setOneWithDraw(valore1 + valore2, valore3);
    }
    if (result3 !== null) {
        result3.innerHTML = newMoney.setTwoDeposit(valore1 + valore2 - valore3, valore4);
    }
    if (result4 !== null) {
        result4.innerHTML = newMoney.setTwoWithDraw(valore1 + valore2 - valore3 + valore4, valore5);
    }
});
