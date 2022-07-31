
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Enter a number')
if (x !== 0){
    console.log('Correct')
}else{
    console.log('Incorrect')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Enter a minute of hour (number from 0 to 59)')
if (time >= 0 && time <16){
    console.log("first quarter of hour")
}else if (time >=16 && time < 31){
    console.log('second quarter of hour')
}else if (time >=31 && time < 46){
    console.log('third quarter of hour')
}else if (time >=45 && time < 60) {
    console.log('fourth quarter of hour')
}else{
    console.log('invalid input')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = +prompt('Enter a day of month (number from 1 to 31')
if (day > 0 && day <11){
    console.log('first decade of a month')
}else if (day >= 11 && day < 21){
    console.log('second decade of a month')
}else if (day >= 21 && day <= 31){
    console.log('third decade of a month')
}else{
    console.log('invalid input')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = prompt('Enter a day of a week (number from 1 to 7)')
switch (dayOfWeek){
    case '1':
        console.log('Monday')
        break
    case '2':
        console.log('Tuesday')
        break
    case '3':
        console.log('Wednesday')
        break
    case '4':
        console.log('Thursday')
        break
    case '5':
        console.log('Friday')
        break
    case '6':
        console.log('Saturday')
        break
    case '7':
        console.log('Sunday')
        break
    default:
        console.log('invalid input')
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох.
//         Також потрібно врахувати коли введені рівні числа.

let num1 = 6;
let num2 = 5;

if (num1 > num2){
    console.log(num1)
}else if (num2 > num1){
    console.log(num2)
}
else{
    console.log('numbers are equal')
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let a = 0;
a = null || 'default'
console.log(a)
a = NaN || 'default'
console.log(a)
a = undefined || 'default'
console.log(a)
a = '' || 'default'
console.log(a)
a = 1 || 'default'
console.log(a)
a = 'string' || 'default'
console.log(a)

