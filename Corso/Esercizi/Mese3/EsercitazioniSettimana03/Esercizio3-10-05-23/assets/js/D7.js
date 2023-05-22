fetch('https://striveschool-api.herokuapp.com/books')
.then((res) => {
  console.log(res);
  if(res.ok){
    return res.json()
  }else {
    throw new Error('Errore nel contattare il server')
  }
})
.then((data) =>{
  console.log(data);
  renderList(data);

})
.catch((err) => {
  console.log(err);
})

/* FUNZIONE PER INSERIRE DATI NEL DOM */
const renderList = function (values)  {
  let books = document.getElementById('card');
  values.forEach(Element => {
    books.innerHTML += 
    `
    
    
    <div class="col-6 col-md-4 col-lg-3 mb-5 puttanella">
    <div>
    <div class="card image"><img class = 'img-fluid' style = 'aspect-ratio: 1/1; object-fit = 'cover'  src = '${Element.img}'/></div>
    <div class="card body bg-warning">
    <strong>Title: ${Element.title}</strong>
    <p>Price: ${Element.price}</p>
    <button type="button"  class="btn btn-info mb-5 maledettoJs">Scarta</button>
    <button type="button"  class="btn btn-info mb-5 carrello">Aggiungi al carrello</button>
    </div>
    </div>
    </div>

    
    
    
    `
    const shoppingCart = document.querySelector('#shopping-cart');
    const loadShoppingCart = (values) => {
      shoppingCart.innerHTML = "<h3>Carrello</h3>";
      console.log(shoppingCart);
      values.forEach((book) => {
          shoppingCart.innerHTML += `
      <div class="shopping-item">
        <div class="d-flex align-items-start gap-2">
              <img src=${book.img}  class="img-fluid" width="60" />
            <div class="flex-grow-1">
                <p class="mb-2">
                  ${book.title}
                </p>
                <div class="d-flex justify-content-between">
                    <p class="fw-bold">
                      ${book.price}€
                    </p>
                    <div>
                        <div>
                          <button class="btn btn-danger" onclick="deleteItem('${book.asin}')">Elimina </button>
                        </div>
                    </div>
                </div >
            </div >
        </div >
      </div>
    `;
      });
      renderList();
    }

   
    books.addEventListener('click', (event) => {
      if(event.target.classList.contains('maledettoJs')){
        const stiCazzi = event.target.closest ('.puttanella');
        stiCazzi.style.display = 'none';
      }
    })
  });

};






