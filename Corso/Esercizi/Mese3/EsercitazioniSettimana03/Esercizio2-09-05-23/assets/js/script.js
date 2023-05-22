let teamsList = []

const team1 = document.getElementById('team1')
const team2 = document.getElementById('team2')
const score = document.getElementById('score')

const saveButton = document.getElementById('save')
const remove = document.getElementById('remove');
let count;

const adminList = function () {

  let list = document.querySelector('section')


  list.innerHTML = '';
  
for (let i = 0; i < teamsList.length; i++){
    const newE = document.createElement('li')
    newE.innerText =
    teamsList[i].name + ' ' + teamsList[i].name2 + ' | ' + teamsList[i].result
    list.appendChild(newE)
}

 
}

saveButton.addEventListener('click', function (event) {
  event.preventDefault() 
  const values = {
    name: team1.value,
    name2: team2.value,
    result: score.value,
  }
  console.log(values);
  
  teamsList.push(values);

  const string = JSON.stringify(teamsList);

  localStorage.setItem('Values', string);

team1.value = '';
team2.value = '';
score.value = '';

adminList ();

})

remove.addEventListener('click', function () {
    localStorage.removeItem('Values')

})

window.load = function () {
    if (localStorage.getItem('elements')){
        let pippo = localStorage.getItem('elements')
        let paperino = JSON.parse(pippo)
        teamsList = paperino;
        adminList();
    }
}

let time = document.getElementById('count');


if(sessionStorage.getItem('count')){

    count = sessionStorage.getItem('count');
    time.innerHTML = sessionStorage.getItem('count');

}else{

    count = 0;
    sessionStorage.setItem('count', count)
    time.innerHTML = sessionStorage.getItem('count');

}


setInterval(() => {

    count++;  
    sessionStorage.setItem('count', count);
    time.innerHTML = sessionStorage.getItem('count');  

}, 1000)



window.onload = () => {
    
    if(localStorage.getItem('Values')) {
        adminList()
    };

}
/*teamsList.forEach((team) => {
   
    const newE = document.createElement('strong')
    newE.innerText =
      team.name + ' ' + team.name2 + ' | ' + team.result
    list.appendChild(newE)
  })*/