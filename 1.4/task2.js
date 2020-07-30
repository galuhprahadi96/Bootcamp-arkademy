function arkFood(harga, voucher, jarak, pajak) {
  console.log(`Harga : ${harga}`);
  diskon(voucher, harga);
  resto(harga, pajak);
  biayaOrder(jarak);
}

// hitung biayaOrder
function biayaOrder(jarak) {
  let biaya;
  if (jarak == 2) {
    biaya = 5000;
    console.log(biaya);
  } else if (jarak > 2) {
    biaya = (jarak - 2) * 3000 + 5000;
    console.log(biaya);
  } else {
    biaya = 3000;
    console.log(biaya);
  }
}

// pajakResto
function pajakResto(harga, pajak) {
  let pjResto = "";
  if (pajak === true) {
    pjResto = (harga * 5) / 100;
  } else {
    pjResto = 0;
  }
  console.log(pjResto);
}

// diskon
function diskon(voucher, harga) {
  // diskon
  let diskon = "";
  if (voucher == "ARKAFOOD5") {
    diskon = (harga * 50) / 100;
  } else if (voucher == "DITRAKTIRDEMY") {
    diskon = (harga * 60) / 100;
  } else {
    diskon = harga;
  }
  console.log(diskon);
}

arkFood(75000, "ARKAFOOD5", 10, true);
