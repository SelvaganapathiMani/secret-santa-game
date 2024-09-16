const fs = require('fs');
const { format } = require('date-fns');
const {parseCsvFile, writeCSV} = require('../helpers/csvHandler')


function assignSecretSantas(employees, previousAssignments) {
  let available = [...employees];
  let assignments = [];
  
  employees.forEach(employee => {
    if (employee.Employee_Blocked == 'TRUE') {
      console.log(`BLOCKED EMPLOYE ${employee.Employee_Name}`)
      return true
    }
    // Filter potential children, excluding the employee themselves and last year's assignment
    const potentialChildren = available.filter(child =>
      child.Employee_Blocked == 'FALSE' &&
      child.Employee_EmailID !== employee.Employee_EmailID && 
      !previousAssignments.some(a => a.Secret_Child_EmailID === child.Employee_EmailID && a.Secret_Child_EmailID === employee.Employee_EmailID)
    );


      if (potentialChildren.length === 0) {
          throw new Error(`No valid assignments possible for ${employee.Employee_Name}`);
      }

      // Randomly choose a child from the available options
      const chosenChild = potentialChildren[Math.floor(Math.random() * potentialChildren.length)];

      assignments.push({
          Employee_Name: employee.Employee_Name,
          Employee_EmailID: employee.Employee_EmailID,
          Secret_Child_Name: chosenChild.Employee_Name,
          Secret_Child_EmailID: chosenChild.Employee_EmailID
      });

      // Remove the chosen child from the available list
      available = available.filter(child => child !== chosenChild);
  });

  return assignments;
}

// Retry mechanism to attempt assignments multiple times
function retryAssignments(employees, previousAssignments, maxAttempts = 5) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
          return assignSecretSantas(employees, previousAssignments);
      } catch (error) {
          console.warn(`Attempt ${attempt} failed: ${error.message}`);
      }
  }
  throw new Error('Could not assign Secret Santas after multiple attempts.');
}

async function handleSecretSanta(req, res) {
  try {

      const timestamp = format(new Date(), 'yyyyMMdd_HHmmss');
      const outputFile =`output_${timestamp}.csv`;
    
    // Parse the uploaded CSV files
      const employees = await parseCsvFile(req.files.employees[0].path);
      const previousAssignments = await parseCsvFile(req.files.previous[0].path);

      // Retry the assignment process multiple times
      const assignments = retryAssignments(employees, previousAssignments);

      await writeCSV(outputFile, assignments);

      res.download(outputFile, (err) => {
        if (err) {
          console.error('Error downloading file:', err);
        }
        fs.unlinkSync(req.files.employees[0].path);
        fs.unlinkSync(req.files.previous[0].path);
        fs.unlinkSync(outputFile);
      });

  } catch (error) {
      console.error(error.message);  // Log the specific error
      res.status(500).json({ message: error.message });
  }
}

module.exports = { handleSecretSanta };
