let posts = [{
        id: 100,
        content: 'This is a lie',
        posted_by: 'Arun'
    },
    {
        id: 101,
        content: 'This is still a lie',
        posted_by: 'Bhaskar'
    },
    {
        id: 102,
        content: 'This is definitely a lie',
        posted_by: 'Raul'
    },
    {
        id: 103,
        content: 'This is my lie',
        posted_by: 'Raul'
    },
    {
        id: 104,
        content: 'This is my second lie',
        posted_by: 'Raul'
    }
]

function appendToList(text) {
    const ul = document.getElementById('posts-list');
    const li = document.createElement('li')
    li.innerText = text;
    ul.appendChild(li)
}

for (let post of posts) {
    // console.log(post)
    const str = `${post['content']}, by ${post['posted_by']}`
    appendToList(str)
}

// let raulsPosts = [];
// for (let post of posts) {
//     if (post['posted_by'] == 'Raul') {
//         raulsPosts.push(post)
//     }
// }

// let newRaulsPosts = posts.filter((post) => post['posted_by'] == 'Raul')