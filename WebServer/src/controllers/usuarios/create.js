import { log } from "../../utils/log.js";
import { servicesUsuarioCreate } from "../../services/usuario/create.js";

export const controllersUsuarioCreate = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { nome, cnpj, email, telefone, senha } = req.body
        await servicesUsuarioCreate({ nome: nome, cnpj: cnpj, email: email, telefone: telefone, senha: senha })
        return res.status(200).json({ ok: true });
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}