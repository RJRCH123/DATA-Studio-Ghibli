//import { filterByProducer , filterByDirector } from './data.js';
//import {} from '.data/.js'
// // import data from './data/lol/lol.js';
// import data from './data/ghibli/ghibli.js';
// // import data from './data/rickandmorty/rickandmorty.js';

//console.log(data['films']);

// Event for Nav-Menu responsive

const navToggle = document.querySelector(".NavToggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

// Event for area-label open and close menu

if (navMenu.classList.contains("nav-menu_visible")){
  navToggle.setAttribute("aria-label", "Close menu");
}else {
  navToggle.setAttribute("aria-label", "Open menu")
}
});


/********** DATA FILTER***********/
import dataGhibli from './data/ghibli/ghibli.js';
import { filterByDirector, filterByProducer, filterBySearch, order_az, order_za, filterByScore, filterByYear } from './data.js';
// TEMPLATE
const allData = dataGhibli.films;

//PAGE FILM-2

//const mainCards = document.querySelector("#Films");

const showData = (data) => {
    const cardElement = document.createElement('div');
    cardElement.className = "card";

    const templateCard =
      `<div class="moviecard contenedor-img ejemplo-1" id="${data.id}">
        <img class="movie-poster" src="${data.poster}">
        <div class="mascara">
          <h2 class="filmClick">${data.title}</h2>
            <div class="divScoreYear" >
                <p class="scoreClick"> ⭐️ ${data.rt_score}</p>
                <p class="dateClick"> 📆 ${data.release_date}</p>
            </div>
            <p class="directorClick">Director: ${data.director}</p>
            <p class="producerClick">Producer: ${data.producer}</p>
            </div>
        </div>`;

    cardElement.innerHTML = templateCard;
    cardElement.addEventListener('click', () => {
    let id = cardElement.firstChild.id;
    showMore(id);
    })
    return cardElement;
}

const cardsList = document.querySelector("#cards_movies");
const selectDirector = document.querySelector("#directors");
const selectProducer = document.querySelector("#producers");
const inputTypeSearch = document.querySelector("input[type=search]");
const ghibliNotFound = document.querySelector("#ghibli-notFound");
let inputSearch = document.querySelector("#searchFilm");
const selectScore = document.querySelector("#score");
const selectYear = document.querySelector("#year");
const film1 = document.querySelector("#BoxFilm-1")
const film2 = document.querySelector("#BoxFilm-2")

/**************SHOW MORE ITEMS PAGE FILM 2 *************/
const titleF2 = document.querySelector(".tittleF2");
const synopsisF2 = document.querySelector("#synopsisF2");
const posterF2 = document.querySelector("#PosterF2");
const yearF2 = document.querySelector(".dateF2");
const scoreF2 = document.querySelector(".scoreF2");
const directorF2 = document.querySelector("#directorF2");
const producerF2 = document.querySelector("#producerF2");
const durationMovie = document.querySelector("#duration");
const boxLocation = document.querySelector("#box-location");
const boxVehicles = document.querySelector("#box-vehicles");
const boxCharacteres = document.querySelector("#box-characters");


/************ FUNCTION SHOW MORE *************/

function showMore(id) {

  let dataFilm = allData.filter(film => film.id == id);

  posterF2.src = dataFilm[0].poster;
  titleF2.innerHTML = dataFilm[0].title;
  yearF2.innerHTML = dataFilm[0].release_date;
  scoreF2.innerHTML = dataFilm[0].rt_score;
  directorF2.innerHTML = dataFilm[0].director;
  producerF2.innerHTML = dataFilm[0].producer;
  synopsisF2.innerHTML = dataFilm[0].description;
  durationMovie.innerHTML = dataFilm[0].duration;
  const dataLocation = dataFilm[0].locations;
  boxLocation.innerHTML = "";

  if(dataLocation.length==0){
    boxLocation.innerHTML = `<p>NOT FOUND DATA</p>`;
  }else{
    for (let key in dataLocation){
        const locationElement = document.createElement('div');
        locationElement.className = 'locations-detail-box';
        let residents = dataLocation[key].residents;
        let templateLocation =
            `<div class="img-locations-box">
                ${dataLocation[key].img=="" ? `<img src="./img/not-found.jpg" alt="" class="img-locations">` : `<img src="${dataLocation[key].img}" alt="" class="img-locations">`}
            </div>
            <div class="details-container locationsDetails">
              <div class="text-nameVL">
                <p>${dataLocation[key].name}</p>
              </div>
              <div class="text-name2">
                <p class="text-description"><span class="span-black">Climate: </span>${dataLocation[key].climate}</p>
                <p class="textF2"><span class="span-black">Terrain: </span>${dataLocation[key].terrain}</p>
                <p class="textF2"><span class="span-black">Surface water: </span>${dataLocation[key].surface_water}</p>
                <p class="textF2"><span class="span-black">Residents: </span> ${residents.map(i => i.name).join(",")}</p>
              </div>
            </div>`;
        locationElement.innerHTML=templateLocation;
        boxLocation.appendChild(locationElement);
    }
}

      const dataVehicles = dataFilm[0].vehicles;
      boxVehicles.innerHTML = "";
      if(dataVehicles.length== 0){
        boxVehicles.innerHTML =`<p class:"noData">NOT FOUND DATA</p>` ;
      } else  {
          for(let key in dataVehicles){
              const vehiclesElement = document.createElement('div');
              vehiclesElement.className='vehicles-detail-box';
              let pilots = dataVehicles[key].pilot;
              let templateVehicles =
              `<div class="img-vehicles-box">
                  <img src="${dataVehicles[key].img}" alt="" class="img-vehicles">
              </div>
              <div class="details-container vehiclesDetails">
                <div class="text-nameVL">
                  <p>${dataVehicles[key].name}</p>
                </div>
                <div class="text-name2">
                  <p class="text-description"><span class="span-black">Description: </span>${dataVehicles[key].description}</p>
                  <p class="textF2"><span class="span-black">Vehicle class: </span>${dataVehicles[key].vehicle_class}</p>
                  <p class="textF2"><span class="span-black">Length: </span>${dataVehicles[key].length}</p>
                  <p class="textF2"><span class="span-black">Pilot: </span>${pilots.name}</p>
                </div>
              </div>`
              vehiclesElement.innerHTML= templateVehicles;
              boxVehicles.appendChild(vehiclesElement);
          }
        }

      const dataCharacters = dataFilm[0].people;
      boxCharacteres.innerHTML = "";
      for(let key in dataCharacters){
          const charactersElement = document.createElement('div');
          charactersElement.className='characters-detail-box';
          let templateCharacter=
              `<div class="img-character-box">
                  ${dataCharacters[key].img=="" ? `<img src="./img/not-found.jpg" alt="" class="img-character">` : `<img src="${dataCharacters[key].img}" alt="" class="img-character">`}
              </div>
              <div class="details-container">
                <div class="text-name">
                  <p>${dataCharacters[key].name}</p>
                </div>
                <div class="text-name2">
                  <p class="textF2"><span class="span-black"> Gender: </span>${dataCharacters[key].gender}</p>
                  <p class="textF2"><span class="span-black"> Age: </span>${dataCharacters[key].age}</p>
                  <p class="textF2"><span class="span-black">Specie: </span>${dataCharacters[key].specie}</p>
                  <p class="textF2"><span class="span-black">Eye color: </span>${dataCharacters[key].eye_color}</p>
                  <p class="textF2"><span class="span-black">Hair color: </span>${dataCharacters[key].hair_color}</p>
                </div>
              </>`
          charactersElement.innerHTML=templateCharacter;
          boxCharacteres.appendChild(charactersElement);
          }

    window.scroll(0,0);
    film1.style.display='none';
    film2.style.display='block';
    }




// Funcion Cargar Data en Card
function loadData(data) {
    cardsList.innerHTML = '';
    for (let key in data) {
        cardsList.appendChild(showData(data[key]));
    }
}

// Cargar Toda la Data al inicio
window.addEventListener("load", () => {
    loadData(allData);
});

//Reload Data when close "x" of search
inputTypeSearch.addEventListener('search', () => {
  loadData(allData);
  ghibliNotFound.style.display = 'none';
});

//Filtrar by Search

inputSearch.addEventListener('keyup', () => {
  let search = inputSearch.value;
  ghibliNotFound.style.display = 'none';
  if (search.length == 0) {
    loadData(allData);
  } else {
    let dataFilterSearch = filterBySearch(search, allData);
    if (dataFilterSearch.length == 0) {
      cardsList.innerHTML = '';
      ghibliNotFound.style.display = 'block';
    } else {
      loadData(dataFilterSearch);
    }
  }
});


// Filter by Director
selectDirector.addEventListener("change", () => {
    let director = selectDirector.value;
    if (director == 'directors') {
        loadData(allData);
    } else {
        let dataFilterDirector = filterByDirector(director, allData);
        loadData(dataFilterDirector);
    }
});

// Filter by Producer
selectProducer.addEventListener("change", () => {
    let producer = selectProducer.value;
    if (producer == 'producers') {
        loadData(allData);
    } else {
        let dataFilterProducer = filterByProducer(producer, allData);
        loadData(dataFilterProducer);
    }
});

// Filter by alphabetical Az
let orderAtoZ = document.getElementById("order_az");
orderAtoZ.addEventListener("click", function () {
  document.getElementsByClassName("cards_movies")[0].innerHTML = "";
  order_az(allData);
  loadData(allData);
});

// Filter by alphabetical Za
let orderZtoA = document.getElementById("order_za");
orderZtoA.addEventListener("click", function () {
  document.getElementsByClassName("cards_movies")[0].innerHTML = "";
  order_za(allData);
  loadData(allData);
});

// Filter by Score
selectScore.addEventListener("change", () => {
  let score= selectScore.value;
  if (score == 'score') {
      loadData(allData);
  } else {
      let dataFilterScore = filterByScore(score, allData);
      loadData(dataFilterScore);
  }
});

// Filter by Year
selectYear.addEventListener("change", () => {
  let year= selectYear.value;
  if (year == 'year') {
      loadData(allData);
  } else {
      let dataFilterYear = filterByYear(year, allData);
      loadData(dataFilterYear);
  }
});



















