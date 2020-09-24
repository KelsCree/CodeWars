fetch("http://localhost:3000/games")
    .then(response => response.json()) //parsing
    .then(games => games.map(game => {
        let h1 = document.createElement('h1')
        let image = document.createElement('img')

        h1.textContent = game.name
        image.src = game.image_url

        document.body.append(h1, image)

    }))

