const elements = [];

const name1 = document.getElementById('name');
const save = document.getElementById ('save');
const remove = document.getElementById ('remove');



const stamp = function () {

    let list = document.querySelector('ol');
    
    list.innerHTML = '';

   for (let i = 0; i < elements.length; i++){
    const ol = document.createElement('li');
    ol.innerText = elements[i];
    list.appendChild(ol);
   }
}

save.addEventListener('click', (event) => {
    event.preventDefault();
    const dom = name1.value;
        
    console.log(dom);

    elements.push(dom);

    const string = JSON.stringify(elements);

    localStorage.setItem('Values',string)

    name1.value = '';

    stamp ();

});

remove.addEventListener('click', (event) => {
    event.localStorage.removeItem('Values')
});

window.load = function () {
    if(localStorage.getItem('Values')){
        let ciccio = localStorage.getItem('Values');
        let obj = JSON.parse(ciccio);
        elements = obj;
        stamp();
    }
}

let i = sessionStorage.getItem('count') ? parseInt(sessionStorage.getItem('count')) : 0;
const counT = function () {
    i = i + 1
    document.getElementById('timer').innerText = i + ' secondi';
    sessionStorage.setItem('count', i)
}

setInterval(counT, 1000);