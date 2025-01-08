//simple function
function greet (name){ //given  parameters
    console.log(`Hello, ${name}!`)
}
greet("Malav")

//function expression
const add = function(a,b){
    return a+b;
}

console.log(add(1,2))

//Arrow Function

const multiply = (a,b) => {
    return a*b;
}

console.log(multiply(23,45))

const area = (length, breadth)=>{
    return length * breadth
}
console.log(area(20,10))

const square = (a)=>{
    return a**2
}
console.log(square(5))

function isPalindrome(str) {
  // Step 1: Normalize the string (convert to lowercase and remove spaces)
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Step 2: Reverse the string
  const reversedStr = normalizedStr.split("").reverse().join("");

  // Step 3: Compare normalized and reversed strings
  return normalizedStr === reversedStr;
}

// Test cases
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true

  