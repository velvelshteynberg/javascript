const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const uiMovieDisplay = document.body.querySelector('main');
const movies = [];

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

const renderNewMovieElement = (title, imageUrl, rating) => {
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
    const listRoot = document.getElementById('movie-list');
    console.log(listRoot);
    listRoot.appendChild(newMovieElement);
}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
}

const clearMovieInput = () => {
    for (const input of userInputs) {
        input.value = '';
    }
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

const cancelAddMovie = () => {
    toggleMovieModal();
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
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
    uiUpdate();
    renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddMovie)
confirmAddMovieButton.addEventListener('click',addMovieHandler)