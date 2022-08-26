function calcBhaskara(a, b, c) {
  const delta = Math.pow(b, 2) - 4 * a * c;

  if (delta < 0) {
    return alert("“Delta é negativo”");
  }

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  const arrResultado = [x1, x2];
  alert(arrResultado);
}

const a = parseInt(prompt("Digite o valor de ax²: "));
const b = parseInt(prompt("Digite o valor de bx: "));
const c = parseInt(prompt("Digite o valor de c: "));

calcBhaskara(a, b, c);
