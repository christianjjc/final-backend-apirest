import Joi from "joi";

class Usuario {
  constructor(id_usuario, nombre_usuario, pass_usuario, id_rol) {
    this.id_usuario = id_usuario;
    this.nombre_usuario = nombre_usuario;
    this.pass_usuario = pass_usuario;
    this.id_rol = id_rol;
  }

  equals(otroUsuario) {
    if (!(otroUsuario instanceof Usuario)) {
      return false;
    }
    if (this.id_usuario != otroUsuario.id_usuario) {
      return false;
    }
    if (this.nombre_usuario != otroUsuario.nombre_usuario) {
      return false;
    }
    if (this.pass_usuario != otroUsuario.pass_usuario) {
      return false;
    }
    if (this.id_rol != otroUsuario.id_rol) {
      return false;
    }
  }

  static validar(usuario, requerido) {
    const UsuarioSchema = Joi.object({
      id_usuario: requerido ? Joi.string().required() : Joi.string(),
      nombre_usuario: requerido ? Joi.string().required() : Joi.string(),
      pass_usuario: requerido ? Joi.string().required() : Joi.string(),
      id_rol: requerido ? Joi.string().required() : Joi.string(),
    });
    const { error } = UsuarioSchema.validate(usuario);
    if (error) {
      throw error;
    }
  }
}

export default Usuario;
