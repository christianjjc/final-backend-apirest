import express from "express";
const router = express.Router();
import UndmedControlador from "../controller/undmed_Controller.js";

class UndmedRouter {
  constructor() {
    this.undmedControlador = new UndmedControlador();
  }

  start() {
    router.post("/all/", this.undmedControlador.getUndmedAll);
    router.get("/:id", this.undmedControlador.getUndmed);
    router.post("/", this.undmedControlador.saveUndmed);
    router.put("/", this.undmedControlador.updateUndmed);
    router.delete("/", this.undmedControlador.deleteUndmed);
    return router;
  }
}

export default UndmedRouter;
