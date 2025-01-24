const sections = document.querySelectorAll("section");

// Configuración inicial para que las secciones estén ocultas
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transition = "opacity 1s ease-out, transform 1.5s ease-out"; 
  section.style.transform = "translateY(100px)"; 
});

// Función que maneja las intersecciones de las secciones
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const isLastSection = entry.target === sections[sections.length - 1];

    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)"; 
    } else {
      if (!isLastSection) { // Si no es la última sección
        entry.target.style.opacity = 0;
        entry.target.style.transform = "translateY(100px)";
      }
    }
  });
}, {
  threshold: 0.1 // Inicia cuando el 10% de la sección es visible
});

// Aplica el observer a todas las secciones
sections.forEach(section => {
  observer.observe(section);
});



const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            faqItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        }
    });
});

//navbar

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.nav-item.dropdown');

  dropdowns.forEach(function (dropdown) {
      // Al mostrar el dropdown
      dropdown.addEventListener('shown.bs.dropdown', function () {
          var icon = this.querySelector('i');
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-up');
      });

      // Al ocultar el dropdown
      dropdown.addEventListener('hidden.bs.dropdown', function () {
          var icon = this.querySelector('i');
          icon.classList.remove('fa-chevron-up');
          icon.classList.add('fa-chevron-down');
      });
  });
});