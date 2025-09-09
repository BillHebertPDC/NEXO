import { log } from "../../utils/log.js";
import { servicesUsuarioCreate } from "../../services/usuario/create.js";

export const controllersUsuarioCreate = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { nome, email, senha, cargo, tipo_usuario } = req.body
        await servicesUsuarioCreate({ nome: nome, email: email, senha: senha, cargo: cargo, tipo_usuario: tipo_usuario })
        return res.status(200).json({ ok: true });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}