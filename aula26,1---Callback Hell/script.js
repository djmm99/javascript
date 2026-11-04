const carrinho = ["tenes", "calsa", "camisa"];

api.criarPedido(carrinho, function () {

    api.continuarParaPagamento(function () {
        
        api.paginaPedidos()
})  

})




