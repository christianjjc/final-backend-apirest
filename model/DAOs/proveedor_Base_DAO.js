class ProveedoresBaseDAO {
  getNext_Id(proveedores) {
    let lg = proveedores.length;
    return lg ? parseInt(proveedores[lg - 1]._id) + 1 : 1;
  }

  getIndex(_id, proveedores) {
    return proveedores.findIndex(
      (proveedor) => (proveedor.id_proveedor = _id)
    );
  }
}

export default ProveedoresBaseDAO;
