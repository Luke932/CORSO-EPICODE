const url = 'https://striveschool-api.herokuapp.com/api/product/';

let admin = new URLSearchParams(window.location.search);

let productID = admin.get('productId');

if (productID) {
    document.getElementsByTagName('h2')[0].innerText =
    'Back Office page - Modifica Prodotto'
    document.getElementById('save-button').innerText =
    'MODIFICA PRODOTTO'
    
    let reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
       if (confirm('SICURO DI VOLER CANCELLARE IL FORM?')){
        document.getElementById('name').value = '';
        document.getElementById('description').value = '';
        document.getElementById('brand').value = '';
        document.getElementById('image').value = ''
        document.getElementById('price').value = ''
       } else {
        return;
       }
    })

    let deletBtn = document.getElementById('delete-btn');
    deletBtn.classList.remove('d-none');
    deletBtn.addEventListener('click', () => {
        fetch(url + productID, {
            method: 'DELETE',
            headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDZkODg4Zjc0MDAwMTQyODc0OTMiLCJpYXQiOjE2ODM4ODM3MzYsImV4cCI6MTY4NTA5MzMzNn0.colNDlBjkI-AldE82lkGMXSi_VS66ImoqC0S_c1Eth0" }
        })
        .then((res) => {
            if(res.ok){
              if ( confirm('SICURO DI VOLER ELIMINARE?')){

              }else{
                return;
              }
                location.assign('./home.html')
            }else{
                throw new Error ('PROBLEMA CON L','ELIMINAZIONE DEL PRODOTTO')
            }
        })
        .catch((err) => {
            alert(err);
        })
    })

    fetch(url + productID, {
        headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDZkODg4Zjc0MDAwMTQyODc0OTMiLCJpYXQiOjE2ODM4ODM3MzYsImV4cCI6MTY4NTA5MzMzNn0.colNDlBjkI-AldE82lkGMXSi_VS66ImoqC0S_c1Eth0" }
    })
    .then((res) => {
        if(res.ok){
            return res.json()
        }else{
            throw new Error ('ERRORE NEL RECUPERO DEL PRODOTTO')
        }
    })
    .then((product) => {
        console.log('DATI DEL SINGOLO PRODOTTO', product);
        document.getElementById('name').value = product.name;
        document.getElementById('description').value = product.description;
        document.getElementById('brand').value = product.brand;
        document.getElementById('image').value = product.image;
        document.getElementById('price').value = product.price;
    })
    .catch((err) => {
        console.log(err);
    })
}else{

}

const form = document.getElementById('product-form')
form.addEventListener('submit', (e) => {
    e.preventDefault();


    let nameIn = document.getElementById('name');
    let descriptionIn = document.getElementById('description');
    let brandIn = document.getElementById('brand');
    let imageIn = document.getElementById('image');
    let priceIn = document.getElementById('price');


    let newProduct = {
        name: nameIn.value,
        description: descriptionIn.value,
        brand: brandIn.value,
        "imageUrl": imageIn.value,
        price: priceIn.value,
    }

        

    fetch(productID ? url + productID : url, {
        method: productID ? 'PUT' : 'POST',
        body: JSON.stringify(newProduct),
        headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDZkODg4Zjc0MDAwMTQyODc0OTMiLCJpYXQiOjE2ODM4ODM3MzYsImV4cCI6MTY4NTA5MzMzNn0.colNDlBjkI-AldE82lkGMXSi_VS66ImoqC0S_c1Eth0",
        'Content-Type': 'application/json',
     },
        
    })
    .then((res) => {
        console.log(res);
        if (res.ok){
            alert(productID ? 'PRODOTTO MODIFICATO' : 'PRODOTTO CREATO')
            location.assign('./home.html')
        }else{
            alert('ERRORE NEL SALVATAGGIO')
            throw new Error ('ERRORE NEL SAlVATAGGIO')
        }
    })
    .catch((err) => {
        console.log(err);
    })
})