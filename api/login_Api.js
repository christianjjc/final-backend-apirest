import config from "../config.js";
import LoginFactoryDAO from "../model/DAOs/login_Factory.js";
import Login from "../model/models/login_Model.js";

class LoginApi {
  constructor() {
    this.LoginDAO = LoginFactoryDAO.get(config.TIPO_PERSISTENCIA);
  }

  async getUsuarios(obj) {
    const pasa = LoginApi.asegurarLoginUsuarioValida(obj, true);
    if (pasa == true) {
      return await this.LoginDAO.getUsuarios(obj);
    } else {
      return pasa;
    }
  }

  static asegurarLoginUsuarioValida(usuario, requerido) {
    try {
      Login.validar(usuario, requerido);
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

export default LoginApi;
