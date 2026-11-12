// Write wait(ms) — returns a Promise that resolves after ms milliseconds.
function wait(ms) {
    return new Promise((resolve,reject) => {
        (setTimeout(() => { 
            resolve()    
        }, ms));
    })   
}
wait(3000)