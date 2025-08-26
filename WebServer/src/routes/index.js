import express from "express";
import routerUsuarioIndex from "./usuarios/index.js";

const router = express.Router();

router.use("/usuarios", routerUsuarioIndex);

export default router;
