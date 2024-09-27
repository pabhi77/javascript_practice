
const mySym=Symbol("key1")
const userInfo={
   name:"Abhijeet",
   fullName:"Abhijeet patil",
   age:18,
   email:"abhi@gmail.com",
   isLogged:false,
   lastLogged:["friday","saturday"],
   [mySym]:"mykey1"


   
}
// console.log(userInfo.email)
// console.log(userInfo["email"])//another way to acess the keys in objects
// console.log(userInfo["name"])
// console.log(userInfo[mySym])//want to use as symbol if not used as bracket then datatype will be string butif we want symbol then square bracket is 
//used during log

userInfo.email="abhi123@gmail.com"
//Object.freeze(userInfo)//any changes made after this are not reflected
userInfo.email="abhi123563@gmail.com"
//console.log(userInfo)

userInfo.greets=function(){
    console.log("hiiiii")
}

userInfo.greets2=function(){
    console.log(`hii this is ${this.name}again`)
}
console.log(userInfo.greets())
console.log(userInfo.greets2())