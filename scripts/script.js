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
  const offset = 200; // px do topo onde queremos ativar
  const elements = document.querySelectorAll('.box');

  if (!elements.length) {
    console.warn('Nenhum .box encontrado — verifique o seletor.');
    return;
  }

  // chama no load
  checkAll();

  window.addEventListener('scroll', checkAll, { passive: true });
  window.addEventListener('resize', checkAll);

  function checkAll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();

      // debug — descomente se quiser inspecionar
      // console.log(el, 'top', Math.round(rect.top), 'bottom', Math.round(rect.bottom), 'height', Math.round(rect.height));

      // condição clara e determinística:
      //  - ativar quando o topo do elemento estiver acima ou igual ao offset (cruzou a linha)
      //  - e o elemento ainda tiver pelo menos 1px visível na viewport (rect.bottom > 0)
      const shouldActivate = (rect.top <= offset) && (rect.bottom > 0);

      // alternativa: se você quer apenas ativar quando o topo cruzar e desativar quando subir (independente de visibilidade)
      // const shouldActivate = (rect.top <= offset);

      if (shouldActivate) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
});
