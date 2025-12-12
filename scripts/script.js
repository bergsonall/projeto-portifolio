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

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#menu a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {

      const href = this.getAttribute('href');

      // Se for "#", sobe para o topo
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Se não for âncora interna, nem mexa
      if (!href.startsWith('#')) return;

      e.preventDefault();

      const target = document.querySelector(href);
      if (!target) return;

      // AQUI ENTRA o scrollIntoView
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
});