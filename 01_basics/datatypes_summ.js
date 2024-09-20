//primitive  non primitive(reference)
//number string boolean null undefined bigint symbol
//objects array function


//primitive
const string="hii"//string
const intNum=12//number
const isPositive=true//boolean
const temp=null//null
let userEmail;//undefined

const myVar=Symbol('123')
const myVar1=Symbol('123')//both will have different symbol even though it is inputted same
const num=23243546757568n
// console.log(typeof num)
// console.log(myVar==myVar1)//returns false


//non primitive
const myArr=[1,'hii',true,0.12,null]
//console.log(myArr)

let myObj={
    name:"Abhi",
    score:34
}
//console.log(myObj)

const myfunc=function(){
    console.log("hiii")
}
 myfunc()



 // memory type stack and heap stack for primitive datatypes heap for non-primitivr datatypes
 //taking example of string which is primitive 

 let myStr="abhijeet patil"
 let anotherStr=myStr
 anotherStr="abhi"

 console.log(myStr)
 console.log(anotherStr)//copy of variable is passed and changes are made in that copy actual value of mystr remains same 


//in case of non primitive 

myObj={
    name:"abhiii",
    score:80
}

let anathorObj=myObj
anathorObj.name="sahil"
anathorObj.score=45

console.log(myObj)
console.log(anathorObj)//value is changed in actual reference so abhii name will not remain as it is it will be changed to sahil and same with the score