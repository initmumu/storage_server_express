import { Router } from "express"
import { mainPage } from "../services/main.service"

const router = Router()

router.get("/", mainPage)

export default router