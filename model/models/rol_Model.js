import Joi from "joi";

class Rol {
  constructor(id_rol, nombre_rol, desc_rol) {
    this.id_rol = id_rol;
    this.nombre_rol = nombre_rol;
    this.desc_rol = desc_rol;
    this.level = level;
  }

  equals(otroRol) {
    if (!(otroRol instanceof Rol)) {
      return false;
    }
    if (this.id_rol != otroRol.id_rol) {
      return false;
    }
    if (this.nombre_rol != otroRol.nombre_rol) {
      return false;
    }
    if (this.desc_rol != otroRol.desc_rol) {
      return false;
    }
    if (this.level != otroRol.level) {
      return false;
    }
  }

  static validar(rol, requerido) {
    const RolSchema = Joi.object({
      id_rol: requerido ? Joi.string().required() : Joi.string(),
      nombre_rol: requerido ? Joi.string().required() : Joi.string(),
      desc_rol: requerido ? Joi.string().required() : Joi.string(),
      level: requerido ? Joi.number().required() : Joi.number(),
    });
    const { error } = RolSchema.validate(rol);
    if (error) {
      throw error;
    }
  }
}

export default Rol;
