class Produto {
    constructor(cod, nome, preco, link, descricao, quantidade) {
        this.cod = cod
        this.nome = nome
        this.preco = preco
        this.link = link
        this.descricao = descricao
        this.quantidade = quantidade
    }

    getTotalCompra() {
        return this.preco * this.quantidade
    }
}

export default Produto