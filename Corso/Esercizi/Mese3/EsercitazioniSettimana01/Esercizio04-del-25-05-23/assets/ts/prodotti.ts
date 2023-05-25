class Prodotti {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoIvaEsclusa: number;
  prezzoIvaInclusa: number;
  disponibile: string;
  saldo: number;
  img: string;
  constructor(
    _id: number,
    _codprod: number,
    _collezione: string,
    _capo: string,
    _modello: number,
    _quantita: number,
    _colore: string,
    _prezzoIvaEsclusa: number,
    _prezzoIvaInclusa: number,
    _disponibile: string,
    _saldo: number,
    _img: string
  ) {
    this.id = _id;
    this.codprod = _codprod;
    this.collezione = _collezione;
    this.capo = _capo;
    this.modello = _modello;
    this.quantita = _quantita;
    this.colore = _colore;
    this.prezzoIvaEsclusa = _prezzoIvaEsclusa;
    this.prezzoIvaInclusa = _prezzoIvaInclusa;
    this.disponibile = _disponibile;
    this.saldo = _saldo;
    this.img = _img;
  }

  getSaldoCapo(): number {
    return Number(((this.prezzoIvaInclusa * this.saldo) / 100).toFixed(2));
  }

  getAcquistoCapo(): number {
    return Number((this.prezzoIvaInclusa - this.getSaldoCapo()).toFixed(2));
  }
}

let url = "../assets/database/abbigliamento.json";
let price: number;

fetch(url)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nel recupero delle risorse");
    }
  })

  .then((element) => {
    console.log(element);

    element.forEach((data: any) => {
      const product = new Prodotti(
        data.id,
        data.codprod,
        data.collezione,
        data.capo,
        data.modello,
        data.quantita,
        data.colore,
        data.prezzoivaesclusa,
        data.prezzoivainclusa,
        data.disponibile,
        data.saldo,
        data.img
      );
      price = product.getAcquistoCapo();
      console.log(product);
      console.log(`Prezzo finale del capo ${product.getAcquistoCapo()}`);
      let populate = `   
      <div class="col-12 col-sm-5 col-md-5 col-lg-2 mb-5">
      <div class="card n10 style shadow-lg p-3 mb-5 bg-success rounded-5" style='padding:0 !important;'>
      <img src="${product.img}" class="card-img-top rounded-top-5" alt="image">
      <div class="card-body">
        <h5 class="card-title fst-italic text-warning">${product.modello}</h5>
        <p class="fst-italic">${(product.collezione)} - Prezzo attuale: ${product.getSaldoCapo()}€</p>
        <div class='d-flex justify-content-between align-items-center'>
        
        </div> 
      </div>
      </div>
      </div>

      `
      let container = document.getElementById('container') as HTMLElement | null;
      if (container !== null){
        container.innerHTML += populate;
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });

/*async function Prodotto () {
    try {
        const response = await fetch (url);

        if(response.ok) {
            const products = await response.json();

            return products;
            
            
        }

    }catch{(err:string)=> console.log(err)}

}


const products:any = Prodotto();
console.log(products);*/
