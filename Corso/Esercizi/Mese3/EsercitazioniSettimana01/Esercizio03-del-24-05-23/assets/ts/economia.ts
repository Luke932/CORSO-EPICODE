class Calculator {
  tasseInps: number = 26.23;
  tasseIrpef: number = 15;
  codredd: number;
  redditoAnnuoLordo: number;
  constructor(_codredd: number, _redditoAnnuoLordo: number) {
    this.codredd = _codredd;
    this.redditoAnnuoLordo = _redditoAnnuoLordo;
  }

  getUtileTasse(): any {
    return (this.redditoAnnuoLordo * this.codredd) / 100;
  }

  getTasseInps(): any {
    return (this.getUtileTasse() * this.tasseInps) / 100;
  }

  getTasseIrpef(): any {
    return (this.getUtileTasse() * this.tasseIrpef) / 100;
  }

  getRedditoAnnuoNetto(): any {
    return (
      this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
    );
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


//!==============================================================================================================//

interface Pippo {
  tasseInps: number;
  tasseIrpef: number;
  codredd: number;
  redditoAnnuoLordo: number;
}


class BiCalculator implements Pippo {
    tasseInps: number = 26.23;
    tasseIrpef: number = 15;
    codredd: number;
    redditoAnnuoLordo: number;
    constructor(_codredd: number, _redditoAnnuoLordo: number) {
        this.codredd = _codredd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
      }

      getUtileTasse(): any {
        return (this.redditoAnnuoLordo * this.codredd) / 100;
      }
    
      getTasseInps(): any {
        return (this.getUtileTasse() * this.tasseInps) / 100;
      }
    
      getTasseIrpef(): any {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
      }
    
      getRedditoAnnuoNetto(): any {
        return (
          this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
        );
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

abstract class CiCalculator {
    tasseInps: number;
    tasseIrpef: number;
    codredd: number;
    redditoAnnuoLordo: number;
    constructor(_codredd: number, _redditoAnnuoLordo: number) {
        this.codredd = _codredd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = 15;
        this.tasseIrpef =  26.23;
      }

    abstract  getUtileTasse(): any ;
    abstract  getTasseInps() : any;
    abstract  getTasseIrpef(): any;
    abstract  getRedditoAnnuoNetto() : any;
    

      }



    

     class Paperino  extends CiCalculator {
        constructor(_codredd: number, _redditoAnnuoLordo: number) {
            super(_codredd,_redditoAnnuoLordo)
          }
          
          getUtileTasse(): any {
            return (this.redditoAnnuoLordo * this.codredd) / 100;
          }
        
          getTasseInps(): any {
            return (this.getUtileTasse() * this.tasseInps) / 100;
          }
        
          getTasseIrpef(): any {
            return (this.getUtileTasse() * this.tasseIrpef) / 100;
          }
        
          getRedditoAnnuoNetto(): any {
            return (
              this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
            );
          }
        
     };

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
