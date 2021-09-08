class Vehicle {
    constructor(mk, mdl, yr){
        this.make = mk;
        this.model = mdl;
        this.year = yr; 
    }
    
    honk(){
        return "Beep";
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle{
    numWheels = 4;
}

class Motorcycle extends Vehicle{
    numWheels = 2;
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage{
    constructor(cap){
        this.capacity = cap;
        this.vehicles = [];
    }
    add(vehicle){
        if(!(vehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        } 
        if(this.vehicles.length == this.capacity){
            return "Sorry, we're full.";
        }
        this.vehicles.push(vehicle);
        return "Vehicle added!";
    }
}