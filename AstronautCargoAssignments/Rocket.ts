import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { IPayload } from "./IPayload";

//Rocket class
export class Rocket{

    //instance variables
    name:string = '';
    totalCapacityKg:number = 0;
    cargoItems:Array<Cargo> = [];
    astronauts:Array<Astronaut> = [];

    //constructor
    constructor(name:string, totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    //custom methods
    //Returns the sum of all items using each item's massKg property
    sumMass(items:IPayload[]):number{
        let sum : number = 0;
        items.forEach(i => {
            sum += i.massKg;
        });
        return sum;
    }

    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    currentMassKg():number{
        return (this.sumMass(this.astronauts))+(this.sumMass(this.cargoItems));
    }

    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    canAdd(item:IPayload):boolean{
        if((this.currentMassKg() + item.massKg) <= this.totalCapacityKg){
            return true;
        }
        return false;
    }

    //Uses this.canAdd() to see if another item can be added.If true, adds cargo to this.cargoItems and returns true.
    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    //Uses this.canAdd() to see if another astronaut can be added.If true, adds astronaut to this.astronauts and returns true.

    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}