//? 환경 변수
import "../../config/env"
import { PORT } from "../../config/server"

//? 라이브러리
import express from "express" //? Express.js 프레임워크
import chalk from "chalk" //? 콘솔에 찍히는 글자를 이쁘게

//? Controller
import mainController from "./controllers/main.controller"
import signupController from "./controllers/signup/signup.controller"

class Server {
    constructor(_PORT){
        this.app = express()
        this.PORT = _PORT
    }

    setRoute(){
        this.app.use("/", mainController)
        this.app.use("/signup", signupController)
    }

    setMiddleware(){
        this.app.use(express.json())
        this.setRoute()
        this.app.use((req, res) => {
            res.json({
                status: 404,
                url: req.url,
                message: `잘못된 요청입니다.`
            })
        })
    }

    listen(){
        this.setMiddleware()
        this.app.listen(this.PORT, () => {
            console.log(chalk`{yellow.bold ┌───────────────────────────────────────┐}`)
            console.log(chalk`{yellow.bold │                                       │}`)
            console.log(chalk`{yellow.bold │}  {yellowBright.bold 서버가 시동되었습니다.} {greenBright.bold [PORT: ${PORT}]}  {yellow.bold │}`)
            console.log(chalk`{yellow.bold │                                       │}`)
            console.log(chalk`{yellow.bold └───────────────────────────────────────┘}`)
        })
    }
}

export function serverBoot(){
    const server = new Server(PORT)
    server.listen()
}