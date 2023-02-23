/*Escriba un algoritmo que lea un número entero y determine si es par o impar. Si es par,
que escriba todos los pares de manera descendiente desde sí mismo y hasta el cero. Si
es impar, que escriba todos los impares de manera descendiente desde si sí mismo
hasta el uno. Utilice la instrucción LEER NUMERO al inicio del programa para cargar un
número en la variable NUMERO.*/

// Pedimos al usuario que ingrese un número entero
const NUMERO = parseInt(prompt("Ingresa un número entero:"));

// Verificaremos si es par o impar
if (NUMERO % 2 === 0) {
  // Si es par los numeros se escribiran de manera descendentes en par hasta el cero
  console.log("el numero ingresado es par");
  for (let i = NUMERO; i >= 0; i -= 2) {
    console.log(i);
  }
} else {
  // Si es par los numeros se escribiran de manera descendentes en impar hasta el uno
  console.log("el numero ingresado es impar");
  for (let i = NUMERO; i >= 1; i -= 2) {
    console.log(i);
  }
}