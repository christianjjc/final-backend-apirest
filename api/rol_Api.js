import config from "../config.js";
import RolFactoryDAO from "../model/DAOs/rol_Factory.js";
import Rol from "../model/models/rol_Model.js";

class RolApi {
  constructor() {
    this.rolesDAO = RolFactoryDAO.get(config.TIPO_PERSISTENCIA);
  }

  async getIdRol(anomes) {
    return await this.rolesDAO.getIdRol(anomes);
  }

  async getRoles(id_rol) {
    return await this.rolesDAO.getRoles(id_rol);
  }

  async saveRol(obj) {
    const pasa = RolApi.asegurarRolValida(obj, true);
    if (pasa == true) {
      return await this.rolesDAO.saveRol(obj);
    } else {
      return pasa;
    }
  }

  async updateRol(obj) {
    const pasa = RolApi.asegurarRolValida(obj, false);
    if (pasa == true) {
      return await this.rolesDAO.updateRol(obj);
    } else {
      return pasa;
    }
  }

  async deleteRol(id_rol) {
    return await this.rolesDAO.deleteRol(id_rol);
  }

  static asegurarRolValida(rol, requerido) {
    try {
      Rol.validar(rol, requerido);
      return true;
    } catch (error) {
      /*      throw new Error(
            "El registro posee un formato invalido o faltan datos: " +
              error.details[0].message); */
      return {
        "ERROR!!!": "El registro posee un formato invalido o faltan datos: ",
        detalle: error.details[0].message,
      };
    }
  }
}

export default RolApi;
