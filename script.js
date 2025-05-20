document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cidade = document.getElementById("cidade").value;
  
    if (nome && email && cidade) {
      alert(`Obrigado pela inscrição, ${nome}! Nos vemos no evento!`);
      this.reset();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
  