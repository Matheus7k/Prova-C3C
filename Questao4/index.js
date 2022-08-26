function multiploCincoNove(i) {
  if (i % 5 == 0 && i % 9 == 0) {
    return "LuidyMoura";
  }
  if (i % 5 == 0) {
    return "Luidy";
  }
  if (i % 9 == 0) {
    return "Moura";
  } else {
    return i;
  }
}

function luidyMoura(numero) {
  let arrResultado = [];
  for (let i = 1; i <= numero; i++) {
    arrResultado.push(multiploCincoNove(i));
  }

  alert(arrResultado);
}

const numero = parseInt(prompt("Digite o numero desejado: "));

luidyMoura(numero);
