const baseURL = 'https://ghibliapi.herokuapp.com/films';
const randomizer = document.querySelector('.random');

randomizer.addEventListener('click', fetchMovie);

function fetchMovie(e) {

    let x = getRandomInt();
    function getRandomInt(min, max) {
        min = Math.ceil(0);
        max = Math.floor(19);
        return Math.floor(Math.random() * (19 - 0) + 0);
      }

    e.preventDefault();

    fetch(baseURL)
        .then(results => {
            return results.json()
        })
        .then(json => {
            console.log(json);
            displayResults(json);
        });

function displayResults(json) {
    let nameData = json[x].title;
    let directorData = json[x].director;
    let dateData = json[x].release_date;
    let summaryData = json[x].description;

    title.innerHTML = nameData;
    director.innerHTML = directorData;
    release.innerHTML = dateData;
    description.innerHTML = summaryData;
}
}