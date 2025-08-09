
document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("hnu4MuhFedTWXKXFD"); // Public Key
  
    const form = document.getElementById('contactForm');
    const nombre = document.getElementById('user_name');
    const email = document.getElementById('user_email');
    const mensaje = document.getElementById('message');
    const alerta = document.getElementById('mensajeAlert');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const nombreVal = nombre.value.trim();
      const emailVal = email.value.trim();
      const mensajeVal = mensaje.value.trim();
  
      const expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  
      if (!nombreVal || !emailVal || !mensajeVal) {
        mostrarAlerta('Debe llenar todos los campos.', 'alertaRoja');
      } else if (!expressionEmail.test(emailVal)) {
        mostrarAlerta('Email inválido.', 'alertaRoja');
      } else {
        emailjs.sendForm('service_tgcps1h', 'template_pkajk2l', '#contactForm')
          .then(function () {
            mostrarAlerta('Mensaje enviado. Pronto le confirmamos!', 'alertaVerde');
            limpiar();
          }, function (error) {
            mostrarAlerta('Error al enviar el mensaje.', 'alertaRoja');
            console.error("FAILED...", error);
          });
      }
    });
  
    function mostrarAlerta(texto, clase) {
      alerta.textContent = texto;
      alerta.className = clase;
    }
  
    function limpiar() {
      nombre.value = '';
      email.value = '';
      mensaje.value = '';
    }
  });