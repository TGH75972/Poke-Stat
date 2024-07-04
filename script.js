document.getElementById('search-button').addEventListener('click', fetchPokemonStats);

function fetchPokemonStats() {
    const pokemonName = document.getElementById('pokemon-name').value.trim().toLowerCase();
    const pokemonStatsDiv = document.getElementById('pokemon-stats');

    if (!pokemonName) {
        pokemonStatsDiv.innerHTML = '<p>Please enter a Pokémon name.</p>';
        pokemonStatsDiv.classList.remove('visible');
        pokemonStatsDiv.classList.add('hidden');
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
            pokemonStatsDiv.classList.add('visible');
            pokemonStatsDiv.classList.remove('hidden');
        });
}

function displayPokemonStats(pokemon) {
    const pokemonStatsDiv = document.getElementById('pokemon-stats');
    
    const heightInCm = (pokemon.height * 10).toFixed(2);
    const weightInLbs = (pokemon.weight * 0.220462).toFixed(2);

    pokemonStatsDiv.innerHTML = `
        <h2>${capitalizeFirstLetter(pokemon.name)}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <div class="stat"><strong>Height:</strong> ${heightInCm} cm</div>
        <div class="stat"><strong>Weight:</strong> ${weightInLbs} lbs</div>
        <div class="stat"><strong>Base Experience:</strong> ${pokemon.base_experience}</div>
        <div class="stat"><strong>Types:</strong> ${pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join(', ')}</div>
        <div class="stat"><strong>Abilities:</strong> ${pokemon.abilities.map(abilityInfo => capitalizeFirstLetter(abilityInfo.ability.name)).join(', ')}</div>
        <div class="stat"><strong>Stats:</strong></div>
        <ul>
            ${pokemon.stats.map(statInfo => `<li>${capitalizeFirstLetter(statInfo.stat.name)}: ${statInfo.base_stat}</li>`).join('')}
        </ul>
    `;

    pokemonStatsDiv.classList.add('visible');
    pokemonStatsDiv.classList.remove('hidden');
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
document.getElementById('search-button').addEventListener('click', fetchPokemonStats);

function fetchPokemonStats() {
    const pokemonName = document.getElementById('pokemon-name').value.trim().toLowerCase();
    const pokemonStatsDiv = document.getElementById('pokemon-stats');

    if (!pokemonName) {
        pokemonStatsDiv.innerHTML = '<p>Please enter a Pokémon name.</p>';
        pokemonStatsDiv.classList.remove('visible');
        pokemonStatsDiv.classList.add('hidden');
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
            pokemonStatsDiv.classList.add('visible');
            pokemonStatsDiv.classList.remove('hidden');
        });
}

function displayPokemonStats(pokemon) {
    const pokemonStatsDiv = document.getElementById('pokemon-stats');
    
    const heightInCm = (pokemon.height * 10).toFixed(2);
    const weightInLbs = (pokemon.weight * 0.220462).toFixed(2);

    pokemonStatsDiv.innerHTML = `
        <h2>${capitalizeFirstLetter(pokemon.name)}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <div class="stat"><strong>Height:</strong> ${heightInCm} cm</div>
        <div class="stat"><strong>Weight:</strong> ${weightInLbs} lbs</div>
        <div class="stat"><strong>Base Experience:</strong> ${pokemon.base_experience}</div>
        <div class="stat"><strong>Types:</strong> ${pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join(', ')}</div>
        <div class="stat"><strong>Abilities:</strong> ${pokemon.abilities.map(abilityInfo => capitalizeFirstLetter(abilityInfo.ability.name)).join(', ')}</div>
        <div class="stat"><strong>Stats:</strong></div>
        <ul>
            ${pokemon.stats.map(statInfo => `<li>${capitalizeFirstLetter(statInfo.stat.name)}: ${statInfo.base_stat}</li>`).join('')}
        </ul>
    `;

    pokemonStatsDiv.classList.add('visible');
    pokemonStatsDiv.classList.remove('hidden');
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
