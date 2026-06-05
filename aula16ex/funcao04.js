


// TRADICIONAL

function fatorial(n) {
    let fat = 1 ; // Começa em 1 porque ele é o elemento neutro da multiplicação (qualquer número * 1 = ele mesmo)
    for(let c = n; c > 1; c--) {
        fat *= c;
    }
    return fat;
}

console.log(fatorial(5)); // Exibe: 120


// 5cmm