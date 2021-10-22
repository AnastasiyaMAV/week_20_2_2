const massPokemon = ["pikachu", "slowpoke",  "squirtle", "charmander", "venonat", "vulpix", "clefairy", "raichu", "jigglypuff"]

document.addEventListener("DOMContentLoaded", function (event) {
        for(let i = 0; i < massPokemon.length; i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${massPokemon[i]}`)
                .then(response => response.json())
                .then(data => {
                        let secondDiv = document.getElementById('secondDiv');

                        let line1 = document.createElement('p');
                        line1.textContent = data.name.toUpperCase();
                        secondDiv.appendChild(line1);

                        let img = document.createElement('img');
                        img.className = "imgStyle";
                        img.src = data.sprites.front_default;          
                        secondDiv.appendChild(img);
                })
                .catch(err => console.log(err));
        }
});