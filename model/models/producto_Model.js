import Joi from "joi";

class Producto {
  constructor(id_producto, nombre_producto, id_categoria_prod, id_undmed) {
    this.id_producto = id_producto;
    this.nombre_producto = nombre_producto;
    this.id_categoria_prod = id_categoria_prod;
    this.id_undmed = id_undmed;
  }

  equals(otroProducto) {
    if (!(otroProducto instanceof Producto)) {
      return false;
    }
    if (this.id_producto != otroProducto.id_producto) {
      return false;
    }
    if (this.nombre_producto != otroProducto.nombre_producto) {
      return false;
    }
    if (this.id_categoria_prod != otroProducto.id_categoria_prod) {
      return false;
    }
    if (this.id_undmed != otroProducto.id_undmed) {
      return false;
    }
  }

  static validar(producto, requerido) {
    const ProductoSchema = Joi.object({
      id_producto: requerido ? Joi.string().required() : Joi.string(),
      nombre_producto: requerido ? Joi.string().required() : Joi.string(),
      id_categoria_prod: requerido ? Joi.string().required() : Joi.string(),
      id_undmed: requerido ? Joi.string().required() : Joi.string(),
    });
    const { error } = ProductoSchema.validate(producto);
    if (error) {
      throw error;
    }
  }
}

export default Producto;
