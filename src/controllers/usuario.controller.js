import Usuario from '../models/Usuarios'

export function createUsuario(req, res){
    const { rol, usuario, clave, avatar, nombre, apellido, sexo, edad, direccion, email, telefono, token, activo, fechaCreacion, fechaEliminacion } = req.body;
    Usuario.create({
        rol: rol,
        usuario: usuario,
        clave: clave, 
        nombre: nombre,
        apellido: apellido,
        sexo: sexo,
        edad: edad,
        direccion: direccion,
        email: email,
        telefono: telefono,
        token: token,
        activo: activo,
        fechaCreacion: fechaCreacion,
        fechaEliminacion: fechaEliminacion
    })
    res.send('Recibido');
}

