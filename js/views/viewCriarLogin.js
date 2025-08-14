// View - exibir mensagens e limpar inputs
const LoginView = {
    mostrarMensagem: function(msg, cor='green') {
        const p = document.getElementById('mensagem');
        p.textContent = msg;
        p.style.color = cor;
    },

    limparInputs: function() {
        document.getElementById('novoUsuario').value = '';
        document.getElementById('novaSenha').value = '';
    }
};
