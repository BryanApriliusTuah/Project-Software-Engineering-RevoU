let popUp = document.querySelector(".popUp")
function SendDataDestination(data){
    let array = []
    array.push(data.querySelector(".nama").textContent,data.querySelector(".rating").textContent,data.querySelector(".icon img").src)
    console.log(array)
    SendDataTicketDestination(array)
}

function getData(data){
    popUp.style.visibility = "visible"
    popUp.innerHTML = `
    <img src="${data.querySelector('.icon img').src}" alt="">
    <div class="information">
        <h1>${data.querySelector('.nama').textContent}</h1>
        <div class="booking">
            <label for="">Check In : </label>
            <input type="date" required >
        </div>
        <div class="booking">
            <label for="">Check Out : </label>
            <input type="date" required >
        </div>
            <div class="button">
            <button onclick = "removePopUp()">Cancel</button>
            <button class="btn2" onclick = "confirmPopUp()">Confirm</button>
        </div>
        
    </div>
        `
    let a = document.querySelector(".button .btn2")
    a.addEventListener('click',function(event){
        SendDataDestination(data)
    })
}

function removePopUp(){
    popUp.style.visibility = "hidden"
    popUp.innerHTML = ``
}

function confirmPopUp(){
    console.log(document.querySelectorAll(".booking input")[0].value)
    if(document.querySelectorAll(".booking input")[0].value === ""){
        alert("Isi")
    }else{
        popUp.innerHTML = `
        <div class="confirmation">
            <h1>Your room has been booked!</h1>
            <p>Room : ${generateString(2)}</p>
            <p>Code Payment : ${generateString(5)}</p>
            <button onclick = "removePopUp()">OK</button>
        </div>
        `
    }
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