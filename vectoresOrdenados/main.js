// Función para ingresar datos en un vector
function ingresarDatos(numeroVector) {
    const vector = [];
    console.log(`Ingresando datos para el vector ${numeroVector}:`);
    
    for (let i = 0; i < 5; i++) {
      let valorIngresado = parseInt(prompt(`Ingresa el valor ${i + 1} para el vector ${numeroVector}:`));
  
      // Validar que los valores se ingresen en orden ascendente
      if (i > 0 && valorIngresado <= vector[i - 1]) {
        alert("Por favor, ingresa los valores en orden ascendente.");
        return [];
      }
      vector.push(valorIngresado);
    }
    
    return vector;
  }
  
  console.log("Ingresando datos para el primer vector");
  const vector1 = ingresarDatos(1);
  console.log("Has terminado de ingresar los datos del primer vector.");
  
  console.log("Ingresando datos para el segundo vector");
  const vector2 = ingresarDatos(2);
  console.log("Has terminado de ingresar los datos del segundo vector.");
  
  // Verificar si los vectores son válidos antes de la unión
  if (vector1.length > 0 && vector2.length > 0) {
    // Realizar la unión y ordenarla, arrow functions
    const unionDeVectores = [...vector1, ...vector2].sort((a, b) => a - b);
    console.log("Unión de los dos vectores ordenada:");
    console.log(unionDeVectores);
  } else {
    console.error("No fue posible realizar la unión debido a datos no válidos.");
  }
  
  