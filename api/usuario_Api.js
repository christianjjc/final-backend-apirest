import config from "../config.js";
import UsuarioFactoryDAO from "../model/DAOs/usuario_Factory.js";
import Usuario from "../model/models/usuario_Model.js";

class UsuarioApi {
  constructor() {
    this.usuariosDAO = UsuarioFactoryDAO.get(config.TIPO_PERSISTENCIA);
  }

  async getIdUsuario(anomes) {
    return await this.usuariosDAO.getIdUsuario(anomes);
  }

  async saveUsuario(obj) {
    const pasa = UsuarioApi.asegurarUsuarioValida(obj, true);
    if (pasa == true) {
      return {
        error: false,
        ...(await this.usuariosDAO.saveUsuario(obj)),
      };
    } else {
      return pasa;
    }
  }

  async updateUsuario(obj) {
    const pasa = UsuarioApi.asegurarUsuarioValida(obj, false);
    if (pasa == true) {
      return {
        error: false,
        ...(await this.usuariosDAO.updateUsuario(obj)),
      };
    } else {
      return pasa;
    }
  }

  async getUsuarios(id) {
    return await this.usuariosDAO.getUsuarios(id);
  }

  async getUsuariosAll(valor) {
    return await this.usuariosDAO.getUsuariosAll(valor);
  }

  async deleteUsuario(id) {
    try {
      return await this.usuariosDAO.deleteUsuario(id);
    } catch (error) {
      return { errorApi: true, error: error };
    }
  }

  static asegurarUsuarioValida(usuario, requerido) {
    try {
      Usuario.validar(usuario, requerido);
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

export default UsuarioApi;
