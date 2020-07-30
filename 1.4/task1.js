function reverseWord(word) {
  // tampung data yang sudah di reverse
  let reverse = "";

  // proses reverse data
  for (let x = word.length - 1; x >= 0; x--) {
    reverse += word[x];
  }

  // pencocokan data
  if (word.toLowerCase() == reverse.toLowerCase()) {
    console.log("Palindrom");
  } else {
    console.log("Bukan Palindrom");
  }
}

reverseWord("Malam");
