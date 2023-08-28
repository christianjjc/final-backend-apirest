import config from "../config.js";
import ProductosFactoryDAO from "../model/DAOs/producto_Factory.js";
import Producto from "../model/models/producto_Model.js";

class ProductoApi {
  constructor() {
    this.ProductosDAO = ProductosFactoryDAO.get(config.TIPO_PERSISTENCIA);
  }

  async getIdProducto(anomes) {
    return await this.ProductosDAO.getIdProducto(anomes);
  }

  async saveProducto(obj) {
    const pasa = ProductoApi.asegurarProductoValida(obj, true);
    if (pasa == true) {
      return {
        error: false,
        ...(await this.ProductosDAO.saveProducto(obj)),
      };
    } else {
      return pasa;
    }
  }

  async updateProducto(obj) {
    const pasa = ProductoApi.asegurarProductoValida(obj, false);
    if (pasa == true) {
      return {
        error: false,
        ...(await this.ProductosDAO.updateProducto(obj)),
      };
    } else {
      return pasa;
    }
  }

  async getProductos(id) {
    return await this.ProductosDAO.getProductos(id);
  }

  async getProductosAll(valor) {
    return await this.ProductosDAO.getProductosAll(valor);
  }

  async deleteProducto(id) {
    try {
      return await this.ProductosDAO.deleteProducto(id);
    } catch (error) {
      return { errorApi: true, error: error };
    }
  }

  static asegurarProductoValida(producto, requerido) {
    try {
      Producto.validar(producto, requerido);
      return true;
    } catch (error) {
      return {
        error: true,
        mensaje: "El registro posee un formato invalido y/o faltan datos: ",
        detalle_error: error.details[0].message,
      };
    }
  }
}

export default ProductoApi;
