import { produtos } from "../database/produtos"

class ProdutoController {
    static criarProduto(produto) {
        produtos.push(produto)
    }
}

export default ProdutoController