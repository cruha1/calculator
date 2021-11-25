var calculateAns = function(numbers, functions){
  var intNums = convertToInt(numbers, functions)
  return calculate(functions, intNums);
}

var convertToInt = function(numbers, functions){
  var intNums = [];
  for (var i= 0; i <= numbers.length-1; i++){
      if(numbers[i]=== ""){ 
      }else if (isItSqrt(numbers[i]) && isItSq(numbers[i])){
       append(intNums, float(power(str(root(numbers[i]), functions[i-1], numbers[0]))));
      }else if (isItSqrt(numbers[i])){
       append(intNums, float(root(numbers[i])));
      }else if (isItSq(numbers[i])){
       append(intNums, float(power(numbers[i], functions[i-1], numbers[0])));
      }else {
       append(intNums, float(numbers[i]));
      }
  }
  return intNums;
}

var isItSqrt = function(string){
  var m1 = []
  m1 = match(string, "√");
  if (m1 != null) {  // If not null, then a match was found
  // This will print to the console, since a match was found.
    return true 
  } else {
    return false
  }
}

var isItCoeff = function(nums){
  if(nums[0] != "" && nums[0] != 0){
    return true
  }else {
    return false
  }
}

var root = function(string){
  var nums = []
  nums = split(string, '√');
  if(isItCoeff(nums)){
    return str(float(nums[0])*sqrt(float(nums[1])))
  }else {
    return sqrt(float(nums[1]))
  }
}

var isItSq = function(string){
  var m1 = []
  m1 = match(string, "²");
  if (m1 != null) {  // If not null, then a match was found
  // This will print to the console, since a match was found.
    return true 
  } else {
    return false
  }
}

var power = function(string, functions, num){
  var nums = []
  nums = float(split(string, '²'));
  if (functions === "-" && num === "0"){
    return -1*pow(nums[0],2);
  }else {
    return pow(nums[0],2);
  }
}

var calculate = function(functions, numbers){
  if (functions.length+1>numbers.length){
    return "ERROR";
  }
  for (var i = 0; i < functions.length; i++){
    if (functions[i] === "x" || functions[i] === "÷"){
      if (functions[i] === "x"){
        numbers[i] = numbers[i]*numbers[i+1]
        numbers = deleteFromArr(numbers, i+1)
        functions = deleteFromArr(functions, i)
        i--
      }else{
        numbers[i] = numbers[i]/numbers[i+1]
        numbers = deleteFromArr(numbers, i+1)
        functions = deleteFromArr(functions, i)
        i--
      }
    }
  }
  for (var j = 0; j < functions.length; j++){
    if (functions[j] === "+" || functions[j] === "-"){
      if (functions[j] === "+"){
        numbers[j] = numbers[j]+numbers[j+1]
        numbers = deleteFromArr(numbers, j+1)
        functions = deleteFromArr(functions, j)
        j--
      }else{
        numbers[j] = numbers[j]-numbers[j+1]
        numbers = deleteFromArr(numbers, j+1)
        functions = deleteFromArr(functions, j)
        j--
      }
    }
  }
  return round(numbers[0], 3);
}

var deleteFromArr = function(array, index){
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}
