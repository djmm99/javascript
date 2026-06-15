/** MANIPULAR DATAS EM JAVASCRIPT */

//COMANDO BASE PARA PEGAR A DATA
let data = new Date();
//console.log(data);



//PEGAR O ANO ATUAL COM 4 DÍGITOS
let ano = data.getFullYear();
// console.log(ano);

/* ============================================================================ */


//PEGAR O MÊS ATUAL - DE 0 até 11 SENDO 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth();
// console.log(mes);

//MOSTRAR O MES NO FORMATO ESCRITO
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto','Setembro', 'Outubro','Novembro', 'Dezembro'];
let mesEscrito = mesesDoAno[data.getMonth()]
// console.log(mesEscrito);

/* ============================================================================ */

//PEGAR DIA DO MES - 1 até 31
let diaMes = data.getDate();
// console.log(diaMes);

/* ============================================================================ */


//PEGAR O DIA DA SEMANA - 0 até 6
let diaSemana = data.getDay();
// console.log(diaSemana);

const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaSemanaEscrito = diaDaSemana[data.getDay()]
// console.log(diaSemanaEscrito);

/* ============================================================================ */


//PEGAR A HORA - DE 0 até 23
let hora = data.getHours();
// console.log(hora);

//PEGAR OS MINUTOS - DE 0 até 59
let minutos = data.getMinutes();
// console.log(minutos);

//PEGAR OS SEGUNDOS - DE 0 até 59
let segundos = data.getSeconds();
// console.log(segundos);

//PEGAR OS MILISSEGUNDOS - DE 0 até 999
let milissegundos = data.getMilliseconds();
// console.log(milissegundos);

//PEGAR A DATA NO PADRÃO BRASILEIRO - DD/MM/AAAA
// let dataBr = data.toLocaleString('pt-BR')
let dataBr = data.toLocaleString('pt-BR', {dateStyle: 'short'});
// console.log(dataBr);

//PEGAR OS VALORES SEPARADOS
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) { return x < 10 ? '0' + x : '' + x; };

let dataPadraoBR = `${addZero(diaMes)}/${addZero(mes)}/${ano}`;
// console.log(dataPadraoBR);

/* ============================================================================ */


// COMPARAR DATAS - MAIOR OU MENOR. ex: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2026, 5, 14);

if (hoje > vencimento) {
    console.log('Sua conta esta vencida!');
} else {
    console.log('Ainda nao venceu, tudo certo!');
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2026, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(`${diferencaDias} dias`);























