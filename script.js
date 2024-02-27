// Assignment: Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// put it at the top, to allow it to continue adding elements to the array.
const employeesArray=[];
// Assignment: collect employee data
const collectEmployees = function() {
  //Assignment: [employee1,employss2]
  // Assignment: : Get user input to create and return an array of employee objects
  //added prompts and indicated that the variable is to print the const stated above
  const firstName = prompt("please enter their first name");
  const lastName = prompt("please enter the last name");
  const salary= prompt("please enter the employee's salary");
  const employee = {
    firstName:firstName, //keep these as data under that category
    lastName:lastName,
    salary:salary,
  }
  //push employees into the employeesArray
  //added the sort to allow the names to sorted in alphabetical order according to last name.
  employeesArray.push(employee)
  console.log(employeesArray);
  console.log(employeesArray.sort());
  return employeesArray;
}
// Assignment: set a for loop for 9-20 to repeat, and give the option to stop and display
// Assignment: Display the average salary
// Assignment: : Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
//added sum of salaries compiled, and to be divided by the number of employees inputted, as a number object.
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum += Number(employeesArray[i].salary);
  } 
  //to ensure that the currency output would be in USD, I added parseInt and referenced the string, in order to ensure that it would add the $ in recognition of USD
  console.log(parseInt(sum).toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  }));
  //average of salaries = total salary sums/number of employees inputted
  average = sum/employeesArray.length
  return parseInt(average).toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  });
}
// Assignment: Select a random employee
// Assignment: : Select and display a random employee
// created new variable randomPosition, then directed to convert to integers for Math.random, then defined randomEmployee to be logged onto the console with ${to output full name} 
const getRandomEmployee = function(employeesArray) {
  var randomPosition = 0;
  randomPosition = Math.floor(employeesArray.length*Math.random());
  //floor rounds down, then the random selects an integer according to employeesArray after sort.
  var randomEmployee;
  randomEmployee = employeesArray[randomPosition]
  console.log (`${randomEmployee.firstName} ${randomEmployee.lastName}`);
}
//  ====================
//  Assignment: STARTER CODE: Do not modify any of the code below this line:
// Assignment: Display employee data in an HTML table
// stores 'collect employee' function, prompts it to run the function (), if it has a rturn in it.
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');
  // Clear the employee table
  employeeTable.innerHTML = '';
    // Assignment: Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    const newTableRow = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);
    // Assignment: Format the salary as currency. How to add USD to currency?
    const salaryCell = document.createElement("td");
//Added parseInt to define the currentEmployee.salary as an integer, rather than a string
//toLocaleString creates a string, which defines the currency symbol to use and display
    salaryCell.innerHTML = parseInt(currentEmployee.salary).toLocaleString("en-US",{
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
  let averageOut = 0; 
  averageOut = displayAverageSalary(employees);
  console.log(averageOut);
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
// Assignment: Add event listener to 'Add Employees' button
//Added the prompts under const collectEmployees, which comes after const addEmployeesBtn then const employeesArray=[]; to allow input via prompt
addEmployeesBtn.addEventListener('click', trackEmployeeData);