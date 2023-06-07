import express from "express";
const router = express.Router();
import RolControlador from "../controller/rol_Controller.js";

class RolRouter {
  constructor() {
    this.rolControlador = new RolControlador();
  }

  start() {
    router.get("/", this.rolControlador.getRoles);
    router.post("/", this.rolControlador.saveRol);
    router.put("/", this.rolControlador.updateRol);
    router.delete("/", this.rolControlador.deleteRol);
    return router;
  }
}

export default RolRouter;
