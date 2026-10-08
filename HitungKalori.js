function hitungKalori(lari = 0, pushup = 0, plank = 0) {
    let kaloriLari = (lari / 5) * 60;
    let kaloriPushup = (pushup / 30) * 200;
    let kaloriPlank = plank * 5;
    
    let total = kaloriLari + kaloriPushup + kaloriPlank;
    
    console.log("=========================================");
    console.log("      PROGRAM PENGHITUNG KALORI OLAHRAGA     ");
    console.log("=========================================");
    console.log(`- Durasi Lari (${lari} menit) : ${kaloriLari.toFixed(2)} kkal`);
    console.log(`- Durasi Push-up (${pushup} menit) : ${kaloriPushup.toFixed(2)} kkal`);
    console.log(`- Durasi Plank (${plank} menit) : ${kaloriPlank.toFixed(2)} kkal`);
    console.log("-----------------------------------------");
    console.log(`TOTAL KESELURUHAN KALORI: ${total.toFixed(2)} kkal`);
    console.log("=========================================");
    
    return total;
}

// Ganti angka di dalam kurung ini sesuai durasi yang kamu mau (dalam menit)
// Contoh: Lari 10 menit, Push-up 0 menit, Plank 2 menit
hitungKalori(10, 0, 2);