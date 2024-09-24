//let is block scoped
// let string="hii"
// let int1=4
// if(int1>2){
//     let string1="hello hii"
//     console.log(string1)//hello hii
// }
// console.log(string1)//undefined 
let string2="javascript must"
string2="javascript is really must "
console.log(string2)

//let can be updated but cant be redeclared 
// let string1="hii"
// let string1="hii abhi"

//but it can de redefined in different scopes
let string1="hii"
if(true){
    let string1="hii javascript"
    console.log(string1)
}
console.log(string1)

//datatypes 
//int string boolean objects symobols-used in react ,null ,undefined
let string3
console.log(typeof string3)
let string4=null
console.log(typeof string4)
console.log(typeof null)//it will shown as object type