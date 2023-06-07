import UsuarioSQLITE3 from "./usuario_SQLITE3_DAO.js";

class UsuariosFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "SQLITE3":
        return new UsuarioSQLITE3();
      case "OTRA BD":
        return "OTRA BD";
      default:
        return new UsuarioSQLITE3();
    }
  }
}

export default UsuariosFactoryDAO;