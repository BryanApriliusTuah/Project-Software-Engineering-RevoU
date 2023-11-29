
let isi = document.querySelector(".contents .destination")
let isi2 = "" 
GetDataDestination()
.then(data => {
    for (const content of data) {
        isi2 += 
        `<div class="destination-1" onclick="getData(this)">
            <div class="nama">${content.Destinasi}</div>
            <div class="rating">⭐ ${content.Rating}</div>
            <div class="icon">
                <img src="${content.Gambar}" alt="">
            </div>
        </div>`
    }
    return isi2
})
.then((data) => isi.innerHTML += data)


