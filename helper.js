const printDate = function() {
    let currentdate = Date.now();
          
    let date_obj = new Date(currentdate);
    let date = date_obj.getDate();
    console.log('Date: ' + date)
}

const printMonth = function() {
    let currentdate = Date.now();
          
    let date_obj = new Date(currentdate);
    let month = date_obj.getMonth() + 1;
    console.log('Month: ' + month)
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth