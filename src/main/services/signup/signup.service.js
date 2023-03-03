import { maria_conn } from "../../../../conn/maria_conn";

export const signUpPage = (req, res) => {
  res.render("signup");
};

export const IDValidation = async (req, res) => {
  const conn = maria_conn();
  const body = req.body;
  const sql_query = "SELECT user_id FROM user where user_id = ?";

  try {
    const [rows] = await conn.query(sql_query, body.user_id);

    if (rows.length == 0) {
      res.json({
        status: 200,
        message: "사용할 수 있는 ID입니다.",
      });
    } else {
      res.json({
        status: 400,
        message: "이미 존재하는 ID입니다.",
      });
    }
  } catch (err) {
    res.json({
      status: 400,
      message: err.message,
    });
  }
};

export const EmailUpValidation = async (req, res) => {
  const conn = maria_conn();
  const body = req.body;
  const sql_query = "SELECT user_email FROM user where user_email = ?";

  try {
    const [rows] = await conn.query(sql_query, body.user_email);

    if (rows.length == 0) {
      res.json({
        status: 200,
        message: "사용할 수 있는 E-mail 입니다.",
      });
    } else {
      res.json({
        status: 400,
        message: "이미 이 E-mail로 가입된 계정이 존재합니다.",
      });
    }
  } catch (err) {
    res.json({
      status: 400,
      message: err.message,
    });
  }
};

export const requestSignUp = async (req, res) => {
  const conn = maria_conn();
  const body = req.body;
  const sql_query =
    "INSERT INTO user (user_id, user_pw, user_name, user_email) VALUES (?, ?, ?, ?)";
  try {
    const values = [
      body.user_id,
      body.user_pw,
      body.user_name,
      body.user_email,
    ];

    const [row] = await conn.query(sql_query, values);
    res.json({
      status: 200,
      message: "회원가입이 완료되었습니다.",
    });
  } catch (err) {
    res.json({
      status: 400,
      message: err.message,
    });
  }
};
