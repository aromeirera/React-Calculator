//Answers:
Yep. Since you just did POST, these two are a good next step because they test PATCH and DELETE.

Assuming you're using:

const URL = "https://jsonplaceholder.typicode.com/posts";
1. updatePost(id, newTitle) — PATCH

With PATCH, you send only the property you want to change.

function updatePost(id, newTitle) {
    return fetch(`${URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: newTitle
        })
    });
}

Then you can read the response:

updatePost(1, "Updated title")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

The important part:

body: JSON.stringify({
    title: newTitle
})

means:

"Only change the title of post 1."

2. deletePost(id) — DELETE

DELETE doesn't need a body because you're telling the server which resource to delete through the URL.

function deletePost(id) {
    return fetch(`${URL}/${id}`, {
        method: "DELETE"
    });
}

Usage:

deletePost(1)
    .then(response => console.log(response))
    .catch(error => console.error(error));
The three methods together
Method	Purpose	Usually sends
POST	Create	New data
PATCH	Partially update	Fields to change
DELETE	Delete	Usually nothing

So your mental model can be:

POST   → "Create this"
PATCH  → "Change this part"
DELETE → "Remove this"

And just like your createPost(), returning fetch() is important if you want the caller to use .then() and .catch().

1. Write a function debounce(fn, delay) that wraps another function so it only actually runs
 after delay ms have passed since the last time the debounced function was called. If it's 
 called again before the delay is up, the timer resets. Useful for things like a search input 
 4where you don't want to fire an API call on every keystroke.

function debounce(fn, delay) {
    const timer=[]
    return function (...args) {
        clearTimeout(timer)
        timer=setTimeout(() => {
            fn(...args)
        }, delay);
    }
    // returns a new function
}

const log = debounce((msg) => console.log(msg), 300);

log("h");
log("he");
log("hel");
log("hello");
// only "hello" gets logged, once, ~300ms after the last call


Yep — this is a classic debouncing exercise. Since you usually like to build these from the skeleton rather than jump straight to the answer, let's break down what the function needs to do.

You start with:

function debounce(fn, delay) {
    // returns a new function
}

The key idea is:

log("h")
   ↓
start timer

log("he")
   ↓
cancel old timer
start new timer

log("hel")
   ↓
cancel old timer
start new timer

log("hello")
   ↓
cancel old timer
start new timer

       wait 300ms
          ↓
      fn("hello")
The two things you need

1. A variable to store the timer

let timer;

Why? Because when the function is called again, you need 
access to the previous timer so you can cancel it.

2. Return a new function

Something like:

return function (...) {
    // cancel previous timer
    // create new timer
}

Inside it, you'll use:

clearTimeout(timer);

to cancel the previous timer, then:

timer = setTimeout(() => {
    fn(...);
}, delay);

to start a new one.

The only part I'd have you think about now is how to pass "hello" into fn.

Since the returned function could receive different arguments, you can use JavaScript's ...args:

return function (...args) {
    // your code here
}

Then fn(...args) passes those arguments to the original function.

Try putting those pieces together first. The core pattern you're learning is:

call → cancel old timer → start new timer → if no new call happens → execute.
Here’s the complete beginner-friendly version:

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const log = debounce((msg) => console.log(msg), 300);

log("h");
log("he");
log("hel");
log("hello");
What happens

Every time log() is called:

clearTimeout(timer);

cancels the previous timer.

Then:

timer = setTimeout(() => {
    fn(...args);
}, delay);

starts a new timer.

So only when 300ms passes without another call does:

fn(...args);

run.

Result:

hello

only once.

The core pattern to remember
New call
   ↓
Cancel previous timer
   ↓
Start new timer
   ↓
Another call?
  YES → repeat
  NO
   ↓
Run function

This is why debounce is useful for search inputs: typing continuously 
keeps resetting the timer, so the API call happens only after the user pauses.