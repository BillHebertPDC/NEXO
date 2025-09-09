import { modelsUsuarioCreate } from "../../models/usuario/create.js"
import { log } from "../../utils/log.js"
export const servicesUsuarioCreate = async ({ nome, cnpj, email, telefone, senha }) => {
    try {
        return await modelsUsuarioCreate({ nome, cnpj, email, telefone, senha })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}