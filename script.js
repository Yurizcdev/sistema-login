function entrar() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    if (usuario == "admin" && senha == "123") {
        mensagem.innerText = "Login correto";
        mensagem.style.color = "green";
    } else {
        mensagem.innerText = "Usuário ou senha incorretos";
        mensagem.style.color = "red";
    }
}
