//------------------------------------------------------------*/
// =============================================================
// 
// =============================================================
//-------------------------------------------------------------/

async function escreverInformacoesPais(paisDesejado) {
    const info = await fetch(
        'https://servicodados.ibge.gov.br/api/v1/paises/${paisDesejado}'
    );
    console.log(await info.json())
}

escreverInformacoesPais("BR");