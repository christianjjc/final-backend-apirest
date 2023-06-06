import express from "express";
const router = express.Router();
import ProveedorControlador from "../controller/proveedor_Controller.js";

class ProveedorRouter {
  constructor() {
    this.proveedorControlador = new ProveedorControlador();
  }

  start() {
    router.get("/", this.proveedorControlador.getProveedores);
    router.put("/",this.proveedorControlador.updateProveedor);
    router.delete("/", this.proveedorControlador.deleteProveedor);
    return router;
  }
}

export default ProveedorRouter;
