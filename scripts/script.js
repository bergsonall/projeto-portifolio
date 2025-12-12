document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggle-theme");

    if (!btn) {
        console.error("Botão #toggle-theme não encontrado");
        return;
    }

    btn.onclick = () => {
        document.body.classList.toggle("dark");
    };
});