const numeros = [];
for(let i = 0; i<10; i++){
    numeros.push(Math.floor(Math.random()*50));
}
console.log(numeros); //Desordenado
console.log(numeros.sort()); //Ordenado
