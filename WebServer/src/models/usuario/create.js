import { executar } from "../../utils/mysql.js";
import { log } from "../../utils/log.js";

export async function modelsUsuarioCreate({ nome, email, senha, interesse }) {
    try {
        let instrucao = `insert into usuario(nome, email, senha,interesse) VALUES ("${nome}","${email}","${senha}","${interesse}");`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO "
    }

}
