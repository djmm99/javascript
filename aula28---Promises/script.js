//---------------------------------------------------------------------*/
// ======================================================================
// CRIAÇÃO DE PROMESSA
// ======================================================================
/*/---------------------------------------------------------------------/

// 1. Criação da Promise: Instanciamos um novo objeto Promise usando a palavra-chave 'new'. PENDING enquanto o resultado não pode ser impresso ou retornado)
//Ela recebe uma função com dois parâmetros fundamentais: 
// - 'resolve': função disparada quando a operação dá certo.
// - 'reject': função disparada quando ocorre algum erro ou falha.

const myPromise = new Promise((resolve, reject) => {

    const nome = 'Tião';// Definimos uma constante com o dado que será validado (simulando uma busca)

    // Condicional para verificar o dado
    if (nome === "Tião") { // Sucesso: enviamos a mensagem de êxito para fora da Promise através do resolve
       
        resolve('Usuário Tião encontrado!');
    } else { // Erro: caso o nome não seja o esperado, rejeitamos com o reject
        
        reject('Usuário Tião não foi encontrado!');
    }

});

// 2. Consumo da Promise utilizando o método .then(): O .then() funciona como um conector lógico ("então..."). Ele fica escutando a promessa,e assim que ela é resolvida com sucesso, ele captura o valor enviado pelo 'resolve()'e o entrega para o parâmetro da nossa função (neste caso, chamado de 'data').
myPromise.then((data) => {
    console.log(data); // Exibe o valor processado ('Usuário Tião encontrado!') no console
    
});

//---------------------------------------------------------------------*/
// ======================================================================
//ENCADEAMENTO DE THEN'S (ENTÃO, CONTINUIDADE)
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
// RETORNO DO .catch (APANHAR, CAPTURAR)
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
// RESOLVER VÁRIAS PROMESSAS COM .all
// ======================================================================
/*/---------------------------------------------------------------------/


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 ok!');
    }, 2)
});//VAI SER RESOLVIDO EM 2 mili-segundos


const p2 = new Promise((resolve, reject) => {
    resolve('p2 ok!');
});//VAI SER RESOLVIDO RAPIDO

const p3 = new Promise((resolve, reject) => {
    resolve('p3 ok!');
}); //VAI SER RESOLVIDO RAPIDO



const resolveAll = Promise.all([p1, p2, p3]).then( //VAI ESPERRAR RESOLVER "TODOS" p PARA ENTA CONTINUAR

    (data) => {
        console.log(data);
    }
);


//---------------------------------------------------------------------*/
// ======================================================================
// RESOLVER PROMESSAS COM .race
// ======================================================================
/*/---------------------------------------------------------------------/

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

const resolveAllRace = Promise.race([p4, p5, p6]).then( //Vai exercutado o p5 pois ele e o primeiro ser resolvido (1° p5, 2° p6, 3° p4 +2s)
    (data) => {
        console.log(data);
    }
);

//---------------------------------------------------------------------*/
// ======================================================================
// CONSUMO DE API REAL UTILIZANDO FETCH E PROMISES
// ======================================================================
/*/---------------------------------------------------------------------/

const userName = 'djmm99';    // 1. Definimos o nome de usuário que será buscado na API do GitHub


fetch(`https://api.github.com/users/${userName}`, {          // 2. A função 'fetch' dispara uma requisição HTTP para o servidor externo.Ela é assíncrona e retorna uma PROMISE por padrão.

    method: 'GET',             // Definimos o método HTTP ('GET' para buscar dados)
    headers: {
        Accept: 'application/vnd.github.v3=json',               // Cabeçalho exigido pelo GitHub para aceitar o formato JSON
    },
})
.then((response) => {  // 3. PRIMEIRO .THEN(): É acionado assim que o servidor responde.

    // Exibimos o tipo e o objeto de resposta bruto recebido da rede
    console.log(typeof response);
    console.log(response);

    return response.json()// Convertemos a resposta bruta para um objeto legível usando .json() (que também retorna uma Promise)
})
.then((data) => {// 4. SEGUNDO .THEN(): Recebe os dados já convertidos e prontos para uso (aqui chamados de 'data').

    // Exibimos propriedades específicas do objeto retornado pela API, como o nome do usuário
    console.log(`O nome do usuario e ${data.name}`);
    console.log(data);
})
.catch((err) => {// 5. O .CATCH(): Fica de prontidão para capturar qualquer erro de conexão, falha na URL ou rejeição na cadeia.

    console.log(`Houve algum erro: ${err}`)
})





//---------------------------------------------------------------------*/
// ======================================================================
// Exercício 1: Criando uma Promise Básica (Sucesso e Rejeição)
// ======================================================================
/*/-------------------------------------------------------------/

const verificarIdade = new Promise((resolve, reject) => {
    const idade = '19';
    console.log(`Idade: ${idade}`);
    
    if (idade >= 18) {
        resolve('Maior de idade, acesso liberado!');
    } else {
        reject('Menor de idade, acesso negado!');
    }
})
.then((data) => {
    console.log(data);
})
.catch((data) => {
    console.log(data);
});


//------------------------------------------------------------*/
// =============================================================
// Exercício 2: Encadeamento de .then() (Transformação de Dados)
// =============================================================
/*/-------------------------------------------------------------/


const formatarNome = new Promise((resolve, reject) => {
    const nome = 'joão silva dos santos';
    
    if (nome) {
        resolve(nome);
    } else {
        reject('Nome não encontrado!');
    }
})
.then((nome) => {
    return nome.toUpperCase();
})
.then((stringMaiuscula) => {
    console.log(`Nome formatado: ${stringMaiuscula}`);
    
})

//---------------------------------------------------------------------*/
// ======================================================================
// Exercício 3: Praticando Promise.all
// ======================================================================
//---------------------------------------------------------------------/

//O objetivo: Entender como lidar com um array de várias promessas simultâneas que rodam em paralelo.

//O que fazer:

    //Crie três variáveis (promessa1, promessa2, promessa3), onde cada uma armazena uma nova Promise que resolve uma string após alguns segundos usando setTimeout (cada uma com um tempo diferente, por exemplo: 1 segundo, 2 segundos e 3 segundos).

    //Utilize o Promise.all() passando um array com essas três promessas para aguardar todas elas terminarem.

    //Capture o resultado com o .then() para exibir o array completo de respostas no console assim que a última promessa for resolvida.

//Lembrando que no seu código de estudo você já chegou a treinar exatamente essa estrutura com o Promise.all([p1, p2, p3]) e também com o Promise.race([p4, p5, p6])!    

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`p1 ok!`);
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`p2 ok!`);
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`p2 ok!`);
    }, 3000);
});

const todosPromessas = Promise.all([p1, p2, p3]).then(data => {
    console.log(data);
});









//1°   minhaPromise     6 linhas

const minhaPromise = new Promise((resolve, reject) => {                  
  const sucesso = true;
  if (sucesso) {
    resolve('Operação concluída!');
  } else {
    reject('Erro na operação.');
  }
});

//2° 2 linhas .then()

minhaPromise
  .then((dados) => dados.toUpperCase())
  .then((dadosFormatados) => console.log(dadosFormatados));


//3° 2 linhas .catch()

minhaPromise
    .then((dados) => console.log(dados))
    .catch((erro) => console.error(`Falha: ${erro}`));


//4° 2 linhas .all()

Promise.all([promessa1, promessa2, promessa3])
  .then((resultados) => console.log(resultados)) // ['ok 1', 'ok 2', 'ok 3']
  .catch((erro) => console.error(erro));
    

//5° 7 linhas .race()

const pLenta = new Promise((resolve) => {
    setTimeout(() => resolve("Servidor Principal respondeu!"), 3000);});

const pRapida = new Promise((resolve) => {
    setTimeout(() => resolve("Servidor de Backup respondeu!"), 1000)});

Promise.race([pLenta, pRapida])
    .then((vencedor) => {
        
        console.log("Resposta mais rápida obtida:");
        console.log(vencedor)});








        