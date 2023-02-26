// 18. Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
function whichIsLarger(f, g){
  //Write Your solution Here
  if(f() > g()){
    return('f');
  } else if(g() > f()){
    return('g');
  } else if(f() === g()){
    return('neither');
  }
};

console.log(whichIsLarger(() => 25, () => 15)); // f
console.log(whichIsLarger(() => 25, () => 25)); // neither
console.log(whichIsLarger(() => 25,  () => 50)); // g

// 22. function that takes two parameters and repeats the string n number of times.
function repetition(txt, n){
  //Write Your solution Here
  for(a = "";n > 0;n--){
    a = a + txt;
  }
  return a;
};

console.log(repetition('zim', 5)); //zimzimzimzimzim
console.log(repetition('zoy', 2)); //zoyzoy
console.log(repetition('akib', 7)); //akibakibakibakibakibakibakib

//23. function that takes an array of non-negative integers and strings and return a new array without the strings.
function filterArray(arr){
  //Write Your solution Here
  let newArray =arr.filter(function(x){return typeof x === 'number'});
  return newArray;
};

console.log(filterArray([1, 'z', 4, 5, 'i', 9, 'm'])); //[ 1, 4, 5, 9 ]
console.log(filterArray([8, 'z', 1, '8', 'i', 9, 'm'])); //[ 8, 1, 9 ]
console.log(filterArray([7, '1', 'z', 0, 'i', 9, 'm'])); //[ 7, 0, 9 ]

// 05. Write functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

function bitwiseAND(n1, n2) {
    //Write Your solution Here
    let bitwise = n1 & n2;
    return bitwise;
};

function bitwiseOR(n1, n2) {
    //Write Your solution Here
    let bitwise = n1 | n2
    return bitwise;
};

function bitwiseXOR(n1, n2) {
    //Write Your solution Here
    let bitwise = n1 ^ n2;
    return bitwise;
};

console.log(bitwiseAND(10, 20)); // 0
console.log(bitwiseOR(10, 20)); // 30
console.log(bitwiseXOR(10, 20)); // 30
