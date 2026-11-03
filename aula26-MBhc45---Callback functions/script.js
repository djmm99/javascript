// ======================================================================
// EXERCÍCIO DA AULA
// ======================================================================

/*---------------------------------------------------------------------
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

----------------------------------------------------------------*/

// ======================================================================
// EXERCÍCIO 1: Verificador de Par ou Ímpdar (Nível: Fácil)
// ======================================================================

/* //---------------------------------------------------------------- 

// 1. Função de Callback (responsável apenas por mostrar o resultado no console)
function exibir(mensagem) {
    console.log(mensagem);
}

// 2. Função Principal (recebe o número e a função de callback)
function verificarNumero(num, callback) {
    if (num % 2 === 0) {
        callback(`O numero ${num} e par`); // Executa o callback passando a frase de par
    } else {
        callback(`O numero ${num} e impar`); // Executa o callback passando a frase de ímpar
    }
}

// 3. A Chamada (Execução)
verificarNumero(4, exibir); 
// Saída no console: O numero 4 e impar

*/

// ======================================================================
// EXERCÍCIO 2: Calculadora de Desconto (Nível: Intermediário)
// ======================================================================


/* //---------------------------------------------------------------- 


// 1. Função de callback (exibir): Responsável por receber os dados processados 
// e montar a string formatada que será mostrada no console.
function exibir(precoFinal, precoOriginal, porcentDesconto) {
    console.log(`Para o valor de R$${precoOriginal} com o desconto de ${porcentDesconto}%, o valor fica em R$${precoFinal}.`);
}

// 2. Função principal (calcPrecoFinal): É a primeira a ser acionada na execução prática.
// Ela recebe os parâmetros iniciais e a função de callback.
function calcPrecoFinal(precoOriginal, porcentDesconto, callback) {
    
    // Aqui é feito todo o cálculo matemático com base nos valores adicionados nos parâmetros.
    let desconto = precoOriginal * (porcentDesconto / 100);
    let precoFinal = precoOriginal - desconto;

    // Ao final dos cálculos, a função principal dispara (chama) a função de callback ('exibir'),
    // injetando os valores necessários para que a string seja exibida no console.
    callback(precoFinal, precoOriginal, porcentDesconto);
}

// 3. A Chamada principal: É o gatilho que inicia todo o processo, passando os argumentos 
// (preço, porcentagem e a função 'exibir' como callback).
calcPrecoFinal(100, 10, exibir);

 */


// ======================================================================
// EXERCÍCIO 3: Simulação de Carregamento Assíncrono (Nível: Desafio)
// ======================================================================

