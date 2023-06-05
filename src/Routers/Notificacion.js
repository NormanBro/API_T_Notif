const { Router } = require('express');
const { GetNotificacion, GetNotificacionID } =require('../Controllers/ControllersGet')
const { PostNotificacion } = require('../Controllers/ControllersPost')
const router=Router();

router.get("/API/GET/Notificacion",GetNotificacion);
router.get("/API/GET/Notificacion/:id",GetNotificacionID);

router.post("/API/POST/Notificacion",PostNotificacion)


module.exports=router