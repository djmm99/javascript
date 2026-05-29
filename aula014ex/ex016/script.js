
let butCont = document.querySelector('button#contar')

butCont.addEventListener('click', calcular)

function calcular() {
    let numStart = Number(document.querySelector('input#start').value);
    let numFim   = Number(document.querySelector('input#fim'  ).value);
    let numPasso = Number(document.querySelector('input#passo').value);
    let divRes   = document.querySelector('div#res');

    if (numStart == 0 || numFim == 0 || numPasso == 0 ) {
        // window.alert('[ERRO ! ] Faltam dados!');
        divRes.innerHTML = ' Impossível contar!';
    }else {
        divRes.innerHTML = 'Contando:'

        if (numPasso <= 0) {
            alert('Passo invalido! Considerando PASSO = 1');
            numPasso = 1;
        }

        if (numStart < numFim) { 
            // Contagem crescente
            for (let n = numStart; n <= numFim ; n += numPasso) {
                divRes.innerHTML += `&#x1F449 ${n}, `;
            }
        } else {
            // Contagem Regressiva
            for (let n = numStart; n >= numFim; n -= numPasso) {
                divRes.innerHTML += `&#x1F449 ${n}, `
            }
        }
        divRes.innerHTML += '&#x1F3C1 .'; 
    }
}

