

// 15 linhas 7,5cm


class Carro {                      // Criando a fábrica (Molde)
    constructor(marca, modelo) {
        this.marca = marca;   
        this.modelo = modelo; 
    }
    buzinar() {
        console.log("Bip bip!");
    }
}
// Fabricando os objetos (Instanciação)
const carro1 = new Carro("Fiat", "Uno");
const carro2 = new Carro("Ford", "Ka");

// 📌 TROCANDO O VALOR DE UMA PROPRIEDADE
carro1.modelo = "Palio"; // Altera o modelo de "Uno" para "Palio"



/* CLASSES EM JAVASCRIPT
 
Em 2015 foi introduzido no JavaScript as Classes. As classes são um conceito 
antigo em programação e várias linguagens utilizam elas. Mas no Javascript isso é 
relativamente novo, por isso mesmo programadores experientes não sabem muito bem 
utilizar.

Basicamente, as classes são como "fábricas" para criar objetos.
Pode se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os 
objetos, as Classes no Javascript usam um método chamado constructor() para 
fabricar os objetos.
*/

// Nao sofre içamento/Hoisteg
class Carro { //Sempre começar o nome da classe com letra maiúscula
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() { // Método
        return this.modelo + ' buzinou: Biiiiii'
    }
}

const uno = new Carro('Fiat', 'Uno', 2001);
const gol = new Carro('Volkswagen', 'Gol', 2005)

console.log(uno);
console.log(gol);
gol.ano = 2010 //trocar valor da propriedade e so apontar qual e qual e o valor que ela vai receber
console.log(gol);



/* 
const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2001 ,
}
*/








































