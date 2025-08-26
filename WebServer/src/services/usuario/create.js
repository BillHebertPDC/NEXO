import { modelsUsuarioCreate } from "../../models/usuario/create.js"
import { log } from "../../utils/log.js"
export const servicesUsuarioCreate = async ({ nome, email, senha, cargo, tipo_usuario }) => {
    try {
        return await modelsUsuarioCreate({ nome: nome, email: email, senha: senha, cargo: cargo, tipo_usuario: tipo_usuario })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}