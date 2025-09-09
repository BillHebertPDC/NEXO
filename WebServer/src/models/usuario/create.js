import { executar } from "../../utils/mysql.js";
import { log } from "../../utils/log.js";

export async function modelsUsuarioCreate({ nome, cnpj, email, telefone, senha }) {
    try {
        let instrucao = `insert into empresa(nome, cnpj, status) VALUES ("${nome}","${cnpj}", 0);`
        await executar(instrucao)
        let instrucao2 = `select * from empresa where nome = "${nome}";`
        let empresa = await executar(instrucao2);
        let instrucao3 = `insert into usuario(nome, email, senha, telefone, tipo, empresa_idEmpresa) VALUES ("${nome}","${email}", "${senha}", "${telefone}", "admin", ${empresa[0].idEmpresa});`
        return await executar(instrucao3);
    } catch (e) {
        log(import.meta.url, e)
        throw " ERRO NO BANCO (MODELS) "
    }

}
