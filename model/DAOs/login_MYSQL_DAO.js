import dbInstance from "../../connection/connMysql.js";

class LoginMYSQL {
  constructor() {
    this._db = dbInstance.getConnection();
  }

  getUsuarios = async (obj) => {
    try {
      const rows = await this._db
        .select("*")
        .from("usuarios")
        .innerJoin("roles", "usuarios.id_rol", "roles.id_rol")
        .where({ nombre_usuario: obj.nombre_usuario, pass_usuario: obj.pass_usuario });
      const usuarios = rows.map((row) => {
        return {
          id_usuario: row["id_usuario"],
          nombre_usuario: row["nombre_usuario"],
          pass_usuario: row["pass_usuario"],
          id_rol: row["id_rol"],
          nombre_rol: row["nombre_rol"],
          desc_rol: row["desc_rol"],
          level: row["level"],
        };
      });
      return usuarios;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default LoginMYSQL;
