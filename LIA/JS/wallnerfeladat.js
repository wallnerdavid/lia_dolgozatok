let tomb = [2, 4, 5, "4", "valami"];
	var osszeg = 0
	for(var i in tomb) { osszeg += tomb[i]; }
	if (typeof(tomb) === 'number') {
	console.log("az eredmeny: "+osszeg);
	} else {
	console.log("nem szamot kaptam");
	}

