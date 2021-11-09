var drawCalculator=function(){
  fill(255,255,255);
  rect(25,75,267,100, 10)
 zero.draw();
 one.draw();
 two.draw();
 three.draw();
 four.draw();
 five.draw();
 six.draw();
 seven.draw();
 eight.draw();
 nine.draw();
 dot.draw();
  equal.draw();
  power.draw();
  squareroot.draw();
  plus.draw();
  minus.draw();
  multiply.draw();
  divide.draw();
  reset.draw();
  rect(185,row5-5,12,15);
  textSize(20);
  text("2",200,row5);
}
var Button = function(x, y, message, x2) {
    this.x = x;
    this.y = y;
    this.message = message;
    this.x2 = x2;
};

Button.prototype.isUnderMouse = function(x, y) {
    return x >= this.x-30 && x <= this.x +30 + this.x2&&
        y >= this.y - 30 && y <= this.y + 30;
};

Button.prototype.draw = function() {
    if (this.isUnderMouse(mouseX, mouseY)) {
        fill(255, 0, 0);
    } else {
        fill(255, 51, 51);
    }
    strokeWeight(2);
    rect(this.x-30, this.y-30, 60+this.x2, 60, 10);
    fill(0, 0, 0);
    textSize(30);
    text(this.message, this.x-9, this.y+9);
};
var row1 = 350 + 150;
var row2 = 280 + 150;
var row3 = 210 + 150;
var row4 = 140 + 150;
var row5 = 70 + 150;

var zero = new Button(55, row1, "0", 70);
var one = new Button(55, row2, "1", 0);
var two = new Button(125, row2, "2", 0);
var three = new Button(195, row2, "3", 0);
var four = new Button(55, row3, "4", 0);
var five = new Button(125, row3, "5", 0);
var six = new Button(195, row3, "6", 0);
var seven = new Button(55, row4, "7", 0);
var eight = new Button(125, row4, "8", 0);
var nine = new Button(195, row4, "9", 0);
var dot = new Button(195, row1, ".", 0);

var Button2 = function(x, y, message, x2) {
    this.x = x;
    this.y = y;
    this.message = message;
    this.x2 = x2;
};

Button2.prototype.isUnderMouse = function(x, y) {
    return x >= this.x-30 && x <= this.x +30 + this.x2&&
        y >= this.y - 30 && y <= this.y + 30;
};

Button2.prototype.draw = function() {
    if (this.isUnderMouse(mouseX, mouseY)) {
        fill(0, 204, 0);
    } else {
        fill(51, 255, 51);
    }
    strokeWeight(2);
    rect(this.x-30, this.y-30, 60+this.x2, 60, 10);
    fill(0, 0, 0);
    textSize(30);
    text(this.message, this.x-9, this.y+9);
};


var equal = new Button2(265, row1, "=", 0);
var plus = new Button2(265, row2, "+", 0);
var minus = new Button2(265, row3, "-", 0);
var multiply = new Button2(265, row4, "x", 0);
var divide = new Button2(265, row5, "÷", 0);
var power = new Button2(195, row5, "", 0);
var squareroot = new Button2(125, row5, "√", 0);


var Button3 = function(x, y, message, x2) {
    this.x = x;
    this.y = y;
    this.message = message;
    this.x2 = x2;
};

Button3.prototype.isUnderMouse = function(x, y) {
    return x >= this.x-30 && x <= this.x +30 + this.x2&&
        y >= this.y - 30 && y <= this.y + 30;
};

Button3.prototype.draw = function() {
    if (this.isUnderMouse(mouseX, mouseY)) {
        fill(204, 204, 0);
    } else {
        fill(255, 255, 0);
    }
    strokeWeight(2);
    rect(this.x-30, this.y-30, 60+this.x2, 60, 10);
    fill(0, 0, 0);
    textSize(30);
    text(this.message, this.x-23, this.y+9);
};

var reset = new Button3(55, row5, "A/C", 0);
