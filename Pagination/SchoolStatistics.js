const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };

//   count calculation:

  function countCalculation(school){
   
    const{ departments:{ 
        math: { teachers: mathTeachersCount, students: mathStudentsCount},
        history: {teachers: historyTeachersCount, students: historyStudentsCount}
     }
    
    } = school;


    return {
        mathStudentsCount,
        mathTeachersCount, 
        historyStudentsCount,
        historyTeachersCount
    }
  }


  console.log(countCalculation(school))

  // Find Top Student:

  function findTopStudent(school, courseName){
    let TopStudent = null;
    let topScore = 0;

    for(const {name, className, scores} of school.students){
        const score = scores[courseName]
        if(score > topScore){
           topScore = score;
            TopStudent = {
                name, 
                className, 
                scores
            }
        }
        }

    if(TopStudent){
        return JSON.stringify(TopStudent)
    }
    else{
        return "incorrect course name provided"
    }
  }

  console.log( findTopStudent(school, 'math'))


// Add Department:

function addNewDept(school, newDepartment){
    const updatedDepartment = {...school.departments, ...newDepartment}

    return {
        updatedDepartment
    }
}

const newDepartment = {
    arts: {teachers: 2, students: 50}
}

console.log(addNewDept(school,newDepartment))
  
// highest student count department;

function highestStudentCountDepartment(school){
    let highestStudnets = 0;
    let highestStudentCountDepartment = ''

    for(const [dept, {students}] of Object.entries(school.departments)){
        if(students > highestStudnets){
            highestStudnets = students;
            highestStudentCountDepartment = dept;
        }
        return highestStudentCountDepartment
    }
}

console.log(highestStudentCountDepartment(school))


// Greeting message:

function generateGreeting(name, language = 'english'){
    
    let languageObj = {
        english: `Hello ${name}`,
        spanish: `Hola ${name}`,
        french: `bonjour ${name}`
    }

    return languageObj[language]
}

console.log(generateGreeting("Alice")); 
console.log(generateGreeting("Bob", "spanish")); 
console.log(generateGreeting("Charlie", "french"));