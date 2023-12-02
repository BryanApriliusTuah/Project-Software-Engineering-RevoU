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

async function SendDataPesanTicket(arraydata){
    let data = {
        gambar : arraydata[0],
        nama : arraydata[1],
        dari : arraydata[2],
        ke : arraydata[3],
        waktu : arraydata[4],
        harga : arraydata[5],
        kelas : arraydata[6]
    }

    let response = await fetch("http://localhost:3000/Ticket", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

async function SendDataTicketDestination(arraydata){
    let data = {
        nama : arraydata[0],
        rating : arraydata[1],
        gambar : arraydata[2]
    }

    let response = await fetch("http://localhost:3000/Destination", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

async function GetDataTicketDestination(){
    let response = await fetch("http://localhost:3000/DestinationData",{
        method : "GET"
    })

    let result = await response.json()
    console.log(result)
    return result
}

async function GetDataPesanTicket(){
    let response = await fetch("http://localhost:3000/Ticket",{
        method : "GET"
    })

    let result = await response.json()
    console.log(result)
    return result
}


//Get Data Destination from Server
async function GetDataDestination(){
    let response = await fetch("http://localhost:3000/Destination",{
        method : "GET"
    })

    let result = await response.json()
    console.log("Data Dari Server",result)
    return result
}

async function GetDataTicket(dari,ke,jenis_penerbangan,tanggal_pergi,kelas){
    let response = await fetch(`http://localhost:3000/JadwalTiket?Dari=${dari}&Ke=${ke}&Jenis_Pesawat=${jenis_penerbangan}&Waktu_Berangkat=${tanggal_pergi}&Kelas=${kelas}`,{
        method : "GET",
    })
    let result = await response.json()
    console.log(result)
    return result
}