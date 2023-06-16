let menuVisible = false
//funcion muestra y oculta el menu
function iraContacto(){
    console.log("iraContacto");
}

function enviarCorreo(){
    console.log("enviarCorreo");
}
function cambiarColor(numeroColor){
    var campo = document.getElementById('idcampo');
campo.style.color="#00ff00";
    switch (numeroColor) {
		case 1:
			console.log("llego el uno")
            campo.style.color="#00ff00";
			break;
            case 2:
			console.log("llego el dos")
            campo.style.color="#eb9854";
			break;
            case 3:
			console.log("llego el tres")
            campo.style.color="#5dddbd";
			break;

		default:
			
			break;	
	}
    console.log(numeroColor);
}
