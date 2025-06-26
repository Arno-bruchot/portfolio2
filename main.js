document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('main section');

  function showSection(id) {
    sections.forEach(section => {
      if (section.id === id) {
        section.classList.remove('hidden-section');
      } else {
        section.classList.add('hidden-section');
      }
    });
  }

  // Affichage initial (intro visible)
  showSection('intro');

  const fills = document.querySelectorAll('.progress-bar-fill');
  const animateBars = () => {
    fills.forEach(bar => {
      const target = bar.getAttribute('data-fill');
      bar.style.width = target;
    });
  };
  setTimeout(animateBars, 400);

  // === AJOUT POUR LE BOUTON CV ===
  const btnCv = document.querySelector('.btn-cv');

  if (btnCv) {
    btnCv.addEventListener('mousemove', e => {
      const rect = btnCv.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btnCv.style.setProperty('--x', `${x}px`);
      btnCv.style.setProperty('--y', `${y}px`);
    });

    btnCv.addEventListener('mouseenter', () => {
      btnCv.classList.add('hovered');
    });

    btnCv.addEventListener('mouseleave', () => {
      btnCv.classList.remove('hovered');
    });
  }
});
