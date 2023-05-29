const { Router }=require('express')

const { GetCarrera,GetCarreraID } =require('../Controllers/ControllersGet.js');
const { PostCarrera } = require('../Controllers/ControllersPost.js');

const router=Router()

router.get('/API/GET/Carrera',GetCarrera);
router.get('/API/GET/Carrera/:id',GetCarreraID);

router.post('/API/POST/Carrera',PostCarrera)

module.exports=router