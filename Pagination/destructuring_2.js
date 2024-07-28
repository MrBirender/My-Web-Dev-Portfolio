const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

   function highestPaid(employees){
    let maxSalary = 0;
    let highestPaidEmployee = null;

    for(const employee of employees){
      const{salary} = employee;

      if(salary > maxSalary){
        maxSalary = salary;
        highestPaidEmployee = employee;
      }

    }
  return highestPaidEmployee
   }
  
  // console.log(highestPaid(employees)); 

function destructuringToSwap(employees){
  const [firstEmployee, midEmployee, lastEmployee] = employees;
  
  employees[0] = lastEmployee;
  employees[employees.length-1] =  firstEmployee;

  return employees
}
  
  console.log(destructuringToSwap(employees));