let popUp = document.querySelector(".popUp")

function getData(data){
    popUp.style.visibility = "visible"
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

}

function removePopUp(){
    popUp.style.visibility = "hidden"
    popUp.innerHTML = ``
}

function confirmPopUp(){
    let img = document.querySelector('img').src;
    let nama = document.querySelector('.information h1').textContent
    let checkInValue = document.getElementById('checkInInput').value;
    let checkOutValue = document.getElementById('checkOutInput').value;
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