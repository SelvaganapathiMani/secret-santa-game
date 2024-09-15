const fs = require('fs');
const csv = require('csv-parser');
const { createObjectCsvWriter } = require('csv-writer');


function parseCsvFile(filePath) {
  return new Promise((resolve, reject) => {
      const employees = [];
      fs.createReadStream(filePath)
          .pipe(csv())
          .on('data', (row) => employees.push(row))
          .on('end', () => resolve(employees))
          .on('error', (err) => reject(err));
  });
}

function writeCSV(file, data) {
const csvWriter = createObjectCsvWriter({
  path: file,
  header: [
    {id: 'Employee_Name', title: 'Employee_Name'},
    {id: 'Employee_EmailID', title: 'Employee_EmailID'},
    {id: 'Secret_Child_Name', title: 'Secret_Child_Name'},
    {id: 'Secret_Child_EmailID',title: 'Secret_Child_EmailID'}
  ],
});
console.log(data)
return csvWriter.writeRecords(data);
}

module.exports = {writeCSV,parseCsvFile}
