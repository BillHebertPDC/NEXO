import { log } from "../../utils/log.js";
import { servicesUsuarioUpdate } from "../../services/usuario/update.js";
export const controllersUsuarioUpdate = async (req, res, next) => {
    try {
        const PARAMETROS = req.params;
        const { email } = req.body
        let resp = await servicesUsuarioUpdate({ email: email })
        if (resp.affectedRows > 0){
            return res.status(200).json({ ok: true });
        }
        else
            return res.status(200).json({ ok: false })
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}