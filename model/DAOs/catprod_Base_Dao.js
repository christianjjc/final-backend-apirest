class CatprodBaseDAO {
  getNext_Id(catprod) {
    let lg = catprod.length;
    return lg ? parseInt(catprod[lg - 1]._id) + 1 : 1;
  }

  getIndex(_id, catprod) {
    return catprod.findIndex((it) => (it.id_categoria_prod = _id));
  }
}

export default CatprodBaseDAO;
