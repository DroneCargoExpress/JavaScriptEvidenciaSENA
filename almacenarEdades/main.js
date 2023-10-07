function main() {
    let edades = []; // inicialización de una lista vacía

    console.log("Ingrese las edades de 10 personas:");

    for (let i = 0; i < 10; i++) {
        let edad = parseInt(prompt(`Persona ${i + 1}:`)); // ingresar edades

        // Validar la edad ingresada
        while (isNaN(edad) || edad <= 0 || edad > 120) {
            alert("Debes ingresar una edad válida.");
            edad = parseInt(prompt(`Persona ${i + 1}:`));
        }

        edades.push(edad); //acumular
    }
    // llamdado a las demas funciones, para poder ser utilizadas aca 
    const estadisticasMayoresEdad = calcularMayoresDeEdad(edades);
    const estadisticasMayorMenor = calularMayorMenorEdad(edades);
    const promedioEdades = calcularPromedio(edades);

    // imprimir en consola todos los requerimientos del ejercicio
    console.log(`Personas menores de edad: ${estadisticasMayoresEdad.menores}`);
    console.log(`Personas mayores de edad: ${estadisticasMayoresEdad.mayores}`);
    console.log(`Adultos mayores: ${estadisticasMayoresEdad.adultosMayores}`);
    console.log(`Edad más baja: ${estadisticasMayorMenor.edadMasBaja}`);
    console.log(`Edad más alta: ${estadisticasMayorMenor.edadMasAlta}`);
    console.log(`Promedio de edades: ${promedioEdades.toFixed(2)}`);
}

// funcion para validar mayor, menor y adultos mayores y devolver un objeto
function calcularMayoresDeEdad(edades) {
    let menoresDeEdad = 0;
    let mayoresEdad = 0;
    let adultosMayores = 0;
    
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] < 18) {
            menoresDeEdad += 1;
        } else if (edades[i] >= 18 && edades[i] <= 60) {
            mayoresEdad += 1;
        } else {
            adultosMayores += 1;
        }
    }
    return {
        menores: menoresDeEdad,
        mayores: mayoresEdad,
        adultosMayores: adultosMayores
    }
}

// buscar el menor y mayor edades con sort y arrow functions
function calularMayorMenorEdad(edades){
    let ordenarEdades = edades.sort((a,b) => a - b);
    let edadMasBaja = ordenarEdades[0];
    let edadMasAlta = ordenarEdades[ordenarEdades.length - 1];
    return { edadMasBaja, edadMasAlta };
}

// sacar el promedio de edades
function calcularPromedio(edades){
    const sumaEdades = edades.reduce((a,b) => a + b) 
    const promedio = sumaEdades / edades.length
    return promedio
}

main(); // Ejecutar el programa
