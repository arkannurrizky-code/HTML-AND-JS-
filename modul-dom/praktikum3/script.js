// ===== Bagian A: getElementsByClassName =====

const buah = document.getElementsByClassName("buah");

console.log(buah);
console.log(buah.length);
console.log(buah[0]);

// Mengubah warna buah pertama menjadi merah
buah[0].style.color = "red";

// Mengubah semua buah
for (let i = 0; i < buah.length; i++) {
    buah[i].style.fontWeight = "bold";
    buah[i].textContent = (i + 1) + ". " + buah[i].textContent;
}


// ===== Bagian B: getElementsByTagName =====

const semuaLi = document.getElementsByTagName("li");

console.log(semuaLi.length);

// Mengubah background semua li
for (let i = 0; i < semuaLi.length; i++) {
    semuaLi[i].style.backgroundColor = "lightyellow";
}


// ===== Tantangan Mandiri 3 =====

// 1. Mengubah warna elemen li terakhir menjadi biru
semuaLi[semuaLi.length - 1].style.color = "blue";


// 2. Mengambil semua elemen h2
const semuaH2 = document.getElementsByTagName("h2");

// Mengubah semua h2 menjadi warna teal
for (let i = 0; i < semuaH2.length; i++) {
    semuaH2[i].style.color = "teal";
}