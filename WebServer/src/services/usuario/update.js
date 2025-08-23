import { modelsUsuarioUpdate } from "../../models/usuario/update.js"
import { log } from "../../utils/log.js"
import bcrypt from "bcrypt"

export const servicesUsuarioUpdate = async ({ email }) => {
    try {
        const saltRounds = 12
        const senhaHash = await bcrypt.hash(email, saltRounds)
        return await modelsUsuarioUpdate({ email: email, senha: senhaHash })
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
}