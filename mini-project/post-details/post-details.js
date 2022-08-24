let url = new URL(location.href);
let id = url.searchParams.get('id');

let container = document.querySelector('.container');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {

        let userPost = document.createElement('div');
        userPost.classList.add('user-post');
        container.appendChild(userPost);

        let h4 = document.createElement('h4');
        h4.innerText = `Post ${post.id}`;
        userPost.appendChild(h4);

        for (let postKey in post) {

            let key = postKey.split('')[0].toUpperCase() + postKey.substring(1);

            let postInfo = document.createElement('div');
            postInfo.classList.add('post-info')
            postInfo.innerText = `${key} - ${post[postKey]}`;
            userPost.appendChild(postInfo);


        }

    }

   )

let commentsWrapper = document.querySelector('.comments');

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(comments => {

        let i = 0;

        for (let comment of comments) {

            i++

            let userComment = document.createElement('div');
            userComment.classList.add('user-comment');
            commentsWrapper.appendChild(userComment);

            let h4 = document.createElement('h4');
            h4.innerText = `Comment ${i}`
            userComment.appendChild(h4)


            for (let commentKey in comment) {

                let capitalizeKey = commentKey.split('')[0].toUpperCase() + commentKey.substring(1);

                let commentInfo = document.createElement('div');
                commentInfo.classList.add('comment-info');
                commentInfo.innerText = `${capitalizeKey} - ${comment[commentKey]}`;
                userComment.appendChild(commentInfo)

            }

        }

    })