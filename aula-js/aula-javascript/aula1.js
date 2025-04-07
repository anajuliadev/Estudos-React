const valor1 = 10;
const valor2 = 2;


console.log("Soma: ", valor1 + valor2);

/* condicionais */

/* if, else, switch, ternario */
/* && - AND */ /* || - OR */ /* == === - igual */ /* != !=== - diferente */ /* > - maior que */ /* < - menor que */
/* const nota = 9;

switch (nota){
    case nota < 5:
        console.log("abaixo media");
        break;

    case nota > 5:
        console.log("na media");
        break;
    default:
    console.log("acima da media");
} 
 */

for (let i = 1; i < 10; i++) {
    console.log(`${i} x 5 = ${i *5}`);
}

console.log("----------------------------")

let x = 1;
while(x < 10){ /* sempre precisa de incremento */
    console.log(`${x} x 5 = ${x *5}`);
    x++;
}

/* forEach geralmente trabalha com arrays */
const lista  = [1,2,3,4,5,6];
lista.forEach((value) => {
    console.log(`${value} x 5 = ${value *5}`);
})

/* map = retorna um valor e ele geralmente e usadop para manipular dados*/

const lista2 = [1,2,3,4,5,6];
const resultado = lista2.map((value)=> {
    return value * 5;
})

console.log(resultado);