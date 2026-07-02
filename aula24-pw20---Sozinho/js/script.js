const inputTask = document.getElementById('inputTask');
const buttonAdd = document.getElementById('buttonAdd');
const areaList = document.getElementById('areaList');

function addTask() {
    let valueTask = inputTask.value

    if ((valueTask !== '') && (valueTask !== null) && (valueTask !== undefined)) {

        let newItem = `<div class="item">
            <div class="item-icon">
                <span class="material-symbols-outlined icone">circle</span>
            </div>
            <div class="item-task">
                <p>${valueTask}</p>
            </div>
            <div class="item-delete">
                <button>
                    <span class="material-symbols-outlined item-fill">delete</span>
                    Deletar
                </button>
            </div>
        </div>`;    

    areaList.innerHTML += newItem;
    inputTask.value = '';
    inputTask.focus();
    } else {
        
    }
}

inputTask.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();    // Previne o comportamento padrão (evita bugs se tiver um <form>)
        buttonAdd.click();      // "Simula" o clique do mouse no botão de adicionar!
    }
})


