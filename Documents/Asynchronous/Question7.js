// Write createPost(title, body) — POST to JSONPlaceholder  
function createPost(title, body){
    return fetch(URL,{
        method:"POST",
        headers:{
            "content-type":"Application/json"
        },
        body:JSON.stringify({
            title:title,
            body:body
        })
    })
}
// const URL = "https://jsonplaceholder.typicode.com/posts";
// createPost("My first post", "Hello JSONPlaceholder!")
createPost(title,body)
// this not even necessary ->.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.error(error))