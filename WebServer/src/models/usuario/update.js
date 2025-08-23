import { executar } from "../../utils/mysql.js";
import { log } from "../../utils/log.js";

export async function modelsUsuarioUpdate({ email, senha }) {
    try {
        let instrucao = `update usuario set senha = "${senha}" where email ="${email}";`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
