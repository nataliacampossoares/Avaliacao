function enviar(){
    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value
    let email = document.getElementById("email").value

    if (nome && senha && email) {
    
      let numero = /^[a-zA-Z0-9]{8,}$/;
      if (numero.test(senha)) {
        alert("Cadastro realizado.");
        document.getElementById("nome").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("email").value = "";
      } else {
        alert("A senha deve conter no mínimo 8 caracteres");
      }
    }
    else {
      alert("Por favor, preencha todos os campos do formulário.");
    }

    
}