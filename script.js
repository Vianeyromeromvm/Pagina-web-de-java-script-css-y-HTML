/* ==========================================================================
   MÓDULO: DEWE-20 - DISEÑO Y ELABORACIÓN DE PÁGINAS WEB
   ACTIVIDAD EVALUATIVA: 2.1.1 (INTERACTIVIDAD INTEGRAL DEL SITIO WEB)
   ALUMNO: Vianney Romero García 
   GRUPO: 6205
   DOCENTE EVALUADOR: Rogelio Sánchez López
   ========================================================================== */

/* --------------------------------------------------------------------------
   INDICADOR GLOBAL: USO DE VARIABLES Y MECANISMO DE ESCAPE
   -------------------------------------------------------------------------- */
// Uso del mecanismo de escape (\n y \") para saltos de línea y comillas dobles internas
var mensajeConsola = "ALERTA DE SISTEMA:\n\"El script centralizado de interacciones se ha enlazado de forma exitosa\".";
console.log(mensajeConsola);


/* ==========================================================================
   1. CONTROL DE AVISOS DINÁMICOS (Para index.html)
   Criterios: Arreglos, Métodos de Arreglos, Cadenas y Modificación de Interfaz
   ========================================================================== */
// Declaración de arreglo global con datos iniciales
var avisosEscolares = [
    "Inscripciones abiertas para el Intercolegial de Fútbol ⚽",
    "Feria de Robótica en el Aula Magna - ¡Faltan pocos días! 🤖",
    "Concurso de Oratoria: Regístrate con tu tutor académico 🗣️"
];

// Uso obligatorio de métodos de modificación de arreglos (Rúbrica)
avisosEscolares.push("Muestra de Teatro de Fin de Semestre 🎭");      // push(): Añade al final
avisosEscolares.unshift("Aviso Inicial: Bienvenidos al Semestre 🏫"); // unshift(): Añade al inicio

// Operaciones de extracción reglamentarias
var avisoEliminadoFinal = avisosEscolares.pop();   // Quita el último
var avisoEliminadoInicio = avisosEscolares.shift(); // Quita el primero

// Revertimos el orden del arreglo para demostrar uso del método nativo
avisosEscolares.reverse();

var indiceAvisoActual = 0;

function rotarAviso(direccion) {
    // Uso de operadores de asignación complejos e incremento/decremento
    if (direccion === "siguiente") {
        indiceAvisoActual++; // Operador de incremento
    } else if (direccion === "anterior") {
        indiceAvisoActual--; // Operador de decremento
    }

    // Estructuras de control condicional compuestas (if-else) con operadores relacionales
    if (indiceAvisoActual >= avisosEscolares.length) {
        indiceAvisoActual = 0; 
    } else if (indiceAvisoActual < 0) {
        indiceAvisoActual = avisosEscolares.length - 1; 
    }

    // Uso de métodos de cadena: Combinación y Mayúsculas
    var avisoTexto = avisosEscolares[indiceAvisoActual];
    var textoFormateado = "AVISO ACTIVO: ".concat(avisoTexto.toUpperCase());
    
    // Inyección de texto al documento HTML
    document.getElementById("textoBanner").innerHTML = "<strong>" + textoFormateado + "</strong>";
}


/* ==========================================================================
   2. TRIVIA INTERACTIVA (Para index.html y mapa.html)
   Criterios: Operadores Lógicos, Negación, Modificación de Estilos
   ========================================================================== */
var puntuacionTrivia = 0;

function evaluarRespuesta(boton, esCorrecta) {
    var validacionInversa = !esCorrecta; // Operador de negación lógica (!)

    // Uso de operadores lógicos (&& / ||) y booleanos puros
    if (esCorrecta === true && validacionInversa === false) {
        puntuacionTrivia += 1; // Operador de asignación compuesta
        boton.style.backgroundColor = "#28a745"; // Cambio visual dinámico
        boton.style.color = "white";
        alert("¡Excelente! Respuesta correcta.\nPuntuación Actualizada: " + puntuacionTrivia + " punto(s).");
    } else {
        boton.style.backgroundColor = "#dc3545"; 
        boton.style.color = "white";
        // Mecanismo de escape avanzado en cadena de texto
        alert("Respuesta incorrecta.\nInstrucciones: \"Vuelve a revisar la rúbrica del módulo DEWE-20\".");
    }
    
    // Deshabilitar botones hermanos usando bucles clásicos sobre elementos del DOM
    var hermanos = boton.parentNode.getElementsByTagName("button");
    for (var i = 0; i < hermanos.length; i++) {
        hermanos[i].disabled = true;
    }
}


/* ==========================================================================
   3. FILTRO DE TABLAS EN TIEMPO REAL (Para eventos.html)
   Criterios: Bucles Combinados (for clásico y for...in), Funciones de Cadenas
   ========================================================================== */
function filtrarEventos() {
    // Captura del input y conversión obligatoria a minúsculas
    var inputBusqueda = document.getElementById("txtBuscador").value.toLowerCase();
    var tabla = document.getElementById("tablaActividades");
    var filas = tabla.getElementsByTagName("tr");

    // BUCLE 1: For clásico para recorrer las filas de la tabla
    for (var i = 1; i < filas.length; i++) {
        var celdaEvento = filas[i].getElementsByTagName("td")[1]; 
        
        if (celdaEvento) {
            var textoCelda = celdaEvento.textContent || celdaEvento.innerText;
            
            // Uso de indexOf para manipulación de segmentos de cadenas de texto
            if (textoCelda.toLowerCase().indexOf(inputBusqueda) > -1) {
                filas[i].style.display = ""; 
            } else {
                filas[i].style.display = "none"; 
            }
        }
    }
    
    // BUCLE 2: For...In (Exigido en la rúbrica) para analizar las propiedades de las filas en consola
    console.log("--- Análisis de propiedades de filas del catálogo escolar ---");
    for (var propiedad in filas) {
        if (isNaN(propiedad) === false) {
            console.log("Índice evaluado por el script: " + propiedad);
        }
    }
}


/* ==========================================================================
   4. PROCESADOR DE ARREGLOS DE TEXTO (Para galeria.html)
   Criterios: Métodos charAt, substring, split, join
   ========================================================================== */
function gestionarCatalogoEventos() {
    // Uso del método join() para unificar el arreglo global en una sola cadena con separadores
    var cadenaUnificada = avisosEscolares.join(" * ");
    
    // Demostración de manipulación de cadenas carácter por carácter
    if (cadenaUnificada.length > 0) {
        var primeraLetra = cadenaUnificada.charAt(0);              // charAt()
        var fragmentoInicial = cadenaUnificada.substring(0, 15);   // substring()
        var matrizPalabras = cadenaUnificada.split(" ");           // split()
        
        console.log("Primera letra del catálogo: " + primeraLetra);
        console.log("Fragmento extraído: " + fragmentoInicial);
        console.log("Total de palabras encontradas de forma dinámica: " + matrizPalabras.length);
    }
    
    alert("Catálogo de eventos procesado internamente con métodos de cadena:\n" + cadenaUnificada);
}


/* ==========================================================================
   5. CALCULADORA FINANCIERA Y VALIDACIÓN CP (Para contacto.html)
   Criterios: ParseInt, ParseFloat, IsNaN, ToFixed
   ========================================================================== */
function calcularCostoInscripcion() {
    // Conversión de datos usando funciones numéricas especiales nativas
    var cantidadBoletos = parseInt(document.getElementById("numBoletos").value);
    var precioUnitario = 150.00;
    var costoTotal = 0;
    var descuento = 0;

    // Validación numérica preventiva con isNaN
    if (isNaN(cantidadBoletos) || cantidadBoletos <= 0) {
        document.getElementById("textoResultadoCosto").innerHTML = "Por favor, ingresa una cantidad numérica válida de accesos.";
        return;
    }

    // Operación aritmética de multiplicación
    costoTotal = cantidadBoletos * precioUnitario;

    // Condicional compuesta con operador relacional
    if (cantidadBoletos >= 3) {
        descuento = costoTotal * 0.15; // Determina el 15% de descuento
        costoTotal -= descuento;       // Operación de asignación compuesta
    }

    // Uso obligatorio del método .toFixed() para limitar los decimales a dos dígitos
    document.getElementById("textoResultadoCosto").innerHTML = 
        "Subtotal: $" + (cantidadBoletos * precioUnitario).toFixed(2) + " MXN.<br>" +
        "Descuento Aplicado: -$" + descuento.toFixed(2) + " MXN.<br>" +
        "<strong>Total Final a Pagar: $" + costoTotal.toFixed(2) + " MXN.</strong>";
}

// Validación original exigida para el campo de código postal
function validarCodigoPostal(inputID) {
    var valorInput = document.getElementById(inputID).value;
    var codigoNumerico = parseFloat(valorInput); // parseo flotante
    
    if (isNaN(codigoNumerico)) {
        alert("Error de captura técnica: El valor ingresado equivale a " + NaN + " (No es un número válido).");
    } else {
        var codigoFormateado = codigoNumerico.toFixed(2);
        alert("Código de registro numérico validado correctamente: " + codigoFormateado);
    }
}
