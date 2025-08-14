class LoginView {

    static criarLoginView() {
        const novoUsr = document.getElementById("novoUsuario").value.trim();
        const novaSnh = document.getElementById("novaSenha").value.trim();
        const msg = document.getElementById("mensagem");

        if (!novoUsr || !novaSnh) {
            msg.style.color = "red";
            msg.textContent = "Preencha todos os campos!";
            return;
        }

        LoginModel.adicionarUsuario(novoUsr, novaSnh);
        msg.style.color = "green";
        msg.textContent = "Login criado com sucesso!";
        document.getElementById("novoUsuario").value = "";
        document.getElementById("novaSenha").value = "";
    }
}
