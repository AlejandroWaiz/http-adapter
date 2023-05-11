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

    try {

        const msg = SavePokemon(pokemonData)

        return msg


    } catch (e) {
        logger.error("Error -> " + e)
        throw e;
    }


}