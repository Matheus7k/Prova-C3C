function tipoTriangulo(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado1 == lado3) {
    return alert("Triangulo Equilátero");
  }
  if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    return alert("Triangulo Isósceles");
  } else {
    return alert("Triangulo Escaleno");
  }
}

const lado1 = parseInt(prompt("Digite o tamanho do lado 1: "));
const lado2 = parseInt(prompt("Digite o tamanho do lado 2: "));
const lado3 = parseInt(prompt("Digite o tamanho do lado 3: "));
tipoTriangulo(lado1, lado2, lado3);
