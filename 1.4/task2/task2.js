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

// hitung biaya antar
function biayaOrder(jarak) {
  let biaya = 0;

  // biaya jarak tempuh 2 km
  if (jarak == 2) {
    biaya = 5000;
  } else if (jarak > 2) {
    // biaya jarak tempuh lebih dari 2 km
    biaya = (jarak - 2) * 3000 + 5000;
  } else {
    // biaya jarak tempuh per km
    biaya = 3000;
  }
  return biaya;
}

// pajakResto
function pajakResto(harga, pajak) {
  let pjResto = 0;
  // bila dikenakan pajak
  if (pajak === true) {
    pjResto = (harga * 5) / 100;
  } else {
    // jika tidak
    pjResto;
  }
  return pjResto;
}

// diskon
function diskon(voucher, harga) {
  // diskon
  let diskon = 0;

  // cek voucher
  if (voucher == "ARKAFOOD5") {
    diskon = (harga * 50) / 100;
    // cek apakah diskon lebih dari 50000
    if (diskon > 50000) {
      diskon = 50000;
    } else {
      diskon;
    }
  } else if (voucher == "DITRAKTIRDEMY") {
    diskon = (harga * 60) / 100;
    // cek apakah diskon lebih dari 30000
    if (diskon > 30000) {
      diskon = 30000;
    } else {
      diskon;
    }
  } else {
    diskon = 0;
  }
  return diskon;
}

arkFood(75000, "ARKAFOOD5", 5, true);
