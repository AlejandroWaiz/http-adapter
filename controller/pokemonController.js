const {SavePokemon} = require("../service/pokemonService")

exports.postPokemon = async function(req, res) {

    console.log(req.body)


    const msg = await SavePokemon(req.body)
    console.log(msg)

    return res.send(msg);

}