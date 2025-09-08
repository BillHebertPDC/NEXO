
import { modelsUsuarioAuthAutenticar } from "../../../models/usuario/auth/auth.js";
import { log } from "../../../utils/log.js";

export const servicesUsuarioAuthAutenticar = async ({ email, senha }) => {
    try {
        let user = await modelsUsuarioAuthAutenticar({ email: email });
        if (user.length > 0 && user[0].senha === senha) {
            delete user[0].senha;
            return { login: true, user: user[0] };
        }
        return { login: false };
    } catch (e) {
        log(import.meta.url, e);
        throw e + " ERROR SERVICES ";
    }
};