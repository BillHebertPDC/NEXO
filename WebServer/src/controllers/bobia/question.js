import { gerarResposta } from "../../services/bobia/question.js";
import { log } from "../../utils/log.js";

export const controllersBobiaQuestion = async (req, res, next) => {
    try {
        const pergunta = req.body.pergunta;
        try {
            const resultado = await gerarResposta(pergunta);
            res.json({ resultado });
        } catch (error) {
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    } catch (e) {
        log(import.meta.url, e)
        next(e, req, res, next)
    }
}