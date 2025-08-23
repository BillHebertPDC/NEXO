import mysql from 'mysql2/promise';
import { log } from './log.js';
import 'dotenv/config';

const mySqlConfig = {
  host: process.env.HOST_SQL,
  database: process.env.DATABASE_SQL,
  user: process.env.USER_SQL,
  password: process.env.PASSWORD_SQL,
  port: process.env.PORT_SQL
};

export async function executar(instrucao) {
  let conexao;
  try {
    conexao = await mysql.createConnection(mySqlConfig);
    const [resultados] = await conexao.execute(instrucao);
    return resultados;
  } catch (erro) {
    log(import.meta.url, erro)
    throw "0";
  } finally {
    if (conexao) await conexao.end();
  }
}
