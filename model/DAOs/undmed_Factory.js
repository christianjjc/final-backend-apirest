import UndmedMYSQL from "./undmed_MYSQL_DAO.js";

class UndmedFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "SQLITE3":
      //return new RolSQLITE3();
      case "MYSQL":
        return new UndmedMYSQL();
    }
  }
}

export default UndmedFactoryDAO;
