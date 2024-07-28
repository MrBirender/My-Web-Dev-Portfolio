const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];


function employeeInformation(employees){
    let obj = employees[1];

    let {name, age, department, salary} = obj
    console.log(`secondEmployeeName:${name}, secondEmployeeDepartment: ${department}` )
}
employeeInformation(employees)

const newEmployees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

function averageSalary(newEmployees){
    let totalSalary = 0;

    for(const{salary} of employees){
        totalSalary += salary;
    }
     
    let averageSalary = totalSalary/employees.length
    return averageSalary
} 
  
  console.log(averageSalary(newEmployees));

  const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];


  function thirdEmployeeInfo(employees){
    const {name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary} = employees[2];

    let bonus = 0.1 * thirdEmployeeSalary;

    return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus} `
  }
  
  console.log(thirdEmployeeInfo(employees2)); // O