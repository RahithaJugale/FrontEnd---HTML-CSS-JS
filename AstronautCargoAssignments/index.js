//class definitions
//Astronaut class
var Astronaut = /** @class */ (function () {
    //constructor
    function Astronaut(massKg, name) {
        //instance variables
        this.massKg = 0;
        this.name = '';
        this.massKg = massKg;
        this.name = name;
    }
    return Astronaut;
}());
//Cargo class
var Cargo = /** @class */ (function () {
    //constructor
    function Cargo(massKg, material) {
        //instance variables
        this.massKg = 0;
        this.material = '';
        this.massKg = massKg;
        this.material = material;
    }
    return Cargo;
}());
//Rocket class
var Rocket = /** @class */ (function () {
    //constructor
    function Rocket(name, totalCapacityKg) {
        //instance variables
        this.name = '';
        this.totalCapacityKg = 0;
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //custom methods
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        items.forEach(function (i) {
            sum += i.massKg;
        });
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return 0;
    };
    return Rocket;
}());
