function arkFood(harga, voucher, jarak, pajak) {
  console.log(`Harga : ${harga}`);
  diskon(voucher, harga);
  resto(harga, pajak);
}

function resto(harga, pajak) {
  let dikenakan = "";
  if (pajak === true) {
    dikenakan = (harga * 5) / 100;
  } else {
    dikenakan = 0;
  }
  console.log(dikenakan);
}

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

arkFood(75000, "ARKAFOOD5", 5, true);
