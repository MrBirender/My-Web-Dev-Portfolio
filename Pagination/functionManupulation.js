const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

function combiningArrays(fruits, vegetables){
    return [...fruits, ...vegetables]
}

const grocery  = combiningArrays(fruits, vegetables)
console.log(grocery); 


const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };

function mergingObjects(obj1, obj2){
    return {...obj1, ...obj2}
}
console.log(mergingObjects(student, course));


const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];

function combiningArrays(array1, array2){
    return [...array1, ...array2]
}
console.log(combiningArrays(array1, array2)); 


const person = { name: "John", age: 30, address: "123 Main St" };

function cloningObjects(person){
    return {...person}
}

let clonned = cloningObjects(person)
console.log(clonned);

