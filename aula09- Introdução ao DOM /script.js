var lista = ['Laranja', 'Maca', 'Pera', 'Jaca', 'Limao'];
var listaUl = document.createElement('ul');
var section = document.getElementsByTagName('section');

// console.log(section[0]);

section[0].appendChild(listaUl);


var listaSection = document.getElementsByTagName('ul');

console.log(listaSection[0]);

for (let i = 0; i < lista.length; i++) {
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);// Pega o valor atual do array e o transforma em um nó de texto puro e seguro para o HTML.
    liFor.appendChild(textoLi);
    listaSection[0].appendChild(liFor);

}