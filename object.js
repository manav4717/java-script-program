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
/*
const {name,age,role}=user
console.log(name,age,role)

const{name:profileName, age:profileAge}=user
console.log(profileName,profileAge)
*/

const{name,age,role,state="Gujarat"}=user
//console.log(name,age,role,state)



const array=[1,2,3]
const moreElements =[...array,4,5,6]
//console.log(moreElements)

const originalArray=[1,2,3]
const copiedArray=[...originalArray]
//console.log(copiedArray)

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const mergedArray =[...arr1,...arr2]
//console.log(mergedArray)

// spread operator in object

const user1={
    name :"user1",
    city :"keshod",
}
console.log(user1)

const newobj ={
    ...user1,
    role : "React Developer"
}
//console.log(newobj)

//copy object
const user2 = {
    name : "user2",
    city : "keshod"
}
 const user3 ={...user2}
 console.log(user3)

//marge object

const obj1={
    name : "user2",
    city : "keshod",
    age : 20
}
const obj2 ={
    name : "user3",
    city : "keshod"
}
const obj3 ={...obj1,...obj2}
console.log(obj3)