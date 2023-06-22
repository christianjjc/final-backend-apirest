const { roles, usuarios, proveedores } = require("./creartabla_objs");

const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./db/ci.sqlite",
  },
  useNullAsDefault: true,
});

const crearTabla = async (connection, nombreTabla) => {
  await connection.schema.dropTableIfExists(nombreTabla);

  switch (nombreTabla) {
    case "proveedores":
      connection.schema
        .createTable(nombreTabla, (table) => {
          table.string("id_proveedor", 8).primary().notNullable().unique(),
            table.string("ruc", 11),
            table.string("razon_social", 250),
            table.string("direccion", 500),
            table.string("telefono", 30),
            table.string("que_vende", 1000),
            table.timestamp("created_at").defaultTo(knex.fn.now()),
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
        .then(() => {
          console.log("Tabla proveedores creada con éxito");
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          knex.destroy();
        });
      break;
    case "roles":
      connection.schema
        .createTable(nombreTabla, (table) => {
          table.string("id_rol", 8).primary().notNullable().unique(),
            table.string("nombre_rol", 250),
            table.string("desc_rol", 500),
            table.integer("level"),
            table.timestamp("created_at").defaultTo(knex.fn.now()),
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
        .then(() => {
          console.log("Tabla roles creada con éxito");
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          knex.destroy();
        });
      break;
    case "usuarios":
      connection.schema
        .createTable(nombreTabla, (table) => {
          table.string("id_usuario", 8).primary().notNullable().unique(),
            table.string("nombre_usuario", 500),
            table.string("pass_usuario", 500),
            table.string("id_rol").references("roles.id_rol").onDelete("RESTRICT"),
            table.timestamp("created_at").defaultTo(knex.fn.now()),
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
        .then(() => {
          console.log("Tabla usuarios creada con éxito");
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          knex.destroy();
        });
      break;
    default:
      break;
  }
};

const insertarRegs = async (tabla, array) => {
  await knex(tabla) // Reemplaza 'mytable' con el nombre de tu tabla
    .insert(array)
    .then(() => {
      console.log("Registros insertados correctamente");
    })
    .catch((error) => {
      console.error("Error al insertar registros:", error);
    })
    .finally(() => {
      knex.destroy(); // Cierra la conexión con la base de datos
    });
};

const crea = async () => {
  //await crearTabla(knex, "proveedores");
  //await crearTabla(knex, "roles");
  await crearTabla(knex, "usuarios");
};

const inserta = async () => {
  //await insertarRegs("proveedores", proveedores);
  //await insertarRegs("roles", roles);
  await insertarRegs("usuarios", usuarios);
};

//crea();
//inserta();
