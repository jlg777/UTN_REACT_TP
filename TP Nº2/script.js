//ejercicio 1
// Obtener referencias a los elementos del DOM
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const botonCalcular = document.getElementById("calcular");
const resultadoElemento = document.getElementById("Resultado");

// Manejar el clic en el botón
botonCalcular.addEventListener("click", function () {
  // Obtener los valores ingresados por el usuario y convertirlos a números
  let Valor1 = parseFloat(inputNum1.value);
  let Valor2 = parseFloat(inputNum2.value);

  // Validar que los valores sean números
  if (isNaN(Valor1) || isNaN(Valor2)) {
    resultadoElemento.textContent = "Por favor, ingrese números válidos.";
  } else {
    // Función suma con un callback
    function suma(Valor1, Valor2, callback) {
      let Resultado = Valor1 + Valor2;
      callback(Resultado);
    }
    // Llamada a la función suma con un callback
    suma(Valor1, Valor2, function (Resultado) {
      resultadoElemento.textContent = `La suma es: ${Resultado}`;
    });
  }
});

// ejercicio 2
// Obtener referencias a los elementos del DOM
const inputval1 = document.getElementById("val1");
const inputval2 = document.getElementById("val2");
const botonCalc = document.getElementById("calc");
const ObtencionElemento = document.getElementById("Obtencion");

// Manejar el clic en el botón
botonCalcular.addEventListener("click", function () {
  // Obtener los valores ingresados por el usuario y convertirlos a números
  let numero1 = parseFloat(inputval1.value);
  let numero2 = parseFloat(inputval2.value);

  // Validar que los valores sean números
  if (isNaN(numero1) || isNaN(numero2)) {
    ObtencionElemento.textContent = "Por favor, ingrese números válidos.";
  } else {
    // Función suma con un callback
    function suma(numero1, numero2, callback) {
      let Obtencion = numero1 + numero2;
      callback(Obtencion);
    }
    // Llamada a la función suma con un callback
    suma(numero1, numero2, function (Obtencion) {
      ObtencionElemento.textContent = `La suma es: ${Obtencion}`;
    });
  }
});
