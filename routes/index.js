const routes = require('express').Router();
const healthcheck = require('../controller/healthcheck');
const {postPokemon} = require("../controller/pokemonController")

routes.get("/healthcheck", healthcheck)

routes.post(
    "/save",
    postPokemon
)

const appRoutes = (api) => {
    api.use("/", routes);
  
    // Middleware Not Found
    api.use((req, res, next) => res.status(404).send("Resources Not Found"));
  };
  
  module.exports = appRoutes;