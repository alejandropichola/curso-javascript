const frutas = ['manzana', 'pera', 'melocoton', 'sandia'];

const hasApple = frutas.some(fruta => fruta === 'manzana');
// console.log(hasApple);

const everyApple = frutas.every(fruta => fruta === 'manzana');
// console.log(everyApple);
// console.log(frutas.length);

const find = frutas.find(fruta => fruta === 'manzana');
// console.log(find);

const filter = frutas.filter(fruta => fruta === 'pera');
// console.log(filter);
