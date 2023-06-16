import UsuarioApi from "../api/usuario_Api.js";
import UtilidadesCj from "../utils/utilitarios.js";

class UsuarioControlador {
  constructor() {
    this.usuarioApi = new UsuarioApi();
  }

  getUsuarios = async (req, res) => {
    const { id } = req.params;
    try {
      let usuarios = await this.usuarioApi.getUsuarios(id);
      return res.send(usuarios);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteUsuario = async (req, res) => {
    const { body } = req;
    try {
      let usuarios = await this.usuarioApi.deleteUsuario(body.id_usuario);
      return res.send("Usuario Eliminado: " + usuarios);
    } catch (error) {
      throw new Error(error);
    }
  };

  updateUsuario = async (req, res) => {
    const { body } = req;
    try {
      let usuario = await this.usuarioApi.updateUsuario(body);
      return res.send({ Resultado_Actualización: usuario });
    } catch (error) {
      throw new Error(error);
    }
  };

  saveUsuario = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.usuarioApi.getIdUsuario(UtilidadesCj.getAnoMes());
      const nuevoId = UtilidadesCj.generarID(8, result.id_usuario);
      const registro = { id_usuario: nuevoId, ...body };
      let usuario = await this.usuarioApi.saveUsuario(registro);
      return res.send({ Resultado_Registro: usuario });
    } catch (error) {
      throw new Error(error);
    }
  };
}
export default UsuarioControlador;
