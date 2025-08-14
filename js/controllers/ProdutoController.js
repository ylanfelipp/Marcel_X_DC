import { produtos, salvarProdutos } from "../database/produtos"

class ProdutoController {
    static adicionarProduto(produto) {
        produtos.push(produto)
        salvarProdutos()
    }
}

export default ProdutoController