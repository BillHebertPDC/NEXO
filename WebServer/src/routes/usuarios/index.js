import express from "express"


import { controllersUsuarioCreate } from "../../controllers/usuarios/create.js"
import { controllersUsuarioUpdate } from "../../controllers/usuarios/update.js"
import { controllersUsuarioAuthCreate } from "../../controllers/usuarios/auth/auth.js"

const routerUsuarioIndex = express.Router();
routerUsuarioIndex.post("/create", controllersUsuarioCreate)
routerUsuarioIndex.put("/update", controllersUsuarioUpdate)
routerUsuarioIndex.post("/auth", controllersUsuarioAuthCreate)

export default routerUsuarioIndex
