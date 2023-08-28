import ProductoApi from "../api/producto_Api.js";
import UtilidadesCj from "../utils/utilitarios.js";

class ProductoControlador {
  constructor() {
    this.productoApi = new ProductoApi();
  }

  getProductos = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await this.productoApi.getProductos(id);
      return res.send(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  getProductosAll = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.productoApi.getProductosAll(body.valor);
      return res.send(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteProducto = async (req, res) => {
    const { body } = req;
    try {
      let eliminados = await this.productoApi.deleteProducto(body.id);
      return res.send({ eliminados });
    } catch (error) {
      throw new Error(error);
    }
  };

  updateProducto = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.productoApi.updateProducto(body);
      return res.send(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  saveProducto = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.productoApi.getIdProducto(UtilidadesCj.getAnoMes());
      const nuevoId = UtilidadesCj.generarID(8, result.id_producto);
      const registro = { id_producto: nuevoId, ...body };
      const dato = await this.productoApi.saveProducto(registro);
      return res.send(dato);
    } catch (error) {
      throw new Error(error);
    }
  };
}
export default ProductoControlador;
