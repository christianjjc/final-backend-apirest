import express from "express";
const router = express.Router();
import CatprodControlador from "../controller/catprod_Controller.js";

class CatprodRouter {
  constructor() {
    this.catprodControlador = new CatprodControlador();
  }

  start() {
    router.post("/all/", this.catprodControlador.getCatprodAll);
    router.get("/:id", this.catprodControlador.getCatprod);
    router.post("/", this.catprodControlador.saveCatprod);
    router.put("/", this.catprodControlador.updateCatprod);
    router.delete("/", this.catprodControlador.deleteCatprod);
    return router;
  }
}

export default CatprodRouter;
