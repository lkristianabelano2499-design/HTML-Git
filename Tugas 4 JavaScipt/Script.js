var nama, jumlah, email, pilihan;
var opsi = [];

function tampil(id) { document.getElementById(id).classList.remove("hidden"); }


function okJumlah() {
    nama = document.getElementById("nama").value.trim();
    jumlah = Number(document.getElementById("jumlah").value);
 
    if (nama == "") { alert("Nama harus diisi!"); return; }
    if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 10) {
        alert("Jumlah pilihan harus bilangan bulat 1 - 10!");
    return;
    }
}


