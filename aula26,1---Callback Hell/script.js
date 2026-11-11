
// ======================================================================
// CONCEITO E PROBLEMA DO CALLBACK HELL (PIRÂMIDE DA PERDIÇÃO)
// ======================================================================
//---------------------------------------------------------------------------/

// 1. Criamos a base de dados inicial (um carrinho de compras com itens)
const carrinho = ["tenes", "calsa", "camisa"];

// 2. Primeira chamada: Cria o pedido passando o carrinho e uma função de callback
api.criarPedido(carrinho, function () {

    // 3. Segunda chamada (aninhada): Só roda APÓS o pedido ser criado com sucesso.
    // Ela inicia o processo de pagamento e traz um novo callback dentro.
    api.continuarParaPagamento(function () {
        
        // 4. Terceira chamada (mais um nível para dentro): Só roda APÓS o pagamento.
        // Abre a página de pedidos do usuário.
        api.paginaPedidos(
            
            // 5. Quarta chamada (o fundo do "Callback Hell"): 
            // Por fim, carrega a carteira do usuário. 
            // Note como a identação vai afunilando para a direita, 
            // dificultando a leitura e a manutenção do código.
            function () {
                api.carregarCarteira();
            }
        );
    });
});

//--------------------------------------------------------------------------/
// ======================================================================
// SEGUNDO PROBLEMA: INVERSÃO DE CONTROLE (INVERSION OF CONTROL)
// ======================================================================
//---------------------------------------------------------------------------/


const carrinho = ["tenes", "calsa", "camisa"];

// Aqui entregamos o controle da função 'continuarParaPagamento' para a API.
// Perdemos o poder de decidir quando ou se ela será executada com segurança.
api.criarPedido(carrinho, function () {

    api.continuarParaPagamento()
        
})

//---------------------------------------------------------------------------/
