//  Phi coefficient
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

// Show result
function calculatedResult(e){
  
  if(trueTrue.value == "" || falseFalse.value == "" || trueFalse.value == "" || falseTrue.value == "") {
    alert("Please fill in the blanks!");
  } else {
  let array =[];
  array.push(Number(trueTrue.value), Number(falseFalse.value), Number(trueFalse.value), Number(falseTrue.value));
  console.log(array);
  const calculated = phi(array);
  result.value = calculated.toFixed(3);
  }

  e.preventDefault();
}

// Listen for submit
document.querySelector("#phi-form").addEventListener("submit", calculatedResult);

// Grab input values
const trueTrue = document.querySelector("#trueTrue");
const falseFalse = document.querySelector("#falseFalse");
const trueFalse = document.querySelector("#trueFalse");
const falseTrue = document.querySelector("#falseTrue");
const result = document.querySelector("#result");