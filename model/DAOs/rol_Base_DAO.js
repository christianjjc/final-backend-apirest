class RolesBaseDAO {
    getNext_Id(roles) {
        let lg = roles.length;
        return lg ? parseInt(roles[lg - 1]._id) + 1 : 1;
      }
    
      getIndex(_id, roles) {
        return roles.findIndex(
          (rol) => (rol.id_proveedor = _id)
        );
      }
};

export default RolesBaseDAO;