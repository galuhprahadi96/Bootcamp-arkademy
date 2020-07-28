function seleksiNilai(nilaiAwal, nilaiAkhir, arrNilai) {
    // validasi
    if (nilaiAwal >= nilaiAkhir) {
        return 'nilai akhir harus lebih besar dari nilai awal'
    } else if (arrNilai.length < 5) {
        return 'jumlah angka dalam dataArray tidak ada'
    } else {
        cariNilai(nilaiAwal, nilaiAkhir, arrNilai);
    }
}


// cari nilai
function cariNilai(nilaiAwal, nilaiAkhir, arrNilai) {
    //filter
    const result = arrNilai.filter(val => {
        return val >= nilaiAwal && val <= nilaiAkhir
    })

    // sorting
    console.log(result.sort(function (a, b) { return a - b }));
}


seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])