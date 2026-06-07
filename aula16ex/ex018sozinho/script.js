/* ==========================================================================
   1. SELEÇÃO DE ELEMENTOS E CONFIGURAÇÃO GLOBAL (DOM)
========================================================================= */
// Elementos da interface buscados apenas uma vez para otimizar performance
let btnAdd = document.querySelector('button#add');
let buttonEnviar = document.querySelector('button#enviar');
let divRes = document.querySelector('div#res');
let inputNum = document.querySelector('input#num');
let selectLista = document.querySelector('select#lista');

// Vetor global que armazenará os números validados pelo sistema
let lista = [];

/* ==========================================================================
   2. ATRIBUIÇÃO DE EVENTOS (LISTENERS)
========================================================================== */

btnAdd.addEventListener('click', adicionar);
buttonEnviar.addEventListener('click', finalizar);

/* ==========================================================================
   3. FUNÇÕES PRINCIPAIS E REGRAS DE NEGÓCIO
========================================================================== */

/**
    Adiciona o número digitado pelo usuário ao vetor global após passar por todas as regras de validação (vazio, duplicado e limites).
*/

function adicionar() {
    // Validação 1: Bloqueia a execução se o campo estiver vazio
    if (inputNum.value.length == 0 ) {
        window.alert('Por favor, digite um número antes de adicionar!')
        return // Interromper a execução da função imediatamente.
    }

    // Conversão do valor do input (string) para tipo numérico
    let num = Number(inputNum.value);

    // Validação 2: Aplicação das regras de negócio do analisador
    if (lista.indexOf(num) >= 0) {
        window.alert('Esse numero ja foi adicionado');
    } else if (num > 100) {
        window.alert('Esse numero e grande');
    } else if (num < 1) {
        window.alert('Esse numero e pequeno');
    } else {
        // Fluxo de Sucesso: O número passou em todos os testes
        lista.push(num);

        // Atualiza a interface adicionando a opção no painel visual
        selectLista.innerHTML += `<option value="num0${lista.indexOf(num)}">Valor ${num} adicionado.</option>`;

        // Limpa os resultados antigos da tela para evitar dados desatualizados
        divRes.innerHTML = '';// Limpa o painel de resultados desatualizados
    }

// Tratamento de Interface: Prepara o campo de texto para a próxima digitação
    inputNum.value = '';
    inputNum.focus();
}
/**
    Processa as informações do vetor global, faz os cálculos estatísticos e renderiza o relatório final na tela para o usuário.
*/

function finalizar() {
    // Validação de Segurança: Impede cálculos caso a lista esteja vazia
    if (lista.length == 0) {
        window.alert('Adicione números antes de finalizar!');
        return;
    }

    // Inicialização das variáveis matemáticas com base no primeiro elemento
    let quantidade = lista.length
    let maior = lista[0];
    let menor = lista[0];
    let soma = 0;

    // Algoritmo de varredura única (Single Pass) para encontrar maior, menor e soma
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
        soma += lista[i];
    }

    // Cálculo da média aritmética formatada para exibição visual
    let media = (soma / quantidade).toFixed(2);// Limita o resultado a 2 casas decimais e o transforma em texto
    
    // Renderização do relatório estatístico no HTML
    divRes.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`;
    divRes.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    divRes.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    divRes.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    divRes.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
}

// TODO: Verificar se a lista está vazia antes de calcular a média
// TODO: Implementar validação para não aceitar números negativos