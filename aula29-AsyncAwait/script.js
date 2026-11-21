//------------------------------------------------------------*/
// =============================================================
// Sintaxe do Async Await
// =============================================================
//-------------------------------------------------------------/

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

//------------------------------------------------------------*/
// =============================================================
// Exemplo pratico do Async Await
// =============================================================
//-------------------------------------------------------------/

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