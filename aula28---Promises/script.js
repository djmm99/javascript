// ======================================================================
// Criação de promessa
// ======================================================================

/*/---------------------------------------------------------------------/
//---------------------------------------------------------------------*/

const myPromise = new Promise((resolve,reject) => {

    const nome = 'Tião';

    if (nome === "Tião") {
        resolve('Usuário Tião encontrado!');
    } else {
        reject('Usuário Tião não foi encontrado!');
    }

});

myPromise.then((data) => {
    console.log(data);
    
});