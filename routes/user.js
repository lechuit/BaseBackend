const {Router} = require('express');
const {usuarioGet, usuarioPost, usuarioDelete, usuarioPut} = require("../controllers/usuarios");

const router = Router();

router.get('/', usuarioGet);

router.put('/:usuarioId', usuarioPut);

router.post('/', usuarioPost);

router.delete('/', usuarioDelete);

module.exports = router;