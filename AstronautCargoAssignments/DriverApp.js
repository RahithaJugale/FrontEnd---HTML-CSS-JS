"use strict";
exports.__esModule = true;
var Cargo_1 = require("./Cargo");
var Astronaut_1 = require("./Astronaut");
var Rocket_1 = require("./Rocket");
//declaring empty payload interface array
var payloads = [];
//create objects of classes
var cargo = new Cargo_1.Cargo(200, "Metal");
var astronaut = new Astronaut_1.Astronaut(57, "Rahitha");
var rocket = new Rocket_1.Rocket("PSLV", 1500);
payloads.push(cargo);
payloads.push(astronaut);
rocket.addCargo(cargo);
rocket.addAstronaut(astronaut);
console.log("Total Mass of payloads: " + rocket.sumMass(payloads));
console.log("Current Mass: " + rocket.currentMassKg());
//adding new cargo
var cargo1 = new Cargo_1.Cargo(700, "Infra Red Cameras");
rocket.addCargo(cargo1);
payloads.push(cargo1);
console.log("Total Mass of payloads after adding cargo: " + rocket.sumMass(payloads));
console.log("Current Mass after adding cargo: " + rocket.currentMassKg());
//adding new astronaut
var astronaut1 = new Astronaut_1.Astronaut(68, "Ahin");
rocket.addAstronaut(astronaut1);
payloads.push(astronaut1);
console.log("Total Mass of payloads after adding astronaut: " + rocket.sumMass(payloads));
console.log("Current Mass after adding astronaut: " + rocket.currentMassKg());
