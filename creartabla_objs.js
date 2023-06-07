/* 
class Proveedor {
  constructor(id_proveedor, ruc, razon_social, direccion) {
    (this.id_proveedor = id_proveedor),
      (this.ruc = ruc),
      (this.razon_social = razon_social),
      (this.direccion = direccion);
  }
}

let proveedores = [];
proveedores.push(
  new Proveedor(
    "23060001",
    "20140476545",
    "Moro SRL",
    "Av mariategui 446, Jesús María, Lima - 15072"
  )
);
proveedores.push(
  new Proveedor(
    "23060002",
    "20140400000",
    "JMK",
    "Av mariategui 446, Jesús María, Lima - 15072"
  )
);
proveedores.push(
  new Proveedor(
    "23060003",
    "20140411111",
    "CAH",
    "Av mariategui 446, Jesús María, Lima - 15072"
  )
);
proveedores.push(
  new Proveedor(
    "23060004",
    "20140422222",
    "AYM",
    "Av mariategui 446, Jesús María, Lima - 15072"
  )
);
proveedores.push(
  new Proveedor(
    "23000005",
    "20140433333",
    "CORPECSAC",
    "Av mariategui 446, Jesús María, Lima - 15072"
  )
);
proveedores.push(
  new Proveedor(
    "23060006",
    "20140444444",
    "KyC",
    "Av mariategui 446, Jesús María, Lima - 15072"
  )
);
proveedores.push(
  new Proveedor(
    "23060007",
    "20140455555",
    "Brimax",
    "Av mariategui 446, Jesús María, Lima - 15072"
  )
);
proveedores.push(
  new Proveedor(
    "23060008",
    "20140466666",
    "EL puertito",
    "Av mariategui 446, Jesús María, Lima - 15072"
  )
);
proveedores.push(
  new Proveedor(
    "23060009",
    "20140477777",
    "El Moyomoyo",
    "Av mariategui 446, Jesús María, Lima - 15072"
  )
);



class Rol {
  constructor(id_rol, nombre_rol, desc_rol) {
    (this.id_rol = id_rol),
      (this.nombre_rol = nombre_rol),
      (this.desc_rol = desc_rol);
  }
}
let roles = [];
roles.push(new Rol("23060001", "Administrador", "All Access"));
roles.push(new Rol("23060002", "Operador", "Tiene acceso solo al punto de venta"));


 
class Usuario {
  constructor(id_usuario, nombre_usuario, pass_usuario, id_rol) {
    (this.id_usuario = id_usuario),
      (this.nombre_usuario = nombre_usuario),
      (this.pass_usuario = pass_usuario),
      (this.id_rol = id_rol);
  }
}
let usuarios = [];
usuarios.push(new Usuario("23060001", "cjjc", "123456", "23060001"));
usuarios.push(new Usuario("23060002", "emily", "987654", "23060002"));




module.exports = { proveedores, roles, usuarios };
 */
