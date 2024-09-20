const str="abhi"
//const score=45
//console.log("hi my name is " + str +" and  my score is " + score)
//console.log(`hi my name is ${str} and my score is ${score}`)//better wayto write 

const str2= new String('abhijeet') // another way of defining string 

// console.log(str2[0]);
// console.log(str2.__proto__);
console.log(str2.charAt(4))
console.log(str2.indexOf('e'))

const newString= str2.substring(1,4)//starts from index number and prints all char 1-3 => bhi
console.log(newString)


const newString2= str2.slice(-7,4)//starts from index number -7 from behind  and prints all char untill index 3=> bhi
console.log(newString2)

const diffStr="   sahil   "
console.log(diffStr.trim())//removes spaces

const url = "https://abhi.com/abhi%23choudhary"

console.log(url.replace('%23', '-'))

console.log(url.includes('abhi'))
const gameName="abhi-jeet-23"
console.log(gameName.split('-'));