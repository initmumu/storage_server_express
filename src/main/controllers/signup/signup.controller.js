import { Router } from "express"
import { requestSignUp } from "../../services/signup/signup.service"

const router = Router()

router.post("/", requestSignUp)

export default router