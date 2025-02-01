# Assignment 

## 1. What will the following code snippet do when executed, and what bug can you identify?

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```

- Answer
The code above is a for loop that has a condition f a declared variable i, is less than 5, and then increments i by 1. Each time the loop runs, it checks the value of i to see it is less than 5 and then logs the value of i to the console. However, the variable is declared with var which can cause the variable to i to be accessed and even reassigned in other parts of the code. var is also hoisted and this can cause problems.

## 2. Explain the output of the following code snippet, and suggest a bug fix if necessary:

```javascript
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

- Answer
The code iterates over an array while the declared value i is less than the value of the length of the array. It then logs the value of each item in the array onto the console.

## 3. Identify the problem in the code snippet below and provide a fix:

```javascript
let fruits = ["apple", "banana", "cherry"];
for (let fruit in fruits) {
  console.log(fruit);
}
```

- Answer
The for-in loop is primarily made to iterate over object properties. When used over arrays it logs the index of the array and not the item itself. To resolve this issue, what we can do is to use the for-of loop. This will log the item in the array to the console as intended.
```javascript
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);// apple, banana, cherry
}
```

## 4. What will be the result of the following code, and what issue does it have?

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
}
```


- Answer
The result of the code above will be an infinite loop. This because i has been set to a definite value 0; which will always meet the condition of the while loop when it runs. We can prevent this by setting i to increment so that when it is greater than 5 the loops stops.
```javascript
let i = 0;
while (i < 5) {
    i++;
  console.log(i);
}
```


## 5. Explain the output of the code snippet and fix the bug if necessary:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- Answer 
The loop logs the value of i to the console every the loop runs. The loop ends when i is 5.

## 6. What is the problem with the code snippet below, and how can it be corrected?

```javascript
const numbers = [1, 2, 3, 4, 5];
for (let i in numbers) {
  console.log(numbers[i]);
}
```

- Answer
There is nothing wrong with the code. The console will log the values of the array numbers.

7. What will happen when the following code is executed, and what issue can you identify?

```javascript
const names = ["Alice", "Bob", "Charlie"];
for (const name of names) {
  console.log(name);
}
```

- Answer
There is no issue with this code, the for-of loop will log the name to the console.

## 8. Identify the bug in the code snippet below and provide a corrected version:

```javascript
let count = 10;
for (let i = 0; i < count; i++) {
  console.log("Iteration: " + i);
  count--;
}
```

- Answer
There is no bug in this code. Count variable holds a value of 10, the for loop checks to see if the value of i is less than the value of count. If it is, it logs "Iteration: + the value of i at the time of iteration" and then decrements count by 1. This goes goes on till i becomes greater than count and at that point the loop stops running.

## 9. What will the output of the code below be, and what issue can you find?

```javascript
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
```

- Answer
The code will run just fine and ouput the each item in the colors array.

## 10. Identify the problem in the code snippet and suggest a fix:

```javascript
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  numbers.pop();
}
```
- Answer
The code above works just fine; the for loop iterates over the numbers array while i is less than the length of numbers and logs its item to the console. It then removes the last item in the array after each iteration.
1, [1,2,3,4]
2, [1,2,3]
3, [1,2]


## 11. Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both 3 and 5, print "FizzBuzz". Otherwise, print the number itself.

- Answer
```javascript
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);

fizzBuzz(15);

// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
```
## 12. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string. Use a loop to iterate over the characters.

- Answer
```js
function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0
    for (let char of str) {
        if(vowels.includes(str)) {
            count++
        }
    }
    return count

}

console.log(countVowels("hello world")); // Output: 3 ('e', 'o', 'o')
```
