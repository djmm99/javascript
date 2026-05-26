function carregar() {
    let msg = window.document.querySelector('div#msg');
    let img = window.document.querySelector('img#imagem');
    let date = new Date();
    let hora = date.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 4 && hora < 12) {
        // Bom dia 
        img.src = 'imagens/manha.png'
        document.body.style.background = '#F7F7D7'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde 
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FEB800'
    } else  {
        // Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#452E4A'
    }
}

