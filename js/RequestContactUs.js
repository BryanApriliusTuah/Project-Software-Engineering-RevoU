
function GetData(){
    let nama = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let message = document.querySelector("#message").value

    SendDataContactUs(nama,email,message)
    setTimeout(function() {
      Swal.fire({
          title: "Terima kasih!",
          text: "Pesan Anda Telah Terkirim!",
          icon: "success"
      });
      setTimeout(function() {
          window.location = "contactus.html";
      }, 5000);
  }, 1000);
}