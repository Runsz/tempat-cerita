function simpan() {
    let cerita = localStorage.getItem("cerita")
    let newCerita = document.getElementById("input").value

    if (cerita == null) {
        cerita = newCerita
    }
    else {
        cerita = cerita +"<br>"+newCerita
    }

    localStorage.setItem("cerita",cerita)
    alert("Cerita Tersimpan")
    document.getElementById("input").value=null
}

function lihat() {
    let cerita = localStorage.getItem("cerita")

    if (cerita=="" || cerita==null) {
        alert("Tidak ada cerita tersimpan")
    }
    else{
        document.getElementById("hasil").innerHTML=`<p>${cerita}</p><button id="button" type="button" onclick="hapus()">Hapus Cerita</button>`
    }
}

function hapus() {
    document.getElementById("hasil").innerHTML=null
}

let color = ''

const ganti = () => {
    color=document.getElementById("warna").value

    document.getElementById('body').style.background=color
    localStorage.setItem('warna', color)
}

let visit = localStorage.getItem('visit')

const set = () => {
    color = localStorage.getItem('warna')
    document.getElementById('body').style.background=color
    document.getElementById("warna").value=color

    
    if (visit > 0) {
        visit = parseInt(visit)+1
        if(visit==17) {
            alert("Happy Birthday Danis Ratna")
            alert("Happy Sweet Seventeen")
            alert("Semoga dengan bertambahnya umur bertambah juga keimannanya,rejekinya,dan kecerdasannya")
            alert("Cowoknya jangan nambah aku saja satu dihatimu wkwk")
            alert("ini hadiah buat kamu")
            alert("Maaf g spesial dan g ada harganya")
            alert("Welcome To Website")
        }
    }
    else if(visit == 0 || visit == null) {
        visit = visit + 1
        alert("Happy Birthday Danis Ratna")
        alert("Happy Sweet Seventeen")
        alert("Semoga dengan bertambahnya umur bertambah juga keimannanya,rejekinya,dan kecerdasannya")
        alert("Cowoknya jangan nambah aku saja satu dihatimu wkwk")
        alert("ini hadiah buat kamu")
        alert("Maaf g spesial dan g ada harganya")
        alert("Welcome To Website")
    }

    localStorage.setItem("visit", visit)
}

