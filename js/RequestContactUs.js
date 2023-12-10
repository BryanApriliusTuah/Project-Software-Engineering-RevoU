
function GetData(){
    let nama = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let message = document.querySelector("#message").value

    if(nama === "" || email === "" || message === ""){
        Swal.fire({
            title: "Did you forget something?",
            text: "Please complete the remaining forms.",
            icon: "question"
          });
    }else{
    SendDataContactUs(nama,email,message)
    setTimeout(function() {
      Swal.fire({
          title: "Thank you!",
          text: "Your message has been sent!",
          icon: "success"
      });
      setTimeout(function() {
          window.location = "contactus.html";
      }, 5000);
  }, 1000);
    }
}