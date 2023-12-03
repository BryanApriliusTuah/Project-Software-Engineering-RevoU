let isi = document.querySelector(".content")
let btn = document.querySelector(".pesan-ticket")
let isi2 = ""

function simpandata(data){
    let array = []
    array.push(data.querySelector(".pesawat img").src)
    let data2 = data.querySelectorAll('p')
    data2.forEach(function(isi){
        array.push(isi.textContent)
    })
    console.log(array)
    SendDataPesanTicket(array)
    Pesan()
}

function Pesan(){
    alert("Ticket telah dipesan")
    window.location = "ticket.html"
}

function submit(){
    let dari = document.querySelector("#dari")
    let ke = document.querySelector("#ke")
    let jenis_penerbangan = document.querySelector("#jenis-penerbangan")
    let tanggal_pergi = document.querySelector("#tanggal-pergi")
    let kelas = document.querySelector("#kelas-penerbangan")

    GetDataTicket(dari.value,ke.value,jenis_penerbangan.value,tanggal_pergi.value,kelas.value)
    .then((data) => {
        if(data.length == 0){
            alert("Jadwal Penerbangan Tidak Ada")
        }else{
        for (const ticket of data) {
            isi2 += 
            `
                <div class="search-ticket">
                    <div class="pesawat">
                        <img src="images/${ticket.Gambar}.png" alt="" width="70px" height="auto">
                        <p>${ticket.Jenis_Pesawat}</p> 
                    </div>
                    <p>🛫 ${ticket.Dari}</p>
                    <p>🛬 ${ticket.Ke}</p>
                    <p>🕔 ${ticket.Waktu_Berangkat} - ${ticket.Waktu_Tiba} (WIB)</p>
                    <p>🫰🏻 ${ticket.Harga}/org</p>
                    <p>💺 ${ticket.Kelas}</p>
                    
                    <button class="PesanBtn">🔖Pesan</button>
                </div> 
            `
        }
        isi.innerHTML = isi2

        let pesanButtons = document.querySelectorAll('.PesanBtn');
        pesanButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                let searchTicketDiv = this.closest('.search-ticket');
                simpandata(searchTicketDiv)
            });
        });

    }
    })
}