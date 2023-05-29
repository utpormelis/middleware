const express = require("express")
const router = express.Router()
var{usuarios} = require("../models/usuario")
const validaDatosEntrada = require("../middleware/ValidaDatosEntrada")
   
router.get("/", (req, res)=>{
    res.status(200).json(usuarios)
   // res.json(usuarios)
    // return res.json(usuarios)
})

    
router.get("/:id", (req, res) =>{
    const id = req.params.id
    const filtro = usuarios.filter((usuario)=> usuario.id == id)
    
    if (filtro.length>0)
        return res.json(filtro)
    else
        return res.status(404).json({status:"No encontrado"})
    })

    
router.post("/",validaDatosEntrada, (req, res)=>{
    var body = req.body
    body.id = usuarios.length+1
    usuarios.push(body)
    return res.status(201).json(body)
    })


router.put("/:id", (req, res)=>{
    var id = req.params.id
    var body = req.body

    const filtro = usuarios.filter((usuario)=> usuario.id == id)
    if (filtro.length>0){
        usuarios = usuarios.filter((usuario)=> usuario.id != id)
        usuarios.push(body)
        return res.status(201).json(body)
    }else
    return res.status(404).json({status:"No encontrado"})

})


router.delete("/:id", (req, res)=>{ 
    var id = req.params.id
    const filtro = usuario.filter((usuario)=> usuario.id == id)
    if (filtro.length>0){
        usuarios = usuarios.filter((usuario)=> usuario.id != id)
        usuarios.push(body)
        return res.status(201).json(filtro)
    }else
    return res.status(404).json({status:"No enconntrado"})
    })

    module.exports = router