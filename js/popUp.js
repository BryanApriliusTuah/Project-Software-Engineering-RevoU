let popUp = document.querySelector(".popUp")
let darken = document.querySelector(".darken")

function getData(data){
    popUp.style.visibility = "visible"
    popUp.style.opacity = "1"
    darken.style.visibility = "visible"
    darken.style.opacity = "1"
    popUp.innerHTML = 
    `
        <img src="${data.querySelector('.icon img').src}" alt="">
        <div class="information">
            <h1>${data.querySelector('.nama').textContent}</h1>
            <div class="booking">
                <label for="">Check In : </label>
                <input type="date" id="checkInInput" required >
            </div>
            <div class="booking">
                <label for="">Check Out : </label>
                <input type="date" id="checkOutInput" required >
            </div>
            <div class="button">
                <button onclick = "removePopUp()">Cancel</button>
                <button class="btn2" onclick = "confirmPopUp()">Confirm</button>
            </div>
        </div>
    `
    darken.addEventListener('click',function(){
        removePopUp()
    })
}

function removePopUp(){
    popUp.style.opacity = "0"
    popUp.style.visibility = "hidden"

    darken.style.opacity = "0"
    darken.style.visibility = "hidden"

    popUp.innerHTML = ``
}

function confirmPopUp(){
    let img = document.querySelector('img').src;
    let nama = document.querySelector('.information h1').textContent
    let checkInValue = document.getElementById('checkInInput').value;
    let checkOutValue = document.getElementById('checkOutInput').value;

    if (checkInValue === '' || checkOutValue === '') {
        // alert("Please fill in both check-in and check-out dates.");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Anda Tidak Mengisi Tanggal CheckIn ataupun CheckOut!"
          });
        return false; // Prevent form submission
    }else{
        popUp.innerHTML = 
        `
        <div class="confirmation">
            <h1>Your room has been booked!</h1>
            <p class="room">Room : ${generateString(2)}</p>
            <p class="pay">Code Payment : ${generateString(5)}</p>
            <button onclick = "removePopUp()">OK</button>
        </div>
        `
        let room = document.querySelector('.confirmation .room').textContent;
        let pay = document.querySelector('.confirmation .pay').textContent;
        console.log(img,nama,checkInValue,checkOutValue,room,pay)
        SendDataDestination(img,nama,checkInValue,checkOutValue,room,pay)

    }


}

function SendDataDestination(d1,d2,d3,d4,d5,d6){
    let array = []
    array.push(d1,d2,d3,d4,d5,d6)
    console.log(array)
    SendDataTicketDestination(array)
}

// program to generate random strings
// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}