import Joi from "joi";

class Login {
  constructor(nombre_usuario, pass_usuario) {
    this.nombre_usuario = nombre_usuario;
    this.pass_usuario = pass_usuario;
  }

  equals(otroLogin) {
    if (this.nombre_usuario != otroLogin.nombre_usuario) {
      return false;
    }
    if (this.pass_usuario != otroLogin.pass_usuario) {
      return false;
    }
  }

  static validar(usuario, requerido) {
    const LoginSchema = Joi.object({
      nombre_usuario: requerido ? Joi.string().required() : Joi.string(),
      pass_usuario: requerido ? Joi.string().required() : Joi.string(),
    });
    const { error } = LoginSchema.validate(usuario);
    if (error) {
      throw error;
    }
  }
}

export default Login;
