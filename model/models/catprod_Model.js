import Joi from "joi";

class Catprod {
  constructor(id_categoria_prod, nombre_categoria_prod) {
    this.id_categoria_prod = id_categoria_prod;
    this.nombre_categoria_prod = nombre_categoria_prod;
  }

  equals(otroCategoria_Prod) {
    if (!(otroCategoria_Prod instanceof Catprod)) {
      return false;
    }
    if (this.id_categoria_prod != otroCategoria_Prod.id_categoria_prod) {
      return false;
    }
    if (this.nombre_categoria_prod != otroCategoria_Prod.nombre_categoria_prod) {
      return false;
    }
  }

  static validar(catprod, requerido) {
    const CatprodSchema = Joi.object({
      id_categoria_prod: requerido ? Joi.string().required() : Joi.string(),
      nombre_categoria_prod: requerido ? Joi.string().required() : Joi.string(),
    });
    const { error } = CatprodSchema.validate(catprod);
    if (error) {
      throw error;
    }
  }
}

export default Catprod;
