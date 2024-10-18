
let a=200//global scope 
if(true){
    let a=10;
    var b =20;
    const c=23;
    //console.log(a);
}

//console.log(a);//---->200
//console.log(b);//----->20 it should not have print b because it is block scoped but it printed hence var is not ideal to use while writing code
//console.log(c);

//two types of declaring functions

function function1(){
//console.log("hii here")
}
const func=function(){
    //console.log("hiii")
}

//but it makes difference if we tries to acess variable before declare lets see

//console.log(addNum(5))//it will print the results

function addNum(num){
    return(2+num);
}

//console.log(addNum2(4))//it will give error so that how function declaration can varies the results 

const addNum2=function(num){
return (3+num)
}


//trying to check function inside function and seeing the scope 
//just try to understand it as bade log chote jo bhi mange usko de dete he lekin children nahi dete 

function one(){
    const name="abhi";
    let age =20;
    function two(){
   //console.log(name);//it will print the rsult as you are requesting variable from parent 
   const schoolName="wce";

    }
    two()
    //console.log(schoolName)//it will not give result as you are asking from children
}
one()



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         //console.log(username + website);
    }
     console.log(website);
}