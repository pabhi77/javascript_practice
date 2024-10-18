 function myName(number1,number2){
  
    return number1+number2

}
//console.log(myName(3,4))


function addTwoNums(num1,num2){
    let result=num1+num2
    return result
}
const result= addTwoNums(3,6)
//console.log("result: ",result)


function isLoggedIn(userName){
    if(userName===undefined){//or we can write as if(!username)
       console.log("please enter username")
       return
    }
    return `${userName}logged in sucessfully`
}

// console.log(isLoggedIn("abhi "))

// console.log(isLoggedIn(""))//string is empty 
console.log(isLoggedIn())//undefined so loop will execute
