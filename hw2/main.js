// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let cars = ['bmw', 'audi', 'renault', 'mercedes', 'chevrolet', 'volkswagen', 'porsche', 'ferrari', 'tesla', 'kia'];

console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);
console.log(cars[6]);
console.log(cars[7]);
console.log(cars[8]);
console.log(cars[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book = {
    title : 'Dune',
    pageCount : 656,
    genre : 'Science fiction'
}

console.log(book);

let book1 = {
    title : 'Joyland',
    pageCount : 320,
    genre : 'novel'
}

console.log(book1);

let book2 = {
    title : '1984',
    pageCount : 312,
    genre : 'anti-utopia'
}

console.log(book2);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book3 = {
    title : 'Fight Club',
    pageCount : 208,
    genre : 'novel',
    authors: [
        {
            name: 'Chuck Palahniuk',
            age: 60
        },

        {
            name: 'Vasya Pupkin',
            age: 50,
        }
    ]
}

console.log(book3);

let book4 = {
    title: 'Around the World in 80 Days',
    pageCount: 160,
    genre: 'novel',
    authors: [
        {
            name: 'Jules Verne',
            age: 'Died 24 March 1905 (aged 77)',
        },

        {
            name: 'Vasya Pupkin',
            age: 50,
        }
    ]

}


console.log(book4);

let book5 = {
    title : 'The Da Vinci Code',
    pageCount : 689,
    genre : 'novel',
    authors: [
        {
            name: 'Dan Brown',
            age: 58
        },

        {
            name: 'Vasya Pupkin',
            age: 50,
        }
    ]
}

console.log(book5);


// - Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

users = [
    user0 = {
    name : 'Vasya',
    username : 'Vasya228',
    password : 1222
    },

    user1 = {
    name : 'Vitya',
    username : 'Vitya228',
    password : 1233
    },

    user2 = {
    name : 'Vova',
    username : 'Vova228',
    password : 1234
    },

    user3 = {
        name : 'Dasha',
        username : 'Dasha228',
        password : 2352
    },

    user4 = {
        name : 'Sasha',
        username : 'Sasha228',
        password : 8234
    },

    user5 = {
        name : 'Vika',
        username : 'Vika228',
        password : 2325
    },

    user6 = {
        name : 'Oleg',
        username : 'Oleg228',
        password : 6235
    },

    user7 = {
        name : 'Artem',
        username : 'Artem228',
        password : 2523
    },

    user8 = {
        name : 'Ruslan',
        username : 'Ruslan228',
        password : 2532
    },

    user9 = {
        name : 'Nastya',
        username : 'Nastya228',
        password : 2352
    }


]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

