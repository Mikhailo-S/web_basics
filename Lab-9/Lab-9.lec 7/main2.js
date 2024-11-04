// 1. Використовуючи літеральну нотацію створити обєкт саг з властивістю speedometer = 0; 
let car = {
    speedometer: 0
};

// Додаємо метод setSpeed, який оновлює значення speedometer і повертає об'єкт car
Object.defineProperty(car, 'setSpeed', {
    value: function(value) {
        this.speedometer = value;
        return this; // Повертаємо об'єкт car для ланцюжкового виклику
    }
});

// Додаємо метод getSpeed, який повертає значення speedometer і також повертає об'єкт car
Object.defineProperty(car, 'getSpeed', {
    value: function() {
        console.log(this.speedometer); // Виводимо поточне значення speedometer
        return this; // Повертаємо об'єкт car для ланцюжкового виклику
    }
});

// Додаємо метод clearSpeed, який обнуляє speedometer і повертає об'єкт car
Object.defineProperty(car, 'clearSpeed', {
    value: function() {
        this.speedometer = 0;
        return this; // Повертаємо об'єкт car для ланцюжкового виклику
    }
});

car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed().getSpeed();

// 1.Створення трьох класів 
// Базовий клас Vehicle
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        console.log(`Starting the engine of ${this.make} ${this.model}.`);
    }

    stopEngine() {
        console.log(`Stopping the engine of ${this.make} ${this.model}.`);
    }
}

// Клас Car, який наслідує Vehicle
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year); // Виклик конструктора батьківського класу
        this.doors = doors;
    }

    lockDoors() {
        console.log(`Locking all ${this.doors} doors of ${this.make} ${this.model}.`);
    }
}

// Клас ElectricCar, який наслідує Car
class ElectricCar extends Car {
    constructor(make, model, year, doors, batteryCapacity) {
        super(make, model, year, doors); // Виклик конструктора батьківського класу
        this.batteryCapacity = batteryCapacity;
    }

    chargeBattery() {
        console.log(`Charging the battery of ${this.make} ${this.model} to ${this.batteryCapacity} kWh.`);
    }
}

// 2.Проілюструвати на прикладі трьох і більше класах прототипне наслідування в JS 
// Створимо екземпляр класу ElectricCar
let tesla = new ElectricCar("Tesla", "Model S", 2023, 4, 100);

// Викликаємо методи з різних рівнів ієрархії
tesla.startEngine(); // Метод з класу Vehicle
tesla.lockDoors(); // Метод з класу Car
tesla.chargeBattery(); // Метод з класу ElectricCar

// Зупиняємо двигун
tesla.stopEngine();

// Реалізація виводу "[object Array]" для масиву
let arr = [];
console.log(Object.prototype.toString.call(arr));