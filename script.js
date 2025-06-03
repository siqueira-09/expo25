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
