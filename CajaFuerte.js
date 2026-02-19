let codigoSecreto = "";
let contadorIntentos = 0;

const codeInput = document.getElementById("code");
const triesInput = document.getElementById("tries");
const validateInput = document.getElementById("validate");

const saveBtn = document.getElementById("saveBtn");
const validateBtn = document.getElementById("validateBtn");
const resetBtn = document.getElementById("resetBtn");

saveBtn.addEventListener("click", function () {

    const codigo = codeInput.value;
    const intentos = parseInt(triesInput.value);

    const codigoValido = /^\d{4}$/.test(codigo);

    if (!codigoValido) {
        alert("El código debe tener exactamente 4 dígitos numéricos.");
        return;
    }

    if (intentos < 1 || intentos > 5 || isNaN(intentos)) {
        alert("La cantidad de intentos debe estar entre 1 y 5.");
        return;
    }

    codigoSecreto = codigo;
    contadorIntentos = intentos;

    codeInput.disabled = true;
    triesInput.disabled = true;
    saveBtn.disabled = true;

    alert("Código guardado correctamente.");
});

validateBtn.addEventListener("click", function () {

    const codigoIngresado = validateInput.value;

    switch (true) {

        case contadorIntentos === 0:
            alert("Los intentos han sido agotados.");
            break;

        case codigoIngresado === codigoSecreto:
            alert("Acceso concedido.");
            break;

        default:
            contadorIntentos--;
            console.log("Código incorrecto. Intentos restantes: " + contadorIntentos);

            if (contadorIntentos === 0) {
                alert("Los intentos han sido agotados.");
            } else {
                alert("Código incorrecto. Te quedan " + contadorIntentos + " intentos.");
            }
            break;
    }

    validateInput.value = "";
});

resetBtn.addEventListener("click", function () {

    codigoSecreto = "";
    contadorIntentos = 0;

    codeInput.value = "";
    triesInput.value = "";
    validateInput.value = "";

    codeInput.disabled = false;
    triesInput.disabled = false;
    saveBtn.disabled = false;

    alert("Sistema reiniciado.");
});