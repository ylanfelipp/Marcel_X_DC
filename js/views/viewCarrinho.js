import CarrinhoController from "../controllers/CarrinhoController";
import { carrinho } from "../database/carrinho";

export const CarrinhoView = {
    renderizarCarrinho() {
        const container = document.getElementById('carrinho-container');
        container.innerHTML = '';

        let temProdutos = false;

        for(let produto of carrinho){
            if(produto.quantidade > 0){
                temProdutos = true;
                const item = document.createElement('div');
                item.classList.add('item-carrinho');
                item.innerHTML = `
                    <p><strong>${produto.quantidade}x</strong> ${produto.nome}</p>
                    <p>Preço unitário: R$ ${produto.preco.toString().toFixed(2).replace('.', ',')}</p>
                    <p>Total: R$ ${produto.getTotalCompra().toFixed(2).replace('.', ',')}</p>
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
        confirm("Confirme ou cancele sua compra!\nPressione OK para comprar ou Cancelar para desistir.");
    },
    
    alertCompraSucesso(){
        alert("Compra efetuada com sucesso!");
        CarrinhoController.limparCarrinho()
    },

    alertCompraCancelada(){
        alert("Sua compra não foi realizada!");
    },

    alertUsuarioNaoLogado(){
        alert("Você não está logado!");
    }
};
