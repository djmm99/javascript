let btnGera = document.querySelector('button#btnGerar')
btnGera.addEventListener('click', calcular)

function calcular() {
    let inputMdr = document.querySelector('input#mdr')
    let selctTabuad = document.querySelector('select#selTabuad');
    
    selctTabuad.innerHTML = ''

    if (inputMdr.value.length == 0) {
        window.alert('[ERRO] Digite um numero !');
        selctTabuad.innerHTML = '<option value="dig">Digite um numero acima</option>'
    } else {
        let inputMltcando = Number(inputMdr.value);

        for (let mr = 1; mr <= 10 ; mr++) {
            let res = inputMltcando * mr;

            let opc = document.createElement('option');
            opc.value = `tab-${mr}`;
            opc.text = `${inputMltcando} x ${mr} = ${res}`;
            selctTabuad.appendChild(opc);
    }
    }
}        

/*         let opc = document.createElement('option')
        opc.value = `val-${mr}`
        opc.text = `${md} x ${mr} = ${res}` */
    // window.alert('Deu certo')
    //O primeiro número, que dá nome à tabuada, é o multiplicando. MD
    //O segundo número, que muda de 0 a 10, é o multiplicador. MR