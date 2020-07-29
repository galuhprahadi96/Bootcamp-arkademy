const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "Juni",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Desember",
    ];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found", []));
    }
  }, 4000);
};

function showMonth(status, month) {
  if (status === null) {
    month.map((val) => {
      console.log(val);
    });
  } else {
    console.log(status);
  }
}

getMonth(showMonth);
