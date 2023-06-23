class ProductosBaseDAO {
  getNext_Id(productos) {
    let lg = productos.length;
    return lg ? parseInt(productos[lg - 1]._id) + 1 : 1;
  }

  getIndex(_id, productos) {
    return productos.findIndex((producto) => (producto.id_producto = _id));
  }
}

export default ProductosBaseDAO;
