# Promises

1. **Creating a Basic Promise** :
    Write a function fetchUserName() that returns a Promise. The Promise should resolve with the string "John Doe" after 2 seconds. Call this function and log the resolved value to the console.

    ### Answer

```js
function fetchUserName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('John Doe');
            
        }, 2000);
    })
}

fetchUserName()
.then(result => console.log(result)
);

```

2. **Handling Promise Rejection**:
    Create a function fetchData() that returns a Promise. The Promise should randomly either resolve with "Data fetched successfully" or reject with an error message "Failed to fetch data". Use .then() and .catch() to handle both cases and log the output.

```js
const resRej = ['Data fetched successfully', 'Failed to fetch data'];

let index = Math.floor(Math.random() * 2);

function fetchData() {
    return new Promise((resolve,reject)=>{
        if (index != 1) {
            resolve(resRej[index])
        } else {
            reject(resRej[index])
        }
    })
}

fetchData()
.then(result => console.log(result)
)
```

3. **Converting Callbacks to promises**:
You are given a function fetchUser(id, callback) that fetches user details asynchronously:
```js
function fetchUser(id, callback) {

    setTimeout(() => {

        callback(null, { id, name: "Alice" });

    }, 2000);

}
```

Rewrite this function to return a Promise instead of using a callback.

### Answer

```js
function fetchUser(id) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {

            resolve({id,
                name:'Alice'
            })
    
        }, 2000);
    })
}
```

4. **Using Async/ Await with a Promise**:
 Modify the function from Question 1 to use async/await instead of .then() to log the result

### Answer
```js
async function fetchUserName() {
    setTimeout(()=>{
        console.log('John Doe')
    },2000)
}

fetchUserName()
```

5. **Chaining Multiple Promises**:
Write two functions:

1. getUserId() returns a Promise that resolves with 123 after 1 second.
2. getUserDetails(id) returns a Promise that resolves with { id, name: "Alice" } after 2 seconds.
Chain these functions so that calling getUserId() retrieves the user ID and then fetches the user details using getUserDetails(id). Log the final output.

```js
    function getUserId() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('123')}, 1000)
    })
}

function getUserDetails(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id, name:'Alice'})
        }, 2000);
    })
}


getUserId()
.then(result => {
    console.log(result);
     return getUserDetails(result)
}).then(result => {
    console.log(result);
    
})

```

6. **Error Handling in Async/Await**
Modify the fetchData() function from Question 2 to use async/await. Use a try/catch block to handle errors.

```js
const resRej = ['Data fetched successfully', 'Failed to fetch data'];

let index = Math.floor(Math.random() * 2);


async function fetchData() {
    try {
        if (!index) {
            console.log(resRej[index]);
            
        } else {
            throw new Error(resRej[index])
        }
    } catch(err) {
        
        console.log(err);
        
    }
}

fetchData();
```

7. **Using Promise.all()**
Write three functions:

1. fetchUser() resolves after 2 seconds with { name: "John" }.
2. fetchPosts() resolves after 3 seconds with ["Post 1", "Post 2"].
3. fetchComments() resolves after 1 second with ["Comment 1", "Comment 2"].
Use Promise.all() to run these functions concurrently and log the combined results.

```js
    function fetchUser() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({name: 'John'})
        }, 2000);
    })
}

function fetchPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2'])
        }, 3000);
    })
}

function fetchComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Comment 1', 'Comment 2'])
        }, 1000);
    })
}

Promise.all([fetchUser(), fetchPost(), fetchComments()])
.then(result => console.log(result)
)
```

8. **Implementing a Delay Function**
Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then use async/await to pause execution for 3 seconds before logging "Waited for 3 seconds".

```js
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Waited for 3 seconds')
        }, ms);
    })
}

async function newFunc() {
    const result = await delay(3000);
    console.log(result);
    
}

newFunc()
```

9. **Sequential vs Parallel Execution**
Create two functions:

1. task1() takes 2 seconds to resolve with "Task 1 Done".
2. task2() takes 3 seconds to resolve with "Task 2 Done".
Write two implementations:

1. Run them sequentially using await.
2. Run them in parallel using Promise.all().
Compare the execution times.

```js
    function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 1 Done')
        }, 2000);
    })
};

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 2 Done')
        }, 3000);
    })
};

async function sequence() {
    const newtask1 = await task1();
    const newtask2 = await task2();

    console.log(newtask1);
    console.log(newtask2);
    
}
//Check Performance for async/await
const start = performance.now();
sequence()
const end = performance.now()
const asyncExe = end - start
console.log(`Execution : ${asyncExe}`);


// Check Performance for Promise.all
const startTime = performance.now();

Promise.all([task1(),task2()])
.then(result => console.log(result)
)

const endTime = performance.now();
const promiseAllExe = endTime - startTime;
console.log(`Execution : ${promiseAllExe}`);

// Difference in times
console.log(asyncExe-promiseAllExe);

// The execution times for both are almost the same, with no vast difference.

```

10. **Implementing a Fetch Wrapper**
Write an async function fetchData(url) that fetches data from the given URL using fetch(). Handle possible errors using try/catch and return "Error fetching data" if the request fails.

```js
    const url = 'https://jsonplaceholder.typicode.com/postss';

async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (response.status === 200) {
            const data = await response.json()
            console.log(data);
            
        } else {
            throw new Error("Error fetching data");
            
        }
    } catch (error) {
        console.log(error);
        
    }
    

}

fetchData(url)
```