const CarrinhoModel = {
    produto: JSON.parse(localStorage.getItem('prodArr')) || [],
    preco: JSON.parse(localStorage.getItem('precoArr')) || [],
    qtd: JSON.parse(localStorage.getItem('qtdArr')) || [],
    totalCompra: JSON.parse(localStorage.getItem('totCompArr')) || [],
    loginAut: localStorage.getItem('loginAutenticado') || '',

    calcularTotalGeral(){
        return this.totalCompra.reduce((acc, val) => acc + val, 0);
    },

    limparCarrinho(){
        this.qtd = this.qtd.map(() => 0);
        this.totalCompra = this.totalCompra.map(() => 0);
        localStorage.qtdArr = JSON.stringify(this.qtd);
        localStorage.totCompArr = JSON.stringify(this.totalCompra);
    }
};
