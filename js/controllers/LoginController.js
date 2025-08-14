import { salvarUsuarios, usuarios } from "../database/usuarios";
import Usuario from "../models/Usuario.js"

class LoginController {
    static cadastrarUsuario(nome, senha) {
        if (nome != undefined && senha != undefined) {
            const usuario = new Usuario()
            usuario.nome = nome
            usuario.senha = senha
            usuarios.push(usuario)
            salvarUsuarios()
            return
        }
        throw new Error("login e/ou senha inválidos.")
    }

    static fazerLogin(nome, senha) {
        let loginUsuario = usuarios.filter((usuario) => usuario.nome === nome && usuario.senha === senha)
        if(loginUsuario.length === 0) {
            throw new Error("Este usuário não existe.")
        } else if (loginUsuario > 1) {
            throw new Error("usuário duplicado.")
        }
        localStorage.setItem('login', [loginUsuario])
    }

    static sairLogin() {
        localStorage.setItem('login', [])
    }
}

export default LoginController