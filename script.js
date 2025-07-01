document.addEventListener("DOMContentLoaded", function () {
    // Criar botão de acessibilidade
    let botaoModoNoturno = document.getElementById("modo-noturno-btn");

    document.body.appendChild(botaoModoNoturno);

    // Função para alternar entre modo noturno e claro
    botaoModoNoturno.addEventListener("click", function () {
        document.body.classList.toggle("modo-noturno");

        // Alterar ícone do botão
        if (document.body.classList.contains("modo-noturno")) {
            botaoModoNoturno.innerHTML = "🌞"; // Sol (Modo Claro)
            botaoModoNoturno.style.backgroundColor = "#FFD700"; // Amarelo
            botaoModoNoturno.style.color = "#000"; // Preto no texto
        } else {
            botaoModoNoturno.innerHTML = "🌙"; // Lua (Modo Noturno)
            botaoModoNoturno.style.backgroundColor = "#003366"; // Azul escuro
            botaoModoNoturno.style.color = "#fff"; // Texto branco
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const btnAcessibilidade = document.createElement("button");
    btnAcessibilidade.textContent = "🦽 Acessibilidade";
    btnAcessibilidade.id = "btn-acessibilidade";
    document.body.appendChild(btnAcessibilidade);

    let textoAumentado = false;

    btnAcessibilidade.addEventListener("click", function () {
        const elementosTexto = document.querySelectorAll("body, h1, h2, p, li, a");
        elementosTexto.forEach((el) => {
            el.style.fontSize = textoAumentado ? "" : "1.25em";
        });
        textoAumentado = !textoAumentado;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const btnFonte = document.createElement("button");
    btnFonte.id = "btn-fonte";
    btnFonte.textContent = "🔍 + / - Texto";
    document.body.appendChild(btnFonte);

    let tamanhoFonte = 100;

    btnFonte.addEventListener("click", function () {
        tamanhoFonte += 10;
        if (tamanhoFonte > 150) tamanhoFonte = 100; // volta ao tamanho original

        const elementos = document.querySelectorAll("body, h1, h2, p, li, a");
        elementos.forEach((el) => {
            el.style.fontSize = `${tamanhoFonte}%`;
        });
    });
});

