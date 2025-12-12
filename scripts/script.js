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

const elementos = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
  elementos.forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top <= 200 && rect.bottom >= 0) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
});