function entrar() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario == "admin" && senha == "123") {
        document.getElementById("mensagem").innerText = "Login correto";
    } else {
        document.getElementById("mensagem").innerText = "Usuário ou senha incorretos";
    }
}
