import express from "express";
const router = express.Router();
import UsuarioControlador from "../controller/usuario_Controller.js";

class UsuarioRouter {
  constructor() {
    this.usuarioControlador = new UsuarioControlador();
  }

  start() {
    router.get("/", this.usuarioControlador.getUsuarios);
    router.post("/",this.usuarioControlador.saveUsuario);
    router.put("/",this.usuarioControlador.updateUsuario);
    router.delete("/", this.usuarioControlador.deleteUsuario);
    return router;
  }
}

export default UsuarioRouter;
