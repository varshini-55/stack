var input = "100/26";
var operands = new Stack();
var operators = new Stack();

var operandsFlip = new Stack();
var postfixStr = "";

function convertInfixToPostfix(input) {
  var numStr = "";

  for (var i = 0; i < input.length; i ++) {
    var curr = input[i];
    if (curr === "+" || curr === "-" || curr === "*" || curr === "/") {
      operators.push(curr);
      operands.push(numStr);
      numStr = "";
    } else {
      numStr += curr; 
    }
  }
  operands.push(numStr); 

  
  while (operands.length() > 0) {
    operandsFlip.push(operands.pop());
  }

  var operand1 = operandsFlip.pop();
  var operand2 = operandsFlip.pop();
  var operator = operators.pop();

  console.log("Postfix expression: " + operand1 + " " + operand2 + " " + operator);

  var result = eval(operand1 + operator + operand2);
  console.log("Posfix evaluated: " + result);
}

convertInfixToPostfix(input);