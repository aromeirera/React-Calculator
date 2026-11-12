function myFetch(url){
    return new Promise ((resolve, reject)=> {
 const xhr= new XMLHttpRequest();
            xhr.open("GET",url)
        xhr.onload= function () {
            const info=JSON.parse(xhr.responseText)
            resolve(info)
        }
        xhr.onerror= function () {
            reject(new Error ("fetching failed"))
        }
        xhr.send();
    })
           
       
}

myFetch('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log('Error:', error))
// xhr.onload= function () {
//             const data= JSON.parse(xhr.responseText);
//             console.log(data)
//         }