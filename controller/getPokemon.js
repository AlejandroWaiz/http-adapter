const { GetPokemon } = require("../service/getPokemon")

exports.getPokemon = async function (req, res) {

    try {

        const pokemon = await GetPokemon(req.params.id)

        return res.send(pokemon)

    } catch (e) {

        console.log("[Controller | GetPokemon]: ", e)

    }



}