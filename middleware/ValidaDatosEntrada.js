const validaDatosEntrada=(req, res, next)=>{

    const {nombre, apellido, edad, salario} = req.body
                    //valida que el campo no este vacido
    if (nombre=="")
        return res.status(400).json({status:"El nombre no puede estar vacio"})

    if (apellido=="")
    return res.status(400).json({status:"El apellido no puede estar vacio"})

    if (edad=="")
     return res.status(400).json({status:"La edad no puede estar vacia"})
                 //valida que solo sea un valor numerico
    if (isNaN(edad)){ 
        return res.status(400).json({status:"La edad debe ser numerico"})
    }

    if (salario=="")
        return res.status(400).json({status:"El salario no puede estar vacio"})
    if (isNaN(salario)){ 
        return res.status(400).json({status:"El salario debe ser numerico"})
    }

    next()
}
module.exports=validaDatosEntrada