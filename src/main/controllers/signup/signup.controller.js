import { Router } from "express"
import { requestSignUp, IDValidation, EmailUpValidation, signUpPage } from "../../services/signup/signup.service"

const router = Router()

router.get("/", signUpPage)
router.post("/", requestSignUp)
router.get("/idcheck", IDValidation)
router.get("/emailcheck", EmailUpValidation)

export default router