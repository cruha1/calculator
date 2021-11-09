function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);
  drawCalculator();
  textSize(30);
  fill(0,0,0);
//  +textWidth(numbers[numbers.length-1])   width of the latest num
  text(numbers[0], 40,115)
  text(numbers[1], 60+(1.10*textWidth(numbers[numbers.length-2])),115)
  textSize(15);
  text(exponent, 40+(2*textWidth(numbers[0])), 100)
  textSize(30);
  text(functions, 40+(1.10*textWidth(numbers[0])), 115)
}
var numbers = [""];
var functions = "";
var exponent = "";
mouseClicked = function() {
        if (zero.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "0";
        } else if (one.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "1";
        } else if (two.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "2";
        } else if (three.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "3";
        }else if (four.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "4";
        }else if (five.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "5";
        }else if (six.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "6";
        }else if (seven.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "7";
        }else if (eight.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "8";
        }else if (nine.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "9";
        }else if (dot.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += ".";
        }else if (equal.isUnderMouse(mouseX, mouseY)) {
            
        }else if (plus.isUnderMouse(mouseX, mouseY)) {
            functions = "+";
            append(numbers, "");
        }else if (minus.isUnderMouse(mouseX, mouseY)) {
            functions = "-";
            append(numbers, "");
        }else if (multiply.isUnderMouse(mouseX, mouseY)) {
            functions = "x";
            append(numbers, "");
        }else if (divide.isUnderMouse(mouseX, mouseY)) {
            functions = "÷";
            append(numbers, "");
        }else if (power.isUnderMouse(mouseX, mouseY)) {
            exponent = "2";
        }else if (squareroot.isUnderMouse(mouseX, mouseY)) {
            numbers[numbers.length-1] += "√";
        }else if (reset.isUnderMouse(mouseX, mouseY)) {
            numbers = [""];
            exponent = "";
            functions = "";
        }
}
