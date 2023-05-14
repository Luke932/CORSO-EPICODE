const url = 'https://striveschool-api.herokuapp.com/api/product/';




const product = function () {
    fetch(url, {
        headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDZkODg4Zjc0MDAwMTQyODc0OTMiLCJpYXQiOjE2ODM4ODM3MzYsImV4cCI6MTY4NTA5MzMzNn0.colNDlBjkI-AldE82lkGMXSi_VS66ImoqC0S_c1Eth0" }
    })
        .then((res) => {
            console.log(res);
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Errore nel recupero degli eventi!')
            }
        })
        .then((data) => {
            console.log(data);
            data.forEach(product => {
                let populate = `   
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div class="card n10 style shadow-lg p-3 mb-5 bg-success rounded-5">
            <img src="${product.imageUrl}" class="card-img-top rounded-top-5" alt="image">
            <div class="card-body">
              <h5 class="card-title fst-italic text-warning">${product.name}</h5>
              <p class="fst-italic">${(product.brand)} - ${product.price}€</p>
              <div class='d-flex justify-content-between align-items-center'>
              <a href="./backoffice.html?productId=${product._id}"
                            class="btn btn-info text-light me-2 ">MODIFICA</a>
              <a href="./details.html?productId=${product._id}"
              class="btn btn-secondary text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">Scopri di più</a>
              </div> 
            </div>
            </div>
            </div>
 
            `
                

                let container = document.getElementById('products-container') 
                container.innerHTML += populate 
            });
        })
        .catch((err) => {
            console.log(err);
        })
}

    

const myTimer = setTimeout(function() {product()}, 3000);
const barra = document.getElementById('br');
const barra1 = document.getElementById('br1');
const barra2 = document.getElementById('br2');
const spin = document.getElementById('spin')
const timeBr = setTimeout(function() {
    barra.classList.add ('d-none');
    barra1.classList.add ('d-none');
    barra2.classList.add ('d-none');
    spin.classList.add ('d-none');
},6500);
