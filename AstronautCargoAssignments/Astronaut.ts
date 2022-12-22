import { IPayload } from "./IPayload";

//Astronaut class
export class Astronaut implements IPayload{

    //instance variables
    massKg: number = 0;
    name: string = '';

    //constructor
    constructor(massKg:number, name:string){
        this.massKg = massKg;
        this.name = name;
    }
}