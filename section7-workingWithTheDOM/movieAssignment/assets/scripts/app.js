const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const uiMovieDisplay = document.body.querySelector('main');
const movies = [];
const deleteMovieModal = document.getElementById('delete-modal');

const uiUpdate = () => {
    if (movies.length === 0) {
        uiMovieDisplay.style.display = 'block';
    } else {
        uiMovieDisplay.querySelector('section').style.display = 'none';
    }
}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const deleteMovieConfirmation = (id) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === id) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    console.log(listRoot);
    let liList = listRoot.querySelectorAll('li');
    liList[movieIndex].remove();
}

const cancelMovieDeletion = () => {
    closeMovieModal();
    deleteMovieModal.classList.remove('visible')
}
const deleteMovieHandler = (movieId) => {
    const deleteMovieModal = document.getElementById('delete-modal');
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    backdropClickHandler();
    deleteMovieConfirmation(movieId);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = ` 
        <div class = 'movie-element__image' >
            <img src="${imageUrl}" alt = '${title}'>
        </div>
        <div>
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById('movie-list');
    listRoot.appendChild(newMovieElement);
}
 
const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}
const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
}

const clearMovieInput = () => {
    for (const input of userInputs) {
        input.value = '';
    }
}

const backdropClickHandler = () => {
    closeMovieModal();
}

const cancelAddMovie = () => {
    closeMovieModal();
    clearMovieInput();
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue === '' ||
        ratingValue < 1 ||
        ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5)');
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    uiUpdate();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
}

startAddMovieButton.addEventListener('click', showMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddMovie)
confirmAddMovieButton.addEventListener('click', addMovieHandler)