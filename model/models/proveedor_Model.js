import Joi from "joi";

class Proveedor {
  constructor(id_proveedor, ruc, razon_social, direccion, telefono, que_vende) {
    this.id_proveedor = id_proveedor;
    this.ruc = ruc;
    this.razon_social = razon_social;
    this.direccion = direccion;
    this.telefono = telefono;
    this.que_vende = que_vende;
  }

  equals(otroProveedor) {
    if (!(otroProveedor instanceof Proveedor)) {
      return false;
    }
    if (this.id_proveedor != otroProveedor.id_proveedor) {
      return false;
    }
    if (this.ruc != otroProveedor.ruc) {
      return false;
    }
    if (this.razon_social != otroProveedor.razon_social) {
      return false;
    }
    if (this.direccion != otroProveedor.direccion) {
      return false;
    }
    if (this.telefono != otroProveedor.telefono) {
      return false;
    }
    if (this.que_vende != otroProveedor.que_vende) {
      return false;
    }
  }

  static validar(proveedor, requerido) {
    const ProveedorSchema = Joi.object({
      id_proveedor: requerido ? Joi.string().required() : Joi.string(),
      ruc: requerido ? Joi.string().required() : Joi.string(),
      razon_social: requerido ? Joi.string().required() : Joi.string(),
      direccion: requerido ? Joi.string().required() : Joi.string(),
      telefono: requerido ? Joi.string().required() : Joi.string(),
      que_vende: requerido ? Joi.string().required() : Joi.string(),
    });
    const { error } = ProveedorSchema.validate(proveedor);
    if (error) {
      throw error;
    }
  }
}

export default Proveedor;
