// cari data
function searchName(word, limit, callback) {

    // data
    let name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ]

    // mencari data berdasarkan word dan membatasi jumlah data yang muncul
    let search = name.filter(val => val.toLowerCase().includes(word)).slice(0, limit);;

    // kirim param ke function showName
    callback(search)
}


// tampil data
function showName(search) {
    console.log(search);
}

searchName("a", 3, showName)