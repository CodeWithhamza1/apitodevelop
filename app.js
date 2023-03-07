
const tellJokeBtn = document.querySelector('#tell-joke-btn');
const jokeText = document.querySelector('#joke');

// Function to fetch joke from API
async function getJoke() {
    const jokeAPI = 'https://sv443.net/jokeapi/v2/joke/Any?type=single';
    try {
        const response = await fetch(jokeAPI);
        const data = await response.json();
        return data.joke;
    } catch (error) {
        console.log('Error getting joke', error);
    }
}

// Function to display joke on page
async function tellJoke() {
    const joke = await getJoke();
    jokeText.textContent = joke;
}

document.addEventListener('DOMContentLoaded', async function() {
    await tellJoke();
    tellJokeBtn.addEventListener('click', tellJoke);
});






async function getQuote() {
    const response = await fetch('https://api.quotable.io/random?tags=inspirational|love');
    const data = await response.json();
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = `<p>"${data.content}"</p><p>-- ${data.author}</p>`;
}
getQuote(); // Load a quote when the page first loads











const poetryLinesContainer = document.querySelector('.poetry-lines');
const newLineBtn = document.querySelector('#new-line-btn');
window.addEventListener('load', () => {
    fetchPoetryLine();
});

newLineBtn.addEventListener('click', fetchPoetryLine);

function fetchPoetryLine() {
    fetch('https://poetrydb.org/author,title/Shakespeare;Sonnet')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const poetryLine = data[randomIndex].lines[0];
            displayPoetryLine(poetryLine);
        })
        .catch(error => console.error(error));
}

function displayPoetryLine(poetryLine) {
    poetryLinesContainer.textContent = poetryLine;
}

