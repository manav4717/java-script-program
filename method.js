/* string method
  length()
  trim()
  toUpperCase()
  toLowerCase()
  includes()
  indexof()
  slice()
  substring()
  replace()
  concat()
  split()*/

let str="HEllo javaScript world"
console.log(str)
console.log("length() :",str.length)

let trimText = str.trim();
console.log("trim() :", trimText.length)
/* two type of trim
   1) ltrim - left side space remove
   2) rtrim - right side space remove
*/
console.log("toUpperCase() :",str.toUpperCase())
console.log("toLowerCase() :",str.toLocaleLowerCase())
console.log("include() :",str.includes("javaScript"))
console.log("indexof() :",str.indexOf("javaScript"))
console.log("slice() :",str.slice(2,7))
console.log("substring() :",str.substring(2,7))
/* slice is allow to negetive values
and substring is not allow to negetive values */ 
console.log("replace() :",str.replace("javaScript","React JS"))

let extraRext ="- HELLO JS,React";
console.log("concat() :",str.concat(extraRext))
console.log("concat() :",str.concat(" Welcome to the world of React JS"))
/* concat() method to join two strings */
console.log("split() :",str.split(" "))
/* split() method to convert string into array */

