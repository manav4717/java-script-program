//OBJECT HANDLING

let mark = student.marks.find(marks => marks < 40)
console.log(mark)

if(mark.filter(num => num > 40)){
    console.log("pass")
}else{
    console.log("fail")
}