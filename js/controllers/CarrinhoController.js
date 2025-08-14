import { carrinho, salvarCarrinho } from "../database/carrinho";

class CarrinhoController {
    static adicionarProdutoCarrinho(produto) {
        carrinho.push(produto)
        salvarCarrinho()
    }

    static limparCarrinho() {
        carrinho = []
        salvarCarrinho()
    }
}

export default CarrinhoController