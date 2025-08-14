class LoginController {
    
    // Função de criação de login
    static criarLogin() {
        LoginView.criarLoginView();
    }

    // Função de login existente
    static abrirLogin() {
        const login = document.getElementById("usuarioLogin").value.trim();
        const senha = document.getElementById("senhaLogin").value.trim();
        const msg = document.getElementById("mensagemLogin");

        if (!login || !senha) {
            msg.style.color = "red";
            msg.textContent = "Preencha todos os campos!";
            return;
        }

        const usr = LoginModel.getUsuarios();
        const snh = LoginModel.getSenhas();

        const indUsr = usr.indexOf(login);

        if (usr[indUsr] === login && snh[indUsr] === senha) {
            localStorage.setItem('loginAutenticado', login);
            msg.style.color = "green";
            msg.textContent = `Bem-vindo, ${login}`;
            // Limpa campos
            document.getElementById("usuarioLogin").value = "";
            document.getElementById("senhaLogin").value = "";
        } else {
            msg.style.color = "red";
            msg.textContent = "Usuário ou senha inválidos!";
        }
    }
}
