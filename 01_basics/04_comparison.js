console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//for comparing operators < > >= <= it will treat null as 0 and further proceed with comparison but its not in the case of == operator 
// 0>0 false 
// null==0 false
// 0>=0 true
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// for undefined its always false
console.log("2" == 2);
console.log("2" === 2);//it checks datatype as well