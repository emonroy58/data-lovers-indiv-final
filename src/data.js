
window.dataPokemon = {
    
    filterTypePokemons: (dataPokemon, selectType) => {
          const selectPok = selectType.trim();
          const pokemonType = dataPokemon.filter(function(pokemon){
            return pokemon.type[0]=== selectPok;
          })
console.log (pokemonType);
return pokemonType;
  }
}

