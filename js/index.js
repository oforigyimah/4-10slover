function getCombinations(numbers) {
  const operators = ["+", "-", "*", "/"];
  let combinations = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (j === i) continue;
      for (let k = 0; k < numbers.length; k++) {
        if (k === i || k === j) continue;
        for (let l = 0; l < numbers.length; l++) {
          if (l === i || l === j || l === k) continue;
          for (let op1 = 0; op1 < operators.length; op1++) {
            for (let op2 = 0; op2 < operators.length; op2++) {
              for (let op3 = 0; op3 < operators.length; op3++) {
                const combination = `${numbers[i]} ${operators[op1]} ${numbers[j]} ${operators[op2]} ${numbers[k]} ${operators[op3]} ${numbers[l]}`;
                const result = eval(combination); // This will evaluate the combination and return the result
                combinations.push({ combination, result });
              }
            }
          }
        }
      }
    }
  }
  return combinations;
}

var nums = [];

// Select all buttons with the "num-input" class
var buttons = document.querySelectorAll(".num-input");

// Add a click event listener to each button
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the value of the button
    var value = button.innerText;
    nums.push(parseInt(value));
    document.getElementById("output").innerText += value;
  });
});

const clearBnt = document.getElementById("clear");
clearBnt.addEventListener("click", function () {
  document.getElementById("output").innerText = "";
  nums = [];
  document.getElementById("solution").innerText = "solution";
});

const cal = document.getElementById("cal");
let passAns = [];
cal.addEventListener("click", function () {
  var answers = getCombinations(nums);
  passAns = [];
  for (obj of answers) {
    if (obj.result == 10) {
      passAns = obj.combination;
      
    }
    document.getElementById("solution").innerText = passAns;
  }
});
