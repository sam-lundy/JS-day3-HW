document.addEventListener("DOMContentLoaded", function() {

    const formEl = document.querySelector('.pokemon-form');
    const pokemonCardEl = document.querySelector('.pokemon-card');
    const pokeNameEl = document.querySelector('.pokemon-name');
    const pokeImageEl = document.querySelector('.pokemon-image');
    const pokeAbilitiesListEl = document.querySelector('.pokemon-abilities');
    const pokeHpEl = document.querySelector('.pokemon-hp');
    const pokeAtkEl = document.querySelector('.pokemon-atk');
    const pokeDefEl = document.querySelector('.pokemon-def');
    const errorMsgEl = document.getElementById('error-message');

    pokemonCardEl.classList.add('hidden'); //hides the card until searching

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('e');
        const pokeName = formEl[0].value;
        pokeData(pokeName);
    })


    const pokeData = async (name) => {
        try {
            pokemonCardEl.classList.add('hidden');   // hides the card until a successful search
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

            const data = await response.json();
            console.log(data);

            pokemonCardEl.classList.remove('hidden');   //unhides the card
            
            document.querySelector('.pokemon-card');
            pokeNameEl.textContent = `${data.name}`;
            pokeImageEl.src = data.sprites.front_default;

            errorMsgEl.textContent = ''; // clears previous fetch error
            pokeAbilitiesListEl.innerHTML = ''; //if you don't clear the previous abilities the new pokemon will stack

            //This function does a forEach on each ability and creates a new list item
            data.abilities.forEach(ability => {
                const li = document.createElement('li');
                li.textContent = ability.ability.name;
                pokeAbilitiesListEl.appendChild(li); //appends the child li to the ul
            });

            pokeHpEl.textContent = data.stats[0].base_stat;
            pokeAtkEl.textContent = data.stats[1].base_stat;
            pokeDefEl.textContent = data.stats[2].base_stat;
            
        }
        catch {
            console.log('There was an error retrieving the pokemon');
            errorMsgEl.textContent = 'There was an error retrieving the Pokémon.';
            //hides the card on error
            pokemonCardEl.classList.add('hidden');
        }
    }
})