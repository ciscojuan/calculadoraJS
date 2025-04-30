function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) throw new Error("División por cero");
  return a / b;
}

function isPar(a) {
  if (a % 2 == 0) {
    return "es par";
  } else {
    return "No es par";
  }
}
sumar(5, 2);
restar(10, 20);
multiplicar(4, 5);
dividir(10, 5);

//Se pudo cerrar el Issue con el PR??
// No
// Segundo intento?
