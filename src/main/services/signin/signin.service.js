import { maria_conn } from "../../../../conn/maria_conn"

const jwt = require("jsonwebtoken");
// access token을 secret key 기반으로 생성
const generateAccessToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
    });
};

// refersh token을 secret key  기반으로 생성
const generateRefreshToken = (id) => {
    return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "180 days",
    });
};

// access token의 유효성 검사
const authenticateAccessToken = (req, res, next) => {
    let authHeader = req.headers["authorization"];
    let token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        console.log("wrong token format or token is not sended");
        return res.sendStatus(400);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) {
            console.log(error);
            return res.sendStatus(403);
        }
        
        req.user = user;
        next();
    });
};

// access token을 refresh token 기반으로 재발급
app.post("/refresh", (req, res) => {
    let refreshToken = req.body.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (error, user) => {
            if (error) return res.sendStatus(403);

            const accessToken = generateAccessToken(user.id);

            res.json({ accessToken });
        }
    );
});


export const signInPage = (req, res) => {
    res.render("signin")
    console.log('signin page test')
}

export const requestSignIn = async (req, res) => {
    const conn = maria_conn()
    const body = req.body

    const sql_query = "select user_id from user where user_pw = sha2(?,256)"
    try{
        const [row] = await conn.query(sql_query, body.user_id)
        if(row.length == 0){
            res.json({
                status: 401,
                message: "해당 ID로 가입된 계정이 없습니다."
            })
        }else if(row[0].user_id == body.user_id){
            let accessToken = generateAccessToken(user);
            let refreshToken = generateRefreshToken(user);
            res.json({
                status: 200,
                message: "로그인 성공.",
                accessToken,
                refreshToken
            })
        }else if(row[0].user_id != body.user_id){
            res.json({
                status: 402,
                message: "비밀번호가 맞지 않습니다."
            })
        }
    } catch(err){
        res.json({
            status:400,
            message: err.message
        })
    }
}