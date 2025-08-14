export let produtos = []

export function salvarProdutos() {
    localStorage.setItem('produtos', produtos)
}

export function recuperarProdutos() {
    produtos = JSON.parse(localStorage.getItem('produtos')) || []
}