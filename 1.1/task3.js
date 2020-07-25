
const printSegitiga = 5;


if (typeof printSegitiga !== 'number') {
    console.log('Data harus number');
} else {
    cetak(printSegitiga);
}


//cetak segitiga
function cetak(printSegitiga) {
    for (let i = printSegitiga; i >= 1; i--) {
        let hasil = '';
        for (let j = 1; j <= i; j++) {
            hasil += j;
        }
        console.log(hasil);
    }
}