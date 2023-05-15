const {GetPokemons} = require("../service/getPokemons")

exports.getPokemons = async function(req, res) {

    const pokemons = await GetPokemons()

    console.log(pokemons)

    return res.send(pokemons)
    

}