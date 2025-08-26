import express from 'express'
import appSession from './app-session.js'
import appMiddlewares from './app-middlewares.js'
import appStatic from './app-static.js'
import appRoutes from './app-routes.js'
import { error } from '../middlewares/erro.js'

var chatIA = new GoogleGenAI({ apiKey: process.env.CHAVE_BOBIA });
var { GoogleGenAI } = require("@google/genai");

export function createApp() {
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    appSession(app)
    appMiddlewares(app)
    appStatic(app)
    appRoutes(app)
    app.use(error)
    return app
}

app.post("/perguntar", async (req, res) => {
    const pergunta = req.body.pergunta;
    try {
        const resultado = await gerarResposta(pergunta);
        res.json({ resultado });
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

async function gerarResposta(mensagem) {
    try {
        const modeloIA = chatIA.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `Em um paragráfo responda: ${mensagem}`
        });
        const resposta = (await modeloIA).text;
        const tokens = (await modeloIA).usageMetadata;

        console.log(resposta);
        console.log("Uso de Tokens:", tokens);
        return resposta;
    } catch (error) {
        console.error(error);
        throw error;
    }
}