function enviar(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email && senha) {
        if (email === "admin@email.com.br") {
            if (senha === "#dw1UTFPR#") {
                alert("Usuário autenticado")
            }
            else {
                alert("Senha inválida.")
            }
        }
        else {
            alert("E-mail e senha inválida.")
        }
      }
      else {
        alert("Por favor, preencha todos os campos do formulário.");
      }
}