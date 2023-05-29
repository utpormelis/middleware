const express = require("express")
const app = express()

const RutaUsuario = require("./routers/usuarios")
const rutaProducto = require("./routers/productos")
const rutaempleados = require("./routers/empleados")

const registrar = require("./middleware/registrar")
//9
app.use(express.json())
app.use(registrar)
app.use("/usuarios",RutaUsuario)
app.use("/productos", rutaProducto)
app.use("/empleados", rutaempleados)


//6
app.listen(3000,()=>{
    console.log("Servidor app Iniciado en puerto 3000...")
})