// Your code here
const FILMS_URL = 'http://localhost:3000'

async function fetchFilms() {

    const filmsResponse = await fetch(`${FILMS_URL}/films`)
    const films = await filmsResponse.json()
    return fetch(`${FILMS_URL}/films`)
}

document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('#card');
    //poster display
    const posters = document.querySelector('#poster')
    fetch(`${FILMS_URL}`)
        .then((response) => response.json())
        .then(films => {
        posters.src = films[0].poster
    })
    
    //Movie titles
    const titleName = document.querySelector('#title');
    fetch(`${FILMS_URL}/films`)
        .then(response => response.json())
        .then(films => {
            titleName.innerText = films[0].title
        })
   
    const runtime = document.querySelector('.meta');
    fetch(`${FILMS_URL}/films`)
        .then(response => response.json())
        .then(films => {
         
            runtime.innerHTML = films[0].runtime
        })
    const description = document.querySelector('.description')
     fetch(`${FILMS_URL}/films`)
        .then(response => response.json())
        .then(films => {
            description.innerHTML = films[0].description
            // Map.description = Object.keys(description)
        })
    const filmsList = document.querySelector('#films');
    fetch(`${FILMS_URL}/films`)
        .then(response => response.json())
        .then(films => {
            films.innerHTML = ''
            for (let film of films) {
                filmsList.innerHTML += `<li>${film.title.toUpperCase().bold()}</li>`
            }
            
        })
    const showtime = document.querySelector('#showtime')
    fetch(`${FILMS_URL}/films`)
        .then(response => response.json())
        .then(films => {
         
            showtime.textContent = films[0].showtime
        })

    const buyTicket = document.getElementById('buy-ticket');
    buyTicket.addEventListener('click', (e) => {
        e.preventDefault();
            
        fetch(`${FILMS_URL}/films`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'

            },
         
        })
            .then(res => res.json())
            .then(films => {
                titleName.innerText = films[0].title
            
        })
    })
                        
})
