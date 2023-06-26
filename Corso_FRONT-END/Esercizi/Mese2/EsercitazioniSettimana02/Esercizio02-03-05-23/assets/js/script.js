window.onload = function () {

    const count = function () {
        const cards = document.querySelectorAll(".card")

         //alert("there are " + cards.length + " travels displayed in the page")
    }
    count()
}

const addBadge = function () {
    const cards = document.querySelectorAll(
        "#welcomeSummer .card"
    );

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const span = `<span class="badge bg-danger position-absolute end-0 mt-2 me-2">HOT</span>`;
        card.innerHTML += span;
    }
};

addBadge(); //this adds hot badges on cards

const removeCards = function () {
    const cards = document.querySelectorAll(".card");

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.remove();
    }

};

//removeCards(); // this removes every card from the page the card if uncommented, 
        // you should try to attach this function call to a button in the page or calling this from the browser's console