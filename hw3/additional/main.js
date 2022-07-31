// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length > 3){
    console.log('Big array')
}else{
    console.log('small array')
}

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let nums = [8, 10, 5]

if (nums[0] > nums[1] && nums[1] > nums[2]){
    console.log('num1 is the biggest')
}else if (nums[1] > nums[0] && nums[1] > nums[2]){
    console.log('num2 is the biggest')
}else if (nums[2] > nums[0] && nums[2] > nums[1]){
    console.log('num3 is the biggest')
}

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//

let a = 1;
let b = 2;

let result = a + b < 4 ? 'Мало' : 'Багато';
console.log(result);

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let num = -5;

let check = num === 0 ? 'Zero' : num < 0 ? 'Negative' : 'Positive';
console.log(check);

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = 1;

if (test){
    console.log('Correct')
}else{
    console.log('Incorrect')
}

let test1 = test ? 'Correct' : 'Incorrect';
console.log(test1)

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let js = prompt('Яка «офіційна» назва JavaScript?');
if (js === 'ECMAScript'){
    console.log('Правильно!')
}else {
    console.log('Не знаєте? ECMAScript!')
}


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let appartment = 90;

if (appartment >=1 && appartment <= 20){
    console.log(1)
}else if (appartment >=21 && appartment <= 48){
    console.log(2)
}else if (appartment >= 49 && appartment <= 90){
    console.log(3)
}else {
    console.log('invalid input')
}



// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

number = 9;

numResult = number === 10 ? 'Correct' : 'Incorrect';
console.log(numResult)


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

degree = +10;

if (degree >= +10 && degree <= 22){
    console.log('ми йдемо ВЧИТИСЯ')
}else {
    console.log('ми сидимо вдома і вчимося ОНЛАЙН')
}


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ..


let lohotron = 5;

switch (lohotron){
    case 1:
        console.log('auto')
        break
    case 2:
        console.log('moto')
        break
    case 3:
        console.log('tele')
        break
    case 4:
        console.log('comp')
        break
    case 5:
        console.log('money')
        break
    default:
        console.log('invalid input')
}