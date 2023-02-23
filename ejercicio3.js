/* Desarrolle un algoritmo para el cálculo del salario de un trabajador. El importe
liquidado (sueldo) depende de una tarifa o precio por hora establecida y de un
condicionante sobre las horas trabajadas: si la cantidad de horas trabajadas es mayor a
40 horas, la tarifa se incrementa en un 50% para las horas extras. Calcular el sueldo
recibido por el trabajador en base las horas trabajadas y la tarifa. Utilice las
instrucciones LEER HORASTRABAJADAS y LEER TARIFA al inicio del programa para
cargar los valores en las variables HORASTRABAJADAS y TARIFA.*/

// Se obtienen las horas trabajadas y la tarifa por hora y se define la variable sueldo
const horasTrabajadas = Number(prompt("Las horas trabajadas son: "));
const tarifa = Number(prompt("ingrese el precio por hora"));
let sueldo;

// Se calcula el sueldo
if (horasTrabajadas > 40) {
    // Variables horas extras
    const horasExtras = horasTrabajadas - 40;
    // Se calcula la tarifa de horas extras
    const tarifaHoraExtra = tarifa + (tarifa * 0.5);

    // Sueldo por las horas extras
    sueldoHorasExtras = horasExtras * tarifaHoraExtra;
    // Sueldo total, que es el sueldo de 40 horas mas el suelo de las horas extras
    sueldo = (40 * tarifa) + sueldoHorasExtras;
} else {
    // Sueldo total sin horas extras
    sueldo = horasTrabajadas * tarifa;
}

// Se muestra el sueldo recibido en base a las horas trabajdas y la tarifa
console.log('El sueldo recibido del trabajador es: ', sueldo);