

/* //.push .pop .shift .unshift .splice .join

const pessoa = ["Dimitri", "Teixeira", 30, "Professor"]; //array

pessoa.push('ADIÇÃO'); //ADICIONA UM ITEM
pessoa.pop(); //REMOVE O ULTIMO ITEM
pessoa.shift(); //REMOVE O PRIMEIRO ITEM E REORGANIZA O ÍNDICE
pessoa.unshift('PRIMEIRO'); //ADICIONA UM ITEM NO PRIMEIRO ÍNDICE
pessoa.splice(2,0,'ADICIONADO 1') //(posição , deletado 0==não , valores a ser adicionado)

document.getElementById('teste').innerHTML = pessoa.join(' -- ');// Junta os itens do array em um único texto, separados por espaço.
*/


/* //.concat
const lista1 = ["Arroz", "feijão", "carne", "macarrão"]; 
const lista2 = ["Suco", "refrigerante", "leite"];
const lista3 = ["Couve", "alface", "cenoura"];

const superLista = lista1.concat(lista2, lista3);//CONCATENA mais de um array criando uma nova matris 

document.getElementById('teste').innerHTML += superLista.join(' -- ');
*/


/* //.slice .sort .reverse
const jogadores = [
    "Biro Biro",//0 
    "Ribamar",//1
    "Pelé", //2
    "Maradona",//3
    "Neymar", //4
    "Cristiano Ronaldo", //5
    "Vampeta", //6
    "Dimitri"//7
];   

// const craques = jogadores.slice(2, 6);//FATIA a matriz em uma nova pelo índice =>,< 

// document.getElementById('teste').innerHTML += jogadores.join(' -- ');
// document.getElementById('teste').innerHTML += '<br><br>';
// document.getElementById('teste').innerHTML += craques.join(' -- '); 


// const jogOrdem = jogadores.sort();//coloca em ORDEM alfabética
const jogOrdem = jogadores.sort().reverse();//ordena e REVERTE a ordem

document.getElementById('teste').innerHTML += jogOrdem.join(' -- ');
*/


/* // .sort(NUMÉRICO)

const numero = [40, 100, 1, 5, 25, 10];


// numero.sort(function(a,b){return a-b});//a função ordena en ordem crescente numérica b-a ordem decrescente
// document.getElementById("teste").innerHTML = numero;


// function MaiorNumero(array) {
//     return Math.max.apply(null,array);//Math.max calcula o maior numero (ou .min para menor) .apply() modifica valores para math conseguir calcular
//     // return Math.min.apply(null,array);
// }
// document.getElementById("teste").innerHTML += MaiorNumero(numero);


// function MenorNumero(array) {
//     return Math.min.apply(null,array);//
// }
// document.getElementById("teste").innerHTML += MenorNumero(numero);

const maior20 = numero.filter(filtragem);
document.getElementById("teste").innerHTML = maior20;
function filtragem(value, index, array) {
    return value > 20;
}
 */
















