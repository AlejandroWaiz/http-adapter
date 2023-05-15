const {SavePokemons} = require("../service/pokemonService")

exports.postPokemon = async function(req, res) {

    console.log(req.body)


    const msg = await SavePokemons(req.body)
    console.log(msg)

    return res.send(msg);

}