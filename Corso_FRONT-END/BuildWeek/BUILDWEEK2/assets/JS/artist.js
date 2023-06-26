const artist = new URLSearchParams(window.location.search);
const artistId = artist.get("artistId");
const mainContent = document.querySelector(".MainContent");
const MainContentArtist= document.getElementById('MainContentArtist')
const image = document.getElementById('immagineCanvas')
const trackDiv = document.getElementById('tracksX5');
let globalData;
let globalPlayData;

const playlistNames = [
  "Be The Young Seasons 1-5",
  "Be The Young Seasons 6-8",
  "persona di m*rda (gen-feb 2023)",
  "Musical 2022",
  "pippo, pluto e paperino (nov-dec 2022)",
  "early stage emily syndrome (sett-ott 2022)",
  "Be the young",
  "'...' cit. Kimiko (lug-ago 2022)",
  "saggio vibes 💃🩰",
  "main character energy (mag-giu 2022)",
  "that fucking mood 🔪☠️",
  "VEE, CARLOTTA E GIACOMO VANNO A BOSIO",
  "An Emily Winchester kind of mood 🔪🖕",
  "landing page (mar-apr 2022)",
  "2021 lol",
  "cosa cazzo vuol dire questa affermazione (gen-feb 2022)",
  "honey and glass (nov-dic 2021)",
  "(Revenge) Training Arc 🦍",
  "Lidia 🤝 Emily",
  "minecraft e nintendo switch (sep-oct 2021)",
  "silvano d'orba? I hardly know her (lug - ago 2021)",
  "Culo 2021",
  "Frah Quintale Mix",
  "Francesco Guccini Mix",
  "Lo Stato Sociale Mix",
  "chapter 4/? (mag-giu 2021)",
  "Strive School <> The Hunt Motivation",
  "mi stavo dimenticando (mar-apr 2021)",
  "high school musical 1,2,3",
  "quanto trash cazzo",
  "The 2020 Playlist",
  "ma(ncanza) che cazzo ne so io (gen-feb 2021)",
];
function displayPlayList(items) {
  items.forEach((item) => {
    const itemText = document.createElement("p");
    itemText.textContent = item;
    playListDiv.appendChild(itemText);
  });
}
function goHome(){
  window.location ='home.html'
}
function goBack(){
  window.history.back();
}
window.onload = () => {
  displayPlayList(playlistNames)
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("errore");
      }
    })
    
    .then((data) => {
      console.log(data);
      //fecth per la canzone sul button
      fetch(data.tracklist)
      .then((res) => {
          return res.json();
      })
      .then((data)=>{
        globalPlayData= data.data[0]
        console.log(globalPlayData)
      })
      //
      image.src= data.picture;
      const contenuti = `
      <div id='backgroundRelative'>
  <div id='backgroundImage'>
  </div>
  <div id='backgroundImage2'>
    <p class='artistaVerificato d-none d-md-block'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-primary bi bi-patch-check-fill mb-1" viewBox="0 0 16 16">
    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
  </svg>&nbsp;Artista verificato</p>
  <h1>${data.name}</h1>
  <p class='ascoltiMensili'>${data.nb_fan} ascoltatori mensili</p>
  </div>
  </div>
  <!---->
  <div class='vedoNonVedo text-secondary p-3'>${data.nb_fan} ascoltatori mensili</div>
  <div class='vedoNonVedo'>
  <div class='d-flex justify-content-between align-items-center p-3 pb-0'><div class='d-flex align-items-center'><p class='m-0 px-3 py-1 border rounded-1 me-4 follow' onclick="toggleFollow()">FOLLOW</p>
  <div class="dropdown pb-3" onclick='toggleGreen(this)'><svg xmlns="http://www.w3.org/2000/svg" role="button" data-bs-toggle="dropdown" aria-expanded="false" width="30" height="30" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg><ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Action</a></li>
<li><a class="dropdown-item" href="#">Another action</a></li>
<li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div></div>
<div class='d-flex justify-content-center align-items-center me-2'>
<svg  onclick='toggleGreen(this)' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shuffle me-3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
</svg>
<div class='d-flex justify-content-center align-items-center p-2 rounded-circle playButtonHover' onclick='ArtistPlayer(globalPlayData)'><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg></div>
</div>
</div>
  </div>
  <div class='playFollow d-flex align-items-center p-5 pb-0'><div class='me-3 d-flex justify-content-center align-items-center p-2 rounded-circle playButtonHover' onclick='ArtistPlayer(globalPlayData)'><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-play-fill text-black" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
  </svg></div>
<p class='m-0 px-3 py-1 border rounded-1 me-4 follow' onclick="toggleFollow()">FOLLOW</p>
<div class="dropdown pb-3" >
          <svg href="#" onclick='toggleGreen(this)' role="button" data-bs-toggle="dropdown" aria-expanded="false" xmlns="http://www.w3.org/2000/svg"
            width="30" height="30" fill="currentColor" class="bi bi-three-dots text-white" viewBox="0 0 16 16">
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        </div>
        <!---->
        <div class='row p-5'>
        <div class='popolari col-12 col-md-8'>
        <h3 class= 'mb-4'>Popolari</h3>
        <div id='tracksX5'></div>
        <p class='text-light'>VISUALIZZA ALTRO</p>
        </div>
        <div class='col-12 col-md-4 pb-3'>
        <h3 class= 'mb-4' >Brani che ti piacciono</h3>
        <div class='row'>
        <div class='col-3 p-0 d-flex justify-content-center cuoreRelative'><img id='immagineCanvas' src='${
          data.picture
        }' width='70' height='70' class='rounded-circle'><div class='cuoreAbsolute rounded-circle bg-success border'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="10" fill="currentColor" class="bi bi-heart-fill text-white" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg></div></div><div class='col-9 d-flex flex-column justify-content-center p-0'><p class='mb-1'>Hai messo Mi piace a 11 brani</p><p class='m-0 text-secondary'>Di ${
        data.name
      }</p></div></div>
        </div>
        </div>`;
      mainContent.innerHTML += contenuti;
      const trackDiv = document.getElementById('tracksX5')
      const artistDiv = document.getElementById('backgroundImage')
      artistDiv.style.backgroundImage = `url(${data.picture_xl})`;
      tracks()
      async function tracks(){
  fetch(data.tracklist)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("errore");
    }
  })
  .then((data) => {
    globalData= data
    console.log(globalData.data);
    for(let i=0; i<data.data.length; i++){
      const p = `
    <div class='row d-flex TrackHover pt-3'>
      <p class='col-1 d-flex justify-content-center align-items-center text-secondary indiceTracks' onclick="ArtistPlayer(globalData.data[${i}])">${i+1}</p>
      <p class='col-1 d-none justify-content-center align-items-center text-secondary playHoverTrack' onclick="ArtistPlayer(globalData.data[${i}])"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
    </svg></p>
      <p class='col-1 d-flex justify-content-center align-items-center' onclick="ArtistPlayer(globalData.data[${i}])"><img src='${data.data[i].album.cover}' width='40' height='40'></p>
      <div class='col-8 d-md-flex justify-content-between align-items-center' onclick="ArtistPlayer(globalData.data[${i}])">
        <p class='m-0 mb-md-3'>${data.data[i].title}</p>
        <p class='text-secondary'>${data.data[i].rank}</p>
      </div>
      <p class='col-2 d-none d-md-flex justify-content-center align-items-center text-secondary'>${convertiDurata(data.data[i].duration)} <span class='cuoreHover ms-2 text-white d-none'><svg onclick='toggleGreen(this)' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg></span></p>
      <div class="dropdown col-2 vedoNonVedo mt-1"><span class='cuoreHover me-2 text-white d-none'><svg onclick='toggleGreen(this)' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg></span>
        <svg onclick='toggleGreen(this)' xmlns="http://www.w3.org/2000/svg" role="button" data-bs-toggle="dropdown" aria-expanded="false" width="30" height="30" fill="currentColor" class="bi bi-three-dots-vertical text-secondary" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  `;
      trackDiv.innerHTML+= p
    }
    })
    .catch((err) => {
      console.log(err);
    });
    function convertiDurata(secondi) {
      const minuti = Math.floor(secondi / 60);
      const restantiSecondi = secondi % 60;
    
      const durataFormattata = `${minuti}:${restantiSecondi < 10 ? '0' : ''}${restantiSecondi}`;
      return durataFormattata;
    }
      }
    })
    .catch((err) => {
      console.log(err);
    });


};
/**Funzione display Audioplayer */
function displayAudioPlayer(data) {
  clearInterval(timerInterval);
  const playerDiv1 = document.createElement('div');
  playerDiv1.classList.add('col-12', 'col-md-2', 'd-flex', 'playerDiv1', 'align-items-center')

  const playerImage = document.createElement('img');
  playerImage.src = data.album.cover;
  playerImage.alt = data.title;
  playerImage.classList.add('playerImage', 'me-2', 'd-none', 'd-md-block');

  const div1Div = document.createElement('div');
  div1Div.classList.add('div1Div', 'me-4', 'me-md-2');

  const playerSongTitle = document.createElement('h5');
  playerSongTitle.textContent = data.title;

  const playerArtist = document.createElement('p');
  playerArtist.textContent = data.artist.name;
  playerArtist.classList.add('d-none', 'd-md-block')

  const div1Buttons = document.createElement('div');
  div1Buttons.classList.add('d-flex', 'align-items-center')

  const likeDiv = document.createElement('div');
  likeDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>`;
  likeDiv.classList.add('me-4')

  const hiddenPlayerPlay = document.createElement('img');
  hiddenPlayerPlay.src = "./assets/imgs/play-circle-fill.svg";
  hiddenPlayerPlay.classList.add('d-md-none', 'playerPlay', 'me-3');

  const hiddenPlayerClose = document.createElement('div');
  hiddenPlayerClose.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
  class="bi bi-x-lg ms-2" viewBox="0 0 16 16">
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
</svg>`;
  hiddenPlayerClose.classList.add('d-md-none', 'me-3');

  const playerDiv2 = document.createElement('div');
  playerDiv2.classList.add('col-0', 'col-md-8', 'd-flex', 'flex-column', 'd-none', 'd-md-block');
  const playerButtonDiv = document.createElement('div');
  //appendi qui
  playerButtonDiv.classList.add('d-flex', 'm-1', 'justify-content-center')
  const shuffle = document.createElement('div')
  shuffle.classList.add('d-flex', 'justify-content-center', 'align-items-center')
  shuffle.innerHTML +=`<svg  onclick='toggleGreen(this)' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shuffle me-3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
</svg>`;
  
  const playerPlay = document.createElement('img');
  playerPlay.src = "./assets/imgs/play-circle-fill.svg"
  playerPlay.classList.add('playerPlay')

  const loop = document.createElement('div')
  loop.classList.add('d-flex', 'justify-content-center', 'align-items-center')
  loop.innerHTML +=`<svg xmlns="http://www.w3.org/2000/svg" onclick='toggleGreen(this)' width="22" height="22" fill="currentColor" class="bi bi-arrow-counterclockwise ms-3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
</svg>`
//
  const staticBar = document.createElement('div');
  staticBar.classList.add('staticBar');
  const playerBar = document.createElement('div');
  playerBar.classList.add('playerBar');
  playerBar.id = 'playerBar';

  const audioTrack = document.createElement('audio');
  audioTrack.src = data.preview;

  const playerDiv3 = document.createElement('div');
  playerDiv3.classList.add('col-0', 'col-md-2', 'd-flex', 'p-3', 'align-items-center', 'justify-content-center', 'd-none', 'd-md-block');

  const playerClose = document.createElement('div');
  playerClose.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
  class="bi bi-x-lg ms-2" viewBox="0 0 16 16">
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
</svg>`


  playerDiv1.appendChild(playerImage);
  playerDiv1.appendChild(div1Div);
  div1Div.appendChild(playerSongTitle);
  div1Div.appendChild(playerArtist);
  playerDiv1.appendChild(div1Buttons);
  div1Buttons.appendChild(likeDiv);
  div1Buttons.appendChild(hiddenPlayerPlay);
  div1Buttons.appendChild(hiddenPlayerClose);
  playerDiv2.appendChild(playerButtonDiv);
  playerButtonDiv.appendChild(shuffle);
  playerButtonDiv.appendChild(playerPlay);
  playerButtonDiv.appendChild(loop);
  playerDiv2.appendChild(staticBar);
  staticBar.appendChild(playerBar);
  playerBar.appendChild(audioTrack);
  playerDiv3.appendChild(playerClose);
  audioPlayer.appendChild(playerDiv1);
  audioPlayer.appendChild(playerDiv2);
  audioPlayer.appendChild(playerDiv3);
  timerInterval = setInterval(timer, 1000);

  audioTrack.play();

 /*Funzione toggle play**/
  playerPlay.onclick = function () {
    if (audioTrack.paused) {
      audioTrack.play()
      timerInterval = setInterval(timer, 1000);
      playerPlay.src = './assets/imgs/play-circle-fill.svg'
    }
    else {
      audioTrack.pause()
      clearInterval(timerInterval)
      playerPlay.src = './assets/imgs/play-circle-fill-gray.svg'
    }

  }

  hiddenPlayerPlay.onclick = function () {
    if (audioTrack.paused) {
      audioTrack.play()
      timerInterval = setInterval(timer, 1000);
      hiddenPlayerPlay.src = './assets/imgs/play-circle-fill.svg'
    }
    else {
      audioTrack.pause()
      clearInterval(timerInterval)
      hiddenPlayerPlay.src = './assets/imgs/play-circle-fill-gray.svg'
    }
  }

  /**Funzione close playbar */
  playerClose.onclick = function () {
    audioPlayer.innerHTML = '';
  }
  hiddenPlayerClose.onclick = function () {
    audioPlayer.innerHTML = '';
  }
}

/**Funzione Timer */
let i = -1;
let timerInterval;
function timer() {
  i++;
  const total = 29;
  const percent = (i / total) * 100;
  playerBar.style.display = 'block';
  playerBar.style.width = `${percent}%`;

  if (i >= total) {
    clearInterval(timerInterval);
  }
}

function ArtistPlayer(data){
  console.log(data)
  audioPlayer.innerHTML = '';
    i = -1;
    displayAudioPlayer(data);
}
var isFollowing = false;

function toggleFollow() {
  var followElements = document.getElementsByClassName('follow');
  for (var i = 0; i < followElements.length; i++) {
    var follow = followElements[i];
    if (isFollowing) {
      follow.innerHTML = 'FOLLOW';
    } else {
      follow.innerHTML = 'FOLLOWING';
    }
  }
  isFollowing = !isFollowing;
}

function toggleGreen(ok){
  if (ok.classList.contains("green")) {
    ok.classList.remove("green");
  } else {
    ok.classList.add("green");
  }
}



const modal = document.getElementById("infoModal");
const span = document.getElementsByClassName("close")[(0)];
const searchInput = document.getElementById("searchInput");
const modalButton = document.getElementById("modalButton");
const searchButton =document.getElementById("searchButton")
const main = document.getElementById('main')
/* Funzione modale */
searchButton.onclick = function () {
  modal.style.display = "block";
  main.classList.toggle('mainBlurred')
}
span.onclick = function () {
  modal.style.display = "none";
  main.classList.toggle('mainBlurred');
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    main.classList.toggle('mainBlurred')
  }
};
/* Funzione search button */
modalButton.onclick = function () {

  window.location.href = "./search.html?searchPar=" + searchInput.value;
}



//gradiente operation is insecure
/*
function calculateAverageColor(imageElem) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const width = canvas.width = imageElem.width;
  const height = canvas.height = imageElem.height;

  context.drawImage(imageElem, 0, 0);

  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;

  let totalR = 0, totalG = 0, totalB = 0;
  const pixelCount = width * height;

  for (let i = 0; i < data.length; i += 4) {
    totalR += data[i];
    totalG += data[i + 1];
    totalB += data[i + 2];
  }

  const avgR = Math.floor(totalR / pixelCount);
  const avgG = Math.floor(totalG / pixelCount);
  const avgB = Math.floor(totalB / pixelCount);

  return { R: avgR, G: avgG, B: avgB };
}

const mainContentArtist = document.getElementById('MainContentArtist');

image.onload = function() {
  const { R, G, B } = calculateAverageColor(image);
  mainContentArtist.style.background = `rgb(${R}, ${G}, ${B})`;
};*/