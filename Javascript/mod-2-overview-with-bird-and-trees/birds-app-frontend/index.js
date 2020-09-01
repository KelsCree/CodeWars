fetch('http://localhost:7000/birds')
    .then(response => response.json())
    .then(birds => {

    const birdsSection = document.querySelector('#birds-section')
        birds.forEach(bird => showBird(bird, birdsSection))
           
    })

    function showBird(bird) {
        const birdCard = document.createElement('div')
        birdCard.classList.add('bird-card')

        // const birdName
        const birdName = document.createElement('h2')
        birdName.innerHTML = `<a href="bird.html?bird_id=${bird.id}">${bird.name}</a>`
        // const birdSpecies
        const birdSpecies = document.createElement('p')
        birdSpecies.textContent = bird.species

        birdCard.append(birdName, birdSpecies)
        birdsSection.append(birdCard)
    }