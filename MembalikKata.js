function balikKataKalimat(teks) {
    // Memecah string menjadi array, membalik urutannya, lalu menggabungkannya kembali
    return teks.split('').reverse().join('');
}

// Contoh penggunaan program
let inputUser = "Ayo Kita Makan Seblak!";
console.log("=== Program Pembalik Kata/Kalimat ===");
console.log(`Teks asli   : ${inputUser}`);
console.log(`Hasil balik : ${balikKataKalimat(inputUser)}`);