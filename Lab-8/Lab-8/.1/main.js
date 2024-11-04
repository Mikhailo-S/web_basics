// 1 Вивести всі види змінних з їх типами. Як мінімум мають бути обʼєкт, масив, рядок, число, функція. //var varString... 
let varObject = { name: "Object." };
console.log("Object:", varObject, typeof varObject);

let varArray = [1,2,3];
console.log("Array:", varArray, typeof varArray);

let varString = "Hello";
console.log("String:", varString, typeof varString);

let varNumber = 52;
console.log("Number:", varNumber, typeof varNumber);

let varFunction = function() { return "Функція"; };
console.log("Function:", varFunction, typeof varFunction);

// 2 Для рядка і числа поміняти значення так, щоб їх типи помінялися. 
varString = 578;
console.log(varString, typeof varString);

varNumber = "983";
console.log(varNumber, typeof varNumber);

// 3 Порівняти між собою рядок і число з "однаковими" значеннями.
console.log("'123' == 123:", "123" == 123);

console.log("'123' === 123:", "123" === 123);

// 4 Простими способами зашифрувати / дешифрувати числову інформацію. 
function encodeNumber(num) {
    return num.toString(16);
}

let encoded = encodeNumber(12345);
console.log(encoded);


function decodeNumber(hex) {
    return parseInt(hex, 16);
}

let decoded = decodeNumber(encoded);
console.log(decoded);