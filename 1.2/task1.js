const arr = [8, 2, 9, 1, 3, 5, 7, 6, 4];

// 1. forEach = loop data array
arr.forEach(e => {
    let data = []
    data += e
    // console.log(data);
});


// 2. Sort = mengurutkan data array
const sortData = arr.sort();
// console.log(sortData);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 3. Filter = menyaring data array
const filterData = arr.filter(val => {
    return val <= 5
})
//console.log(filterData);
//[1,2,3,4,5]


// 4. Push = menambah data ke dalam array
arr.push("Galuh", "Prahadi", "Gumelar");
//console.log(arr);
//[1,2,3,4,5,6,7,8,9,"Galuh","Prahadi","Gumelar"]


// 5. splice = menghapus data dengan index tertentu
const buah = ["pisang", "semangka", "anggur", "apel"];
// hapus anggur
buah.splice(2, 1);
// console.log(buah)
//['pisang','semangka','apel']


// 6. includes = mengecek apakah sebuah data ada di dalam array atau tidak
const cariBuah = buah.includes("apel");
// console.log(cariBuah);
//true


// 7. map = membalik data
let bunga = ["mawar", "melati", "tulip"];
let show = bunga.reverse();
// console.log(show);
//['tulip', 'melati', 'mawar']


// 8. join = menggabungkan data array ke string
let say = ["hello", "world"];
let joinData = say.join(' ');
// console.log(joinData);
//hello world


// 9. toString = merubah data array ke string
const toStr = say.toString()
// console.log(toStr)
//hello, world


// 10. pop = menghapus data array dengan index terakhir
const popData = say.pop()
//console.log(popData);
// hello