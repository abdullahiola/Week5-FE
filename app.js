const num1 = parseFloat(prompt('enter your first number'));
const num2 = parseFloat(prompt('enter your second number'));
const operator = prompt('Select your operator (+ - / * )');
let answer = 0;
if (isNaN(num1) || isNaN(num2)) {
  alert('Wrong input! refresh the page and try again')
} else {

  if (operator == '+') {
    answer = eval(num1 + num2)
    alert(`The answer is ${answer}`)
  }
  else if (operator == "-") {
    answer = eval(num1 - num2)
    alert(`The answer is ${answer}`)
  }
  else if (operator == "*") {
    answer = eval(num1 * num2)
    alert(`The answer is ${answer}`)
  }
  else if (operator == "/") {
    answer = eval(num1 / num2)
    alert(`The answer is $
    {answer}`)
  }
  else{
    alert('You didnt select a valid Operator')
  }

}




