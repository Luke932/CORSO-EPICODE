

let admin = new URLSearchParams(window.location.search);

let productID = admin.get('productId');
console.log(productID);

if (productID) {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productID}`, {
        headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDZkODg4Zjc0MDAwMTQyODc0OTMiLCJpYXQiOjE2ODM4ODM3MzYsImV4cCI6MTY4NTA5MzMzNn0.colNDlBjkI-AldE82lkGMXSi_VS66ImoqC0S_c1Eth0",
        'Content-Type': 'application/json',
    }
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
            const product = data;
            
                let populate = `   
              <div class= 'd-flex'>
              <div>
                <img src="${product.imageUrl}" class="img-fluid rounded-circle me-5" alt="image">
              </div>
              <div>
                <div class='ms-5'>
                  <h5 class="card-title text-warning fst-italic">${product.name}</h5>
                  <p class="card-text text-primary fst-italic">${product.description}</p>
                  <p class="card-text text-primary fst-italic">${(product.brand)}</p>
                  <p class="card-text text-danger fst-italic">${product.price}€</p>
                </div>
              </div>
            
 
            `
         

                let ciao = document.getElementById('details-container') 
                ciao.innerHTML += populate 
            
        })
        .catch((err) => {
            console.log(err);
        })
}


