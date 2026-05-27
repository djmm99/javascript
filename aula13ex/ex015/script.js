function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.querySelector('input#txtano');
    let Res = document.querySelector('div#res');
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fSex = document.querySelectorAll('input[name="radsex"]');
        let idade = ano - Number(fAno.value);
        let genero = '';

        let img = document.createElement('img');
        img.setAttribute('id', 'foto')


        if (fSex[0].checked) {
            genero = 'Homem';
            if (idade >=0 && idade < 15) {
                //Criança
                img.setAttribute('src', 'imagem/bebe-m.jpg')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'imagem/jovem-m.jpg') 
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/adulto-m.jpg')
                img.setAttribute
            } else {
                // Idoso
                img.setAttribute('src', 'imagem/idoso-m.jpg')
            }

        } else if (fSex[1].checked) {
            genero = 'Mulher';
            if (idade >=0 && idade < 15) {
                //Criança
                img.setAttribute('src', 'imagem/bebe-f.jpg')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'imagem/jovem-f.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/adulto-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagem/idoso-f.jpg')
            }
        }
        Res.style.textAlign = 'center';
        Res.innerHTML = `Detetamos ${genero} com ${idade} anos`;
        Res.appendChild(img)
    }
}