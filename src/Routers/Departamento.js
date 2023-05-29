const {Router}=require('express');
const { GetDepartamento, GetDepartamentoID } = require('../Controllers/ControllersGet');
const { PostDepartamento } = require('../Controllers/ControllersPost');

const router=Router();

router.get('/API/GET/Departamento',GetDepartamento);
router.get('/API/GET/Departamento/:id',GetDepartamentoID);

router.post('/API/POST/Departamento',PostDepartamento);

module.exports=router