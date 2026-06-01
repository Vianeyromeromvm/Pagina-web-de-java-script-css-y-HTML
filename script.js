/* ==========================================================================
   MÓDULO: DEWE-20 - DISEÑO Y ELABORACIÓN DE PÁGINAS WEB
   RESULTADO DE APRENDIZAJE: 2.1 - IMPLEMENTA INTERACTIVIDAD
   ACTIVIDAD DE EVALUACIÓN: 2.1.1 (DESARROLLO DE CÓDIGO SCRIPT DE JAVASCRIPT)
   ALUMNO: Vianney Romero García 
   GRUPO: 6205
   DOCENTE EVALUADOR: Rogelio Sánchez López
   ========================================================================== */

/* --------------------------------------------------------------------------
   INDICADOR: USO DE VARIABLES, TIPOS DE DATOS Y MECANISMO DE ESCAPE
   -------------------------------------------------------------------------- */
// Declaración de variable global usando la palabra reservada 'var'
// Uso del mecanismo de escape (\n y \") para incluir caracteres especiales en texto
var mensajeBienvenida = "¡Bienvenido al Portal CONALEP 6205!\nInstrucciones: \"Por favor revise los eventos académicos y culturales\".";
console.log(mensajeBienvenida);

/* --------------------------------------------------------------------------
   1. FUNCIÓN INTERACTIVA: CONTROL DE CUPO (Para index.html)
   Manejo de Operadores Matemáticos, Lógicos, Relacionales y Estructuras If-Else
   -------------------------------------------------------------------------- */
function calcularDiasEvento() {
    // Declaración de variables locales y asignación de valores según su tipo
    var totalDiasMapeados = 0; 
    var cupoMaximo = 50;       // Tipo numérico entero
    var inscritos = 48;        // Tipo numérico entero
    var nombreEvento = "Feria de Tecnología"; // Tipo cadena de texto (String)

    // Operadores matemáticos y de asignación complejos
    totalDiasMapeados = 15 + 5; 
    
    // Operador de incremento (exigido en la rúbrica)
    inscritos++; 

    // Operadores relacionales, lógicos y de negación
    var hayCupo = (inscritos < cupoMaximo); 
    var eventoUrgente = !hayCupo; // Operador de negación lógica
    
    // Estructura de control condicional compuesta: if / if-else / else
    if (hayCupo && nombreEvento.length > 0) {
        // Operaciones con cadenas de texto: propiedad .length, operador + y métodos nativos
        var alertaTexto = "Cupo Disponible para: ".concat(nombreEvento.toUpperCase());
        
        // Alerta interactiva en navegador
        alert(alertaTexto + " (Días restantes aproximados: " + totalDiasMapeados + ")");
    } else if (eventoUrgente || inscritos === cupoMaximo) {
        alert("Atención: El cupo de registro para las actividades se encuentra lleno.");
    } else {
        alert("Consulte disponibilidad con el Administrador del módulo DEWE-20.");
    }
}

/* --------------------------------------------------------------------------
   2. FUNCIÓN DE ARREGLOS: GESTIÓN DE CATÁLOGO (Para eventos.html y galeria.html)
   Manejo de Funciones de Cadenas, Métodos de Arreglos y Bucles Combinados
   -------------------------------------------------------------------------- */
function gestionarCatalogoEventos() {
    // Declaración de un arreglo (Array) con datos iniciales
    var listaEventos = ["Robótica", "Fútbol", "Oratoria", "Teatro"];
    
    // Incorporación de funciones y propiedades nativas de arreglos (Exigidas)
    listaEventos.push("Ciencias");      // push(): Añade al final
    listaEventos.unshift("Fotografía"); // unshift(): Añade al inicio
    
    var ultimoEvento = listaEventos.pop();   // pop(): Elimina el último elemento
    var primerEvento = listaEventos.shift(); // shift(): Elimina el primer elemento
    
    listaEventos.reverse(); // reverse(): Invierte el orden del arreglo
    
    // concat() y join(): Operaciones de combinación y conversión a cadena de texto
    var cadenaEventos = listaEventos.join(" | ");
    
    // COMBINACIÓN DE ESTRUCTURAS DE CONTROL REPETITIVAS PARA REFORZAR CONOCIMIENTO
    
    // Estructura de control 1: Bucle FOR clásico con propiedad .length
    console.log("--- Iterando el arreglo con estructura FOR clásico ---");
    for (var i = 0; i < listaEventos.length; i++) {
        console.log("Posición " + i + " del arreglo: " + listaEventos[i]);
    }

    // Estructura de control 2: Bucle FOR...IN para recorrer índices/propiedades
    console.log("--- Iterando propiedades con estructura FOR...IN ---");
    for (var indice in listaEventos) {
        // Operaciones avanzadas con cadenas de texto (Módulo 2.1.1)
        var inicial = listaEventos[indice].charAt(0);          // charAt(): Obtiene carácter
        var subCadena = listaEventos[indice].substring(1, 4);   // substring(): Extrae porción
        var trozos = listaEventos[indice].split("");            // split(): Divide la cadena en matriz
        
        console.log("Elemento: " + listaEventos[indice].toLowerCase() + " | Inicial: " + inicial);
    }
    
    // Despliegue del resultado final procesado
    alert("Catálogo de eventos escolares procesado dinámicamente:\n" + cadenaEventos);
}

/* --------------------------------------------------------------------------
   3. FUNCIÓN DE VALIDACIÓN: CONTROL NUMÉRICO (Para contacto.html)
   Manejo de Funciones Numéricas Especiales (NaN, isNaN, toFixed)
   -------------------------------------------------------------------------- */
function validarCodigoPostal(inputID) {
    // Obtención del valor ingresado en el formulario HTML por medio del DOM
    var valorInput = document.getElementById(inputID).value;
    
    // Conversión explícita a tipo numérico de punto flotante
    var codigoNumerico = parseFloat(valorInput);
    
    // Incorporación de funciones y propiedades críticas de números
    if (isNaN(codigoNumerico)) {
        // Uso de la propiedad global NaN para especificar el error en pantalla
        alert("Error de captura técnica: El valor ingresado equivale a " + NaN + " (No es un número válido).");
    } else {
        // Uso de la propiedad toFixed() para formatear números a dos posiciones decimales
        var codigoFormateado = codigoNumerico.toFixed(2);
        alert("Código de registro numérico validado de forma excelente: " + codigoFormateado);
    }
}
