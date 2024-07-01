import { Router } from "express";
import SondaController from "../controllers/SondaController.js"

const routes = Router()
const sondaController = new SondaController()

routes.post("/", sondaController.insertarSonda)
routes.get("/",sondaController.listarSondas)
routes.get("/:id",sondaController.obtenerSonda)

export default routes