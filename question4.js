var ns = new Stack();

var expression = "2.3 + (23 / 12 + 3.14159 * .24";

missingParen(expression);

function missingParen(expression) {
  var ns = new Stack();

  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      ns.push(i);
    }

    if (expression[i] === ")") {
      if (ns.pop() === undefined) { 
        console.log("Mismatched  at " + i); 
      }
    }
  }

  if (ns.length() === 0) { 
    console.log("no mismatching parens!");
  } else if (ns.length() === 1) {
    console.log("Mismatching  at position " + ns.peek());
  }
}