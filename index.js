// ❗ ЗАДАЧА #1

// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// ТЕСТЫ

// ✅ Объявлена переменная start
// ✅ Значение переменной start это число 3
// ✅ Объявлена переменная end
// ✅ Значение переменной end это число 7
// ✅ Объявлена переменная i - счётчик цикла
// ✅ Начальное значение переменной i равно 3
// ✅ Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
// ✅ На каждой итерации значение переменной i увеличивается на единицу
// ✅ Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7


// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }



// ❗ ЗАДАЧА #2

// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// ТЕСТЫ

// ✅ Объявлена функция calculateTotal(number)
// ✅ Вызов функции calculateTotal(1) возвращает 1
// ✅ Вызов функции calculateTotal(3) возвращает 6
// ✅ Вызов функции calculateTotal(7) возвращает 28
// ✅ Вызов функции calculateTotal(18) возвращает 171
// ✅ Вызов функции calculateTotal(24) возвращает 300
// ✅ Вызов функции calculateTotal() со случайным числом возвращает правильное значение


// function calculateTotal(number) {
// let total = 0;
//   for (let i = 1; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));



// ❗ ЗАДАЧА #3

// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// ТЕСТЫ

// ✅ Объявлена переменная fruits
// ✅ Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
// ✅ Объявлена переменная i - счётчик цикла
// ✅ Начальное значение переменной i равно 0
// ✅ Условие цикла приводится к true до тех пор, пока i меньше 4
// ✅ На каждой итерации значение переменной i увеличивается на единицу
// ✅ В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
// ✅ В теле цикла for используется вывод в консоль переменной fruit


// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }



// ❗ ЗАДАЧА #4

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// ТЕСТЫ

// ✅ Объявлена функция calculateTotalPrice(order)
// ✅ Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// ✅ Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// ✅ Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// ✅ Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение


// function calculateTotalPrice(order) {
//   let total = 0;
// for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));



// ❗ ЗАДАЧА #5

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// ТЕСТЫ

// ✅ Объявлена функция findLongestWord(string)
// ✅ Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// ✅ Вызов функции findLongestWord("Google do a roll") возвращает Google
// ✅ Вызов функции findLongestWord("May the force be with you") возвращает force
// ✅ Вызов функции findLongestWord() со случайной строкой возвращает правильное значение


// function findLongestWord(string) {
// const words = string.split(" ");
//   let longestWord = words[0];
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));



// ❗ ЗАДАЧА #6

// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// ТЕСТЫ

// ✅ Объявлена функция createArrayOfNumbers(min, max)
// ✅ Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// ✅ Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// ✅ Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
// ✅ Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
// ✅ В цикле for использовался метод push


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
// for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));



// ❗ ЗАДАЧА #7

// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// ТЕСТЫ

// ✅ Объявлена функция filterArray(numbers, value)
// ✅ Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// ✅ Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// ✅ Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// ✅ Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// ✅ Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// ✅ Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// ✅ В цикле for использовался метод push


// function filterArray(numbers, value) {
// let filteredArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredArray.push(number);
//     }
//   }
//   return filteredArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));



// ❗ ЗАДАЧА #8

// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// ТЕСТЫ

// ✅ Объявлена функция checkFruit(fruit)
// ✅ Вызов checkFruit("plum") возвращает true
// ✅ Вызов checkFruit("mandarin") возвращает false
// ✅ Вызов checkFruit("pear") возвращает true
// ✅ Вызов checkFruit("Pear") возвращает false
// ✅ Вызов checkFruit("apple") возвращает true
// ✅ Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean
// ✅ В функции использовался метод includes


// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));



// ❗ ЗАДАЧА #9

// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// ТЕСТЫ

// ✅ Объявлена функция getCommonElements(array1, array2)
// ✅ Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// ✅ Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// ✅ Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// ✅ Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// ✅ Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// ✅ Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
// ✅ В цикле for использовались методы includes и push


// function getCommonElements(array1, array2) {
// let commonElements = [];
//   for (const element of array1) {
//     if (array2.includes(element)) {
//       commonElements.push(element);
//     }
//   }
//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));



// ❗ ЗАДАЧА #10

// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// ТЕСТЫ

// ✅ Объявлена функция calculateTotalPrice(order)
// ✅ Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// ✅ Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// ✅ Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// ✅ Вызов функции calculateTotalPrice([]) возвращает 0
// ✅ Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму


// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const price of order) {
//     total += price;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));



// ❗ ЗАДАЧА #11

// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// ТЕСТЫ

// ✅ Объявлена функция filterArray(numbers, value)
// ✅ Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// ✅ Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// ✅ Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// ✅ Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// ✅ Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// ✅ Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// ✅ Функция filterArray() использует цикл for..of


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));



// ❗ ЗАДАЧА #12

// Дополни выражения остатка от деления так, чтобы код проходил тесты.

// ТЕСТЫ

// ✅ Объявлена переменная a
// ✅ Значение переменной a это число 0
// ✅ Объявлена переменная b
// ✅ Значение переменной b это число 1
// ✅ Объявлена переменная c
// ✅ Значение переменной c это число 3
// ✅ Объявлена переменная d
// ✅ Значение переменной d это число 5
// ✅ Объявлена переменная e
// ✅ Значение переменной e это число 2


// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);



// ❗ ЗАДАЧА #13

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// ТЕСТЫ

// ✅ Объявлена функция getEvenNumbers(start, end)
// ✅ Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// ✅ Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// ✅ Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// ✅ Вызов функции getEvenNumbers(8, 8) возвращает [8]
// ✅ Вызов функции getEvenNumbers(7, 7) возвращает []
// ✅ Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив


// function getEvenNumbers(start, end) {
// const result = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));



// ❗ ЗАДАЧА #14

// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// ТЕСТЫ

// ✅ Объявлена переменная start со значением 6
// ✅ Объявлена переменная end со значением 27
// ✅ Объявлена переменная number без инициализации
// ✅ Итоговое значение переменной number равно 10
// ✅ В цикле for используется break для выхода до завершения всех итераций цикла


// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);



// ❗ ЗАДАЧА #15

// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// ТЕСТЫ

// ✅ Объявлена функция findNumber(start, end, divisor)
// ✅ Вызов findNumber(2, 6, 5) возвращает 5
// ✅ Вызов findNumber(8, 17, 3) возвращает 9
// ✅ Вызов findNumber(6, 9, 4) возвращает 8
// ✅ Вызов findNumber(16, 35, 7) возвращает 21
// ✅ Вызов findNumber() со случайным набором чисел возвращает верный результат
// ✅ В цикле for не должен использоваться break для выхода до завершения всех итераций цикла


// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   return null;
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));



// ❗ ЗАДАЧА #16

// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// ТЕСТЫ

// ✅ Объявлена функция includes(array, value)
// ✅ Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// ✅ Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// ✅ Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// ✅ Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// ✅ Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// ✅ Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// ✅ Вызов includes() для случайного массива со случайным value возвращает верный boolean
// ✅ В функции includes используется for, return, но не метод массива includes


// function includes(array, value) {
// for (const element of array) {
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));