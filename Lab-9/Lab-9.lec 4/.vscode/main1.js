/* 1. За допомогою циклу реалізувати код, який виводить наступну картину 
******** 
********** 
************ 
************** 
*************** 
************** 
************ 
********** 
******** 
*/
let lines = [8, 10, 12, 14, 15, 14, 12, 10, 8];

for (let line of lines) {
    console.log('*'.repeat(line));
}

/* 2 За допомогою циклу while / do-while реалізувати timer на 10 секунд
Зверніть увагу на властивості обєкту/Конструктора Date (не використовуючи JS timer - setTimeOut, setlnterval) */

let startTime = new Date(); // Отримуємо поточний час на початку
let endTime = new Date(startTime.getTime() + 10000); // Встановлюємо кінцевий час через 10 секунд

while (new Date() < endTime) {
    // Порожній цикл, який чекає, поки не пройде 10 секунд
}

// Коли цикл завершиться, виводимо повідомлення
console.log("10 секунд минуло!");
