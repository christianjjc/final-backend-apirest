import CatprodMYSQL from "./catprod_MYSQL_DAO.js";

class CatprodFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "SQLITE3":
      case "MYSQL":
        return new CatprodMYSQL();
    }
  }
}

export default CatprodFactoryDAO;
