class LoginModel {

    static getUsuarios() {
        if(localStorage.usrArr){
            return JSON.parse(localStorage.getItem('usrArr'));
        }
        return [];
    }

    static getSenhas() {
        if(localStorage.snhArr){
            return JSON.parse(localStorage.getItem('snhArr'));
        }
        return [];
    }

    static adicionarUsuario(usuario, senha) {
        const usr = this.getUsuarios();
        const snh = this.getSenhas();
        usr.push(usuario);
        snh.push(senha);
        localStorage.setItem('usrArr', JSON.stringify(usr));
        localStorage.setItem('snhArr', JSON.stringify(snh));
    }
}
