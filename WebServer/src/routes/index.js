import express from "express";
import routerUsuarioIndex from "./usuarios/index.js";
import routerBobiaIndex from "./bobia/index.js";

const router = express.Router();

router.use("/usuarios", routerUsuarioIndex);
router.use("/bobia",routerBobiaIndex)

export default router;
