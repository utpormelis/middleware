const express = require("express")
const router = express.Router()
var{productos} = require("../models/producto")
const valida_producto = require("../middleware/valida_producto")

router.get("/", (req, res)=>{
    res.status(200).json(productos)
})

router.get("/:id_producto", (req, res)=>{
    // params recibe el parametro que indicamos en el url en este caso id_producto
const id = req.params.id_producto
const filtro = productos.filter((producto)=> producto.id_producto == id)
// filtramos el arreglo que exportamos en el punto 5, 
//se le asigna culaquier nombre y se vuelve a dirigir al array y se iguala al parametro recibido
if (filtro.length>0)
    return res.status(200).json(filtro)
else
    return res.status(404).json({status:"No encontrado"})
} )

router.post("/", valida_producto, (req, res)=>{
    var body= req.body
    body.id = productos.length + 1
    // push se inserta el array que esta en el body
    productos.push(body)
    return res.status(201).json(body)
    })

//GET que devuelva todos los productos por una marca dada
router.get("/marca/:marca", (req, res)=>{
    const idmarca= req.params.marca
    const filtro=productos.filter((marcas)=> marcas.marca == idmarca)
    if (filtro.length>0)
     return res.status(200).json(filtro)
    else
     return res.status(404).json({status:"No encontrado"})
})

//GET que devuelva todos los productos mayores o iguales a un precio dado
router.get("/mayor/:precio", (req, res)=>{
    const idprecio= req.params.precio
    const filtro= productos.filter((precios)=> precios.precio >= idprecio)
    if (filtro.length>0)
    return res.status(200).json(filtro)
   else
    return res.status(404).json({status:"No encontrado"})
})

// GET que devuelva todos los productos menores o iguales a un precio dado
router.get("/menor/:precio", (req, res)=>{
    const idprecio= req.params.precio
    const filtro= productos.filter((precios)=> precios.precio <= idprecio)
    if (filtro.length>0)
    return res.status(200).json(filtro)
   else
    return res.status(404).json({status:"No encontrado"})
})

module.exports = router