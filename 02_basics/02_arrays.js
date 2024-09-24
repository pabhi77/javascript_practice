const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 //marvel_heros.push(dc_heros)//by using push we are adding array inside an array not the elements inthe array
 //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros);
//console.log(marvel_heros[3][1]);//flash 1 index element of 3 rd index of outer array

const newArray=marvel_heros.concat(dc_heros)//it creates new array instead of doing concat on existing array
console.log(newArray)

//another better way to concat to use spread operator

const anotherArray=[...marvel_heros,...dc_heros]
console.log(anotherArray)

const otherArray=[1,3,4,6,[3,4,6],7,0]
console.log(otherArray.flat(Infinity))//flat operator convert all in one array 

console.log(Array.isArray('ABHI'))
console.log(Array.from('ABHI'))
console.log(Array.from({name: "abhi"}))


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
//adding into array 