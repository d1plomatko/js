
let url = new URL(location.href);
let id = url.searchParams.get('id');

let container = document.querySelector('.container');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {

        let userCard = document.createElement('div');
        userCard.classList.add('user-card');
        container.appendChild(userCard);

        let h3 = document.createElement('h3');
        h3.innerText = `USER  ${user.id}`
        userCard.appendChild(h3);

        divCreator(user, userCard, container);


    })




function divCreator(item, childDiv, fatherDiv) {

    for (let itemKey in item) {

        if (typeof item[itemKey] !== 'object'){

            let key = itemKey.split('')[0].toUpperCase() + itemKey.substring(1);

            let userInfo = document.createElement('div');
            userInfo.innerText = `${key} - ${item[itemKey]}`;
            childDiv.appendChild(userInfo);

        } else {


            let userObject = document.createElement('div');

            let h4 = document.createElement('h4');
            h4.innerText = `${itemKey}`;
            userObject.appendChild(h4);

            divCreator(item[itemKey], userObject, childDiv);


        }

    }

    fatherDiv.appendChild(childDiv)

}

let userPosts = document.querySelector('.posts');
let btn = document.querySelector('.btn');

btn.onclick = function (){

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => {

            for (let post of posts) {

                let postDiv = document.createElement('div');
                postDiv.classList.add('post-wrapper')
                userPosts.appendChild(postDiv);

                let postTitle = post.title.split('')[0].toUpperCase() + post.title.substring(1);

                let titleDiv = document.createElement('div');
                titleDiv.classList.add('title')
                titleDiv.innerText = `${postTitle}`
                postDiv.appendChild(titleDiv);

                let anchor = document.createElement('a');
                anchor.href = `../post-details/post-details.html?id=${post.id}`;
                anchor.target = '_blank';
                anchor.innerText = 'post details';
                postDiv.appendChild(anchor);
            }

        })

    btn.disabled = true;

}

