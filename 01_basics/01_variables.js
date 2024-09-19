const str="string"
let int=14
//str="abhi"
int=13
let myVariable=true
let myArray=[0,1,2]
console.log(str)
console.log(int)
console.table([str,int])
console.log(typeof myVariable)
console.log(typeof myArray)

// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration.