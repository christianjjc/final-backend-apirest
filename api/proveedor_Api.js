import config from "../config.js";
import ProveedoresFactoryDAO from "../model/DAOs/proveedor_Factory.js";
import Proveedor from "../model/models/proveedor_Model.js";

class ProveedorApi {
    constructor() {
        this.proveedoresDAO = ProveedoresFactoryDAO.get(config.TIPO_PERSISTENCIA);
    };

    async getProveedores(id){
        return await this.proveedoresDAO.getProveedores(id);
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


};

export default ProveedorApi;