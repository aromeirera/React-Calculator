// ## Practical Challenge - Cancel a Slow Request

// You have the following function:

async function loadUserData() {
    try {
         const controller=new AbortController();
        const timer= setTimeout(() => {
        clearTimeout()
            
            controller.abort()
            console.log("Request cancelled")
        }, 2000);
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",{
        signal: controller.signal
    }
  );

  const data = await response.json();

  console.log(data);   
    } catch (error) {
        console.log(error)
    }

}
console.log(loadUserData())
// Modify it so that:

// 1. An `AbortController` is created.
// 2. The request receives the controller's `signal`.
// 3. The request is automatically cancelled after **2 seconds**.
// 4. If the request is aborted, print:
// Request cancelled
// 1. Other errors should still be handled separately.
// 2. The timeout should be cleaned up when the request completes.
// Expected structure:
// async function loadUserData() {
//   // Your implementation
// }