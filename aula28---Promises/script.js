// ======================================================================
// Criação de promessa
// ======================================================================

/*/---------------------------------------------------------------------/

// 1. Criação da Promise: Instanciamos um novo objeto Promise usando a palavra-chave 'new'. PENDING enquanto o resultado não pode ser impresso ou retornado)
//Ela recebe uma função com dois parâmetros fundamentais: 
// - 'resolve': função disparada quando a operação dá certo.
// - 'reject': função disparada quando ocorre algum erro ou falha.

const myPromise = new Promise((resolve, reject) => {

    // Definimos uma constante com o dado que será validado (simulando uma busca)
    const nome = 'Tião';

    // Condicional para verificar o dado
    if (nome === "Tião") {
        // Sucesso: enviamos a mensagem de êxito para fora da Promise através do resolve
        resolve('Usuário Tião encontrado!');
    } else {
        // Erro: caso o nome não seja o esperado, rejeitamos com o reject
        reject('Usuário Tião não foi encontrado!');
    }

});

// 2. Consumo da Promise utilizando o método .then(): O .then() funciona como um conector lógico ("então..."). Ele fica escutando a promessa,e assim que ela é resolvida com sucesso, ele captura o valor enviado pelo 'resolve()'e o entrega para o parâmetro da nossa função (neste caso, chamado de 'data').
myPromise.then((data) => {
    console.log(data); // Exibe o valor processado ('Usuário Tião encontrado!') no console
    
});

//---------------------------------------------------------------------*/

// ======================================================================
// Encadeamento de then's (ENTÃO,continuidade)
// ======================================================================

/*/---------------------------------------------------------------------/

const myPromise2 = new Promise((resolve,reject) => {

    const nome = 'Sebastião';

    if (nome === "Sebastião") {
        resolve('Usuário Sebastião encontrado!');
    } else {
        reject('Usuário Sebastião não foi encontrado!');
    }

});

myPromise2
    .then((data) => {
        console.log(data);

        return data.toLowerCase()
    })
    .then((stringModificada) => {
        console.log(stringModificada);
    })
    
//---------------------------------------------------------------------*/


// ======================================================================
// Retorno do .catch (Apanhar,capturar)
// ======================================================================

/*/---------------------------------------------------------------------/


const myPromise3 = new Promise((resolve,reject) => {

    const nome = 'Jão';
    if (nome === "Sebastião") {
        resolve('Usuário Sebastião encontrado!');
    } else {
        reject('Usuário Sebastião não foi encontrado!');
    }
});

myPromise3

    //resolve
    .then((data) => { 
        console.log(data);
    })

    //reject
    .catch(async (err) => { 
        console.log(`Aconteceu um erro: ${err}`);
    });

//---------------------------------------------------------------------*/


// ======================================================================
// Resolver varias promessas com .all
// ======================================================================

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 ok!');
    }, 2000)
});//VAI SER RESOLVIDO EM 2 segundos


const p2 = new Promise((resolve, reject) => {
    resolve('p2 ok!');
});//VAI SER RESOLVIDO RAPIDO

const p3 = new Promise((resolve, reject) => {
    resolve('p3 ok!');
}); //VAI SER RESOLVIDO RAPIDO


//VAI ESPERRAR RESOLVER "TODOS" p PARA ENTA CONTINUAR
const resolveAll = Promise.all([p1, p2, p3]).then(
    (data) => {
        console.log(data);
    }
);

// ======================================================================
// Resolver varias promessas com .race
// ======================================================================

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p4 ok!');
    }, 2000)
});//VAI SER RESOLVIDO EM 2 segundos

const p5 = new Promise((resolve, reject) => {
    resolve('p5 ok!');
});//VAI SER RESOLVIDO RAPIDO

const p6 = new Promise((resolve, reject) => {
    resolve('p6 ok!');
}); //VAI SER RESOLVIDO RAPIDO

//Vai exercutado o p5 pois ele e o primeiro ser resolvido (1° p5, 2° p6, 3° p4 +2s)
const resolveAllRace = Promise.race([p4, p5, p6]).then(
    (data) => {
        console.log(data);
    }
);