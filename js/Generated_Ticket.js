let isi = document.querySelector(".Ticket")
let isi2 = ""
let isi3 = document.querySelector(".DestinasiTicket")
let isi4 = ""

GetDataPesanTicket()
.then((data) => {
    for (const content of data) {
        isi2 += `
        <div class="content">
            <div class="pesawat">
                <img src="${content.gambar}" alt="" width="70px" height="auto">
                <p>${content.nama}</p> 
            </div>
            <p>${content.dari}</p>
            <p>${content.ke}</p>
            <p>${content.waktu} (WIB)</p>
            <p>${content.harga}/org</p>
            <p>${content.kelas}</p>
        </div> 
        `
    }
    return isi2
})
.then((data) => {
    console.log(data)
    isi.innerHTML += data
})

GetDataTicketDestination()
.then((data) => {
    for (const content of data) {
        isi4 += `
        <div class="destination">
            <div class="nama">${content.nama}</div>
            <div class="rating">${content.rating}</div>
            <div class="icon">
                <img src="${content.gambar}" alt="">
            </div>
        </div>
        `
    }
    return isi4
})
.then((data) => isi3.innerHTML += data)