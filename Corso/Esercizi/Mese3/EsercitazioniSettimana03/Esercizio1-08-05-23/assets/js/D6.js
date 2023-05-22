class User {
    constructor(_name, _surname, _age, _location) {
        this.name = _name,
            this.surname = _surname,
            this.age = _age,
            this.location = _location
    }
    difference(_age) {
        return (this.age > _age) ? `L'utente ${userX.name} è più vecchio dell'utente ${userY.name}` : `L'utente ${userX.name} è più giovane dell'utente ${userY.name}`
    }
}

const userX = new User('Luca', 'Giacalone', 30, 'Mazara');
const userY = new User('Manuel', 'Centini', 29, 'Ostia');

console.log(userX.difference(userY.age));

class User1 {
    constructor(_name, _surname, _age, _location) {
        this.name = _name
        this.surname = _surname
        this.age = _age
        this.location = _location
    }
    differenceN(_age2) {
        if (this.age === _age2.age) {
            return 'Gli utenti hanno la stessa età';
        } else if (this.age < _age2.age) {
            return `L'utente ${userX1} è più giovane dell'utente ${userY1}`
        } else {
            return `L'utente ${userX1} è più vecchio dell'utente ${userY1}`
        }
    }
}


const userX1 = new User1('Luca', 'Giacalone', 30, 'Mazara');
const userY1 = new User1('Manuel', 'Centini', 30, 'Ostia');

console.log(userX1.differenceN(userY1));
console.log(userY1.differenceN(userX1));


class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.name = _petName
        this.otherName = _ownerName
        this.species = _species
        this.breed = _breed
    }
    verified (boolean){
        if (this.otherName === boolean.otherName){
            return true;
        } else {
            return false;
        }
    }
}




class GroupPets {
    constructor() {
        this.animals = [];
    }
    addAnimals (animal) {
        this.animals.push(animal)
    }
}



const aggiungiForm = document.getElementById('aggiungiForm');
const listAnimals = document.getElementById('listAnimals');
const groupPets = new GroupPets();
aggiungiForm.addEventListener('submit', (event) => {
    event.preventDefault();



const nameAnimal = document.getElementById('nomeAnimale').value;
const parent = document.getElementById('parent').value;
const species = (document.getElementById('species').value);
const breed = (document.getElementById('breed').value);

const animal = new Pet (nameAnimal,parent,species,breed);
groupPets.addAnimals(animal);
console.log(animal.verified(animal));



listPets();
aggiungiForm.reset();
});

function listPets () {
    listAnimals.innerHTML = "";

    for (const animal of groupPets.animals){
        const animalDiv = document.createElement ('div');
        animalDiv.innerHTML = 
        `<strong>Nome:</strong> ${animal.name}<br>
        <strong>Padrone:</strong> ${animal.otherName}<br>
        <strong>Specie:</strong> ${animal.species}<br>
        <strong>Razza:</strong> ${animal.breed}<br>
        `;

        listAnimals.appendChild(animalDiv);
    }
}
/*
class Sport {
    constructor(_player, _ball, _match, _score) {
        this.player = _player
        this.ball = _ball
        this.match = _match
        this.score = _score
    }
}

class Container {
    constructor() {
        this.information = [];
    }
    addBook(text) {
        this.information.push(text)
    }
}


const aggiungiForm1 = document.getElementById('aggiungiForm');
const listMatch = document.getElementById('listAnimals');
const container = new Container();

aggiungiForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const player = document.getElementById('nomeAnimale').value;
    const ball = document.getElementById('parent').value;
    const match = document.getElementById('species').value;
    const score = document.getElementById('breed').value;

    const text = new Sport(player, ball, match, score);
    container.addBook(text);
    console.log(text);
    matchBall();
});

function matchBall() {
    listMatch.innerHTML = " ";

    for (const text of container.information) {
        const div = document.createElement('div');
        div.innerHTML =
            `<span>Giocatore:<span> ${text.player} <br>
            <span>Palla:<span> ${text.ball} <br>
            <span>Partita:<span> ${text.match} <br>
            <span>Punteggio:<span> ${text.score}` 

            listMatch.appendChild(div);
    }
}
*/

