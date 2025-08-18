export let usuarios = []

export function salvarUsuarios() {
    localStorage.setItem('usuarios', usuarios)
}

export function recuperarUsuarios() {
    usuarios = localStorage.getItem('usuarios') || []
}