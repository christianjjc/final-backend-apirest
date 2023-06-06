import config from "../config.js";
import ProveedoresFactoryDAO from "../model/DAOs/proveedor_Factory.js";
import Proveedor from "../model/models/proveedor_Model.js";

class ProveedorApi {
  constructor() {
    this.proveedoresDAO = ProveedoresFactoryDAO.get(config.TIPO_PERSISTENCIA);
  }

  async getIdProveedor(anomes) {
    return await this.proveedoresDAO.getIdProveedor(anomes);
  }

  async saveProveedor(obj) {
    return await this.proveedoresDAO.saveProveedor(obj);
  }
  

  async getProveedores(id_proveedor) {
    return await this.proveedoresDAO.getProveedores(id_proveedor);
  }

  async deleteProveedor(id_proveedor) {
    return await this.proveedoresDAO.deleteProveedor(id_proveedor);
  }

  async updateProveedor(obj) {
    return await this.proveedoresDAO.updateProveedor(obj);
  }

  

  static asegurarProveedorValida(proveedor, requerido) {
    try {
      Proveedor.validar(proveedor, requerido);
    } catch (error) {
      throw new Error(
        "El proveedor posee un formato json invalido o faltan datos: " +
          error.details[0].message
      );
    }
  }
}

export default ProveedorApi;
