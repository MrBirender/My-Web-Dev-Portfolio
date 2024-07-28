// Assuming you have Lodash included in your project
function shuffleStringWithLodash(s) {
    return _.shuffle(s.split('')).join('');
  }
  
  const myString = "Hello, World!";
  console.log("Before shuffle:", myString);
  const shuffledString = shuffleStringWithLodash(myString);
  console.log("After shuffle:", shuffledString);

shuffleStringWithLodash("abcd")
// 8#RgOr~fzO