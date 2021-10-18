const {response, request} = require('express');

const usuarioGet = (req = request, res = response) => {
    const query = req.query;

    res.json({
        msg: 'get API - controlador',
        query
    });
}

const usuarioPost = (req, res) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: 'POST API - controlador',
        nombre,
        edad
    });
}

const usuarioPut = (req, res) => {
    
    const {usuarioId} = req.params;

    res.status(201).json({
        msg: 'PUT API - controlador',
        usuarioId
    });
}

const usuarioDelete = (req, res) => {
    res.json({
        msg: 'DELETE API - controlador'
    });
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}