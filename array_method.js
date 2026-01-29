/*Array method()
   length()
   push()
   pop()
   unshoft()
   shift()
   concat()
   includes()
   includeof()
   slipt()
   slice()
   join()
   delate()
   map()
   filter()
   find()
   forEach()
   sort()
   reverse()
   flat()  
   */

/*let arr = ['one','two','three',1,{name:'name'}]
console.log("default array:",arr)
console.log("length() :",arr.length)
//console.log("push() :",arr.push("fore"))
console.log("array after push:",arr)
//second method of push array
arr.push("fore")
console.log("array after push:",arr)

arr.pop();
console.log('array after pop():',arr)

arr.unshift('Zero')
console.log('array after unshift():',arr)

arr.shift() //bigining of array
console.log('array after shift:',arr)

//create and mix  new array
let newArr = ['five','six'];
let mixedArr = arr.concat(newArr);
console.log("default Array after concat :",arr)
console.log("array after concat :", mixedArr)

console.log("include() :",arr.includes("three"))
console.log("indexof() : ",arr.indexOf("three"))

console.log("slice() : ",arr.slice(2,4))
//splice to cut and past method of array
console.log("splice() :",arr.splice(2,4))
console.log("old array :",arr)
//this type of string 
console.log("join() :",arr.join(", "))
 
delete arr[2]
console.log(arr)
*/
console.log("Array iteretion method :")

//create new array
let number = [1,2,3,4,5]
console.log("map :",number.map(num => num *2))
console.log("after mep old array :", number)
//condition vise to go to help this method
console.log("filter :",number.filter(num => num>2))
console.log("after mep old array :", number)


console.log("forEach :")
number.forEach(num =>console.log(num))

let num = [3,5,2,4,1]
//console.log("sort() :",num.sort())

console.log("reverse() :",num.reverse())

let nestedArray =[1,2,[3,4],[5,6]]
console.log("default nested array :",nestedArray)
// nestedarray to convert normalarray
let flatArray = nestedArray.flat()
console.log("flatArray",flatArray)

