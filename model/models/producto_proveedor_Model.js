import Joi from "joi";

class Producto_Proveedor {
  constructor(id_producto_proveedor, id_producto, id_proveedor) {
    this.id_producto_proveedor = id_producto_proveedor;
    this.id_producto = id_producto;
    this.id_proveedor = id_proveedor;
  }

  equals(otroProducto_Proveedor) {
    if (!(otroProducto_Proveedor instanceof Producto_Proveedor)) {
      return false;
    }
    if (this.id_producto_proveedor != otroProducto_Proveedor.id_producto_proveedor) {
      return false;
    }
    if (this.id_producto != otroProducto_Proveedor.id_producto) {
      return false;
    }
    if (this.id_proveedor != otroProducto_Proveedor.id_proveedor) {
      return false;
    }
  }

  static validar(producto_proveedor, requerido) {
    const Producto_ProveedorSchema = Joi.object({
      id_producto_proveedor: requerido ? Joi.string().required() : Joi.string(),
      id_producto: requerido ? Joi.string().required() : Joi.string(),
      id_proveedor: requerido ? Joi.string().required() : Joi.string(),
    });
    const { error } = Producto_ProveedorSchema.validate(producto_proveedor);
    if (error) {
      throw error;
    }
  }
}

export default Producto_Proveedor;
