window.onload = () => {
    let result = sessionStorage.getItem('risultato');//controlla dati salvati nella navigazione e reindirizza alla pagina di errore
    if(!result){
        window.location = './errore.html';
    }
    let bar = document.getElementById('resultBar');//viene impostata la progress bar
    bar.setAttribute('style', `--value:${100 - result * 10}`);
    let correctTitle = document.getElementById('correct');
    let wrongTitle = document.getElementById('wrong');
    //vengono impostati i testi dei titoli

    correctTitle.innerHTML = `Correct</br><span class="bolder">${result *10}%</span></br><span class="rq">${result}/10 questions</span>`;
    wrongTitle.innerHTML = `Wrong</br><span class="bolder">${(10 - result) *10}%</span></br><span class="rq">${10 - result}/10 questions</span>`;

    if(result < 6){
        let title = document.getElementById('score');
        title.innerHTML = 'Fail!</br><span class=\"green\">you failed the exam.</span>';
    }

    let button = document.getElementById('buttonRate');
    button.disabled = false;
    button.onclick = () => {
        window.location = './feedback.html';
    };
};