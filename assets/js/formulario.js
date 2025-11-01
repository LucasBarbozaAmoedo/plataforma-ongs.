document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formCadastro");
  const mensagem = document.getElementById("mensagem");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recarregar a página

    // Captura os valores do formulário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const nascimento = document.getElementById("nascimento").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const complemento = document.getElementById("complemento").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();

    // Validação simples
    if (!nome || !email || !cpf || !telefone || !nascimento || !cep || !endereco || !numero || !cidade || !estado) {
      alert("⚠️ Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Mostra mensagem de sucesso
    mensagem.textContent = "✅ Cadastro enviado com sucesso!";
    mensagem.style.display = "block";

    // Cria elemento para mostrar os dados enviados
    let dadosDiv = document.getElementById("dadosEnviados");

    if (!dadosDiv) {
      dadosDiv = document.createElement("div");
      dadosDiv.id = "dadosEnviados";
      dadosDiv.style.marginTop = "15px";
      dadosDiv.style.border = "1px solid #ccc";
      dadosDiv.style.padding = "10px";
      dadosDiv.style.borderRadius = "5px";
      document.querySelector("main").appendChild(dadosDiv);
    }

    // Preenche os dados
    dadosDiv.innerHTML = `
      <h3>📋 Dados do Cadastro:</h3>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>CPF:</strong> ${cpf}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Data de Nascimento:</strong> ${nascimento}</p>
      <p><strong>CEP:</strong> ${cep}</p>
      <p><strong>Endereço:</strong> ${endereco}, Nº ${numero} ${complemento}</p>
      <p><strong>Cidade:</strong> ${cidade}</p>
      <p><strong>Estado:</strong> ${estado}</p>
    `;
    dadosDiv.style.display = "block";

    // Limpa o formulário
    form.reset();
  });
});
