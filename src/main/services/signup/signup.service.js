import { maria_conn } from "../../../../conn/maria_conn"

export const requestSignUp = async (req, res) => {

    const conn = maria_conn()
    const body = req.body
    const sql_query = "INSERT INTO user (user_id, user_pw, user_name, user_email) VALUES (?, ?, ?, ?)"
    const values = [body.user_id, body.user_pw, body.user_name, body.user_email]
    const [row] = await conn.query(sql_query, values)

    console.log(row)

    res.json({
        status: 200,
        message: "회원가입이 완료되었습니다."
    })
}