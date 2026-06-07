let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

//Testa se e um numero
function isNumero(n) { 
    if (Number(n) >= 1 && Number(n) <= 100) { //Number(n) e por segurança isNumero(n) == isNumero(num.value) => n == num
        return true;  
    } else {
        return false;
    }
}

//Testa se esta na lista
function inLista(n, l) { //nao lembro de ver dois parameters
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    // Se e um numero      and Se NÃO esta na lista
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item)
        res.innerHTML = ''

        console.log('Conteúdo da lista:', valores);
    } else {
        window.alert('Valor invalido ou ja encontrado na lista');
    }
    num.value = ''; //Apaga a caixa digitação depois de adicionar
    num.focus(); //Coloque o cursor de digitação dentro desta caixa
} 

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
    for(let pos in valores) {
        if (valores[pos] > maior)
            maior = valores[pos];
        if (valores[pos] < menor) 
            menor = valores[pos];
        soma += valores[pos];
    }
    media = soma / total

    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`;
    }
}



