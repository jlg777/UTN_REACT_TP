function sumar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var suma = num1 + num2;
    document.getElementById("resultado").textContent = suma;
}

function resta() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var suma = num1 - num2;
    document.getElementById("resultado").textContent = suma;
}

function multiplicacion() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var suma = num1 * num2;
    document.getElementById("resultado").textContent = suma;
}

function division() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var suma = num1 / num2;
    document.getElementById("resultado").textContent = suma;
}
