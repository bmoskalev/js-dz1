"use strict";

const ticketNumber = prompt(`Введите номер билета`);
let digits = new Array(6);
let ticketNumberCopy = +ticketNumber;

for (let i = 0; i < 6; i++) {
    digits[i] = ticketNumberCopy % 10;
    ticketNumberCopy = Math.floor(ticketNumberCopy / 10);
}

if ((digits[0] + digits[1] + digits[2]) === (digits[3] + digits[4] + digits[5])) {
    console.log(`Билет с номером ${ticketNumber} является счастливым`);
} else {
    console.log(`Билет с номером ${ticketNumber} не является счастливым`);
}

