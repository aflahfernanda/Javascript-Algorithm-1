// 1. built in function filter (property.filter())
// method filter digunakan untuk mencari semua nilai dalam array yang memenuhi kriteria parameter
const words = ['rumah', 'mobil', 'jalan', 'perumahan', 'sekolah', 'komplek'];

const result = words.filter(word => word.length > 6);

console.log(result);

//-------------------------------------------------------------------------------
// 2. built in function find (property.find())
//method find digunakakam untuk mencari indeks teratas dalam array yang memenuhi kriteria nilai input
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

//-----------------------------------------------------------------------------
//3. built in function forEach (property.forEach())
//forEach digunakan untuk menggantikan for(pengulangan) namun inputan nya tidak dapat merubah nilai array
const array2 = ['a', 'b', 'c'];

array2.forEach(element => console.log(element));

//----------------------------------------------------------------------------
//4. built in function map(property.map())
//map digunakan untuk menggantikan for(pengulangan) namun inputan nya dapat dimanipulasi sehingga dapat
//menciptakan nilai array baru
const array3 = [1, 4, 9, 16];

const map1 = array3.map(x => x * 2);

console.log(map1);

//-----------------------------------------------------------------------------
//5.buit in function every(property.every())
//method every digunakan untuk mencari apa ada sebuah niali yang memenuhi parameter pada array(mengembalikan nilai boolean)
const isBelowThreshold = (currentValue) => currentValue < 40;

const array4 = [1, 30, 39, 29, 10, 13];

console.log(array4.every(isBelowThreshold));

//------------------------------------------------------------------------------
//6. built in function fill(property.fill())
//method fill digunakan untuk mereplace atau meremove sebuah indeks yang terdapat pada array
const array5 = [1, 2, 3, 4];

console.log(array5.fill(0, 2, 4));

//------------------------------------------------------------------------------
//7. built in function splice (propertu.splice())
//method splice digunakan untuk menambah indeks dan mereplace indeks pada array
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
//------------------------------------------------------------------------------
//8. built in function join (propertu.join())
//method join digunakan untuk menyatukan var array menjadi string
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());

//------------------------------------------------------------------------------
//9. built in function reverse (propertu.reverse())
//method reverse digunakan untuk membalikan indeks array sehingga dibaca backwards
const array6 = ['one', 'two', 'three'];
const reversed = array6.reverse();
console.log('reversed:', reversed);

//------------------------------------------------------------------------------
//10. built in function some (propertu.some())
//method some digunakan untuk mencari apa ada sebuah niali yang memenuhi parameter pada array(mengembalikan nilai boolean)
const array7 = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

console.log(array7.some(even));






