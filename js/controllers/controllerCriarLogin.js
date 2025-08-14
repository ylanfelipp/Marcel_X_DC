// Controller - ligação entre Model e View
const LoginController = {
    criarLogin: function() {
        const usuario = document.getElementById('novoUsuario').value.trim();
        const senha = document.getElementById('novaSenha').value.trim();

        if (!usuario || !senha) {
            LoginView.mostrarMensagem("Preencha todos os campos!", "red");
            return;
        }

        if (LoginModel.usuarioExiste(usuario)) {
            LoginView.mostrarMensagem("Usuário já existe!", "red");
            return;
        }

        // Adiciona usuário no Model
        LoginModel.adicionarUsuario(usuario, senha);

        // Feedback para o usuário
        LoginView.mostrarMensagem("Login criado com sucesso!", "green");
        LoginView.limparInputs();

        // Redireciona para a página de login depois de 1.5s
        setTimeout(() => {
            window.location.href = "login.html"; // ou outra página de login
        }, 1500);
    }
};
