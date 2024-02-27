/////////////////////////// Callbacks ////////////////////////////
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = ''; // creates variable to hold post
        posts.forEach((post, index) => { // goes through each post
            output += `<li>${post.title}</li>`; // adds post to vairable
        });
        document.body.innerHTML = output; // output post
    }, 1000);
}

// adds post to post list
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
