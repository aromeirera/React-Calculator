// 3. Rewrite a .then()/.catch() call chain using async/await + try/catch.
async function riskyWait(ms){
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
try {
   resolve=>console.log(resolve) 
} catch (error) {
  (error=>console.error(error))  
}
console.log(riskyWait(1000))