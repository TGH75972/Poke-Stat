document.getElementById('search-button').addEventListener('click', fetchPokemonStats);

function fetchPokemonStats() {
    const pokemonName = document.getElementById('pokemon-name').value.trim().toLowerCase();
    const pokemonStatsDiv = document.getElementById('pokemon-stats');

    if (!pokemonName) {
        pokemonStatsDiv.innerHTML = '<p>Please enter a Pokémon name.</p>';
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            displayPokemonStats(data);
        })
        .catch(error => {
            pokemonStatsDiv.innerHTML = `<p>${error.message}</p>`;
        });
}

function displayPokemonStats(pokemon) {
    const pokemonStatsDiv = document.getElementById('pokemon-stats');
    pokemonStatsDiv.innerHTML = `
        <h2>${capitalizeFirstLetter(pokemon.name)}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <div class="stat"><strong>Height:</strong> ${pokemon.height}</div>
        <div class="stat"><strong>Weight:</strong> ${pokemon.weight}</div>
        <div class="stat"><strong>Base Experience:</strong> ${pokemon.base_experience}</div>
        <div class="stat"><strong>Types:</strong> ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</div>
        <div class="stat"><strong>Abilities:</strong> ${pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</div>
        <div class="stat"><strong>Stats:</strong></div>
        <ul>
            ${pokemon.stats.map(statInfo => `<li>${statInfo.stat.name}: ${statInfo.base_stat}</li>`).join('')}
        </ul>
    `;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    