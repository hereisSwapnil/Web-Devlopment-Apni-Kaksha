// Convert string to number
let a = "123";
let A = Number(a);
console.log(A+10);

// Convert number to string
let b = A.toString();
console.log(b+1)

// Method 1: Ignore String ' in a string
let str1 = "I hadn't done my homework."
console.log(str1);

// Method 2: Ignore String ' in a string
let str2 = 'I hadn\'t done my homework.'
console.log(str2);

// insert variables in string
let c = "Swapnil";
console.log(`Hello my name is ${c}`);

// length of string
let str3 = "Hello My Name is Swapnil";
console.log(str3.length);
// Get char at any index
console.log(str3.charAt(4));

// get index of substring inside of a string
console.log(str3.indexOf("is"))

// Slice a string
console.log(str3.slice(14,16));

// Convert to lower case
str4 = str3.toUpperCase();
console.log(str4);

// Convert to lower case
console.log(str4.toLowerCase())

