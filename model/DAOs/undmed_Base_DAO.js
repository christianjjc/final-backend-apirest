class UndmedBaseDAO {
  getNext_Id(undmed) {
    let lg = undmed.length;
    return lg ? parseInt(undmed[lg - 1]._id) + 1 : 1;
  }

  getIndex(_id, undmed) {
    return undmed.findIndex((rol) => (undmed.id_undmed = _id));
  }
}

export default UndmedBaseDAO;
