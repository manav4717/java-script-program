/*
array destructuring
*/
/*
let array = [1,2,3,4,5]
const [first,second,third]= array
console.log(first)
console.log(second)
console.log(third)
*/

// skipping values
 let  array1 = [1,2,3,4]
 const [first,second,third]= array1
 console.log(first)
 console.log(third)

// rest operator //spread operater to convert new array

const num1 = [1,2,3,4,5]
const [fir,Second,...rest]=num1
console.log(fir)
console.log(Second) 
console.log(rest)
