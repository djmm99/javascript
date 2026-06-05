


// RECURSIVIDADE

function fatorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n-1); // A função chama ela mesma!
    }
}

console.log(fatorial(5));         // Exibe: 120


// 4,5cm A

/* 

5! = 5 x 4 x 3 x 2 x 1 
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/

// Função resumo 2cmm A

function nome(param) { action; return out; }  // Estrutura padrão
function soma(n1 = 0) { ... }                 // Parâmetro padrão evita NaN
let v = function(x) { ... }                   // Expressão de função
n * fatorial(n - 1)                           // Conceito de Recursividade