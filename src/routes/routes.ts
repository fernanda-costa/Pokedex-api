import express, { Express } from 'express';
import pokemonRoutes from "./pokemon-routes";
import usuarioRoutes from "./usuario-routes";

const appRoutes = (app: Express) => {
  app.use(
    express.json(),
    pokemonRoutes,
    usuarioRoutes,
  )
}

export default appRoutes