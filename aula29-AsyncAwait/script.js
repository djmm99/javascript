//=============================================================*/
// Sintaxe do Async Await
//=============================================================/

function primeiraFuncao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Esperou isso aqui!");
            resolve();
        }, 1000);
    });
};

async function segundaFuncao() { // async define que afunçao vai ser assincruna. E é necesaria para usar o Await 
    console.log('Iniciou');

    await primeiraFuncao(); //faz eperar o funçao ser totalmente executada para continuar o codigo (no exemplo a funçao vai demorar 1 segundo) se nao for colcada vai ser exibida depois do ficando fora de ordem

    console.log('Terminou');
    
}

segundaFuncao()
//============================================================*/
//Exemplo pratico do Async Await
//=============================================================/



function getUser(id) {

    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err));

}

async function showUserName(id) {//Não esqueçer de usar async antes de usar await (e um erro comum de esqueçer)

    try {
    
        const user = await getUser(id);
        console.log(`O nome do usúario é: ${user.data.first_name}`);
        
    } catch (err) {

        console.log(`Erro: ${err}`);
    }
}

showUserName(3)

//============================================================*/
// Exercício 1: Temporizador com async/await (Nível: Básico)
//=============================================================/

//Objetivo: Praticar a criação de uma função que retorna uma Promise com setTimeout e aguardar a resolução dela com await dentro de uma função async.



function esperarSegundos(ms) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log('Tempo concluído!');
            resolve();
        }, ms);
    })
}

async function executarFluxo(params) {
    
    console.log('Início');

    await esperarSegundos(1500);

    console.log('Fim');
}

executarFluxo();

//============================================================*/
// Exercício 2: Tratamento de Erro com try / catch (Nível: Intermediário)
//=============================================================/

//Objetivo: Treinar o uso de try / catch junto com async/await para lidar com falhas (reject / erro).


function buscarUsuarioSimulado(id) {
    
    return new Promise((resolve, reject) => {

        if (id > 0) {
            resolve({id, nome:'Ana'});
        } else {
            reject('ID de usuário inválido!');
        }
    });
};

async function mostrarUsuario(id) {

    try {

        const usuario = await buscarUsuarioSimulado(id);
        console.log(`Usuário encontrado: ${usuario.nome}`);
    } catch (err) {

        console.log(`Erro: ${err}`);
    }
}

mostrarUsuario(1);

//============================================================*/
// Exercício 3: Buscando Dados de uma API Pública com fetch e async/await (Nível: Prático)
//=============================================================/

//Objetivo: Aplicar async/await e try / catch em uma requisição HTTP real usando fetch e .json().

async function buscarCep(cep) {
    
    try {

        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        const dados = await resposta.json();

        console.log(`Cidade: ${dados.localidade}, Estado: ${dados.uf}.`);
    } catch (err) {

        console.log(`Ocorreu uma erro: ${err}`);
    }
}

buscarCep(36207000);