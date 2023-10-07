// Definición de la clase Persona
class Persona {
    // Constructor de la clase Persona con parámetros iniciales
    constructor(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen) {
      // Inicialización de propiedades de la persona
      this.nombre = nombre;
      this.cedula = cedula;
      this.fechaNacimiento = fechaNacimiento;
      this.correo = correo;
      this.ciudadResidencia = ciudadResidencia;
      this.ciudadOrigen = ciudadOrigen;
      this.cancionesFavoritas = []; // Inicialización del arreglo de canciones favoritas
    }
  
    // Método para agregar una canción a las favoritas de la persona
    agregarCancion(cancion) {
      if (this.cancionesFavoritas.length < 3) {
        this.cancionesFavoritas.push(cancion);
        console.log(`Canción "${cancion.titulo}" por ${cancion.artista} agregada a las favoritas de ${this.nombre}`);
      } else {
        console.log(`${this.nombre} ya tiene 3 canciones favoritas, no se puede agregar más.`);
      }
    }
  
    // Método para mostrar la información personal de la persona
    mostrarInformacionPersonal() {
      console.log(`
        Nombre: ${this.nombre}
        Cédula: ${this.cedula}
        Fecha de Nacimiento: ${this.fechaNacimiento}
        Correo Electrónico: ${this.correo}
        Ciudad de Residencia: ${this.ciudadResidencia}
        Ciudad de Origen: ${this.ciudadOrigen}
      `);
    }
  }
  
  // Definición de la clase Cancion
  class Cancion {
    // Constructor de la clase Cancion con parámetros iniciales
    constructor(titulo, artista) {
      this.titulo = titulo;
      this.artista = artista;
    }
  }
  
  // Arreglo que almacenará las instancias de personas
  const personas = [];
  
  // Función para agregar una nueva persona al arreglo
function agregarPersona() {
    if (personas.length >= 6) {
      console.warn("Ya se han registrado 6 personas. No se pueden agregar más.");
      return;
    }
  
    const nombre = prompt("Nombre:");
    if (!nombre) {
      console.log("El nombre no puede estar vacío. Intenta nuevamente.");
      return;
    }
  
    const cedula = prompt("Número de Identificación (Cédula):");
    // Agrega validaciones similares para otros campos obligatorios...
  
    const nuevaPersona = new Persona(nombre, cedula, /*...otros campos...*/);
    personas.push(nuevaPersona);
  
    console.log(`${nombre} ha sido registrad@.`);
  }
  
  // Función para consultar la información personal de una persona
  function consultarPersona() {
    const posicion = parseInt(prompt("Ingrese la posición de la persona que desea consultar:"));
  
    if (isNaN(posicion) || posicion < 0 || posicion >= personas.length) {
      console.log("La posición ingresada no es válida.");
      return;
    }
  
    const persona = personas[posicion];
    persona.mostrarInformacionPersonal();
  }
  
  // Función para realizar la rifa
  function realizarRifa() {
    if (personas.length < 1) {
      console.log("No hay personas registradas para realizar la rifa.");
      return;
    }
  
    // Lógica para realizar la rifa (puedes ajustar según el requisito)
    const personaGanadora = personas[Math.floor(Math.random() * personas.length)];
    console.log(`¡La persona ganadora de la rifa es: ${personaGanadora.nombre}!`);
  }
  
  // Función para consultar la información personal de una persona
  function consultarPersona() {
    // Captura de la posición de la persona en el arreglo
    const posicion = parseInt(prompt("Ingrese la posición de la persona que desea consultar:"));
  
    // Verificación de la validez de la posición
    if (posicion >= 0 && posicion < personas.length) {
      const persona = personas[posicion];
      // Llamada al método mostrarInformacionPersonal
      persona.mostrarInformacionPersonal();
    } else {
      console.log("La posición ingresada no es válida.");
    }
  }
  
  // Bucle principal del programa
  while (true) {
    // Captura de la opción seleccionada mediante el prompt
    const opcion = prompt(`
      Menú Principal:
      a. Agregar una persona
      b. Agregar una canción a una persona
      c. Consultar información de una persona
      r. Realizar una rifa
      x. Salir
    `);
  
    // Estructura de control switch para ejecutar la opción seleccionada
    switch (opcion) {
      case 'a':
        agregarPersona();
        break;
      case 'b':
        agregarCancion();
        break;
      case 'c':
        consultarPersona();
        break;
      case 'r':
        realizarRifa();
        break;
      case 'x':
        console.log("¡Hasta luego!");
        process.exit(0); // Finalización del programa
      default:
        console.log("Opción no válida. Por favor, seleccione una opción válida.");
    }
  }
  