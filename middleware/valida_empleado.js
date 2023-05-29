const valida_empleado = (req, res, next)=>{
    const {nombre, salario, id} = req.body
    
    if (nombre=="")
    return res.status(400).json({status:"El nombre no debe estar vacio"})

    if (isNaN(salario)){ 
        return res.status(400).json({status:"El salario debe ser numerico"})
    }
    if (salario==""){
        return res.status(400).json({status:"El salario no debe estar vacio"})
    }

    if (id===0)
    return res.status(400).json({status:"Introduzca un valor distinto de 0"})

    next()
}
module.exports = valida_empleado