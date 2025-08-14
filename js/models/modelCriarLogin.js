// Model - gerenciamento de usuários
const LoginModel = {
    usuarios: JSON.parse(localStorage.getItem('usrArr')) || [],
    senhas: JSON.parse(localStorage.getItem('snhArr')) || [],

    adicionarUsuario: function(usuario, senha) {
        this.usuarios.push(usuario);
        this.senhas.push(senha);
        localStorage.setItem('usrArr', JSON.stringify(this.usuarios));
        localStorage.setItem('snhArr', JSON.stringify(this.senhas));
    },

    usuarioExiste: function(usuario) {
        return this.usuarios.includes(usuario);
    }
};
