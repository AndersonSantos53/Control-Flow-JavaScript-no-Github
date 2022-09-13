const a1 = prompt('Escreva um valor: ');

const n1 = Number(a1);

const b1 = prompt ('escreva outro valor: ');

const n2 = Number (b1);

const c1 = prompt ('escreva outro valor: ');

const n3 = Number (c1);

if  (n1 < n2 && n2 < n3){
escreva("",n1," , ",n2,',',n3)
}
  
if (n1 < n3 && n3 < n2){
    console.log("",n1," , ",n3,", ",n2)
}

if (n2 < n1 && n1 < n3){
    console.log("",n2," , ",n1," , ",n3)

}

if (n2 < n3 && n3 < n1){
    console.log("",n2," , ",n3," , ",n1)

}

if (n3 < n1 && n1 < n2){
    console.log("",n3," , ",n1," , ",n2)

}

if (n3 < n2 && n2 < n1){
    console.log("",n3,",",n2,",",n1)

}


