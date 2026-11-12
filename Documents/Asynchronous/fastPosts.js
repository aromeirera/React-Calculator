// Create a function called `getFastPosts`that fetches 
// posts from multiple endpoints simultaneously and 
// returns data from the fastest source.

const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];
function getFastPosts() {
    let fetches=apiUrls.map(answer=>fetch(answer))

    return Promise.any(fetches)    
}
    getFastPosts()
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error=>console.error(error))
// const apiUrls = [
//     'https://jsonplaceholder.typicode.com/posts/4',
//     'https://jsonplaceholder.typicode.com/posts/5',
//     'https://jsonplaceholder.typicode.com/posts/6'
// ];

// function getFastPosts() {
//     const requests = apiUrls.map(url => fetch(url));

//     return Promise.race(requests);
// }

// getFastPosts()
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));