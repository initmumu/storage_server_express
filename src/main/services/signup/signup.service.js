import { maria_conn } from "../../../../conn/maria_conn"

export const signUpPage = (req, res) => {
    res.render("signup")
}

export const requestSignUp = async (req, res) => {

    const conn = maria_conn()
    const body = req.body
    const sql_query = "INSERT INTO user (user_id, user_pw, user_name, user_email) VALUES (?, ?, ?, ?)"
    try {
        const values = [body.user_id, body.user_pw, body.user_name, body.user_email]
        const [row] = await conn.query(sql_query, values)

        res.json({
            status: 200,
            message: "회원가입이 완료되었습니다."
        })
    } catch(err){
        res.json({
            status: 400,
            message: err.message
        })
    }
}