export let carrinho = []

export function salvarCarrinho() {
    localStorage.setItem('carrinho', carrinho)
}

export function recuperarCarrinho() {
    carrinho = localStorage.getItem('carrinho') || []
}