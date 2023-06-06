/* const knex = require("knex")({
    client: "sqlite3",
    connection: {
      filename: "./db/ci.sqlite",
    },
    useNullAsDefault: true,
  });
  


const crearTabla = async (connection, nombreTabla) => {
    await connection.schema.dropTableIfExists(nombreTabla);
    connection.schema
      .createTable(nombreTabla, (table) => {
        table.string("id_proveedor", 8).primary().notNullable().unique(),
          table.string("ruc", 11),
          table.string("razon_social", 250),
          table.string("direccion", 500);
      })
      .then(() => {
        console.log("Tabla creada con éxito");
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      })
      .finally(() => {
        knex.destroy();
      });
  };


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


const insertar = async()=>{
    await knex("proveedores") // Reemplaza 'mytable' con el nombre de tu tabla
    .insert(proveedores)
    .then(() => {
      console.log('Registros insertados correctamente');
    })
    .catch((error) => {
      console.error('Error al insertar registros:', error);
    })
    .finally(() => {
      knex.destroy(); // Cierra la conexión con la base de datos
    });
}
  
  //crearTabla(knex, "proveedores");

  insertar()


 */