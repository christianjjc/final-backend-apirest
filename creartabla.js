import knex from "knex";
import { proveedores, roles, usuarios } from "./creartabla_objs.js";

function conectaSQLITE3(conn) {
  const db = conn({
    client: "sqlite3",
    connection: {
      filename: "./db/ci.sqlite",
    },
    useNullAsDefault: true,
  });
  return db;
}

function conectaMYSQL(conn) {
  const db = conn({
    client: "mysql",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "ci",
    },
    useNullAsDefault: true,
  });
  return db;
}

const crearTabla = async (db, nombreTabla) => {
  await db.schema.dropTableIfExists(nombreTabla);
  switch (nombreTabla) {
    case "proveedores":
      db.schema
        .createTable(nombreTabla, (table) => {
          table.string("id_proveedor", 8).primary().notNullable().unique(),
            table.string("ruc", 11),
            table.string("razon_social", 250),
            table.string("direccion", 500),
            table.string("telefono", 30),
            table.string("que_vende", 1000),
            table.timestamp("created_at").defaultTo(db.fn.now()),
            table.timestamp("updated_at").defaultTo(db.fn.now());
        })
        .then(() => {
          console.log("Tabla proveedores creada con éxito");
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          db.destroy();
        });
      break;
    case "roles":
      db.schema
        .createTable(nombreTabla, (table) => {
          table.string("id_rol", 8).primary().notNullable().unique(),
            table.string("nombre_rol", 250),
            table.string("desc_rol", 500),
            table.integer("level"),
            table.timestamp("created_at").defaultTo(db.fn.now()),
            table.timestamp("updated_at").defaultTo(db.fn.now());
        })
        .then(() => {
          console.log("Tabla roles creada con éxito");
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          db.destroy();
        });
      break;

    case "categorias_prod":
      db.schema
        .createTable(nombreTabla, (table) => {
          table.string("id_categoria_prod", 8).primary().notNullable().unique(),
            table.string("nombre_categoria_prod", 250),
            table.timestamp("created_at").defaultTo(db.fn.now()),
            table.timestamp("updated_at").defaultTo(db.fn.now());
        })
        .then(() => {
          console.log("Tabla categorias de productos creada con éxito");
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          db.destroy();
        });
      break;

    case "undmed":
      db.schema
        .createTable(nombreTabla, (table) => {
          table.string("id_undmed", 8).primary().notNullable().unique(),
            table.string("nombre_undmed", 250),
            table.string("abr", 20),
            table.timestamp("created_at").defaultTo(db.fn.now()),
            table.timestamp("updated_at").defaultTo(db.fn.now());
        })
        .then(() => {
          console.log("Tabla undmed de productos creada con éxito");
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          db.destroy();
        });
      break;

    case "productos":
      db.schema
        .createTable(nombreTabla, (table) => {
          table.string("id_producto", 8).primary().notNullable().unique(),
            table.string("nombre_producto", 500),
            table.string("id_categoria_prod").references("categorias_prod.id_categoria_prod").onDelete("RESTRICT"),
            table.string("id_undmed").references("undmed.id_undmed").onDelete("RESTRICT"),
            table.timestamp("created_at").defaultTo(db.fn.now()),
            table.timestamp("updated_at").defaultTo(db.fn.now());
        })
        .then(() => {
          console.log("Tabla productos creada con éxito");
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          db.destroy();
        });
      break;

    case "producto_proveedor":
      db.schema
        .createTable(nombreTabla, (table) => {
          table.string("id_producto_proveedor", 8).primary().notNullable().unique(),
            table.string("id_producto").references("productos.id_producto").onDelete("RESTRICT"),
            table.string("id_proveedor").references("proveedores.id_proveedor").onDelete("RESTRICT");
        })
        .then(() => {
          console.log("Tabla productos por proveedor creada con éxito");
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          db.destroy();
        });
      break;

    case "usuarios":
      db.schema
        .createTable(nombreTabla, (table) => {
          table.string("id_usuario", 8).primary().notNullable().unique(),
            table.string("nombre_usuario", 500),
            table.string("pass_usuario", 500),
            table.string("id_rol").references("roles.id_rol").onDelete("RESTRICT"),
            table.timestamp("created_at").defaultTo(db.fn.now()),
            table.timestamp("updated_at").defaultTo(db.fn.now());
        })
        .then(() => {
          console.log("Tabla usuarios creada con éxito");
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          db.destroy();
        });
      break;
    default:
      break;
  }
};

const insertarRegs = async (db, tabla, array) => {
  await db(tabla) // Reemplaza 'mytable' con el nombre de tu tabla
    .insert(array)
    .then(() => {
      console.log("Registros insertados correctamente");
    })
    .catch((error) => {
      console.error("Error al insertar registros:", error);
    })
    .finally(() => {
      db.destroy(); // Cierra la conexión con la base de datos
    });
};

/** SQLITE*/
const crea = async () => {
  //await crearTabla(conectaSQLITE3(knex), "proveedores");
  //await crearTabla(conectaSQLITE3(knex), "roles");
  //await crearTabla(conectaSQLITE3(knex), "usuarios");
};
const inserta = async () => {
  //await insertarRegs(conectaSQLITE3(knex), "proveedores", proveedores);
  //await insertarRegs(conectaSQLITE3(knex), "roles", roles);
  //await insertarRegs(conectaSQLITE3(knex), "usuarios", usuarios);
};
//crea();
//inserta();
//.
//.
//.
//.
/** MYSQL */
const creamysql = async () => {
  //-------------------
  //await crearTabla(conectaMYSQL(knex), "proveedores");
  //await crearTabla(conectaMYSQL(knex), "roles");
  //await crearTabla(conectaMYSQL(knex), "usuarios");
  //-------------------
  //await crearTabla(conectaMYSQL(knex), "categorias_prod");
  //await crearTabla(conectaMYSQL(knex), "undmed");
  //await crearTabla(conectaMYSQL(knex), "productos");
  //await crearTabla(conectaMYSQL(knex), "producto_proveedor");
  //--------------------
};
const insertamysql = async () => {
  //await insertarRegs(conectaMYSQL(knex), "proveedores", proveedores);
  //await insertarRegs(conectaMYSQL(knex), "roles", roles);
  //await insertarRegs(conectaMYSQL(knex), "usuarios", usuarios);
};
//creamysql();
//insertamysql();
