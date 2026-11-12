// 2. Write riskyWait(ms) — resolves with "done waiting" 
// if ms < 3000, rejects with "waited too long" if ms >= 3000.
function riskyWait(ms){
    return new Promise((resolve, reject) => {

        
        setTimeout(() => {
            if (ms<3000) {
              resolve("done waiting")  
            }
           else{
            reject("waited too long")
           } 
        }, ms);
    })
}
riskyWait(1000)
.then(resolve=>console.log(resolve))
.catch(error=>console.error(error))
console.log(riskyWait(1000))