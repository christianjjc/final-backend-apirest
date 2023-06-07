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

  async getUsuarios(id_usuario) {
    return await this.usuariosDAO.getUsuarios(id_usuario);
  }

  async saveUsuario(obj) {
    const pasa = UsuarioApi.asegurarUsuarioValida(obj, true);
    if (pasa == true) {
      return await this.usuariosDAO.saveUsuario(obj);
    } else {
      return pasa;
    }
  }

  async updateUsuario(obj) {
    const pasa = UsuarioApi.asegurarUsuarioValida(obj, false);
    if (pasa == true) {
      return await this.usuariosDAO.updateUsuario(obj);
    } else {
      return pasa;
    }
  }

  async deleteUsuario(id_usuario) {
    return await this.usuariosDAO.deleteUsuario(id_usuario);
  }

  static asegurarUsuarioValida(usuario, requerido) {
    try {
      Usuario.validar(usuario, requerido);
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

export default UsuarioApi;