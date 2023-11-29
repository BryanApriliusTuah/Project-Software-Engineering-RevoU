let isi = document.querySelector(".content")
let btn = document.querySelector(".pesan-ticket")
let isi2 = ""

function Pesan(){
    alert("Ticket telah dipesan")
    window.location = "ticket.html"
}

function submit(){
    let dari = document.querySelector("#dari")
    let ke = document.querySelector("#ke")
    let jenis_penerbangan = document.querySelector("#jenis-penerbangan")
    let tanggal_pergi = document.querySelector("#tanggal-pergi")
    let tanggal_pulang = document.querySelector("#tanggal-pulang")
    let kelas = document.querySelector("#kelas-penerbangan")

    GetDataTicket(dari.value)
    .then((data) => {
        for (const ticket of data) {
            isi2 += 
            `
                <div class="search-ticket">
                    <div class="pesawat">
                        <img src="images/citilink.png" alt="" width="50px" height="auto">
                        <p>${ticket.Jenis_Pesawat}</p> 
                    </div>
                    <p>${ticket.Waktu_Berangkat} - ${ticket.Waktu_Tiba}</p>
                    <p>${ticket.Harga}/org</p>
                    <button onclick="Pesan()">Pesan</button>
                </div> 
            `
        }
        return isi2
    }).then((data) => isi.innerHTML = data)
}
