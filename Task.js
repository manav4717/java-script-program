let student = {
    name: "    first name    ",
    email: "USER@GMAIL.COM",
    course: "JavaScript, React ,Node",
    marks: [45, 78, 60, 90, 30],
    hobbies: ["Music","Cricket","Reading"],
    address: ["India",["Gujarat", "Ahmedabad"]]
};
 
// STRING OPERATIONS

 console.log(student.name.trim().toUpperCase())
 console.log(student.email.toLowerCase())
 console.log(student.course.includes("React"))
 console.log(student.course.indexOf("Node"))
 console.log(student.course.replace("JavaScript","Js"))
 console.log(student.course.split(" "))
 console.log(student.name.length)



