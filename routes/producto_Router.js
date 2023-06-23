import express from "express";
const router = express.Router();
import ProductoControlador from "../controller/producto_Controller.js";

class ProductoRouter {
  constructor() {
    this.productoControlador = new ProductoControlador();
  }

  start() {
    router.post("/all/", this.productoControlador.getProductosAll);
    router.get("/:id", this.productoControlador.getProductos);
    router.post("/", this.productoControlador.saveProducto);
    router.put("/", this.productoControlador.updateProducto);
    router.delete("/", this.productoControlador.deleteProducto);
    return router;
  }
}

export default ProductoRouter;
