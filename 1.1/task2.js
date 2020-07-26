const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;
const matematika = 80;


if (typeof bahasaIndonesia !== 'number') {
    console.log('nilai bahasa indonesia belum diisi dan harus angka');
} else if (typeof bahasaInggris !== 'number') {
    console.log('nilai bahasa bahasaInggris belum diisi dan harus angka');
} else if (typeof ipa !== 'number') {
    console.log('nilai bahasa ipa belum diisi dan harus angka');
} else if (typeof matematika !== 'number') {
    console.log('nilai bahasa matematika belum diisi dan harus angka');
} else {

    let hasil = (bahasaIndonesia + bahasaInggris + ipa + matematika) / 4
    console.log(`Rata-Rata = ${hasil}`);

    cekGrade(hasil);

}

/// Fungsi cek grade
function cekGrade(hasil) {
    if (hasil >= 90) {
        console.log('Grade = A');
    } else if (hasil >= 80) {
        console.log('Grade = B');
    } else if (hasil >= 70) {
        console.log('Grade = C');
    } else if (hasil >= 60) {
        console.log('Grade = D');
    } else {
        console.log('Grade = E');
    }
}