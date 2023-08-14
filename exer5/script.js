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
  
  const sexoMasculino = data.filter(pessoa => pessoa.sexo === 'M')
  const totalSalarioMasculino = sexoMasculino.reduce((total, pessoa) => total + pessoa.salario, 0)
  console.log(`A soma de salários masculinos é ${totalSalarioMasculino.toFixed(2)}.`)

//   5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino