const { Router } = require('express');
const { GETUsuario,GetUsuarioID } = require('../Controllers/ControllersGet.js');
const { PostUsuario }=require('../Controllers/ControllersPost.js')
const router=Router();

router.get('/API/GET/Usuario',GETUsuario);
router.get('/API/GET/Usuario/:id',GetUsuarioID);
router.post('/API/POST/Usuario',PostUsuario);

module.exports= router;