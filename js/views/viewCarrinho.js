import CarrinhoController from "../controllers/CarrinhoController";
import { carrinho } from "../database/carrinho";

const CarrinhoView = {
    renderizarCarrinho(){
        const container = document.getElementById('carrinho-container');
        container.innerHTML = '';

        let temProdutos = false;

        for(let i in CarrinhoModel.qtd){
            if(CarrinhoModel.qtd[i] > 0){
                temProdutos = true;
                const item = document.createElement('div');
                item.classList.add('item-carrinho');
                item.innerHTML = `
                    <p><strong>${CarrinhoModel.qtd[i]}x</strong> ${CarrinhoModel.produto[i]}</p>
                    <p>Preço unitário: R$ ${CarrinhoModel.preco[i].toFixed(2).replace('.', ',')}</p>
                    <p>Total: R$ ${CarrinhoModel.totalCompra[i].toFixed(2).replace('.', ',')}</p>
                `;
                container.appendChild(item);
            }
        }

        document.getElementById('totalGeral').textContent = carrinho.reduce((acc, curr) => {
            return acc + curr
        }, 0).toString().replace('.', ',')

        if(!temProdutos){
            container.innerHTML = '<p>Seu carrinho está vazio!</p>';
        }
    },

    confirmarCompra(){
        return confirm("Confirme ou cancele sua compra!\nPressione OK para comprar ou Cancelar para desistir.");
    },

    alertCompraSucesso(){
        alert("Compra efetuada com sucesso!");
    },

    alertCompraCancelada(){
        alert("Sua compra não foi realizada!");
    },

    alertUsuarioNaoLogado(){
        alert("Você não está logado!");
    }
};
