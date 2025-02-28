# JavaScript Assignment

## Part 1: Conditionals (if, else, switch) [5 Questions]

1. **Age Verification**:
   Write a function `checkAge(age)` that prints `"You are an adult"` if the age is 18 or above, otherwise print `"You are a minor"`.

   ### Answer

   ```js
   function checkAge(age) {
     if (age > 18) {
       console.log("You are an adult");
     } else {
       console.log("You are a minor");
     }
   }
   checkAge(15); // You are a minor
   ```

2. **Even or Odd**:  
   Write a function `isEven(number)` that checks whether a number is even or odd and returns `"Even"` or `"Odd"`.

   ### Answer

   ```js
   function isEven(number) {
     if (number % 2 === 0) {
       console.log("Even");
     } else {
       console.log("Odd");
     }
   }
   isEven(5); // Odd
   ```

3. **Grade Calculator**:  
   Write a function `getGrade(score)` that takes a student's score and returns:

   - `"A"` for 90 and above
   - `"B"` for 80 - 89
   - `"C"` for 70 - 79
   - `"D"` for 60 - 69
   - `"F"` for below 60

   ### Answer

   ```js
   function getGrade(score) {
     if (score >= 90) {
       return "A";
     } else if (score >= 80 && score < 90) {
       return "B";
     } else if (score >= 70 && score < 80) {
       return "c";
     } else if (score >= 60 && score < 70) {
       return "D";
     } else {
       return "F";
     }
   }

   console.log(getGrade(5)); // F
   ```

4. **Traffic Light**:  
   Use a switch statement to print what a driver should do based on a `lightColor` variable:

   - `"red"` → `"Stop"`
   - `"yellow"` → `"Slow down"`
   - `"green"` → `"Go"`

   ### Answer

   ```js
   function trafficLight(color) {
     switch (color) {
       case "red":
         console.log("Stop");
         break;
       case "yellow":
         console.log("Slow down");
         break;
       case "green":
         console.log("Go");
         break;
     }
   }

   trafficLight("red"); // Stop
   ```

5. **Largest of Three Numbers**:  
   Write a function `findLargest(a, b, c)` that takes three numbers and returns the largest one.

   ### Answer

   ```js
   function findLargest(a, b, c) {
     if (a > b && a > c) {
       console.log(a);
     } else if (b > a && b > c) {
       console.log(b);
     } else {
       console.log(c);
     }
   }

   findLargest(1, 2, 3); // 3
   ```

---

## Part 2: Loops (for, while, do...while) [5 Questions]

6. **Counting Up**:  
   Use a `for` loop to print numbers from 1 to 10.

   ### Answer

   ```js
   for (let i = 1; i <= 10; i++) {
     console.log(i);
   }
   /**
    * 1
    * 2
    * 3
    * 4
    * 5
    * 6
    * 7
    * 8
    * 9
    * 10
    */
   ```

7. **Counting Down**:  
   Use a `while` loop to print numbers from 10 to 1.

   ### Answer

   ```js
   let num = 10;
   while (num >= 1) {
     num--;
     console.log(num);
   }

   /**
    * 10
    * 9
    * 8
    * 7
    * 6
    * 5
    * 4
    * 3
    * 2
    * 1
    */
   ```

8. **Multiplication Table**:  
    Write a function `printTable(n)` that takes a number `n` and prints its multiplication table (from 1 to 10).

   ### Answer

   ```js
   function printTable(n) {
     for (let i = 1; i <= 10; i++) {
       console.log(`${n} x ${i} = ${n * i}`);
     }
   }

   /**
   5 x 1 = 5
   5 x 2 = 10
   5 x 3 = 15
   5 x 4 = 20
   5 x 5 = 25
   5 x 6 = 30
   5 x 7 = 35
   5 x 8 = 40
   5 x 9 = 45
   5 x 10 = 50
   */
   ```

9. **Sum of First N Natural Numbers**:  
   Write a function `sumNumbers(n)` that uses a `while` loop to return the sum of numbers from 1 to `n`.

   ### Answer

   ```js
   function sumNumbers(n) {
     let result = 0;
     let count = 1;
     while (count <= n) {
       result += count;
       count++;
     }
     return result;
   }

   console.log(sumNumbers(3)) // 6
   ```

10. **Do-While Example**:  
    Write a program using a `do...while` loop that asks the user for a number greater than 5. If the number is 5 or less, the program should ask again. (Simulate user input with a variable).

    ### Answer

    ```js
    let number;
    do {
      number = prompt("Enter a number greater than 5");
      number = Number(number);
    } while (number < 5);
    ```

---

## Part 3: Functions (Declaration, Expressions, Arrow Functions) [5 Questions]

11. **Function Declaration**:  
    Write a function `greet(name)` that prints `"Hello, [name]!"`.

    ### Answer

    ```js
    function greet(name) {
      console.log(`Hello, ${name}`);
    }
    ```

12. **Function Expression**:  
    Convert the `greet(name)` function into a function expression.

    ### Answer

    ```js
    const greet = function (name) {
      console.log(`Hello, ${name}`);
    };
    ```

13. **Arrow Function**:  
    Convert the `greet(name)` function into an arrow function.

    ### Answer

    ```js
    const greet = (name) => {
      console.log(`Hello, ${name}`);
    };
    ```

14. **Square of a Number**:  
    Write an arrow function `square(num)` that returns the square of a number.

    ### Answer

    ```js
    const square = (num) => num * num;

    console.log(square(9)); // 81
    ```

15. **Function as a Variable**:  
    Assign a function to a variable that adds two numbers and call it.

    ### Answer

    ```js
    function addNum(a, b) {
      return a + b;
    }

    const addedNum = addNum;

    console.log(addedNum(5, 5)); // 10
    ```

---

## Part 4: Function Parameters & Return Values [3 Questions]

16. **Convert Temperature**:  
    Write a function `convertToFahrenheit(celsius)` that takes a temperature in Celsius and returns the Fahrenheit equivalent using the formula:  
    `Fahrenheit = (Celsius * 9/5) + 32`.

    ### Answer

    ```js
    function convertToFahrenheit(celsius) {
      let fahrenheit = `${(celsius * 9) / 5 + 32}`;
      return fahrenheit;
    }

    console.log(convertToFahrenheit(100)); //212
    ```

17. **Reverse a String**:  
     Write a function `reverseString(str)` that takes a string and returns it reversed. Example:

    ```js
    function reverseString(str) {
      let strArray = str.split("");

      let newStrArray = strArray.reverse();

      let newStr = newStrArray.join("");
      console.log(newStr);
    }

    reverseString("hello"); // "olleh"
    ```

18. **Find Maximum in an Array**:  
     Write a function `findMax(arr)` that takes an array of numbers and returns the largest number.

    ### Answer

    ```js
    function findMAx(arr) {
      let largestNum = Math.max(...arr);
      return largestNum;
    }

    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(findMAx(numArr)); // 9
    ```

---

## Part 5: Scope (Global vs. Local) [2 Questions]

19. **Global vs Local Scope**:

    - Declare a global variable `greeting = "Hello!"` and use it inside a function.
    - Inside the function, declare a local variable `name = "Alice"` and try to access it outside the function. What happens?

    ### Answer

    ```js
    let greeting = "Hello";

    function greet() {
      alert(greeting);
      let name = "Alice";
    }

    console.log(name); // undefined
    ```

20. **Function Scope Challenge**:  
    Write a function that declares a variable inside a loop and tries to access it outside the loop. Does it work? Why or why not?

    ### Answer

    ```js
    function scopeLoop() {
      for (let i = 1; i <= 3; i++) {
        let myName = "Samuel";
      }
      return console.log(myName);
    }

    scopeLoop(); // reference error
    //This does not work because let is blocked scoped. Hence, a variable declared with it is not accessible out side its block.
    ```

---

## Bonus Challenge (Optional)

Write a function `isPrime(n)` that checks if a number is prime.

### Answer

```js
function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

console.log(isPrime(1)); // returns false
```
