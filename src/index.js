// Your code here
const FILMS_URL = 'http://localhost:3000'

async function fetchFilms() {

    const filmsResponse = await fetch(`${FILMS_URL}/films`)
    const films = await filmsResponse.json()
    return fetch(`${FILMS_URL}/films`)
}
function subtract() {
    tickets.textContent = tickets.textContent - 1
    document.querySelector('#ticket-num').value = tickets.textContent;
    tickets.onclick = subtract;
    
}


const titleName = document.querySelector('#title');
const runtime = document.querySelector('.meta');
const description = document.querySelector('.description')
const filmList = document.querySelector('#films');
const showtime = document.querySelector('#showtime')
const card = document.querySelector('#card');
const posters = document.querySelector('#poster')
const tickets = document.querySelector('#ticket-num')


document.addEventListener('DOMContentLoaded', () => {
   
    fetch(`${FILMS_URL}/films`)
        .then((response) => response.json())
        .then(films => {
            posters.src = films[0].poster
            titleName.innerText = films[0].title
            runtime.innerHTML = films[0].runtime
            //  description.innerHTML = films[0].description
            filmList.innerHTML = ''
            for (let film of films) {
                filmList.innerHTML += `<li>${film.title}</li>`
            }
            showtime.textContent = films[0].showtime
            tickets.innerHTML= films[0].tickets_sold    
        })
      

      
        
        const buyTicket = document.getElementById('buy-ticket');
        buyTicket.addEventListener('click', (e) => {
           e.preventDefault();
            fetch(`${FILMS_URL}/films`)
                .then((res) => res.json())
                .then(films => {
                    console.log(films)
                })
            subtract();

        
            
        }) 
            filmList.addEventListener('click', (e) => { 
                e.preventDefault();
                console.log(e.target.innerText);
                fetch(`${FILMS_URL}/films`,)
              .then(res => res.json())
                .then(films => {
                    for (let film of films) { 
                        if (film.title === e.target.innerText ) {
                            posters.src = film.poster
                            titleName.innerText = film.title
                            runtime.innerHTML = film.runtime
                            description.innerHTML = film.description
                            showtime.textContent = film.showtime
                        }
                    }
                
            })
            })
               
            
                        
})
