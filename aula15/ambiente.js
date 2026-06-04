let num = [5, 8, 4, 7, 6]


// console.log(num);
// console.log(`O vetor tem ${num.length} posições.`);
// console.log(`O primeiro valor do vetor e ${num[0]}.`);

num.sort()
console.log(num);
num.push(2)

console.log(num);
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O primeiro valor do vetor e ${num[0]}.`);

let n = 9
let pos = num.indexOf(n)

if (pos == -1){
    console.log(`O valor '${n}' não foi encontrado!`);
} else {
    console.log(`O valor 1 esta na posição '${pos}'`);
}

