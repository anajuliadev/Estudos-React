const alunos = [
    {
        nome: 'Pablo' ,
        idade: 18
    },
    {
        nome: 'Julia' ,
        idade: 19
    },
];

alunos.push({
    nome: 'Clara',
    idade: 33
});

console.log(alunos[0,1,2].nome);

console.log(alunos[2].nome);