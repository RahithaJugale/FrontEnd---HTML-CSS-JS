import { IPayload } from "./IPayload";

export class Cargo implements IPayload{

    //instance variables
    massKg: number = 0;
    material: string = '';

    //constructor
    constructor(massKg:number, material:string){
        this.massKg = massKg;
        this.material = material;
    }
}