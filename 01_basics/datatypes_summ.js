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