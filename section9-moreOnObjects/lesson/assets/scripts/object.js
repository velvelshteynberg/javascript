const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter))

        const movieEl = document.createElement('li');
        const { info } = movie
        let { getFormattedTitle } = movie;
        getFormattedTitle = getFormattedTitle.bind(movie); // the first argument here specifies that the this keyword refers to the movie. Preconfigures for future execution
        let text = getFormattedTitle.call(movie) + ' - '; //.call() preconfigures what this refers to for immediate execution with unlimited number of possible arguments
        /* let text = getFormattedTitle.apply(movie) + ' - '; //.apply() preconfigures what this refers to for immediate execution with abilitiy for only one more argument in the form of an array. */
        for (const key in info) {
            if (key !== 'title') {  //title has to be in '' because otherwise js will look for a variable name called title. Keys are in any case coerced into strings
                text = text + `${key}: ${info[key]}`; // this 
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }

    const newMovie = {
        info: {
            title, // same as title: title
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle: function () {
            console.log(this);
            return this.info.title.toUpperCase();
        }

    }
    movies.push(newMovie);
    renderMovies();
}

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler)