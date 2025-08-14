const CarrinhoController = {
    init(){
        CarrinhoView.renderizarCarrinho();
    },

    finalizarCompra(){
        const usr = JSON.parse(localStorage.getItem('usrArr')) || [];
        const loginAut = localStorage.getItem('loginAutenticado');

        if(usr.includes(loginAut)){
            if(CarrinhoModel.calcularTotalGeral() > 0){
                if(CarrinhoView.confirmarCompra()){
                    CarrinhoModel.limparCarrinho();
                    CarrinhoView.renderizarCarrinho();
                    CarrinhoView.alertCompraSucesso();
                } else {
                    CarrinhoView.alertCompraCancelada();
                }
            } else {
                alert("Seu carrinho está vazio!");
            }
        } else {
            CarrinhoView.alertUsuarioNaoLogado();
        }
    }
};
