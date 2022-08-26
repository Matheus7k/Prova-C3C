function arredondaNota(nota) {
  if (nota < 38) {
    return nota;
  }
  if (nota % 5 >= 3) {
    return (nota = nota + (5 - (nota % 5)));
  } else {
    return nota;
  }
}

function conceitoAluno(notaAluno) {
  const notaCorrigida = arredondaNota(notaAluno);

  if (notaCorrigida < 40) {
    alert(`Aluno reprovado! Nota final: ${notaCorrigida}`);
  } else {
    alert(`Aluno aprovado! Nota final: ${notaCorrigida}`);
  }
}

const notaAluno = parseInt(prompt("Digite a nota do aluno: "));
conceitoAluno(notaAluno);
