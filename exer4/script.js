const data = [
  {
      nome: 'Roger Medeiros',
      sexo: 'M',
      salario: 3250,
  },
  {
      nome: 'Carolina Silva',
      sexo: 'F',
      salario: 1200,
  },
  {
      nome: 'Cristina Avila',
      sexo: 'F',
      salario: 8100,
  },
  {
      nome: 'Gustavo Hoffman',
      sexo: 'M',
      salario: 5200.35,
  },
  {
      nome: 'Eva Trindade',
      sexo: 'F',
      salario: 2501,
  },
  {
      nome: 'Andre Mathias',
      sexo: 'M',
      salario: 1750,
  },
  {
      nome: 'Joice Castro da Silva',

      sexo: 'F',
      salario: 3350.25,
  },
];

const somaSalarios = data.reduce((total, pessoa) => total + pessoa.salario, 0);
console.log(`---------------- Média Salários:`);
const mediaSalario = somaSalarios / data.length;
console.log(`A média salarial das pessoas cadastradas é R$${(mediaSalario).toFixed(2)}`);

// 4. Imprima no console a média do salário de todas as pessoas.