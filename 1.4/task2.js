function arkFood(harga, voucher, jarak, pajak) {
  const potongan = diskon(voucher, harga);
  const biayaAntar = biayaOrder(jarak);
  const pajakRestoran = pajakResto(harga, pajak);
  const total = harga - potongan + biayaAntar + pajakRestoran;

  console.log(`
      Harga       = ${harga}
      Potongan    = ${potongan}
      Biaya Antar = ${biayaAntar}
      Pajak       = ${pajakRestoran}
      Sub Total   = ${total}
  `);
}

// hitung biayaOrder
function biayaOrder(jarak) {
  let biaya;

  // biaya jarak tempuh 2 km
  if (jarak == 2) {
    biaya = 5000;
    return biaya;
  } else if (jarak > 2) {
    // biaya jarak tempuh lebih dari 2 km
    biaya = (jarak - 2) * 3000 + 5000;
    return biaya;
  } else {
    // biaya jarak tempuh
    biaya = 3000;
    return biaya;
  }
}

// pajakResto
function pajakResto(harga, pajak) {
  let pjResto;
  // bila dikenakan pajak
  if (pajak === true) {
    pjResto = (harga * 5) / 100;
    return pjResto;
  } else {
    // jika tidak
    pjResto = 0;
    return pjResto;
  }
}

// diskon
function diskon(voucher, harga) {
  // diskon
  let diskon;

  // cek voucher
  if (voucher == "ARKAFOOD5") {
    diskon = (harga * 50) / 100;
    return diskon;
  } else if (voucher == "DITRAKTIRDEMY") {
    diskon = (harga * 60) / 100;
    return diskon;
  } else {
    diskon = harga;
    return diskon;
  }
}

arkFood(75000, "ARKAFOOD5", 5, true);
