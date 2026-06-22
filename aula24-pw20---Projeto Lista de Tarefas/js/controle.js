let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NAO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)) { //colocar cada codição entre () esta checando se tem algo no input

        ++contador;
        
        let novoItem = `
        <div id="${contador}" class="item ">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <span id="icone-${contador}" class="material-symbols-outlined">circle</span>
            </div>

            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>

            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">
                    <span class="material-symbols-outlined icone-cheio">delete</span>
                    Deletar
                </button>
            </div>
        </div>    
        `;
        //ADICIONAR NOVO ITEM NO MAIN.
        main.innerHTML += novoItem;

        //ZERAR OS CAMPINHOS
        input.value = '';
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}


function marcarTarefa(id) {
    var item = document.getElementById(id);
    var icone = document.getElementById(`icone-${id}`);


/*     var classe = item.getAttribute('class')
    console.log(classe); */

    if (!item.classList.contains('clicado')) {
        // Adiciona a classe "clicado" para mudar o visual do elemento no CSS
        item.classList.add('clicado');

        icone.innerHTML = 'check_circle';

        // Remove o elemento da posição atual e o joga para o final da lista do elemento pai
        item.parentNode.appendChild(item)
    } else {
        item.classList.remove('clicado')

        icone.innerHTML = 'circle';
    }
    
}


input.addEventListener('keyup', function (event) {
    // SE TECLOU ENTER
    if (event.key === 'Enter') {
        event.preventDefault();
        btnAdd.click();
    }
} )
