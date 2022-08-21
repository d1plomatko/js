// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. ',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

// for (let simpson of simpsons) {
//
//     let div = document.createElement('div');
//     div.className = 'member';
//     wrapper.appendChild(div);
//
//     let h3 = document.createElement('h3');
//     h3.innerText = `${simpson.name} ${simpson.surname}`;
//
//     let h4 = document.createElement('h4');
//     h4.innerText = `Age - ${simpson.age}`;
//
//     let p = document.createElement('p');
//     p.innerText = simpson.info;
//
//     let img = document.createElement('img');
//     img.src = simpson.photo;
//
//     div.append(h3, h4, p, img);
//
// }
//


// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------

// let container = document.createElement('div');
// container.className = 'container';
// document.body.appendChild(container);
//
// for (let coursesArrayElement of coursesArray) {
//
//     let course = document.createElement('div');
//     course.className = 'course';
//     container.appendChild(course);
//
//     let title = document.createElement('h2');
//     title.innerText = coursesArrayElement.title;
//     course.appendChild(title)
//
//     let duration = document.createElement('div');
//     duration.className = 'duration';
//     course.appendChild(duration);
//
//     let monthDuration = document.createElement('h4');
//     monthDuration.className = 'month';
//     monthDuration.innerText = coursesArrayElement.monthDuration;
//
//     let hourDuration = document.createElement('h4');
//     hourDuration.className = 'hour';
//     hourDuration.innerText = coursesArrayElement.hourDuration;
//
//     duration.append(monthDuration, hourDuration);
//
//     let ulWrapper = document.createElement('div');
//     ulWrapper.className = 'ulWrapper';
//     course.appendChild(ulWrapper);
//
//     let ul = document.createElement('ul');
//     ulWrapper.appendChild(ul)
//     let modules = coursesArrayElement.modules;
//     for (let module of modules) {
//         let moduleName = document.createElement('li');
//         moduleName.innerText = module;
//         ul.append(moduleName);
//     }
//
// }



//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// block.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//
// block.style.width = '600px';
// block.style.margin = '0 auto';
// block.style.background = 'silver';
// block.style.marginBottom = '20px'
//
// document.body.appendChild(block);
//
// let clone = block.cloneNode(true);
// document.body.appendChild(clone)
//

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// ==============================ЗАВДАННЯ В ПАПЦІ TEMPLATE ==============================


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

// let ul = document.createElement('ul');
// document.body.appendChild(ul);
//
// for (let course of coursesAndDurationArray) {
//     let li = document.createElement('li');
//     li.innerText = `Duration of ${course.title} course is ${course.monthDuration} months.`;
//     ul.appendChild(li);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesWrapper = document.createElement('div');
// coursesWrapper.className = 'coursesWrapper';
// document.body.appendChild(coursesWrapper);
//
// for (let course of coursesAndDurationArray) {
//
//     let div = document.createElement('div');
//     div.className = 'item';
//     coursesWrapper.appendChild(div);
//
//     let h1 = document.createElement('h1');
//     h1.className = 'heading';
//     h1.innerText = course.title;
//     div.appendChild(h1);
//
//     let p = document.createElement('p');
//     p.className = 'description';
//     p.innerText = `Duration is ${course.monthDuration} months.`;
//     div.appendChild(p);
// }



// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let textWrapper = document.createElement('div');
// textWrapper.className = 'text-wrapper';
// document.body.appendChild(textWrapper);
//
// let text = document.createElement('h1');
// text.id = 'text';
// text.innerText = 'hello okten';
// textWrapper.appendChild(text);
//
// let btn = document.createElement('button');
// btn.innerText = 'delete text';
// textWrapper.appendChild(btn);
//
// btn.onclick = function (){
//     textWrapper.removeChild(text);
// }

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let age = document.getElementById('input');
let btn = document.getElementById('btn');

btn.onclick = function (){
    if (age.value > 0 && age.value < 18) {
        alert('you are to young');
    } else if (age.value <= 0){
        alert('invalid input');
    } else {
        alert('you are old enough');
    }
}

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let tableWrapper = document.createElement('div');
tableWrapper.className = 'table-wrapper';
document.body.appendChild(tableWrapper);

let row = document.getElementById('row');
let column = document.getElementById('column');
let info = document.getElementById('info');
let button = document.getElementById('button');

button.onclick = function (e){

    e.preventDefault();

    let table = document.createElement('table');
    tableWrapper.appendChild(table);

    for (let i = 0; i < row.value; i++){
        let tableRow = document.createElement('tr');
        table.appendChild(tableRow);

        for (let i = 0; i < column.value; i++){
            let tableColumn = document.createElement('td');
            tableColumn.innerText = info.value;
            tableRow.appendChild(tableColumn);
        }

    }

}