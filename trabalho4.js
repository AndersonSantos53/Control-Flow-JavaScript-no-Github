const a1 = prompt('Escreva um valor: ');

const n1 = Number(a1);



if  (n1 % 2 == 1){
    console.log('Esse numero é impar')
    const f = Math.pow(n1,2)
    console.log(`Resultado: ${f}`)}

else if (n1 % 2 == 0){
    console.log('Esse numero é par')
    const l = Math.sqrt(n1,2)
    console.log(`Resultado: ${l}`)}