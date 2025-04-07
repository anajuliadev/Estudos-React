const alunos = [
    {
        nome: 'Pablo' ,
        idade: 11
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

const alunosFiltrados = alunos.filter((aluno) => aluno.idade >= 18);
console.table(alunosFiltrados);

const alunoPablo = alunos.find((aluno) => aluno.nome === 'Pablo');
console.log(alunoPablo); /* retorna o objeto */

const alunoJuliaIndex = alunos.findIndex((aluno) => aluno.nome === 'Julia');
console.log(alunoJuliaIndex); /* saber a posicao do array */

const idades = alunos.reduce((acc, aluno)=> {
    return acc + aluno.idade
}, 0); /* acumula os valores e retorna o que resta */

console.log(idades)

const acimaDeNove = alunos.some(alunos => alunos.idade < 10);/* retorna true se pelo menos um item do array passar no teste */
const menorQueNoventa = alunos.every((alunos) => alunos.idade < 90); /* retorna true se todos os elementos do array passarem no teste */

console.log(acimaDeNove);
console.log(menorQueNoventa);
