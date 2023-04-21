var checked = false; //variabile di controllo sia per il checkbox sia per button

window.onload = () => {

    let cb = document.getElementById('cb');
    cb.style.cursor = "pointer";
    cb.removeAttribute('checked');
    cb.checked = false;
    let btn = document.getElementById('btn'); //bottone proceed
    btn.disabled = true;

    cb.onchange = () => {
        checked = !checked; //quando si clicca sulla checkbox diventa true
        btn.disabled = !checked; // il btn.disabled diventa false e si attiva e ci permette di andare avanti sulla pagina del quiz
        localStorage.setItem('cb', 'checked');
    };

    btn.onclick = () => {
        let radio = document.querySelector('input[type=\"radio\"]:checked');
        console.log("button click");
        sessionStorage.setItem('ok', 'true');
        sessionStorage.setItem('difficulty', radio.getAttribute('value'));
        window.location = './quiz.html';
    };

    let radios = document.querySelectorAll('input[type=\"radio\"]');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = i == 0;
    }
    var current;
    radios.forEach(element => element.onchange = () => {
        //  element.checked = !element.checked;
        current = element.getAttribute('value');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].getAttribute('value') == current) {
                continue;
            } else {
                radios[i].checked = false;
            }
        }
    });
};