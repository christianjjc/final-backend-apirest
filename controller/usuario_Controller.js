import UsuarioApi from "../api/usuario_Api.js";
import UtilidadesCj from "../utils/utilitarios.js";

class UsuarioControlador {
  constructor() {
    this.usuarioApi = new UsuarioApi();
  }

  getUsuarios = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await this.usuarioApi.getUsuarios(id);
      return res.send(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  getUsuariosAll = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.usuarioApi.getUsuariosAll(body.valor);
      return res.send(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteUsuario = async (req, res) => {
    const { body } = req;
    try {
      const eliminados = await this.usuarioApi.deleteUsuario(body.id);
      return res.send({ eliminados });
    } catch (error) {
      throw new Error(error);
    }
  };

  updateUsuario = async (req, res) => {
    const { body } = req;
    try {
      const result = await this.usuarioApi.updateUsuario(body);
      return res.send(result);
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
      const dato = await this.usuarioApi.saveUsuario(registro);
      return res.send(dato);
    } catch (error) {
      throw new Error(error);
    }
  };
}
export default UsuarioControlador;
