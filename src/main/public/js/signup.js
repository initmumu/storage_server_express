document.getElementById("id_input").addEventListener("change", () => {
    const user_input = document.getElementById("id_input").value
    console.log(user_input)
    if (user_input === "mumu"){
        console.log("asdf")
        document.getElementById("id_err").innerHTML = "이미 사용 중인 ID 입니다."
    }
    else{
        console.log("1234")
        document.getElementById("id_err").innerHTML = ""
    }
})