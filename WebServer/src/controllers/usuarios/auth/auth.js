
import { servicesUsuarioAuthAutenticar } from "../../../services/usuario/auth/auth.js"
export const controllersUsuarioAuthCreate = async (req, res) => {
    const { email, senha } = req.body
    let token = await servicesUsuarioAuthAutenticar({ email: email, senha: senha })
    res.json({ token })
}
