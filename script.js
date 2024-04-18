// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // Get user input to create and return an array of employee objects
  let employees = [];
  let addEmployee = true;

  while (addEmployee) {
    const firstName = prompt("Enter first name");
    const lastName = prompt("Enter last name");
    const salary = prompt("Enter employee salary");
    

    console.log(firstName, lastName, salary)
    console.log("Salary datatype: ", typeof salary);

    let validSalary = isValidSalary(salary);
    console.log("Is Valid Number: ", validSalary);
    console.log(firstName, lastName, validSalary);

    //STORE the CAPTURED data
    let employeeObj = {
      firstName: firstName,
      lastName: lastName,
      salary: validSalary
    }

    employees.push(employeeObj);
    console.log("Current Employees: ", employees);
    addEmployee = confirm("Add another employee?");
  }
  return employees;
}




//Validate the numeric data before calculating the average 
function isValidSalary(x) {
  console.log("Data: ", x);
  console.log("Type: ", typeof x);

  if (isNaN(x)) {
    console.log("Not a number");
    alert("Not a valid Number!");
    let newSalary = prompt("Enter Employee Salary");
    return newSalary;
  } else {
    return parseInt(x);
  }
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += parseInt(employeesArray[i].salary);
  }
  const average = Math.floor(totalSalary / employeesArray.length);

  console.log(`Average Employee Salary: ${average}`)
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const RandomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]

  console.log(`Congratulations to ${RandomEmployee.firstName} ${RandomEmployee.lastName}, our random drawing winner!`)
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
