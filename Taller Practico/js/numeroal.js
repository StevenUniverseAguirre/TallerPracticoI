/*/var numeros = new Array();
var numero = */


function init() {
    var sentencia = document.getElementById("sentencia");
    var numerousu = document.getElementById("numerousu");
    var notify = document.getElementById("notify");
    var envio = document.getElementById("envio");
    var let = document.getElementById("let");
    var numu = new Array();
    var i = 1;

    if (numerousu > 100 || numerousu < 0) {
        alert("Error");
    }

    var numero = Math.floor(Math.random() * (100 + 1));
    //var impresion = sentencia.textContent = sentencia.textContent = numero;
    var i = 0;
    envio.addEventListener("click", function () {
        i++;
        if (numero != numerousu.value) {
            if (numerousu.value > numero) {
                alert("El número que digita es mayor al número aleatorio");
            } else {
                alert("El número que digita es menor al número aleatorio");
            }

        }
        if (numero == numerousu.value && i == 1) {
            notify.innerHTML = "Usted intento " + i + "veces";
            let.innerHTML = "Sobresaliente";
            numu[i];
            //for(k=0; )

        } else if (numero == numerousu.value && i <= 4) {
            notify.innerHTML = "Usted intento " + i + "veces";
            let.innerHTML = "notable";
            numu[i];

        } else if (numero == numerousu.value && i <= 11) {
            notify.innerHTML = "Usted intento " + i + "veces";
            let.innerHTML = "Muy bien";
            numu[i];

        } else if (numero == numerousu.value && i <= 25) {
            notify.innerHTML = "Usted intento " + i + "veces";
            let.innerHTML = "Regular";
            numu[i];

        } else if (umero == numerousu.value && i > 26) {
            notify.innerHTML = "Usted intento " + i + "veces";
            let.innerHTML = "Pesimo";
            numu[i];
        }
        
    })
}

window.onload = init;