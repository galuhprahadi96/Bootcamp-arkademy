// 1. Deteksi Palindrom

// function deteksiPalindrom(word) {
//   // tampung data yang sudah di reverse
//   let reverse = "";

//   // proses reverse data
//   for (let x = word.length - 1; x >= 0; x--) {
//     reverse += word[x];
//   }

//   // pencocokan data
//   if (word == reverse) {
//     console.log("Palindrom");
//   } else {
//     console.log("Bukan Palindrom");
//   }
// }

// deteksiPalindrom("malam");

// 2. reverse word

function reverseWord(words) {
  const reverse = words.split(" ").reverse().join(" ");
  console.log(reverse);
}

reverseWord("saya belajar javascript");
