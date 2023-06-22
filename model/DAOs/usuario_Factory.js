import UsuarioMYSQL from "./usuario_MYSQL_DAO.js";
import UsuarioSQLITE3 from "./usuario_SQLITE3_DAO.js";

class UsuariosFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "SQLITE3":
        return new UsuarioSQLITE3();
      case "MYSQL":
        return new UsuarioMYSQL();
    }
  }
}

export default UsuariosFactoryDAO;
