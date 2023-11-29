function GetData(){
    let nama = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let message = document.querySelector("#message").value

    SendDataContactUs(nama,email,message)
}