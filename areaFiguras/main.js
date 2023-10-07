// Función para calcular el área y el perímetro de un triángulo
function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base, // Cálculo del perímetro
        area: (base * altura) / 2 // Cálculo del área
    };
}

// Función para calcular el área y el perímetro de un rectángulo
function calcularRectangulo(base, altura) {
    return {
        perimetro: base * 2 + altura * 2, // Cálculo del perímetro
        area: base * altura // Cálculo del área
    };
}

// Función para calcular el área y el perímetro de un cuadrado
function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4, // Cálculo del perímetro
        area: lado * lado // Cálculo del área
    };
}

// Función para calcular el área y la circunferencia de un círculo
function calcularCirculo(radio) {
    const diametro = radio * 2; // Cálculo del diámetro
    const radioAlCuadrado = radio ** 2; // Math.pow(radio,2) Cálculo del radio al cuadrado usando el operador de exponente
    return {
        circunferencia: diametro * Math.PI, // Cálculo de la circunferencia
        area: Math.PI * radioAlCuadrado // Cálculo del área
    };
};