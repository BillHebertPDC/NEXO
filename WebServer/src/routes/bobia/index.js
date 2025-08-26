import express from "express"

import { controllersBobiaQuestion } from "../../controllers/bobia/question.js"

const routerBobiaIndex = express.Router();
routerBobiaIndex.post("/perguntar", controllersBobiaQuestion)

export default routerBobiaIndex