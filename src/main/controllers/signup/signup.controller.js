import { Router } from "express"
import { requestSignUp, signUpPage } from "../../services/signup/signup.service"

const router = Router()

router.get("/", signUpPage)
router.post("/", requestSignUp)

export default router