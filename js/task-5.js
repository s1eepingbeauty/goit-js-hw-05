class Car {
    // Write code under this line
     constructor({maxSpeed, price}){
           this.maxSpeed = maxSpeed;
           this._price = price;
           this.speed = 0;
           this.isOn = false;
           this.distance = 0;
        }
        static getSpecs(car){
            return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
        }
        get price() {
            return this._price;
        }
        set price(value) {
           return this._price = value;
        }
        turnOn() {
            return this.isOn = true;
        }
        turnOff() {
            this.speed = 0;
            return this.isOn = false;
        }
        accelerate(value) {
            if (value <= this.maxSpeed) {
               this.speed += value;
            }
            else {
                this.speed = this.maxSpeed;
            }
            return this.speed;
        }
       decelerate(value) {
           let newSpeed = this.speed - value;
           if (newSpeed > 0) {
               this.speed = newSpeed;
           }
           else {
               this.speed = 0;
           }
           return this.speed;
        }
        drive(hours) {
            if (this.isOn === true) {
               this.distance += hours * this.speed;
            }
            return this.distance;
        }
   }
    
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
   console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
   console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
   console.log(mustang.price); // 2000
   mustang.price = 4000;
   console.log(mustang.price); // 4000