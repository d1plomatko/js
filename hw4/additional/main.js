// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let i = 0;
//
// while (i < nums.length){
//     console.log(nums[i])
//     i++
// }


//     2. перебрати його циклом for


// for (num of nums){
//     console.log(num)
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
//
// while (i < nums.length){
//     if (i%2 !== 0){
//         console.log(nums[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

//
// for (let i = 0; i < nums.length; i++){
//     if (i%2 !== 0) {
//         console.log(nums[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
//
// while (i < nums.length){
//     if (i%2 === 0){
//         console.log(nums[i])
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < nums.length; i++){
//     if (i%2 === 0) {
//         console.log(nums[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < nums.length; i++){
//     if (i % 3 === 0) {
//         nums[i] = 'okten';
//     }
//     console.log(nums[i])
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = nums.length - 1; i >= 0; i--){
//     console.log(nums[i])
// }
//


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let list = [1, true, 'gdgdg', 2, false, 'sdgasdga', 3, true, 'sdgsdga', 4];
//
// for (i of list){
//     if (typeof i === 'boolean'){
//         console.log(i)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// for (i of list){
//     if (typeof i === 'number'){
//         console.log(i)
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// for (i of list){
//     if (typeof i === 'string'){
//         console.log(i)
//     }
// }
//



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let numbers = [];
// numbers[0] = 1;
// numbers[1] = 2;
// numbers[2] = 3;
// numbers[3] = 4;
// numbers[4] = 5;
// numbers[5] = 6;
// numbers[6] = 7;
// numbers[7] = 8;
// numbers[8] = 9;
// numbers[9] = 10;
//
// for (let number of numbers) {
//     console.log(number);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++){
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++){
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// let i = 0;
// while (i < 100){
//     console.log(i)
//     document.write(`<div>${i}</div>`)
//     i += 2;
// }


// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let nums = [];
for (let i = 0; i < 50; i++){
    if (i % 2 === 0) {
        nums[i] = i;
    }
}
console.log(nums);

//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)




