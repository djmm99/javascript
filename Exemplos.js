//Exemplo async/await - 6 linhasCaderno

async function buscarCep(cep) {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();
    console.log(`Cidade: ${dados.localidade}, Estado: ${dados.uf}.`);
  } catch (err) {
    console.log(`Ocorreu um erro: ${err}`);
  }
}

buscarCep("36207000");

//Exemplo  - 6 inhasCaderno
