var calculateAns = function(numbers, functions){
  var intNums = convertToInt(numbers)
  console.log(intNums)
  return calculate(functions, intNums);
  
}

var convertToInt = function(numbers){
  var intNums = [];
  for (var i= 0; i <= numbers.length-1; i++){
      if(numbers[i]=== ""){
         
      }else if (isItSqrt(numbers[i])){
       append(intNums, sqrt(float(deleteHash(numbers[i]))));
      } else if (isItSq(numbers[i])){
       append(intNums, pow(float(delete2(numbers[i])), 2));
      } else {
       append(intNums, int(numbers[i]));
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

var deleteHash = function(string){
  var nums = []
  nums = float(split(string, '√'));
  return nums[1]
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

var delete2 = function(string){
  var nums = []
  nums = float(split(string, '²'));
  console.log(nums[0])
  return nums[0]
}

var calculate = function(functions, numbers){
  console.log(functions.length+1)
  console.log(numbers.length)
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
  return numbers[0];
}

var deleteFromArr = function(array, index){
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}
