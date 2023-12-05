let isi = document.querySelector(".contents .destination")
function Data(data){
    let isi2 = ""
    let pInnerText = data.querySelector('p').textContent;
    console.log(pInnerText)
    GetDataDestination(pInnerText)
    .then(data => {
        for (const content of data) {
            isi2 += 
            `
            <div class="destination-1" onclick="getData(this)">
                <div class="hover"></div>
                <div class="click">Detail</div>
                <div class="content">
                    <div class="nama">${content.Destinasi}</div>
                    <div class="rating">⭐ ${content.Rating}</div>
                    <div class="icon">
                        <img src="./images/${content.Gambar}" alt="">
                    </div>
                </div>
            </div>
            `
        }
        return isi2
    })
    .then((data) => isi.innerHTML = data)
}