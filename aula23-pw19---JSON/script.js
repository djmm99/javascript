
// 13linhas código 7 caderno

const ajax = new XMLHttpRequest();                  

// Usar crase permite injetar a variável ${input} de forma limpa
ajax.open('GET', `https://viacep.com.br/ws/${input}/json/`);
ajax.send();

ajax.onload = function () {
    // 1. Recebe o texto puro do servidor e transforma em objeto JS
    let obj = JSON.parse(this.responseText);
    
    // 2. Agora o JS consegue ler a propriedade e disparar na tela
    alert(obj.uf); 
}




/** JSON **

JSON significa JavaScript Object Notation que traduzido pro português fica algo
como notação de objeto JavaScript.

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto
em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples,
já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no Javascript usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON
*/

/* ============================================================================ */


/* 
// OBJETO CARRO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ['1.6', '1.4', '1.0']
}


// CONVERTEU PARA TEXTO JSON
let texto = JSON.stringify(carro);

//COLOCOU O TEXTO NO NOSSO HTML
document.getElementById('area').innerHTML = texto;

//CONVERTEMOS TEXTO EM OBJETO
let obj = JSON.parse(texto)

//PEGAMOS UM VALOR DESTE OBJETO
console.log(obj.motor[1]);
*/

/* ============================================================================ */
/* CÓDIGO INICIAL ESTUDO
const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/85802000/json/');
ajax.send();

ajax.onload = function () {
    // document.getElementById('area').innerHTML = this.responseText;
    // let obj = JSON.parse(this.responseText);
    // alert(obj.uf)
} */


function buscarCEP() {
    let inputCep = document.getElementById('cep').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', `https://viacep.com.br/ws/${inputCep}/json/`);
    ajax.send();

    ajax.onload = function () {
        // document.getElementById('texto').innerHTML = this.responseText;
        
        //TRANSFORMEI O TEXTO EM OBJETO
        let obj = JSON.parse(this.responseText);

        //AQUI PEGUEI OS VALORES QUE EU QUERIA
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML =`
        Logradouro:${logradouro}<br> 
        Cidade:${cidade}<br> 
        Estado:${estado}`;
    }
}

















































