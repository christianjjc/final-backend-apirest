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

  async getRolesAll(valor) {
    return await this.rolesDAO.getRolesAll(valor);
  }

  async saveRol(obj) {
    const pasa = RolApi.asegurarRolValida(obj, true);
    if (pasa == true) {
      return {
        error: false,
        ...(await this.rolesDAO.saveRol(obj)),
      };
    } else {
      return pasa;
    }
  }

  async updateRol(obj) {
    const pasa = RolApi.asegurarRolValida(obj, false);
    if (pasa == true) {
      return {
        error: false,
        ...(await this.rolesDAO.updateRol(obj)),
      };
    } else {
      return pasa;
    }
  }

  async deleteRol(id_rol) {
    try {
      return await this.rolesDAO.deleteRol(id_rol);
    } catch (error) {
      return { errorApi: true, error: error };
    }
  }

  static asegurarRolValida(rol, requerido) {
    try {
      Rol.validar(rol, requerido);
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

export default RolApi;
