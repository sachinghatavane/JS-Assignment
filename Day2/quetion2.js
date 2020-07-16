//Methods Of String

let txt="  Hello my name is Sachin and I am living in India  ";

console.log(txt.toUpperCase());

console.log(txt.slice(6, 15));

console.log(txt.substring(2, 9));

//console.log(txt.replaceAll("Hii How are you buddy"));

console.log(txt.replace("Sachin","Shubham"));

console.log(txt.trim())


//Methods of array
let arr=['tv','remote','fan'];
let arr2=['chair','power','table'];
let arr3=['1','2','3','4','5','6'];

console.log(arr.includes('tv'));
//It returns true if array contain speciafied value in function

console.log(arr2.lastIndexOf('chair'));
//It searches the specified array element and return position
console.log(arr2);

console.log(arr3.reverse());
//It reverse the order of element in array
console.log(arr3);

console.log(arr3.slice(3,5));
//It returns th selected elements in array as a new array object

console.log(arr.sort());
//It sorts the element of an array
console.log(arr);