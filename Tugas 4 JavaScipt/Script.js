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


    var wadah = document.getElementById("wadahTeks");
    wadah.innerHTML = "";
    for (var i = 1; i <= jumlah; i++) {
    wadah.innerHTML += '<div class="baris">Pilihan ' + i + ' : <input type="text" id="teks' + i + '"></div>';
        }
    tampil("langkah2");

}


function okTeks() {
  opsi = [];
  for (var i = 1; i <= jumlah; i++) {
    var teks = document.getElementById("teks" + i).value.trim();
    if (teks == "") { alert("Pilihan " + i + " harus diisi!"); return; }
    opsi.push(teks);
  }
 
  var radio = document.getElementById("wadahRadio");
  var dd = document.getElementById("dropdown");
  radio.innerHTML = "";
  dd.innerHTML = "";
 
  for (var j = 0; j < opsi.length; j++) {
    var label = document.createElement("label");
    var rb = document.createElement("input");
    rb.type = "radio";
    rb.name = "pilihan";
    rb.value = j;
    rb.checked = (j == 0);
    rb.onclick = function () { dd.value = this.value; };
    label.appendChild(rb);
    label.appendChild(document.createTextNode(" " + opsi[j]));
    radio.appendChild(label);
    radio.appendChild(document.createElement("br"));
 
    var op = document.createElement("option");
    op.value = j;
    op.textContent = opsi[j];
    dd.appendChild(op);
  }
  dd.onchange = function () {
    document.getElementsByName("pilihan")[dd.value].checked = true;
  };
  tampil("langkah3");
}


function okPilihan() {
  pilihan = opsi[document.getElementById("dropdown").value];
  tampil("langkah4");
}


function okEmail() {
  var kotak = document.getElementById("email");
  var pola = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/;
 
  if (!pola.test(kotak.value.trim())) {
    alert("Format email salah! Contoh: nama@domain.com\nSilakan masukkan ulang.");
    kotak.value = "";
    kotak.focus();
    return;
  }
  email = kotak.value.trim();
 
  document.getElementById("hasil").textContent =
    "Hallo, nama saya " + nama + ", email " + email +
    " saya mempunyai sejumlah " + jumlah + " pilihan yaitu " +
    opsi.join(", ") + ", dan saya memilih " + pilihan;
}
