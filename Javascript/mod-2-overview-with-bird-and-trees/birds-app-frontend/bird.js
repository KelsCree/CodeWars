const queryParams = new URLSearchParams(window.location.search)
const birdId = queryParams.get('bird_id')

fetch(`http://localhost:7000/birds/${birdId}`)
    .then(response => response.json())
    .then(bird => {
        
    }
        )