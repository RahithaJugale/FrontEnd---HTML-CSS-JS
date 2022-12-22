import { IPayload } from "./IPayload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Rocket } from "./Rocket";

//declaring empty payload interface array
let payloads :IPayload[] = [];

//create objects of classes
let cargo = new Cargo(200, "Metal");
let astronaut = new Astronaut(57, "Rahitha");
let rocket = new Rocket("PSLV", 1500);

payloads.push(cargo);
payloads.push(astronaut);

rocket.addCargo(cargo);
rocket.addAstronaut(astronaut);

console.log("Total Mass of payloads: "+ rocket.sumMass(payloads));
console.log("Current Mass: " + rocket.currentMassKg());

//adding new cargo
let cargo1 = new Cargo(700, "Infra Red Cameras");
rocket.addCargo(cargo1);
payloads.push(cargo1);

console.log("Total Mass of payloads after adding cargo: "+ rocket.sumMass(payloads));
console.log("Current Mass after adding cargo: " + rocket.currentMassKg());

//adding new astronaut
let astronaut1 = new Astronaut(68, "Ahin");
rocket.addAstronaut(astronaut1);
payloads.push(astronaut1);

console.log("Total Mass of payloads after adding astronaut: "+ rocket.sumMass(payloads));
console.log("Current Mass after adding astronaut: " + rocket.currentMassKg());
