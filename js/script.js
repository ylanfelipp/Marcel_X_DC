import ProdutoController from "./controllers/ProdutoController"
import CarrinhoController from "./controllers/CarrinhoController"
import Produto from "./models/Produto"
import { produtos, salvarProdutos } from "./database/produtos"
import LoginController from "./controllers/LoginController"

let login = '', senha, qtdCont = 0, valor = 0, totalGeral = 0, cesta, loginAut
let article, div, div2, h3, p1, input, p2, span, aLink, main, section, footer, h2, p3, span2, aLink2

function getDados(){
    let prod = document.getElementById('produto').value    
    let descri = document.getElementById('descricao').value
    let codig = document.getElementById('codigo').value
    let prec = document.getElementById('preco').value
    let lnk = document.getElementById('linkAmazon').value

    const produto = new Produto(codig, prod, prec, lnk, descri)
    ProdutoController.adicionarProduto(produto)

    document.getElementById('preco').value = ''
    document.getElementById('codigo').value = ''
    document.getElementById('produto').value = ''
    document.getElementById('descricao').value = ''
    document.getElementById('linkAmazon').value = ''

    alert("Dados inseridos com Sucesso!")
}

function montaHTML(){ //********************************************************** */
    main = document.createElement('main')
    main.setAttribute('class', 'container')
    document.body.append(main)
    section = document.createElement('section')
    section.setAttribute('class', 'products-container')
    main.append(section)
    for(let produto of produtos){
        article = document.createElement('article')
        article.setAttribute('class', 'card')
        section.append(article)
        div = document.createElement('div')
        div.setAttribute('class', 'product-image')
        div.setAttribute('id', 'img-' + produto.link)
        div.setAttribute('onclick', "abreLink(" + i + ")")
        article.append(div)
        document.getElementById('img-' + i).style.backgroundImage = 'url(imagens/img' + produto.link + '.jpg)'
        h3 = document.createElement('h3')
        h3.setAttribute('id', 'nome' + produto.link)
        h3.innerHTML = produto.nome
        article.append(h3)
        p1 = document.createElement('p')
        p1.innerHTML = 'Qtd: '
        p1.setAttribute('hidden', 'true')
        input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.setAttribute('value', '1')
        input.setAttribute('min', '1')
        input.setAttribute('max', '10')
        input.setAttribute('hidden', 'true')
        input.setAttribute('id', 'qtd-' + produto.quantidade)
        p1.append(input)
        article.append(p1)
        p2 = document.createElement('p')
        p2.innerHTML = 'R$ '
        span = document.createElement('span')
        span.setAttribute('id', produto.cod)
        span.setAttribute('class', 'bold')
        span.innerHTML = produto.preco.toString().toFixed(2).replace('.', ',')
        p2.append(span)
        article.append(p2)
        aLink = document.createElement('a')
        aLink.setAttribute('onclick', "compra(" + "'" + 'qtd-' + i + "'" + ',' + "'" + produto.cod + "'"  +  ',' + produto.cod + ")")
        aLink.setAttribute('class', 'btn')
        aLink.setAttribute('href', 'http://www.amazon.com.br/' + produto.link)
        aLink.setAttribute('target', '_blank')
        aLink.innerHTML = 'Comprar'
    }
    footer = document.createElement('footer')
    footer.setAttribute('id', 'rodape')
    document.body.append(footer)
    h2 = document.createElement('h2')
    h2.innerHTML = 'Informações sobre o site'
    footer.append(h2)
    p3 = document.createElement('p')
    p3.innerHTML = '&copy; 2023 '
    footer.append(p3)
    span2 = document.createElement('span')
    span2.setAttribute('class', 'bold')
    span2.innerHTML = 'Loja dos Nerds'
    aLink2 = document.createElement('a')
    aLink2.setAttribute('id', 'adm')
    aLink2.setAttribute('href', 'atualizacao.html')
    aLink2.innerHTML = 'Administração'
    footer.append(aLink2)
    p3.append(span2)
    let logA = localStorage.getItem('loginAutenticado')
    if(logA == "null" || logA == "undefined"){
        document.getElementById("log").innerHTML = 'login'
    }else{
        document.getElementById("log").innerHTML = `Bem-vindo, ${localStorage.getItem('loginAutenticado')}`
    }
}  
//********************************************************** */

function atualizaBotaoLogin() {
    const botao = document.getElementById("clog");
    const loginAut = localStorage.getItem('login')[0];

    if (loginAut && loginAut !== "null" && loginAut !== "undefined") {
        // Usuário logado
        botao.textContent = `Bem-vindo, ${loginAut}`;
        botao.onclick = function() {
            // Mostra o modal
            document.getElementById("logoutModal").style.display = "flex";
        }

        // Botão "Sim" do modal
        document.getElementById("btnSair").onclick = function() {
            localStorage.removeItem('login');
            document.getElementById("logoutModal").style.display = "none";
            botao.textContent = "Fazer login";
            botao.onclick = fazerLogin;
        }

        // Botão "Cancelar" do modal
        document.getElementById("btnCancelar").onclick = function() {
            document.getElementById("logoutModal").style.display = "none";
        }
    } else {
        botao.textContent = "Fazer login";
        botao.onclick = fazerLogin;
    }
}

// Função original
function fazerLogin() {
    window.location.href = "login.html";
}

// Atualiza botão ao carregar a página
window.onload = function() {
    atualizaBotaoLogin();
    montaHTML(); // sua função que monta os produtos
}
//********************************************************** */

function cadastrarUsuario() {
    nome = document.getElementById('novoUsuario').value.trim()
    senha = document.getElementById('novaSenha').value.trim()
    LoginController.cadastrarUsuario(nome, senha)
}

function compra(produto){
    CarrinhoController.adicionarProdutoCarrinho(produto)
    let url_atual = window.location.href
    if(url_atual != "http://127.0.0.1:5500/produto.html" && url_atual != "http://127.0.0.1:5500/produto.html#"){
        window.location.href = "/produto.html"
    }
    alert("Produto adicionado no carrinho!")
}

function abreLink(posArr){
    salvarProdutos()
    let url_atual = window.location.href
    if(url_atual != "http://127.0.0.1:5500/produto.html" && url_atual != "http://127.0.0.1:5500/produto.html#"){
        window.location.href = "/produto.html"
    }
}

function calculaCesta() {
    window.location.href = "carrinho.html"
}
/***************************************************************************** */
function carregaProduto(){
    for (let i = 0; i < produtos.length; i++) {
        document.getElementById("tituloProduto").innerHTML = produtos[i].nome
        document.getElementById("descProduto").innerHTML = produtos[i].descricao
        document.getElementById('imgProd').style.backgroundImage = 'url(imagens/img' + i + '.jpg)'
        div2 = document.createElement('div')
        div2.setAttribute('id', 'divProd')
        div2.setAttribute('class', 'card')
        document.body.append(div2)
        p1 = document.createElement('p')
        p1.innerHTML = 'Qtd: '
        div2.append(p1)
        input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.setAttribute('value', '1')
        input.setAttribute('min', '1')
        input.setAttribute('max', '10')
        input.setAttribute('id', 'qtd-' + i)
        p1.append(input)
        p2 = document.createElement('p')
        p2.innerHTML = 'R$ '
        span = document.createElement('span')
        span.setAttribute('id', produtos[i])
        span.setAttribute('class', 'bold')
        span.innerHTML = produtos[i].preco.toString().toFixed(2).replace('.', ',')
        p2.append(span)
        div2.append(p2)
        aLink = document.createElement('a')
        aLink.setAttribute('onclick', "compra(" + "'" + 'qtd-' + i + "'" + ',' + "'" + produtos[i].cod + "'"  +  ',' + i + ")")
        aLink.setAttribute('class', 'btn')
        aLink.setAttribute('href', '#')
        aLink.innerHTML = 'Comprar'
        div2.append(aLink)
        let logB = localStorage.getItem('login').nome
        if(logB == "null" || logB == "undefined"){
            document.getElementById("log").innerHTML = 'login'
        }else{
            document.getElementById("log").innerHTML = `Bem-vindo, ${localStorage.getItem('login')[0].nome}`
        }
    }
}

function getDadosClientes(){
    var select = document.getElementById("uf");
    var opcaoTexto = select.options[select.selectedIndex].text;
    var opcaoValor = select.options[select.selectedIndex].value;
    alert(opcaoTexto);
    alert(opcaoValor);
    email = document.getElementById("email").value
    senha = document.getElementById("senha").value
    nome = document.getElementById("nome").value
    const dadosCliente = {
        email : email,
        senha : senha,
        nome : nome
    }
alert(`${dadosCliente.email}, ${dadosCliente.senha}, ${nome}`)
}
/***************************************************************************** */