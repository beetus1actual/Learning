﻿const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    return  car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2025-10-10'];
importantDates.push('2025-04-25');
importantDates.push(new Date());