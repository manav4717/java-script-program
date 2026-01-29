//object is a collection of data 

const person = {
    name : 'testing',
    age : 24,
    hobbies : ['cricket','listen nusic'],
    greet : function(){
        console.log("hello")
    }
}

// access values from object
console.log(person.name)
// second method
console.log(person['name'])

//adding or modifying tha data of object

person.job = "react developer"
person.salary = 10000000
console.log(person)

delete person.salary
console.log(person)

//nested object
const person1 ={
    name : 'Manav',
    age : 21,
    address :{
        city : "keshod",
        zipcode : "302220",
        street : "123 main st."
    }
}
console.log(person1)
console.log(person1?.address?.city)

console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))


//
const user ={
    name : "user",
    role : "Admin",
    designation : "developer",
    age : 24,
    address :{
        city : "keshod",
        zipcode : "302220",
        street : "123 main st."
    }
}
const {name,age,role}=user
console.log(name,age,role)