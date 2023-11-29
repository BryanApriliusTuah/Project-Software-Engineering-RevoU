//Send Data ContactUs to Server
async function SendDataContactUs(nama,email,message){
    let data = {
        Name : nama,
        Email : email,
        Message : message
    }

    let response = await fetch("http://localhost:3000/ContactUs", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}


//Get Data Destination from Server
async function GetDataDestination(){
    let response = await fetch("http://localhost:3000/Destination",{
        method : "GET"
    })

    let result = await response.json()
    console.log(result)
    return result
}

async function GetDataTicket(dari){
    let response = await fetch(`http://localhost:3000/JadwalTiket?Dari=${dari}`,{
        method : "GET",
    })
    let result = await response.json()
    console.log(result)
    return result
}