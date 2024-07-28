function Automobile(make, model, year){
    this.type = "Automobile";
    this.tyres = 4;
    this.model = model;
    this.make = make;
    this.year = year;
}

Automobile.prototype.drive = function(){
    console.log("The automobile is being driven.")
}

function Car(make, model, year, seat, door){
    Automobile.call(this, make, model, year);
    this.type = "car";
    this.noOFDoors = door;
    this.noOfSeats = seat;
}



Car.prototype = Object.create(Automobile.prototype);
Car.prototype.constructor = Car;

Car.prototype.selfdrive = function(){
    console.log("Self driving mode is enabled, you can lay back now!")
}

function Truck(make, model, year, loadCapacity){
    Automobile.call(this, make, model, year)
    this.type = "Truck";
    this.loadCapacity = loadCapacity
}

Truck.prototype = Object.create(Automobile.prototype);
  Truck.prototype.constructor = Truck;

Truck.prototype.loadCargo = function(weight){
    this.loadCapacity += weight;
    console.log(`Cargo loaded current load is Tons ${this.loadCapacity}`)
}
// let automobile = new Automobile("TATA", "car", 2024)
let car = new Car("TATA", "Nexon", 2024, 5, 4 );
let truck = new Truck("TATA", "supreme",2024, 0)

car.drive()
truck.drive()
car.selfdrive()
truck.loadCargo(404)