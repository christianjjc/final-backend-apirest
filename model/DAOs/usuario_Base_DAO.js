class UsuariosBaseDAO {
  getNext_Id(usuarios) {
    let lg = usuarios.length;
    return lg ? parseInt(usuarios[lg - 1]._id) + 1 : 1;
  }

  getIndex(_id, usuarios) {
    return usuarios.findIndex((usuario) => (usuario.id_usuario = _id));
  }
}

export default UsuariosBaseDAO;
