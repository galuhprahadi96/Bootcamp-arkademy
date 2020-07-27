const matematika = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;


if (typeof bahasaIndonesia !== 'number' || typeof bahasaInggris !== 'number' || typeof ipa !== 'number' || typeof matematika !== 'number') {
    console.log('ada nilai yang belum diisi dan harus angka');
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
