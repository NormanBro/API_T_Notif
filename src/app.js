const app =require('./Conf/index.js')


//Rutas
app.use(require('./Routers/Usuarios.js'));
app.use(require('./Routers/Carrera.js'));
app.use(require('./Routers/Departamento.js'));
app.use(require('./Routers/UnidadAcad.js'));
app.use(require('./Routers/Notificacion.js'));

app.listen(8080,()=>{
    console.log('Express RUN');
})