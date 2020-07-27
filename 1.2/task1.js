const arr = [8, 2, 9, 1, 3, 5, 7, 6, 4];

// 1. Sort = mengurutkan data array
const sortData = arr.sort();
// console.log(sortData);


// 2. Filter = menyaring data array
const filterData = arr.filter(val => {
    return val <= 5
})
// console.log(filterData);

// 3. Push = menambah data ke dalam array
arr.push("Galuh", "Prahadi", "Gumelar");
// console.log(arr);