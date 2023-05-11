const {GetDBConn} = require("./utils")

const db = GetDBConn()

 ;

exports.SavePokemon = async function (pokemon) {

    try {

        console.log(pokemon)

        db.collection("pokemons").doc(pokemon.pokemonID).set({
           ...pokemon
        })

        console.log("saved succesfully")

        return "saved succesfully"

    } catch (error) {

        console.log(error)

        return "¡ERROR!"

    }

}