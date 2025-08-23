import { executar } from "../../../utils/mysql.js";
import { log } from "../../../utils/log.js";

export async function modelsUsuarioAuthAutenticar({ email }) {
    try {
        let instrucao = `select * from usuario where email ="${email}";`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
export async function modelsUsuarioAuthInteresse({ interesse }) {
    try {
        let instrucao = `select count(*) from usuario where interesse ="${interesse}";`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
