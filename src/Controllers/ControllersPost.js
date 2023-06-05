const Conexion=require('../Conf/ConfMsql.js')
function PostUsuario(req,res){
    const IDUsuario=Math.floor(Math.random() * 10000);
    const{
        Nombre,
        NoCuenta,
        Password,
        IDRol,
        IDCarrera,
        IDUniAcademica,
        IDDepart
    }=req.body;

    const QUERRY="Insert into Usuarios VALUES ('"+IDUsuario+"','"+Nombre+"','"+NoCuenta+"','"+Password+"','"+IDRol+"','"+IDCarrera+"','"+IDUniAcademica+"','"+IDDepart+"');"
    Conexion.query(QUERRY,(err,result,field)=>{
        if(!err){
            res.json(
                {
                    "Message":"Insertado",
                    "Result":result
                }
            )
        }else{
            res.json(
                {
                    "Message":"No Insertado"
                }
            )
        }
    })
}
function PostCarrera(req,res){
    const IDCarrera=Math.floor(Math.random() * 10000);
    const{
        Nombre,
        Descripcion,
        Encargado,
        IDUniAcademica
    }=req.body
    const QUERRY="Insert into Carrera VALUES ('"+IDCarrera+"','"+Nombre+"','"+Descripcion+"','"+Encargado+"','"+IDUniAcademica+"');"
    Conexion.query(QUERRY,(err,result,field)=>{
        if(!err){
            res.json(
                {
                    "Message":"Insertado",
                    "Result":result
                }
            )
        }else{
            res.json(
                {
                    "Message":"No Insertado"
                }
            )
        }
    })
}

function PostDepartamento(req,res){
    const IDDepartamento=Math.floor(Math.random() * 10000);
    const {
        Nombre,
        Descripcion,
        Encargado,
        IDUniAcademica
    }=req.body
    const QUERRY="Insert into Departamentos VALUES ('"+IDDepartamento+"','"+Nombre+"','"+Descripcion+"','"+Encargado+"','"+IDUniAcademica+"');"
    Conexion.query(QUERRY,(err,result,field)=>{
        if(!err){
            res.json(
                {
                    "Message":"Insertado",
                    "Result":result
                }
            )
        }else{
            res.json(
                {
                    "Message":"No Insertado"
                }
            )
        }
    })
}
function PostUnidadAcademica(req,res){
    const IDUnidadAcad=Math.floor(Math.random() * 10000);
    const {
        Nombre,
        Descripcion,
        Encargado
    }=req.body
    const QUERRY="Insert into UnidadAcademica VALUES ('"+IDUnidadAcad+"','"+Nombre+"','"+Descripcion+"','"+Encargado+"');"
    Conexion.query(QUERRY,(err,result,field)=>{
        if(!err){
            res.json(
                {
                    "Message":"Insertado",
                    "Result":result
                }
            )
        }else{
            res.json(
                {
                    "Message":"No Insertado"
                }
            )
        }
    })
}

function PostNotificacion(req,res){
    const IDNotificacion=Math.floor(Math.random() * 10000);    
    let date = new Date();
    const {
        Titulo,
        Descripcion
    }=req.body

    Fecha=` ${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`
    console.log({IDNotificacion,Titulo,Descripcion,Fecha})
    const QUERRY="Insert into Notificacion VALUES ('"+IDNotificacion+"','"+Titulo+"','"+Descripcion+"','"+Fecha+"','"+0+"');"
    Conexion.query(QUERRY,(err,result,field)=>{
        if(!err){
            res.json(
                {
                    "Message":"Insertado",
                    "Result":result
                }
            )
        }else{
            res.json(
                {
                    "Message":"No Insertado"
                }
            )
        }
    })
    
}

module.exports={
    PostUsuario,
    PostCarrera,
    PostDepartamento,
    PostUnidadAcademica,
    PostNotificacion
}