function setup() {
  createCanvas(325, 600);
}

function draw() {
  background(220);
  drawCalculator();
  var numDigits = floor(textWidth(display)/textWidth("1"));
  fill(0,0,0);
  if (textWidth(display) > 150){
    for(var i = 0; i < numDigits/14; i += 0.0009)
    textSize(30-i*7)
  }else{
    textSize(30);
  }
  text(display, 40, 115)
  
  text(answer, 250 ,155)
}
var numbers = [""];
var functions = [];
var display = "";
var answer
mouseClicked = function() {
        if (zero.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "0";
            display += "0";
        } else if (one.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "1";
          display += "1";
        } else if (two.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "2";
          display += "2";
        } else if (three.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "3";
          display += "3";
        }else if (four.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "4";
          display += "4";
        }else if (five.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "5";
          display += "5";
        }else if (six.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "6";
          display += "6";
        }else if (seven.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "7";
          display += "7";
        }else if (eight.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "8";
          display += "8";
        }else if (nine.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "9";
          display += "9";
        }else if (dot.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += ".";
          display += ".";
        }else if (equal.isUnderMouse(mouseX, mouseY)) {
          console.log(numbers)
          answer = calculateAns(numbers, functions);
        }else if (plus.isUnderMouse(mouseX, mouseY)) {
          append(functions, "+"); 
          append(numbers, "");
          display += "+";
        }else if (minus.isUnderMouse(mouseX, mouseY)) {
            append(numbers, "");
            append(functions, "-");
          display += "-";
        }else if (multiply.isUnderMouse(mouseX, mouseY)) {
            append(numbers, "");
            append(functions, "x");
          display += "x";
        }else if (divide.isUnderMouse(mouseX, mouseY)) {
            append(numbers, "");
            append(functions, "÷");
          display += "÷";
        }else if (power.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "²";
          display += "²";
        }else if (squareroot.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "√";
          display += "√";
        }else if (reset.isUnderMouse(mouseX, mouseY)) {
            numbers = [""];
            functions = [];
            display = "";
            answer = "";
        }
}
