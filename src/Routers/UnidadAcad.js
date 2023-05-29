const {Router}=require('express');
const { GetUnidadAcademica, GetUnidadAcademicaID } = require('../Controllers/ControllersGet');
const { PostUnidadAcademica } = require('../Controllers/ControllersPost');

const router=Router();

router.get('/API/GET/UnidadAca',GetUnidadAcademica);
router.get('/API/GET/UnidadAca/:id',GetUnidadAcademicaID);

router.post('/API/POST/UnidadAca',PostUnidadAcademica);

module.exports=router