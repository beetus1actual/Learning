class Vehicle {
    constructor(public color: string) {
    }
    
    protected honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    private drive(): void {
        console.log('vroom vroom');
    }

    public startDrivingProcess(): void {
        this.honk();
        this.drive();
    }
}

const car = new Car('purple');
car.startDrivingProcess();