/*Az autónk adatait adjuk meg*/
class Car {
        constructor(plate, color) {
                this.plate=plate;
                this.color=color;
                this.tank=70;
                this.fuel=5;
                this.utasok=[];
                Object.defineProperty(this, 'wheelscount', {
                value: 4,
                writable: false,
                enumerable: true,
                configurable: true
        });
        if(!this.color) {
                this.color="white";
        }
        }
        printAllInfo() {   /*Az összes infó kiírása*/
                console.log("Az auto rendszama: "+this.plate);
                console.log("Az auto szine: "+this.color);
                console.log("Az auto tankja: "+this.tank);
                console.log("Az auto fogyasztasa: "+this.fuel);
                console.log("Az auto kerekeinek szama: "+this.wheelscount);
        }
        going(kilometers) {  /*A kilóméteres kiszámolás*/
                let calc = this.fuel/100;
                if(this.tank<=0) {
                        console.log("A tank ures, az auto nem indulhat el");
                } else {
                        while(kilometers>=0){
                                kilometers--;
                                this.tank=this.tank-calc;
                        }
                        this.tank=Math.round(this.tank*100)/100;
                        console.log(this.plate+" rendszamu auto tankjaban "+this.tank+"liter uzemanyag maradt");
                }
        }
        addPassenger(name, sex) {  /*Utasaink megadása*/
                if(this.utasok.length>=5) {
                        console.log("Tobb utas nem fer az autoba")
                } else {
                        let utas={neve: name, neme: sex};
                        this.utasok.push(utas);
                }
        }
        members() {
                var names = this.utasok.map(function(utas) {
                return utas.neve + ' is a ' + utas.neme + " passenger"
                })
                console.log(names);
        }
}

class CrazyCar extends Car {  	/*A crazycar autónk megadása/másolása*/
  constructor(plate, color) {
    super(plate, color);
    Object.defineProperty(this, 'wheelscount', {
      value: 4,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
};

/*A szopdkibabit autónk és utasai
*/
let car1=new Car("Szopdkibabit02");
car1.printAllInfo();
car1.going(80);
car1.addPassenger("Laci","male");
car1.addPassenger("Sanyi","male");
car1.addPassenger("Szandi","female");
car1.addPassenger("Zsuzsi","female");
car1.addPassenger("Zoli","male");
car1.addPassenger("Erzsi","female");
car1.members();
let crazyCar1 = new CrazyCar("Sziagyurikamion79","Blue");
crazyCar1.wheelscount=16;
crazyCar1.printAllInfo();
