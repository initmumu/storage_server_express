import { Router } from "express"
import { requestSignUp, IDValidation, EmailUpValidation, signUpPage } from "../../services/signup/signup.service"

const router = Router()

router.get("/", signUpPage)
router.post("/", requestSignUp)
router.post("/idcheck", IDValidation)
router.post("/emailcheck", EmailUpValidation)

export default router