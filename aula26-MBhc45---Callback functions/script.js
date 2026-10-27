function exibir(num) {
    console.log(`A operação resultou em: ${num}`);
    
}

function soma(a, b, callback) {
    var op = a + b;
    callback(op);
    
}

function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
    
}

soma(2,2,exibir);

multiplicacao(2,4,exibir);

// 1. Função que será a "Callback"
function exibir(resultado) {
    console.log("O resultado é: " + resultado);
}

// 2. Função principal que recebe a callback por parâmetro
function somar(a, b, callback) {
    let op = a + b;
    callback(op); // Executa a callback passando o resultado
}

// 3. Execução (Passa a função 'exibir' como argumento)
somar(5, 3, exibir); // Saída: O resultado é: 8

function verificarNumero(num, callback) {
    if (num % 2 === 0) {
        callback (`O numero ${num} e par`);
    } else {
        callback (`O numero ${num} e impar`)
    }
}

function exibir(callback,num) {
    console.log(callback);
    let num = 45;
}