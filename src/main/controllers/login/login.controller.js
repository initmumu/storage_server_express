import { Router } from "express";
import { loginPage } from "../../services/login/login.service";

const router = Router();

router.get("/", loginPage);

export default router;
