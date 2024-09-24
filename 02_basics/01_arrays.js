let arr=[1,2,3,4,'hii',true,null]
//console.log(arr)

const arr1=new Array(1,2,3,4)
// console.log(arr1)

// console.log(arr1.includes(2))

// let arrNew=arr1.slice(1,3)
// console.log(arrNew)
// console.log(arr1)// actual array remians the same

// let arrNew1=arr1.splice(1,3)
// console.log(arrNew1)
// console.log(arr1) ///splice actually changes the array if we see actual array its been changed 

const addArray= arr.join()
//console.log(addArray)


arr1.push(5)
console.log(arr1)
arr1.pop()
console.log(arr1)
arr1.unshift(12)
console.log(arr1)
arr1.shift(12)
console.log(arr1)
console.log(arr1.indexOf(3))