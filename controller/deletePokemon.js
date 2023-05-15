const {DeletePokemon} = require("../service/deletePokemon")

exports.deletePokemon = async function(req, res) {

    try {

        const msg = await DeletePokemon(req.params.id)

        return res.send(msg)

    }catch(e){

        return res.send(e)

    }


}