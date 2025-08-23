import { log } from "../../utils/log.js";
import { servicesUsuarioCreate } from "../../services/usuario/create.js";
import bcrypt from "bcrypt"

export const controllersUsuarioCreate = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { nome, email, senha, interesse } = req.body
        const saltRounds = 12
        const senhaHash = await bcrypt.hash(senha, saltRounds)
        await servicesUsuarioCreate({ nome: nome, email: email, senha: senhaHash, interesse: interesse })
        return res.status(200).json({ ok: true });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}