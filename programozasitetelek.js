/*jshint esnext: true */
/*jshint devel: true */
/*jslint node: true */
/*jslint browser: true */
/*jslint jquery: true */

'use strict';
console.log("Működik");

let a = 8;
let b = 2;
let c;

console.log("csere elott a:"+a+" b:"+b);

c = a;
a = b;
b = c;

console.log("csere utan a:"+a+" b:"+b);

let x = [5, 7, 2, 9, 5, 4];
let osszeg = 0;

for(let i = 0; i<x.length;i++){
	osszeg=osszeg+x[i];
}
console.log("A tomb osszege: "+osszeg);

let i = 0;
let van = false;
while (i < x.length && x[i] !== 2){
	i = i+1;
}
if (i<=x.length){
	van = true;
}
console.log("yes: "+van);


i = 0;
van = false;
let sorszam = 0;
while (i < x.length && x[i] !== 2){
	i++;
}
if (i<=x.length){
	van = true;
}
if (van){
	sorszam = i;
}
console.log("Itt van a kettes: "+sorszam);

let db = 0;
for (i=0; i<x.length;i++){
	if (x[i] === 2){
		db++;
	}
}
console.log("Ennyi páros szám van benne: "+db);

let max = 0;
for (i=1; i<x.length;i++){
	if (x[i] > x[max]){
		max = i;
	}
}
console.log("Max helye: "+max);

console.log("A rendezetlen tömböm: "+x);
let csere;
for (i=x.length;i>2;i--){
	for (let j=0;j < i-1;j++){
		if (x[j] > x[j+1]){
			
			csere = x[j];
			x[j]=x[j+1];
			x[j+1]=csere;
		}
	}
}
console.log("A rendezett tömböm: "+x);

x = [5, 7, 2, 9, 5, 4];
let min = 0;
for (i=0; i<x.length-1;i++){
	min = i;

for (let j=i+1;j<x.length;j++){
	if (x[min]>x[j]){
		min = j;		
	}
}
csere = x[i];
x[i] = x[min];
x[min] = csere;
}
console.log("Legkissebb: "+x);

function fakt (x)
{
if (x === 0){
	return 1;
} else {
	return (x * fakt(x - 1));
	}
}
console.log("Eredmény: "+fakt(4));