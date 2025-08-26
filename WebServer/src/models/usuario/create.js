import { executar } from "../../utils/mysql.js";
import { log } from "../../utils/log.js";

export async function modelsUsuarioCreate({ nome, email, senha, cargo, tipo_usuario }) {
    try {
        let instrucao = `insert into usuario(nome, email, senha, cargo, tipo_usuario) VALUES ("${nome}","${email}","${senha}","${cargo}","${tipo_usuario}");`
        return await executar(instrucao)
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO (MODELS) "
    }

}
