const { GetDBConn } = require("./utils")

const db = GetDBConn()

    ;

exports.SavePokemon = async function (pokemons) {

    try {

        pokemons.forEach(function(pokemon)  {

            console.log(pokemon)

            db.collection("pokemons").doc(pokemon.ID).set({
                ...pokemon
            })

        });

        return "saved succesfully"

    } catch (error) {

        console.log(error)

        return "¡ERROR!"

    }

}