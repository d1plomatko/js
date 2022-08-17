// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

users = [];

let user1 = new User(11456, 'vasya', 'pupkin', 'vasya.pupkin@gmail.com', 3924929249);
let user2 = new User(2634, 'petya', 'pupkin', 'petya.pupkin@gmail.com', 3924929249);
let user3 = new User(9346, 'sasha', 'pupkin', 'sasha.pupkin@gmail.com', 3924929249);
let user4 = new User(34634, 'masha', 'pupkina', 'masha.pupkina@gmail.com', 3924929249);
let user5 = new User(5457, 'alex', 'pupkin', 'alex.pupkin@gmail.com', 3924929249);
let user6 = new User(62253, 'oleg', 'pupkin', 'oleg.pupkin@gmail.com', 3924929249);
let user7 = new User(36434, 'nazar', 'pupkin', 'nazar.pupkin@gmail.com', 3924929249);
let user8 = new User(5634, 'katya', 'pupkina', 'katya.pupkina@gmail.com', 3924929249);
let user9 = new User(2359, 'serj', 'pupkin', 'serj.pupkin@gmail.com', 3924929249);
let user10 = new User(2358, 'vova', 'pupkin', 'vova.pupkin@gmail.com', 3924929249);

users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

sortedUsers = users.sort((user1, user2) => user1.id - user2.id);
console.log(sortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client extends User{
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

clients = [];

let client1 = new Client(11456, 'vasya', 'pupkin', 'vasya.pupkin@gmail.com', 3924929249, [1, 2, 3]);
let client2 = new Client(2634, 'petya', 'pupkin', 'petya.pupkin@gmail.com', 3924929249, [1, 2]);
let client3 = new Client(9346, 'sasha', 'pupkin', 'sasha.pupkin@gmail.com', 3924929249, [1, 2, 3, 4, 5]);
let client4 = new Client(34634, 'masha', 'pupkina', 'masha.pupkina@gmail.com', 3924929249, [1, 2, 3, 4]);
let client5 = new Client(5457, 'alex', 'pupkin', 'alex.pupkin@gmail.com', 3924929249, [1, 2, 3, 4, 5, 6, 7]);
let client6 = new Client(62253, 'oleg', 'pupkin', 'oleg.pupkin@gmail.com', 3924929249, [1, 2, 3, 4, 5, 6]);
let client7 = new Client(36434, 'nazar', 'pupkin', 'nazar.pupkin@gmail.com', 3924929249, [1]);
let client8 = new Client(5634, 'katya', 'pupkina', 'katya.pupkina@gmail.com', 3924929249, [1, 2, 3]);
let client9 = new Client(2359, 'serj', 'pupkin', 'serj.pupkin@gmail.com', 3924929249, [1, 2, 3, 4]);
let client10 = new Client(2358, 'vova', 'pupkin', 'vova.pupkin@gmail.com', 3924929249, [1, 2, 3]);

clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

sortedClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortedClients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, manufacturer, year, maxSpeed, engineVolume){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
    }
    this.info = function (){
        console.log(`info:
        model - ${this.model}
        manufacturer - ${this.manufacturer}
        year - ${this.year}
        maximal speed - ${this.maxSpeed}
        engine volume - ${this.engineVolume}`)

    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver;

    }
}

let car1 = new Car('Cayenne', 'Porsche', 2010, 280, 550);
car1.info();
car1.drive();
car1.increaseMaxSpeed(320);
console.log(car1.maxSpeed);
car1.addDriver({name : 'Vasyl', age : 40, license : 86989});
console.log(car1.driver);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class NewCar extends Car{
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        super(model, manufacturer, year, maxSpeed, engineVolume);
    }
}

let car2 = new NewCar('Aventador', 'Lamborghini', 2017, 300, 700);
car2.info();
car2.drive();
car2.increaseMaxSpeed(350);
console.log(car2.maxSpeed);
car2.addDriver({name: 'Artur', age: 28, license: 34823});
console.log(car2.driver)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella{
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

cinderellas = [];

let cinderella1 = new Cinderella('katya', 20, 36);
let cinderella2 = new Cinderella('masha', 18, 37);
let cinderella3 = new Cinderella('sasha', 25, 38);
let cinderella4 = new Cinderella('vika', 14, 35);
let cinderella5 = new Cinderella('nastya', 21, 39);
let cinderella6 = new Cinderella('olya', 31, 42);
let cinderella7 = new Cinderella('alisa', 16, 37);
let cinderella8 = new Cinderella('christina', 19, 40);
let cinderella9 = new Cinderella('veronika', 22, 41);
let cinderella10 = new Cinderella('emily', 18, 34);

cinderellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);
console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince extends Cinderella{
    constructor(name, age, foundShoe) {
        super(name, age);
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince('vasya', 25, 36);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let value of cinderellas){
    if (value.shoeSize === prince.foundShoe){
        console.log(value);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let cinderellaFinder = cinderellas.find(value => value.shoeSize === prince.foundShoe);
console.log(cinderellaFinder);