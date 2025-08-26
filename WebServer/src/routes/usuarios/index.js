import express from "express"
//import controllersUsuarioRead from "../../controllers/usuarios/read.js"
import { controllersUsuarioCreate } from "../../controllers/usuarios/create.js"
import { controllersUsuarioUpdate } from "../../controllers/usuarios/update.js"
import { controllersUsuarioAuthCreate } from "../../controllers/usuarios/auth/auth.js"

//import controllersUsuarioDelete from "../../controllers/usuarios/delete.js"

const routerUsuarioIndex = express.Router();
//routerUsuarioIndex.get("/", controllersUsuarioRead)
routerUsuarioIndex.post("/auth", controllersUsuarioAuthCreate)
routerUsuarioIndex.post("/", controllersUsuarioCreate)
routerUsuarioIndex.put("/", controllersUsuarioUpdate)
//routerUsuarioIndex.delete("/", controllersUsuarioDelete)


export default routerUsuarioIndex
