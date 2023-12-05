function cambiarColor(numeroColor) {
  var campo = document.getElementById("idcampo");
  campo.style.color = "#00ff00";
  switch (numeroColor) {
    case 1:
      console.log("llego el uno");
      campo.style.color = "#00ff00";
      break;
    case 2:
      console.log("llego el dos");
      campo.style.color = "#eb9854";
      break;
    case 3:
      console.log("llego el tres");
      campo.style.color = "#5dddbd";
      break;

    default:
      break;
  }
  console.log(numeroColor);
}

// formulario
// Intente hacer lo de enviar el mensaje al correo pero no pude

const btn = document.getElementById("button");

document.getElementById("col").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_afs2nmh";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
