'use strict';

const { SavePokemon } = require("../model/savePokemon")

class Pokemon {
    constructor(data) {

        this.pokemonID = data.ID
        this.pokemonName = data.Name
        this.pokemonTypes = data.Types
        this.pokemonCanEvolve = data.HasEvolution


    }
}

exports.SavePokemon = function (pokemonData) {

    let pokemon = undefined;

    try {
        pokemon = new Pokemon(pokemonData)

        console.log('this is the pokemon', pokemon)

        const msg = SavePokemon(pokemon)

        return msg


    } catch (e) {
        logger.error("Error -> " + e)
        throw e;
    }


}