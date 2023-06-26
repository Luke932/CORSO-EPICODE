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

let admin = new URLSearchParams(window.location.search);
let searchPar = admin.get('searchPar');
let urledValue = searchPar.replaceAll(/ /g, '%20');
  console.log(urledValue);
const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + urledValue;
const playListDiv = document.getElementById("playListDiv");
const songContainer = document.getElementById("songContainer");
const favouriteContainer = document.getElementById("favouriteContainer");
const favouriteContainer2 = document.getElementById("favouriteContainer2");
const indexArray = [];
const audioPlayer = document.getElementById('audioPlayer')
const searchButton = document.getElementById('searchButton');
const modal = document.getElementById("infoModal");
const span = document.getElementsByClassName("close")[(0)];
const searchInput = document.getElementById("searchInput");
const modalButton = document.getElementById("modalButton");
const main = document.getElementById('main') 

/**Funzione onload */
window.onload = function() {
    fetchAndDisplay();
    displayPlayList(playlistNames);
}

/**Funzione fetch */
const fetchAndDisplay = function () {
fetch(url, {
    method: "GET",
})
    .then((raw) => {
    return raw.json();
    
    })
    .then((dati) => {
    console.log(dati.data);
    displaySong(dati.data);
    displayPlayListSongs(dati.data);
    displayFavouriteSongs1(dati.data);
    
    })
    .catch((error) =>{
      console.log(error);
      window.location.href = 'error.html';
    })
};

/**Funzione display playlist */
function displayPlayList(items) {
    items.forEach((item) => {
      const itemText = document.createElement("p");
      itemText.textContent = item;
      playListDiv.appendChild(itemText);
    });
  }

  /**Funzione display main song */
function displaySong(songs) {
    const randomSong = Math.floor(Math.random() * songs.length);
    const song = songs[randomSong];
    indexArray.push(randomSong);
  
    const playListSongCard = document.createElement("div");
    playListSongCard.classList.add("card", "mainSongCard", "mb-1");
  
    const playListRow = document.createElement("div");
    playListRow.classList.add("row");
  
    const playListImageCol = document.createElement("div");
    playListImageCol.classList.add("col-4", 'd-flex', 'align-items-center');
  
    const songImage = document.createElement("img");
    songImage.src = song.album.cover_xl;
    songImage.alt = song.title_short;
    songImage.classList.add("mainSongImage", "card-image-left");
  
    const playListInfoCol = document.createElement("div");
    playListInfoCol.classList.add("col-8");
  
    const songInfoDiv = document.createElement("div");
    songInfoDiv.classList.add("mainSongInfoDiv", "card-body");
  
    const albumAnchor = document.createElement("a");
    const albumName = document.createElement("p");
    albumName.textContent = song.album.title;
    albumAnchor.href = "./album.html?albumId=" + song.album.id;
  
    const songName = document.createElement("h1");
    songName.textContent = song.title;
    songName.className = "homeTitle";
  
    const artistAnchor = document.createElement("a");
    const artistName = document.createElement("p");
    artistName.textContent = song.artist.name;
    artistAnchor.href = "./artist.html?artistId=" + song.artist.id;
  
    const spamSong = document.createElement("p");
    spamSong.textContent = "Ascolta il nuovo singolo di " + song.artist.name;
  
    const songButtonDiv = document.createElement("div");
    songButtonDiv.classList.add("d-flex", "align-items-center");
  
    const playButton = document.createElement("button");
    playButton.type = "button";
    playButton.textContent = "Play";
    playButton.className = "playButton";
  
    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.textContent = "Save";
    saveButton.className = "saveButton";
  
    const options = document.createElement("div");
    options.innerHTML = `<svg
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-three-dots text-white"
          viewBox="0 0 16 16"
        >
          <path
            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
          />
        </svg>`;
  
    playListSongCard.appendChild(playListRow);
    playListRow.appendChild(playListImageCol);
    playListImageCol.appendChild(songImage);
    playListRow.appendChild(playListInfoCol);
    playListInfoCol.appendChild(songInfoDiv);
    songInfoDiv.appendChild(albumAnchor);
    albumAnchor.appendChild(albumName);
    songInfoDiv.appendChild(songName);
    songInfoDiv.appendChild(artistAnchor);
    artistAnchor.appendChild(artistName);
    songInfoDiv.appendChild(spamSong);
    songInfoDiv.appendChild(songButtonDiv);
    songButtonDiv.appendChild(playButton);
    songButtonDiv.appendChild(saveButton);
    songButtonDiv.appendChild(options);
  
    songContainer.appendChild(playListSongCard);
  
    playButton.onclick = function () {
      audioPlayer.innerHTML = '';
      i = -1;
      displayAudioPlayer(song);
    }
    songName.onclick = function () {
      audioPlayer.innerHTML = '';
      i = -1;
      displayAudioPlayer(song);
    }
  }
  
  /**Funzione display playlist song */
  
  function displayPlayListSongs(songs) {
    const currentIndex = [];
    while (currentIndex.length < 6) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      let isIndexUnique = true;
      for (let i = 0; i < indexArray.length; i++) {
        if (indexArray[i] === randomIndex) {
          isIndexUnique = false;
          break;
        }
      }
      if (isIndexUnique) {
        indexArray.push(randomIndex);
        currentIndex.push(randomIndex);
      }
    }
    currentIndex.forEach((index) => {
      const song = songs[index];
      const playListSongDiv = document.createElement("div");
      playListSongDiv.classList.add("playListSongDiv", "col-6", "col-md-4");
  
      const playListSongCard = document.createElement("div");
      playListSongCard.classList.add("card", "playListCard", "mb-1");
  
      const playListRow = document.createElement("div");
      playListRow.classList.add("row", "playListRow");
  
      const playListImageCol = document.createElement("div");
      playListImageCol.classList.add("col-5");
  
      const songImage = document.createElement("img");
      songImage.src = song.album.cover_xl;
      songImage.alt = song.title_short;
      songImage.classList.add("playListSongImage", "card-image-left");
  
      const playListInfoCol = document.createElement("div");
      playListInfoCol.classList.add("col-7");
  
      const songInfoDiv = document.createElement("div");
      songInfoDiv.classList.add("songInfoDiv", "card-body");
  
      const albumAnchor = document.createElement("a");
      const albumName = document.createElement("p");
      albumName.textContent = song.album.title;
      albumAnchor.href = "./album.html?albumId=" + song.album.id;
      albumAnchor.classList.add('d-md-none');
  
      const songName = document.createElement("p");
      songName.textContent = song.title;
  
  
      const artistAnchor = document.createElement("a");
      const artistName = document.createElement("p");
      artistName.textContent = song.artist.name;
      artistAnchor.href = "./artist.html?artistId=" + song.artist.id;
  
      playListSongDiv.appendChild(playListSongCard);
      playListSongCard.appendChild(playListRow);
      playListRow.appendChild(playListImageCol);
      playListImageCol.appendChild(songImage);
      playListRow.appendChild(playListInfoCol);
      playListInfoCol.appendChild(songInfoDiv);
      songInfoDiv.appendChild(albumAnchor);
      albumAnchor.appendChild(albumName);
      songInfoDiv.appendChild(songName);
      songInfoDiv.appendChild(artistAnchor);
      artistAnchor.appendChild(artistName);
  
      playListContainer.appendChild(playListSongDiv);
  
      songName.onclick = function () {
        audioPlayer.innerHTML = '';
        i = -1;
        displayAudioPlayer(song);
      }
    });
  }
  
  /**Funzione display favourite songs */
  function displayFavouriteSongs1(songs) {
    const currentIndex = [];
    while (currentIndex.length < 12) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      let isIndexUnique = true;
      for (let i = 0; i < indexArray.length; i++) {
        if (indexArray[i] === randomIndex) {
          isIndexUnique = false;
          break;
        }
      }
      if (isIndexUnique) {
        indexArray.push(randomIndex);
        currentIndex.push(randomIndex);
      }
    }
    currentIndex.forEach((index) => {
      const song = songs[index];
      const playListSongDiv = document.createElement("div");
      playListSongDiv.classList.add("playListSongDiv", "col-12", "col-md-3", 'mb-2');
  
      const playListSongCard = document.createElement("div");
      playListSongCard.classList.add("card", "favListCard", "mb-1");
  
      const playListRow = document.createElement("div");
      playListRow.classList.add("row", "playListRow");
  
      const playListImageCol = document.createElement("div");
      playListImageCol.classList.add("col-6", 'col-md-12');
  
      const songImage = document.createElement("img");
      songImage.src = song.album.cover_xl;
      songImage.alt = song.title_short;
      songImage.classList.add("favListSongImage", "card-image-left");
  
      const playListInfoCol = document.createElement("div");
      playListInfoCol.classList.add("col-6", 'col-md-12');
  
      const songInfoDiv = document.createElement("div");
      songInfoDiv.classList.add("favSongInfoDiv", "card-body");
  
      const albumAnchor = document.createElement("a");
      const albumName = document.createElement("p");
      albumName.textContent = song.album.title;
      albumAnchor.href = "./album.html?albumId=" + song.album.id;
  
      const songName = document.createElement("p");
      songName.textContent = song.title;
      songName.classList.add('favSongName');
  
      const artistAnchor = document.createElement("a");
      const artistName = document.createElement("p");
      artistName.textContent = song.artist.name;
      artistAnchor.href = "./artist.html?artistId=" + song.artist.id;
      artistName.classList.add('d-md-none')
  
  
      const favListRow = document.createElement("div");
      favListRow.classList.add("row", "favListRow", 'd-md-none');
  
      const favListImageCol = document.createElement("div");
      favListImageCol.classList.add("col-6", 'd-flex',);
  
      const like = document.createElement("div");
      like.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
  </svg>`;
      const options = document.createElement("div");
      options.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>`;
  
      const favListInfoCol = document.createElement("div");
      favListInfoCol.classList.add("col-6", 'd-flex', 'justify-content-end', 'align-items-center');
      const nBrani = document.createElement('p');
      nBrani.textContent = randomNumber() + ' brani';
      nBrani.classList.add('nBrani');
      const play = document.createElement("div");
      play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill me-4" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
    </svg>`;
  
      playListSongDiv.appendChild(playListSongCard);
      playListSongCard.appendChild(playListRow);
      playListRow.appendChild(playListImageCol);
      playListImageCol.appendChild(songImage);
      playListRow.appendChild(playListInfoCol);
      playListInfoCol.appendChild(songInfoDiv);
      songInfoDiv.appendChild(albumAnchor);
      albumAnchor.appendChild(albumName);
      songInfoDiv.appendChild(songName);
      songInfoDiv.appendChild(artistAnchor);
      artistAnchor.appendChild(artistName);
      playListSongCard.appendChild(favListRow);
      favListRow.appendChild(favListImageCol);
      favListImageCol.appendChild(like);
      favListImageCol.appendChild(options);
      favListRow.appendChild(favListInfoCol);
      favListInfoCol.appendChild(nBrani);
      favListInfoCol.appendChild(play)
  
      favouriteContainer.appendChild(playListSongDiv);
  
  
      songName.onclick = function () {
        audioPlayer.innerHTML = '';
        i = -1;
        displayAudioPlayer(song);
      }
  
      play.onclick = function () {
        audioPlayer.innerHTML = '';
        i = -1;
        displayAudioPlayer(song);
      }
    });
  }
  
  /**funzione per generare un numero casuale */
  function randomNumber() {
    const randomNumber = (Math.round(Math.random() * 25) + 5);
    return randomNumber;
  
  }
  
  /**Funzione display Audioplayer */
  function displayAudioPlayer(song) {
    clearInterval(timerInterval);
    const playerDiv1 = document.createElement('div');
    playerDiv1.classList.add('col-12', 'col-md-2', 'd-flex', 'playerDiv1', 'align-items-center')
  
    const playerImage = document.createElement('img');
    playerImage.src = song.album.cover_xl;
    playerImage.alt = song.title_short;
    playerImage.classList.add('playerImage', 'me-2', 'd-none', 'd-md-block');
  
    const div1Div = document.createElement('div');
    div1Div.classList.add('div1Div', 'me-4', 'me-md-2');
  
    const playerSongTitle = document.createElement('h5');
    playerSongTitle.textContent = song.title;
  
    const playerArtist = document.createElement('p');
    playerArtist.textContent = song.artist.name;
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
  
    const staticBar = document.createElement('div');
    staticBar.classList.add('staticBar');
    const playerBar = document.createElement('div');
    playerBar.classList.add('playerBar');
    playerBar.id = 'playerBar';
  
    const audioTrack = document.createElement('audio');
    audioTrack.src = song.preview;
  
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
  
    /**Funzione toggle play */
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
  /**Funzioni navigazione tra pagine */
  function goHome(){
    window.location ='home.html'
  }
  function goBack(){
    window.history.back();
  }
  
  
  /**Funzione Toggle Svg */
  /*Funziona ma effetto non carino
let svg = document.querySelectorAll('svg');
console.log(svg);
svg.forEach((element) => {
  element.addEventListener('click', function () {
    element.classList.toggle('svgGreen');
  })
  window.onclick = function (event) {
    if (event.target == svg) {
      element.classList.toggle('svgGreen');
    }
  };
})

function svgToggle(element) {
  element.addEventListener('click', function () {
    element.classList.toggle('svgGreen');
  })
}
*/

/**Funzione modale */
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

/**Funzione search button */
modalButton.onclick = function () {

  window.location.href = "./search.html?searchPar=" + searchInput.value;
}
  
