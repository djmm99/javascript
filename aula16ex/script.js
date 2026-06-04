let btnAdd = document.querySelector('button#add');
btnAdd.addEventListener('click', adicionar);

let buttonEnviar = document.querySelector('button#enviar');
buttonEnviar.addEventListener('click', finalizar);

let divRes = document.querySelector('div#res')

let lista = []



function adicionar() {
    let inputNum = document.querySelector('input#num');
    let num = Number(inputNum.value);
    let selectLista = document.querySelector('select#lista') 
    let divRes = document.querySelector('div#res')
    
    if (lista.indexOf(num) >= 0) {
        console.log(`esse e o index ${lista.indexOf(num)}`);
        window.alert('Esse numero ja foi adicionado')
    } else {
        if (num > 100) {
            window.alert('Esse numero e grande')
        } else {
            if (num < 1) {
                window.alert('Esse numero e pequeno')
            } else {
                lista.push(num);
                selectLista.innerHTML += `<option value="nun0${lista.indexOf(num)}">Valor ${num} adicionado.</option>`;
                inputNum.value = '';
                inputNum.focus();
            }
        }
    }
    console.log(`adicionado ${Number(inputNum.value)}`);
    console.log(lista);
    console.log(num);
}

function finalizar() {
    let quantidade = lista.length
    let maior = lista[0];
    let menor = lista[0];
    let soma = 0;
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
    }
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    
    let media = soma / quantidade;
    
    divRes.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`;
    divRes.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    divRes.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    divRes.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    divRes.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
}
