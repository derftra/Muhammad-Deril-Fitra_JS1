// contoh if, else
let followers = 2000;

if (followers >= 1000) {
  console.log("follower anda banyak sekali");
} else {
  console.log("follower anda tidak terlalu banyak");
}

// contoh nested if
let ajak_dia_jalan = "mau";
if (ajak_dia_jalan === "mau") {
  console.log("mungkin dia tertarik dengan mu");
} else if (ajak_dia_jalan === "tidak") {
  console.log("dia tidak tertarik dengan mu :(");
} else if (ajak_dia_jalan === "tidak ada jawaban") {
  console.log("dia mengghosting mu :(");
} else {
  console.log("dia benar-benar tidak menyukaimu dengan mu :(");
}

//contoh switch case
let rak = "7";
let jenis;
switch (rak) {
  case "1":
    jenis = "Makanan.";
    break;

  case "2":
    jenis = "Pakaian Dewasa.";
    break;

  case "3":
    jenis = "Minuman.";
    break;

  case "4":
    jenis = "Perabotan.";
    break;

  case "5":
    jenis = "Bahan Pokok.";
    break;

  case "6":
    jenis = "pakaian Bayi.";
    break;

  case "7":
    jenis = "Pakan Hewan.";
    break;

  default:
    jenis = "Pilihlah Nomor rak terlebih dahulu!";
}

console.log(`pada rak nomor ${rak}, merupakan jenis: ${jenis}`);

//contoh for statment
let name = ["Qisti", "Bukhori", "Angger", "Deril", "Abdul"];
for (let j = 3; j < name.length; j++) {
  console.log(name[j]);
}

//contoh while
let jumlahBarang = 5;

while (jumlahBarang < 10) {
  console.log("Motor");
  jumlahBarang++;
}

//contoh do while
let i = 5;
do {
  console.log("Tugas Dari IL");
  i++;
} while (i <= 10);

//contoh function
let alas = 9;
let tinggi = 10;
let luas_segitiga = 0.5 * alas * tinggi;

console.log(
  `luas segitiga yang mempunyai alas: ${alas} dan tinggi ${tinggi}, jadi luas segitiga adalah ${luas_segitiga}`
);
