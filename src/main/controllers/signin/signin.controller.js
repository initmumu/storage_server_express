import { Router } from "express"
import { signInPage , requestSignIn} from "../../services/signin/signin.service"

const router = Router()

router.get("/", signInPage)
router.post("/", requestSignIn)

export default router