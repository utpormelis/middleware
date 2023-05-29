const valida_producto = (req, res, next)=>{

const {descripcion, marca, precio} = req.body

if (descripcion=="")
res.status(400).json({status:"La descripción no puede estar vacia"})

if (marca=="")
res.status(400).json({status:"La marca no puede estar vacia"})

if (precio=="")
res.status(400).json({status:"El precio no puede estar vacio"})
if (isNaN(precio)){ 
    return res.status(400).json({status:"La edad debe ser numerico"})
}

next ()
}
module.exports = valida_producto