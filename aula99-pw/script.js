/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalos de tempo
especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

setTimeout(function, tempo em milissegundos)
-> Executa uma função, depois de esperar um número especificado de milissegundos.

setInterval(function, milliseconds)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.

*/

function ativarContagem(){
    /* 
    document.getElementById('tempo').innerHTML = 'Começou a contar!';

    //EXECUTA APENAS UMA VEZ APOS O TEMPO DETERMINADO
    tempo = setTimeout(function(){ 
        document.getElementById('tempo').innerHTML = 'Executou o setTimeout';
    },5000); 
    */
    
    tempo = setInterval(function(){
        var cronômetro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronômetro) - 1;

        if (soma === 0) {
            document.getElementById('tempo').innerHTML = 'Tempo acabou' ;
            pararContagem();
        } else {
            document.getElementById('tempo').innerHTML = soma ;
        }
    }, 1000 );
}

function pararContagem() {
    clearInterval(tempo);
    // clearTimeout(tempo);
    // document.getElementById('tempo').innerHTML = 'Parou a contagem';
}



/*         SET TIME OUT     */                                    
// Exemplo: Roda uma vez após 2 segundos
const alarme = setTimeout(() => {
    alert("O tempo acabou!");
}, 2000);

clearTimeout(alarme); // Cancela o alarme

/*    SET INTERVAL  */
// Exemplo: Fica rodando a cada 1 segundo
const cronometro = setInterval(() => {
    console.log("Mais 1 segundo se passou...");
}, 1000);

clearInterval(cronometro); // Para o loop














































