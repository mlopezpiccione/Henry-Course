document.addEventListener("DOMContentLoaded", function () {
    let actividades = [];

    const descripcionInput = document.getElementById("descripcionInput");
    const riesgoInput = document.getElementById("riesgoInput");
    const eliminarInput = document.getElementById("eliminarInput");
    const filtrarInput = document.getElementById("filtrarInput");

    const agregarBtn = document.getElementById("agregarBtn");
    const eliminarBtn = document.getElementById("eliminarBtn");
    const filtrarBtn = document.getElementById("filtrarBtn");
    const reporteBtn = document.getElementById("reporteBtn");

    const resultados = document.getElementById("resultados");

    function mostrarMensaje(mensaje) {
        resultados.innerHTML = `<p>${mensaje}</p>`;
    }

    const validarRiesgo = (riesgo) => {
        return riesgo === "bajo" || riesgo === "medio" || riesgo === "alto";
    };

    agregarBtn.addEventListener("click", function () {
        const descripcion = descripcionInput.value.trim();
        const riesgo = riesgoInput.value.trim().toLowerCase();

        if (descripcion === "") {
            mostrarMensaje("Error: La descripción no puede estar vacía.");
            return;
        }

        if (!validarRiesgo(riesgo)) {
            mostrarMensaje("Error: El nivel de riesgo debe ser bajo, medio o alto.");
            return;
        }

        actividades.push({ descripcion, riesgo });
        mostrarMensaje("Actividad agregada con éxito.");
        
        descripcionInput.value = "";
        riesgoInput.value = "";
    });

    eliminarBtn.addEventListener("click", function () {
        const indice = eliminarInput.value.trim();

        if (indice === "") {
            mostrarMensaje("Error: El índice no puede estar vacío.");
            return;
        }

        const indiceNum = parseInt(indice);
        
        if (isNaN(indiceNum)) {
            mostrarMensaje("Error: Debe ingresar un número válido.");
            return;
        }

        if (indiceNum < 0 || indiceNum >= actividades.length) {
            mostrarMensaje("Error: Índice fuera de rango.");
            return;
        }

        actividades.splice(indiceNum, 1);
        mostrarMensaje("Actividad eliminada con éxito.");
        
        eliminarInput.value = "";
    });

    filtrarBtn.addEventListener("click", function () {
        const nivel = filtrarInput.value.trim().toLowerCase();

        if (nivel === "") {
            mostrarMensaje("Error: El nivel de riesgo no puede estar vacío.");
            return;
        }

        if (!validarRiesgo(nivel)) {
            mostrarMensaje("Error: Nivel inválido. Debe ser bajo, medio o alto.");
            return;
        }

        const filtradas = actividades.filter(function (actividad) {
            return actividad.riesgo === nivel;
        });

        if (filtradas.length === 0) {
            mostrarMensaje("No hay actividades con este nivel de riesgo.");
            return;
        }

        resultados.innerHTML = "<h3>Actividades filtradas:</h3>";
        filtradas.forEach(function (actividad, index) {
            resultados.innerHTML += `<p>Descripción: ${actividad.descripcion}, Riesgo: ${actividad.riesgo}</p>`;
        });
    });

    reporteBtn.addEventListener("click", function () {
        if (actividades.length === 0) {
            mostrarMensaje("No hay actividades para mostrar.");
            return;
        }

        resultados.innerHTML = "<h3>Reporte de actividades:</h3>";
        
        actividades.forEach(function (actividad, index) {
            resultados.innerHTML += `<p>ID: ${index} - ${actividad.descripcion} (Riesgo: ${actividad.riesgo})</p>`;
        });
    });
});