// Your code here
const FILMS_URL = 'http://localhost:3000'

async function fetchFilms() {

    const filmsResponse = await fetch(`${FILMS_URL}/films`)
    const films = await filmsResponse.json()
    return fetch(`${FILMS_URL}/films`)
}


document.addEventListener('DOMContentLoaded', () => {
    const titleName = document.querySelector('#title');
    const runtime = document.querySelector('.meta');
    const description = document.querySelector('.description')
    const filmsList = document.querySelector('#films');
    const showtime = document.querySelector('#showtime')
    const card = document.querySelector('#card');
    //poster display
    const posters = document.querySelector('#poster')
    fetch(`${FILMS_URL}/films`)
        .then((response) => response.json())
        .then(films => {
            posters.src = films[0].poster
            titleName.innerText = films[0].title
            runtime.innerHTML = films[0].runtime
            description.innerHTML = films[0].description
            films.innerHTML = ''
            for (let film of films) {
                filmsList.innerHTML += `<li>${film.title.toUpperCase().bold()}</li>`
            }
            showtime.textContent = films[0].showtime

            
        })
        const buyTicket = document.getElementById('buy-ticket');
        buyTicket.addEventListener('click', handleSubmit => {
            handleSubmit.preventDefault();
            
                
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
           
    
    //Movie titles
    

                    
})
