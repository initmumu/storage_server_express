const validation = [false, false, false, false]

const pw_safety_check = () => {
    const pw1 = document.getElementById("pw_input").value
    console.log(pw1)
    if(!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/.test(pw1)){
        validation[1] = false
        document.getElementById("pw_err").innerHTML = "영문과 특수문자 숫자를 포함하며 8자 이상이어야 합니다."
    } else {
        validation[1] = true
        document.getElementById("pw_err").innerHTML = ""
    }
}

const pw_match_check = () => {
    const pw1 = document.getElementById("pw_input").value
    const pw2 = document.getElementById("pw2_input").value

    if (validation[1] === true && pw1 !== pw2){
        validation[2] = false
        document.getElementById("pw2_err").innerHTML = "비밀번호가 일치하지 않습니다."
    } else if (validation[1] === false) {
        validation[2] = false
        document.getElementById("pw2_err").innerHTML = ""
    }else {
        validation[2] = true
        document.getElementById("pw2_err").innerHTML = ""
    }
}

const id_duplicate_check = () => {
    const user_input = document.getElementById("id_input").value
    console.log(user_input)
    if (user_input === "mumu"){
        validation[0] = false
        document.getElementById("id_err").innerHTML = "이미 사용 중인 ID 입니다."
    }
    else{
        validation[0] = true
        document.getElementById("id_err").innerHTML = ""
    }
}

const email_duplicate_check = () => {
    const user_input = document.getElementById("email_input").value
    console.log(user_input)
    if (user_input === "bshookhu@gmail.com"){
        validation[4] = false
        document.getElementById("email_err").innerHTML = "이미 가입된 이메일입니다."
    }
    else{
        validation[4] = true
        document.getElementById("email_err").innerHTML = ""
    }
}

document.getElementById("id_input").addEventListener("change", id_duplicate_check)
document.getElementById("pw_input").addEventListener("change", pw_safety_check)
document.getElementById("pw2_input").addEventListener("change", pw_match_check)
document.getElementById("email_input").addEventListener("change", email_duplicate_check)