let inputTask = document.getElementById('inputTask');
let buttonAdd = document.getElementById('buttonAdd');
let areaList = document.getElementById('areaList');
let counter = 0 

function addTask() {
    let valueTask = inputTask.value;
    counter++;

    if ((valueTask !== '') && (valueTask !== null) && (valueTask !== undefined)) {

        let newItem = `            
        <div id="${counter}" class="item">
            <div class="item-icon" onclick="checkTask(${counter})">
                <span class="material-symbols-outlined icone">circle</span>
            </div>

            <div class="item-task" onclick="checkTask(${counter})">
                <p>${valueTask}</p>
            </div>

            <div class="item-delete">
                <button onclick="buttonDelete(${counter})">
                    <span class="material-symbols-outlined item-fill">delete</span>
                    Deletar
                </button>
            </div>
        </div>
        `;    

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

function buttonDelete(id) {
    let task = document.getElementById(id);
    task.remove();
}

function checkTask(id) {
    let task = document.getElementById(id);
    let icon = task.querySelector('.icone')

    if (!task.classList.contains('checked')) {
        task.classList.add('checked');

        icon.classList.add('item-fill');
        icon.innerHTML = 'check_circle';

        task.parentNode.appendChild(task)
    } else {
        task.classList.remove('checked');

        icon.classList.remove('item-fill');
        icon.innerHTML = 'circle';
    }
}

