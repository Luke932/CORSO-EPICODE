class MotherAccount {
    balanceInit: number = 0;
    nome: string;
    cognome: string;
    constructor(_nome: string, _cognome: string){
        this.nome = _nome;
        this.cognome = _cognome;
    }

    getMotherAccount (): string {
        return `${this.nome} ${this.cognome}`
    }


    setOneDeposit (versamento:number) : any {
        this.balanceInit += versamento;
        return `${this.balanceInit}`
    }

    setOneWithDraw (prelievo:number) : any {
        this.balanceInit -= prelievo;
        return `${this.balanceInit}`
    }

    setTwoDeposit (versamento:number) : any {
        this.balanceInit += versamento;
        return `${this.balanceInit}`
    }

    setTwoWithDraw (prelievo:number) : any {
        this.balanceInit -= prelievo;
        return `${this.balanceInit}`
    }
}

let mother = new MotherAccount ('Nadia', 'Crimaudo');

console.log(`${mother.nome} ${mother.cognome}`);
console.log(`Conto di ${mother.nome} ${mother.cognome} saldo dopo il primo versamento ${mother.setOneDeposit(500)}€ e saldo dopo il primo prelievo ${mother.setOneWithDraw(300)}€, saldo dopo il secondo versamento ${mother.setTwoDeposit(800)}€ e saldo dopo il secondo prelievo ${mother.setTwoWithDraw(150)}€ `);


class SonAccount extends MotherAccount {
    interested: number = 0.1;
    constructor(_nome:string,_cognome:string){
        super (_nome,_cognome)
    }

    getSonAccount (): string {
        return `${this.nome} ${this.cognome}`
    }


    setOneDeposit (versamento:number) : any {
        this.balanceInit += versamento;
        return `${this.balanceInit}`
    }

    setOneWithDraw (prelievo:number) : any {
        this.balanceInit -= prelievo;
        return `${this.balanceInit}`
    }

    setTwoDeposit (versamento:number) : any {
        this.balanceInit += versamento;
        return `${this.balanceInit}`
    }

    setTwoWithDraw (prelievo:number) : any {
        this.balanceInit -= prelievo;
        return `${this.balanceInit}`
    }

    setAddInterested () : any {
        this.balanceInit = this.balanceInit - (this.balanceInit * this.interested);
        return `${this.balanceInit}`
    }

}

let son = new SonAccount ('Luca','Giacalone');

console.log(`${son.nome} ${son.cognome}`);
console.log(`Conto di ${son.nome} ${son.cognome} saldo dopo il primo versamento ${son.setOneDeposit(200)}€ e saldo dopo il primo prelievo ${son.setOneWithDraw(100)}€, saldo dopo il secondo versamento ${son.setTwoDeposit(500)}€ e saldo dopo il secondo prelievo ${son.setTwoWithDraw(300)}€ ed infine saldo ${son.setAddInterested()}€ dopo l'addebito di interessi pari al 10% `);


