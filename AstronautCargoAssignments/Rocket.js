"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
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
    //Returns the sum of all items using each item's massKg property
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        items.forEach(function (i) {
            sum += i.massKg;
        });
        return sum;
    };
    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    Rocket.prototype.currentMassKg = function () {
        return (this.sumMass(this.astronauts)) + (this.sumMass(this.cargoItems));
    };
    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    Rocket.prototype.canAdd = function (item) {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        }
        return false;
    };
    //Uses this.canAdd() to see if another item can be added.If true, adds cargo to this.cargoItems and returns true.
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    //Uses this.canAdd() to see if another astronaut can be added.If true, adds astronaut to this.astronauts and returns true.
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
