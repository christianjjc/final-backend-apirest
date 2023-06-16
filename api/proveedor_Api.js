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
    const pasa = ProveedorApi.asegurarProveedorValida(obj, true);
    if (pasa == true) {
      return {
        error: false,
        ...(await this.proveedoresDAO.saveProveedor(obj)),
      };
    } else {
      return pasa;
    }
  }

  async updateProveedor(obj) {
    const pasa = ProveedorApi.asegurarProveedorValida(obj, false);
    if (pasa == true) {
      return await this.proveedoresDAO.updateProveedor(obj);
    } else {
      return pasa;
    }
  }

  async getProveedores(id_proveedor) {
    return await this.proveedoresDAO.getProveedores(id_proveedor);
  }

  async deleteProveedor(id_proveedor) {
    return await this.proveedoresDAO.deleteProveedor(id_proveedor);
  }

  static asegurarProveedorValida(proveedor, requerido) {
    try {
      Proveedor.validar(proveedor, requerido);
      return true;
    } catch (error) {
      /*      throw new Error(
        "El registro posee un formato invalido o faltan datos: " +
          error.details[0].message); */

      return {
        error: true,
        mensaje: "El registro posee un formato invalido y/o faltan datos: ",
        detalle_error: error.details[0].message,
      };
    }
  }
}

export default ProveedorApi;
