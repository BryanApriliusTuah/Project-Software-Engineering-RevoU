//Send Data ContactUs to Server
async function SendDataContactUs(nama,email,message){
    let data = {
        Name : nama,
        Email : email,
        Message : message
    }

    let response = await fetch("https://gray-gleaming-codfish.cyclic.app/ContactUs", {
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

    let response = await fetch("https://gray-gleaming-codfish.cyclic.app/Ticket", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

async function SendDataTicketDestination(arraydata){
    let data = {
        nama : arraydata[1],
        rating : 5,
        gambar : arraydata[0],
        checkin : arraydata[2],
        checkout : arraydata[3],
        room : arraydata[4],
        pay : arraydata[5]
    }
    console.log(data)
    let response = await fetch("https://gray-gleaming-codfish.cyclic.app/Destination", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
    let result = await response.json()
    console.log(result)

}

async function GetDataTicketDestination(){
    let response = await fetch("https://gray-gleaming-codfish.cyclic.app/DestinationData",{
        method : "GET"
    })

    let result = await response.json()
    console.log(result)
    return result
}

async function GetDataPesanTicket(){
    let response = await fetch("https://gray-gleaming-codfish.cyclic.app/Ticket",{
        method : "GET"
    })

    let result = await response.json()
    console.log(result)
    return result
}


//Get Data Destination from Server
async function GetDataDestination(data){
    let response = await fetch(`https://gray-gleaming-codfish.cyclic.app/Destination?kota=${data}`,{
        method : "GET"
    })

    let result = await response.json()
    console.log("Data Dari Server",result)
    return result
}
async function GetDataDestinationHarga(data){
    let response = await fetch(`https://gray-gleaming-codfish.cyclic.app/DestinationHarga?Destinasi=${data}`,{
        method : "GET"
    })

    let result = await response.json()
    console.log("Data Dari Server",result)
    return result
}

async function GetDataTicket(dari,ke,jenis_penerbangan,tanggal_pergi,kelas){
    let response = await fetch(`https://gray-gleaming-codfish.cyclic.app/JadwalTiket?Dari=${dari}&Ke=${ke}&Jenis_Pesawat=${jenis_penerbangan}&Waktu_Berangkat=${tanggal_pergi}&Kelas=${kelas}`,{
        method : "GET",
    })
    let result = await response.json()
    console.log(result)
    return result
}