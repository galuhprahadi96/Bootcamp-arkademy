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
    let result = []

    arrNilai.map(nilai => {
        if (nilai >= nilaiAwal && nilai <= nilaiAkhir) {
            result.push(nilai);
        }
    })
    // sorting
    console.log(result.sort(function (a, b) { return a - b }));
}


console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))