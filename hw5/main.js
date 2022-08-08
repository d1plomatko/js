// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleRadius(a, b) {
    return a * b;

}

console.log(rectangleRadius(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleRadius(r) {
    return 3.14 * r**2;
}

console.log(circleRadius(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderRadius(h, r) {
    return 2 * 3.14 * h * r;
}

console.log(cylinderRadius(10, 30));

// - створити функцію яка приймає масив та виводить кожен його елемент

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

function arrayWriter(array) {
    for (num of array) {
        console.log(num)
    }
}

arrayWriter(nums)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function textWriter(text) {
    document.write(`<p>${text}</p>`)
}

textWriter('hello okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listCreator(text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

listCreator('hello okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function newListCreator(text, n) {
    document.write(`<ul>`)
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

newListCreator('hello okten', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = [1, 'okten', true, 2, 'hello', false];

function arrayList(array) {
    document.write(`<ul>`)
    for (let item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

arrayList(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'sasha', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]

function usersWriter(array) {
    for (let user of array) {
        document.write(`<div>`)
            document.write(`<ul>`)
                for (let userKey in user) {
                    document.write(`<li>${userKey} -- ${user[userKey]}</li>`)
                }
            document.write(`<ul>`)
        document.write(`</div>`)
    }
}

usersWriter(users)

// - створити функцію яка повертає найменьше число з масиву

let numbers = [10, 0, 8, 7, 9];

function smallestNum(array) {
    let smallest = array[0];
    for (let i of array) {
        if (i < smallest) {
            smallest = i
        }
    }
    return smallest;
}

console.log(smallestNum(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumNumbers(array) {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    return sum;
}

console.log(sumNumbers(numbers));