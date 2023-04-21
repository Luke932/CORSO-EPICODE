window.onload = () =>{
    let result = sessionStorage.getItem('risultato');
    if(!result){
        window.location = './index.html';
    }
    populateContainer();
};

var count = 0;
var stars = [];

function populateContainer(){
    let container = document.getElementById('rateContainer');
    
    for(let i = 0; i < 10; i++){//vengono aggiunte le 10 stelline di rating
        let parent = document.createElement('li');
        let child = document.createElement('img');
        child.setAttribute('src','assets/img/star.svg');
        child.classList = 'off star';
        parent.appendChild(child);
        container.appendChild(parent);
        stars.push(child);
        child.onclick = () => {//al click sulla stella vengono distinte le classi per quelle accese o spente in 2 cicli for distinti
            for(let j=0; j <= i; j++){
                stars[j].classList = 'on star';
            }
            for(let j = i +1; j < 10; j++){
                stars[j].classList = 'off star';
            }
            
        };
    }
}