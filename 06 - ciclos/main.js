/*
for (let i = 1; i <= 10; i++) {
  console.log(`soy el numero ${i}`)
}
*/

/* let contador = 1;
while (contador <= 10) {
  console.log(`soy el numero ${contador}`);
  contador++;
}
*/
const frutas = ['manzana', 'pera', 'melocoton', 'sandia'];
/*
for (let fruta of frutas) {
  console.log(fruta);
}
*/

// frutas.forEach(fruta => console.log(fruta));

const frutasMayuscula = frutas.map(fruta => fruta.toLocaleUpperCase());

console.log(frutasMayuscula);
console.log(frutas);
