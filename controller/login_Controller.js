import LoginApi from "../api/login_Api.js";

class LoginControlador {
  constructor() {
    this.loginApi = new LoginApi();
  }

  getUsuarios = async (req, res) => {
    const { body } = req;
    try {
      let usuarios = await this.loginApi.getUsuarios(body);
      return res.send(usuarios);
    } catch (error) {
      throw new Error(error);
    }
  };
}
export default LoginControlador;
