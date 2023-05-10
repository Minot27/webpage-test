// Script para agregar funcionalidad de clic y animación
document.querySelector('.message-icon').addEventListener('click', function () {
    document.querySelector('.whatsapp-icons').classList.toggle('hidden');
    document.querySelector('.message-icon').classList.toggle('open');
  });

  document.querySelector('.message-icon-open-close').addEventListener('click', function () {
    var whatsappLogos = document.querySelectorAll('.whatsapp-logo');
    whatsappLogos.forEach(function (logo) {
      logo.style.display = 'none';
      logo.classList.toggle('fade-up-down');
    });
  });
  
  document.querySelector('.message-icon-open').addEventListener('click', function () {
    var whatsappLogos = document.querySelectorAll('.whatsapp-logo');
    whatsappLogos.forEach(function (logo) {
      logo.style.display = 'block';
      logo.classList.toggle('fade-up-down');
    });
  });