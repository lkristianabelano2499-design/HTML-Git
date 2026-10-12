// File ini murni JavaScript, TIDAK BOLEH ada tag HTML (<script>, <body>, dll)

function jalankanProgram() {
    let hasil = "";

    // ===== INPUT =====
    let nama = prompt("Masukkan nama Anda:");
    let umur = Number(prompt("Masukkan umur Anda:"));

    // ===== TIPE DATA =====
    let mahasiswa = true;
    let jurusan = "Informatika";

    hasil += "<h3> === Data Anda === </h3>";
    hasil += "Nama: " + nama + "<br>";
    hasil += "Umur: " + umur + "<br>";
    hasil += "Mahasiswa: " + mahasiswa + "<br>";
    hasil += "Jurusan: " + jurusan + "<br><br>";

    // ===== LOOP FOR =====
    hasil += "<h3> === Perulangan FOR === </h3>";
    for (let i = 1; i <= 5; i++) {
        hasil += "Perulangan ke-" + i + "<br>";
    }

    // ===== LOOP WHILE =====
    hasil += "<h3> === Perulangan WHILE === </h3>";
    let angka = 1;
    while (angka <= 3) {
        hasil += "Angka: " + angka + "<br>";
        angka++; // Menambah angka agar tidak terjadi infinite loop
    }

    hasil += "<br><strong> === Program Selesai === </strong>";

    // Memasukkan semua teks di dalam variabel 'hasil' ke dalam div id="output" di HTML
    document.getElementById("output").innerHTML = hasil;
}