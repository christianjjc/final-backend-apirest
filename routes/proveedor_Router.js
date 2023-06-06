import express from "express";
const router = express.Router();
import ProveedorControlador from "../controller/proveedor_Controller.js";

class ProveedorRouter {
  constructor() {
    this.proveedorControlador = new ProveedorControlador();
  }

  start() {
    router.get("/:id?", this.proveedorControlador.getProveedores);
    // router.put("/:id?",this.proveedorControlador.getProveedores)
    // router.delete("/:id?",this.proveedorControlador.getProveedores)
    return router;
  }
}

export default ProveedorRouter;
