/* ======================================================
   PRINCIPAIS EVENTOS EM JAVASCRIPT (GUIA DE REFERÊNCIA)
   ======================================================
*/

// --- EVENTOS DE MOUSE ---
// onclick       -> Disparado quando o elemento recebe um clique.
// ondblclick    -> Disparado quando ocorre um clique duplo.
// onmouseover   -> Disparado quando o mouse é posicionado sobre o elemento.
// onmouseout    -> Disparado quando o mouse é movido para fora do elemento.
// onmousemove   -> Disparado quando o mouse é movido dentro do elemento.
// onmousedown   -> Disparado no momento em que o botão do mouse é pressionado.
// onmouseup     -> Disparado quando o botão do mouse é liberado.

// --- EVENTOS DE FORMULÁRIO / ELEMENTO ---
// onfocus       -> Disparado quando o elemento recebe o foco (comum em <input> e <select>).
// onchange      -> Disparado quando existe uma mudança no conteúdo ("Ao mudar").
// onblur        -> Disparado quando o elemento perde o foco.

// --- EVENTOS DE TECLADO ---
// onkeydown     -> Disparado no momento em que uma tecla é pressionada.
// onkeypress    -> Disparado quando uma tecla que gera caractere é pressionada e solta (em desuso).
// onkeyup       -> Disparado no momento em que uma tecla pressionada é solta.

// --- EVENTOS DA JANELA / NAVEGADOR ---
// onload        -> Disparado quando a página (ou a tag <body>) termina de ser carregada.
// onresize      -> Disparado quando há um redimensionamento da janela do navegador.




function eventoClick() {
    document.body.style.backgroundColor = 'yellow';
}

function eventoDblClick() { //ondblclick=""
    alert('Evento de clique duplo');
}

function viraVermelho() { //onmouseover="" 
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'red';
}

function viraAzul() { //onmouseout="" 
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'blue';
}

function limpaTexto() { //onfocus="" 
    document.getElementById('campoTexto').value = '';
}

function mudou() { //onchange=""
    console.log('Mudou');
}

function teclaPressionada() { //onkeypress=""
    let input = document.getElementById('campoTexto').value;
    console.log(input);
    
}