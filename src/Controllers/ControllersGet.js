const Connection=require('../Conf/ConfMsql.js');

function GETUsuario(req,res){
    const Querry="Select * from Usuarios;"
    Connection.query(
        Querry,
        (err,row,field)=>{
            res.json(row);
        }
    )
}
function GetUsuarioID(req,res){
    const Querry="Select * from Usuarios WHERE IDUsuario='"+req.params.id+"';";
    Connection.query(
        Querry,
        (err,row,field)=>{
            res.json(row);
        }
    )
}
function GetCarrera(req,res){
    const Querry="Select * from Carrera;"
    Connection.query(
        Querry,
        (err,row,field)=>{
            res.json(row);
        }
    )
}
function GetCarreraID(req,res){
    const Querry="Select * from Carrera WHERE IDCarrera='"+req.params.id+"';";
    Connection.query(
        Querry,
        (err,row,field)=>{
            res.json(row);
        }
    )
}
function GetDepartamento(req,res){
    const Querry="Select * from Departamentos;"
    Connection.query(
        Querry,
        (err,row,field)=>{
            res.json(row);
        }
    )
}
function GetDepartamentoID(req,res){
    const Querry="Select * from Departamentos WHERE IDDepartamento='"+req.params.id+"';";
    Connection.query(
        Querry,
        (err,row,field)=>{
            res.json(row);
        }
    )
}
function GetUnidadAcademica(req,res){
    const Querry="Select * from UnidadAcademica;"
    Connection.query(
        Querry,
        (err,row,field)=>{
            res.json(row);
        }
    )
}
function GetUnidadAcademicaID(req,res){
    const Querry="Select * from UnidadAcademica WHERE IDUniAcademica='"+req.params.id+"';";
    Connection.query(
        Querry,
        (err,row,field)=>{
            res.json(row);
        }
    )
}

function GetNotificacion(req,res){
    const Querry="Select * from Notificacion;"
    Connection.query(
        Querry,
        (err,row,field)=>{
            res.json(row);
        }
    )
}

function GetNotificacionID(req,res){
    const Querry="Select * from Notificacion WHERE IDNotificacion='"+req.params.id+"';";
    Connection.query(
        Querry,
        (err,row,field)=>{
            res.json(row);
        }
    )
}

module.exports={
    GETUsuario,
    GetUsuarioID,
    GetCarrera,
    GetCarreraID,
    GetDepartamento,
    GetDepartamentoID,
    GetUnidadAcademica,
    GetUnidadAcademicaID,
    GetNotificacion,
    GetNotificacionID
}