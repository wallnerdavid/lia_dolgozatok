'use strict'

let szam = 4;
	if ( szam > 4 ) {
	console.log("a szam nagyobb mint 4");
} else { if ( szam < 4 ) {
	console.log("a szam kissebb mint 4");
} else { if ( szam = 4 ) {
	console.log("a szam egyenlo 4-el");
}	}	}

let sor;
let nevek = ["Laci", "Pista", "Géza", "Zoli", "Sanyi"]
let vanbenne = false;
for ( let i = 0; i<nevek.length; i++) {
	if (nevek[i] === "Pista") {
		vanbenne=true;
		sor=i;
	}
}	if (vanbenne) {
	console.log("Van Pista");
	console.log("Pista a "+sor+" helyen van");
}

var tomb = [11, 22, 33, 44, 55].reduce((a, b) => a + b, 0);
console.log(tomb);
	
 
