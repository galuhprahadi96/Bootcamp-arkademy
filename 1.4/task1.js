function reverseWord(word) {
  let reverse = "";

  for (let x = word.length - 1; x >= 0; x--) {
    reverse += word[x];
  }
  if (word.toLowerCase() == reverse.toLowerCase()) {
    console.log("Palindrom");
  } else {
    console.log("Bukan Palindrom");
  }
}

reverseWord("Malam");
