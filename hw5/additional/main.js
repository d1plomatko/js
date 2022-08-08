// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let smallestNumber = (num1, num2, num3) => {
//     let smallest = num1;
//     if (num2 < smallest){
//         smallest = num2;
//     }else if (num3 < smallest){
//         smallest = num3;
//     }
//     return smallest;
// }
//
// console.log(smallestNumber(-100, -88, -44));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let biggestNumber = (num1, num2, num3) => {
//     let biggest = num1;
//     if (num2 > biggest){
//         biggest = num2;
//     } else if (num3 > biggest){
//         biggest = num3;
//     }
//     return biggest;
// }
//
// console.log(biggestNumber(40, 20, 0));

// - створити функцію яка повертає найбільше число з масиву

// let nums = [1, 2, 3, 4, 5];
//
// let biggestNum = (array) => {
//     let biggest = array[0];
//     for (let num of array){
//         if (num > biggest){
//             biggest = num;
//         }
//     }
//     return biggest;
// }
//
// console.log(biggestNum(nums));

// - створити функцію яка повертає найменьше число з масиву

// let smallestNum = (array) => {
//     let smallest = array[0];
//     for (let num of array){
//         if (num < smallest){
//             smallest = num;
//         }
//     }
//     return smallest;
// }
//
// console.log(smallestNum(nums));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sumNums = (array) => {
//     let sum = 0;
//     for (let num of array){
//         sum += num;
//     }
//     return sum;
// }
//
// console.log(sumNums(nums));


// - Дано натуральное число n. Выведите все числа от 1 до n.

// function numbersWriter(n){
//     for (let i = 1; i < n; i ++){
//         console.log(i)
//     }
// }
//
// numbersWriter(10)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// function numbersWriter(a, b){
//     if ( a < b){
//         for (let i = a; i <= b; i++){
//             console.log(i)
//         }
//     }else {
//         for (let i = a; i >= b; i--){
//             console.log(i)
//         }
//     }
// }

// numbersWriter(10,20)



