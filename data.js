
/************ FILTER BY DIRECTOR *************/
const filterByDirector = (director, allData) => {
  let dataFilter = allData.filter(film => film.director == director);
  return dataFilter;
}
/************ FILTER BY PRODUCER *************/
const filterByProducer = (producer, allData) => {
  let dataFilter = allData.filter(film => film.producer == producer);
  return dataFilter;
}

/************ FILTER BY SEARCH *************/
const filterBySearch = (search, allData) => {
  let searchConverted = search.toLowerCase();
  let dataFilterSearch = allData.filter(film => film.title.toLowerCase().includes(searchConverted));
  return dataFilterSearch;
}

/************ FILTER BY ALFABETIC *************/

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function order_az(arraytosort) {
  return arraytosort.sort(function (a, b) {
    return compareStrings(a.title, b.title);
  });
}

const order_za = (arraytosort) => {
  return arraytosort.sort(function(a, b) {
    return compareStrings(b.title, a.title);
})
};

/************ FILTER BY SCORE *************/

const filterByScore = (rt_score, allData) => {
  let dataFilter = allData.filter(film => film.rt_score == rt_score);
  return dataFilter;
}

/************ FILTER BY YEAR *************/

const filterByYear = (release_date, allData) => {
  let dataFilter = allData.filter(film => film.release_date == release_date);
  return dataFilter;
}

export {
  filterByDirector, 
  filterByProducer, 
  filterBySearch, 
  order_az, 
  order_za, 
  filterByScore, 
  filterByYear,
  compareStrings 
}