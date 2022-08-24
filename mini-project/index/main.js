
let container = document.querySelector('.container');


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        for (let user of users) {

            let userCard = document.createElement('div');
            userCard.classList.add('user-card');
            container.appendChild(userCard);

            let heading = document.createElement('h3');
            heading.innerText = `USER ${user.id}`;

            let info = document.createElement('p');
            info.classList.add('user-info');
            info.innerText = `ID - ${user.id}
                              Name - ${user.name}`;

            let anchor = document.createElement('a');
            anchor.classList.add('btn');
            anchor.innerText = 'More info';
            anchor.href = `../user-details/user-details.html?id=${user.id}`;
            anchor.target = '_blank'

            userCard.append(heading, info, anchor);


        }


        }
    )