// there are two ways of declaring arrays 
//singleton and non-singleton

const myObj=new Object()
const myObj2={

}

//console.log(myObj2)

myObj.name="abhii"
myObj.isLogged=false
//console.log(myObj)

const instaUser={
    email:"abhi@gmail.com",
    fullName:{
        userName:{
            firstName:"abhiii",
            lastName:"Patil"
        }

    }

}
//console.log(instaUser.fullName.userName.lastName)

const obj1={1:"a" ,5:"e"}
const obj2={3:"a",6:"w"}
const obj3={5:"a",8:"l"}

const obj4={obj1,obj2,obj3}//objects inside objects
console.log(obj4)

const obj5=({},obj3,obj2)//only key value pairs inside objects 
const obj6={...obj1,...obj3}//same result is achieved with spread operator 
console.log(obj5)
console.log(obj6)


console.log(Object.keys(instaUser))//[ 'email', 'fullName' ]
console.log(Object.values(instaUser))
//   [
//     'abhi@gmail.com',
//     { userName: { firstName: 'abhiii', lastName: 'Patil' } }
//   ]
console.log(instaUser.hasOwnProperty('islogged'))
console.log(myObj.hasOwnProperty('isLogged'))