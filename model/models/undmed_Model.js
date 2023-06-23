import Joi from "joi";

class Undmed {
  constructor(id_undmed, nombre_undmed, abr) {
    this.id_undmed = id_undmed;
    this.nombre_undmed = nombre_undmed;
    this.abr = abr;
  }

  equals(otroUndmed) {
    if (!(otroUndmed instanceof Undmed)) {
      return false;
    }
    if (this.id_undmed != otroUndmed.id_undmed) {
      return false;
    }
    if (this.nombre_undmed != otroUndmed.nombre_undmed) {
      return false;
    }
    if (this.abr != otroUndmed.abr) {
      return false;
    }
  }

  static validar(undmed, requerido) {
    const UndmedSchema = Joi.object({
      id_undmed: requerido ? Joi.string().required() : Joi.string(),
      nombre_undmed: requerido ? Joi.string().required() : Joi.string(),
      abr: requerido ? Joi.string().required() : Joi.string(),
    });
    const { error } = UndmedSchema.validate(undmed);
    if (error) {
      throw error;
    }
  }
}

export default Undmed;
