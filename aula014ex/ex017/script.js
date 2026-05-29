let butGerar = document.querySelector('button#gerar')
butGerar.addEventListener('click', calcular)

function calcular() {
    let inputMdr = document.querySelector('input#mdr')
    let md = Number(inputMdr.value);
    let selecRes = document.querySelector('select#res');
    
    selecRes.innerHTML = ''

    console.log(md);
    
    if (md == 0) {
        window.alert('[ERRO] Digite um numero !')
    } else {
        for (let mr = 1; mr <= 10 ; mr++) {
            res = md * mr

            let opc = document.createElement('option');
            opc.value = `oper-${mr}`;
            opc.text = `${md} x ${mr} = ${res}`;
            selecRes.appendChild(opc);
    }
    }



}        

/*         let opc = document.createElement('option')
        opc.value = `val-${mr}`
        opc.text = `${md} x ${mr} = ${res}` */
    // window.alert('Deu certo')
    //O primeiro número, que dá nome à tabuada, é o multiplicando. MD
    //O segundo número, que muda de 0 a 10, é o multiplicador. MR