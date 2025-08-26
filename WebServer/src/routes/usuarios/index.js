import express from "express"

import { controllersUsuarioCreate } from "../../controllers/usuarios/create.js"
import { controllersUsuarioUpdate } from "../../controllers/usuarios/update.js"

const routerUsuarioIndex = express.Router();
routerUsuarioIndex.post("/create", controllersUsuarioCreate)
routerUsuarioIndex.put("/update", controllersUsuarioUpdate)

export default routerUsuarioIndex
