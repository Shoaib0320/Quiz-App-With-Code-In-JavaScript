const quizQuestions = [
          // 1. Variables and Data Types

        {
        "question": "What is the default value of an uninitialized variable in JavaScript?",
        "options": ["undefined", "null", "0", "NaN"],
        "answer": "undefined",
        "explanation": "In JavaScript, if a variable is declared but not initialized, it is assigned the default value 'undefined'.",
        "code": "let x;\nconsole.log(x); // Output: undefined"
        },
        {
        "question": "Which data type is NOT primitive in JavaScript?",
        "options": ["String", "Number", "Object", "Boolean"],
        "answer": "Object",
        "explanation": "Objects are reference types in JavaScript, whereas String, Number, and Boolean are primitive data types.",
        "code": "let obj = { key: 'value' };\nconsole.log(typeof obj); // Output: object"
        },
        {
        "question": "What is the output of the following code?\nconsole.log(typeof null);",
        "options": ["null", "undefined", "object", "function"],
        "answer": "object",
        "explanation": "In JavaScript, 'null' is considered an object due to a historical bug in the language's design.",
        "code": "console.log(typeof null); // Output: object"
        },

        // 2. Operators
        
        {
            "question": "What does the '===' operator do in JavaScript?",
            "options": ["Compares both value and type", "Compares value only", "Assigns value", "None of the above"],
            "answer": "Compares both value and type",
            "explanation": "The '===' operator in JavaScript checks for strict equality, meaning both value and type must be the same.",
            "code": "console.log(1 === '1'); // Output: false"
          },
          {
            "question": "What is the result of the following operation? 3 + 2 + '7'",
            "options": ["327", "12", "57", "Error"],
            "answer": "57",
            "explanation": "JavaScript performs addition from left to right, and when a number is added to a string, the result is concatenated as a string.",
            "code": "console.log(3 + 2 + '7'); // Output: 57"
          },
          {
            "question": "Which of the following is a unary operator in JavaScript?",
            "options": ["++", "+", "-", "--"],
            "answer": "++",
            "explanation": "The '++' operator is a unary operator that increments the value of its operand by one.",
            "code": "let x = 5;\nx++;\nconsole.log(x); // Output: 6"
          },

        //   3. Control Structures (if, else, switch)

        {
            "question": "What is the output of the following code?\nif (false || true) { console.log('A'); } else { console.log('B'); }",
            "options": ["A", "B", "undefined", "Error"],
            "answer": "A",
            "explanation": "The OR (||) operator returns true if at least one of its operands is true. Therefore, 'A' is logged.",
            "code": "if (false || true) { console.log('A'); } else { console.log('B'); }"
          },
          {
            "question": "Which statement is used to handle multiple cases in a control structure?",
            "options": ["if", "else", "switch", "break"],
            "answer": "switch",
            "explanation": "The 'switch' statement evaluates an expression and matches the expression's value to a case clause, executing the corresponding block of code.",
            "code": "let day = 'Monday';\nswitch(day) {\n  case 'Monday':\n    console.log('Start of the week');\n    break;\n  case 'Friday':\n    console.log('End of the week');\n    break;\n}"
          },
          {
            "question": "What will be the output of the following code?\nlet x = 10;\nif (x == '10') { console.log('Equal'); } else { console.log('Not Equal'); }",
            "options": ["Equal", "Not Equal", "undefined", "Error"],
            "answer": "Equal",
            "explanation": "The '==' operator performs type coercion, so it considers the string '10' and number 10 as equal.",
            "code": "let x = 10;\nif (x == '10') { console.log('Equal'); } else { console.log('Not Equal'); }"
          },

        //   4. Loops (for, while, do...while)

        {
            "question": "What will be the output of the following code?\nfor (let i = 0; i < 3; i++) { console.log(i); }",
            "options": ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
            "answer": "0 1 2",
            "explanation": "The for loop initializes 'i' to 0, increments it until it reaches 3, and logs each value before the increment.",
            "code": "for (let i = 0; i < 3; i++) { console.log(i); }"
          },
          {
            "question": "Which loop is guaranteed to execute at least once?",
            "options": ["for", "while", "do...while", "None"],
            "answer": "do...while",
            "explanation": "The 'do...while' loop executes the code block once before checking the condition, ensuring it runs at least once.",
            "code": "let i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 3);"
          },
          {
            "question": "How can you stop a loop prematurely?",
            "options": ["continue", "break", "return", "stop"],
            "answer": "break",
            "explanation": "The 'break' statement exits the loop immediately, stopping further iterations.",
            "code": "for (let i = 0; i < 5; i++) {\n  if (i === 3) {\n    break;\n  }\n  console.log(i);\n}"
          },

          
        //   5 Functions

            {
                "question": "Which keyword is used to define a function in JavaScript?",
                "options": ["function", "def", "func", "method"],
                "answer": "function",
                "explanation": "In JavaScript, the `function` keyword is used to define a function.",
                "code": "function greet() {\n  console.log('Hello, World!');\n}"
            },
            {
                "question": "What will be the output of the following code snippet? \n```function add(a, b) {\n return a + b;\n}\nconsole.log(add(2, 3));```",
                "options": ["2", "3", "5", "undefined"],
                "answer": "5",
                "explanation": "The `add` function takes two arguments, adds them, and returns the result. In this case, 2 + 3 equals 5.",
                "code": "function add(a, b) {\n return a + b;\n}\nconsole.log(add(2, 3)); // Output: 5"
            },
            {
                "question": "What does the return statement do in a function?",
                "options": ["Stops the function and returns a value", "Pauses the function", "Returns a value but continues the function", "Nothing"],
                "answer": "Stops the function and returns a value",
                "explanation": "The `return` statement stops the execution of a function and returns a specified value to the function caller.",
                "code": "function getName() {\n  return 'Alice';\n  console.log('This will not execute');\n}\nconsole.log(getName()); // Output: 'Alice'"
            },
        

        // 6 Scope and Hoisting

                {
                    "question": "What is the output of the following code? \n```console.log(x);\nvar x = 5;```",
                    "options": ["undefined", "5", "ReferenceError", "null"],
                    "answer": "undefined",
                    "explanation": "Due to hoisting, the declaration of `x` is moved to the top, but its assignment remains in place, so `x` is `undefined` when logged.",
                    "code": "console.log(x); // Output: undefined\nvar x = 5;"
                },
                {
                    "question": "Which type of scope does a `var` variable have in a function?",
                    "options": ["Function scope", "Block scope", "Global scope", "Local scope"],
                    "answer": "Function scope",
                    "explanation": "In JavaScript, `var` variables are function-scoped, meaning they are accessible throughout the entire function in which they are declared.",
                    "code": "function test() {\n  var x = 10;\n  if (true) {\n    var x = 20;\n    console.log(x); // Output: 20\n  }\n  console.log(x); // Output: 20\n}"
                },
                {
                    "question": "What does 'hoisting' refer to in JavaScript?",
                    "options": ["Moving declarations to the top", "Moving variables to the bottom", "Removing variable declarations", "None of the above"],
                    "answer": "Moving declarations to the top",
                    "explanation": "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.",
                    "code": "console.log(hoistedVar); // Output: undefined\nvar hoistedVar = 10;"
                },

        
        // 7 Closures


            {
                "question": "What is a closure in JavaScript?",
                "options": ["A function with its lexical scope", "A function without any scope", "A function that doesn't return anything", "None of the above"],
                "answer": "A function with its lexical scope",
                "explanation": "A closure is a function that has access to its own scope, the scope in which it was created, and the global scope.",
                "code": "function outerFunction() {\n  let outerVariable = 'I am outside!';\n  function innerFunction() {\n    console.log(outerVariable);\n  }\n  return innerFunction;\n}\nconst closure = outerFunction();\nclosure(); // Output: 'I am outside!'"
            },
            {
                "question": "What will the following code output? \n```function makeCounter() {\n let count = 0;\n return function() {\n   return count++;\n };\n}\nlet counter = makeCounter();\nconsole.log(counter());\nconsole.log(counter());```",
                "options": ["0, 1", "1, 2", "undefined, undefined", "0, 0"],
                "answer": "0, 1",
                "explanation": "Each call to `counter()` increments and returns the `count` variable, starting at 0, because `count` is preserved in the closure.",
                "code": "function makeCounter() {\n let count = 0;\n return function() {\n   return count++;\n };\n}\nlet counter = makeCounter();\nconsole.log(counter()); // Output: 0\nconsole.log(counter()); // Output: 1"
            },
            {
                "question": "What is the main benefit of using closures?",
                "options": ["Data encapsulation", "Faster execution", "Reduced memory usage", "Simplified code"],
                "answer": "Data encapsulation",
                "explanation": "Closures allow data to be encapsulated and only accessible within the function, preventing external access and modification.",
                "code": "function secretCode() {\n  let secret = '1234';\n  return function() {\n    return secret;\n  };\n}\nconst getSecret = secretCode();\nconsole.log(getSecret()); // Output: '1234'"
            },

        // 8 Arrays

            {
                "question": "Which method is used to add an element to the end of an array?",
                "options": ["push()", "pop()", "shift()", "unshift()"],
                "answer": "push()",
                "explanation": "The `push()` method adds one or more elements to the end of an array and returns the new length of the array.",
                "code": "let arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr); // Output: [1, 2, 3, 4]"
            },
            {
                "question": "What does the following code return? \n```const arr = [1, 2, 3];\nconsole.log(arr.slice(1, 2));```",
                "options": ["[1]", "[2]", "[3]", "[1, 2]"],
                "answer": "[2]",
                "explanation": "The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).",
                "code": "const arr = [1, 2, 3];\nconsole.log(arr.slice(1, 2)); // Output: [2]"
            },
            {
                "question": "Which array method removes the first element from an array?",
                "options": ["shift()", "pop()", "push()", "unshift()"],
                "answer": "shift()",
                "explanation": "The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.",
                "code": "let arr = [1, 2, 3];\narr.shift();\nconsole.log(arr); // Output: [2, 3]"
            },
        

        // 9 objects

    {
        "question": "How do you access the value of a property in an object?",
        "options": ["dot notation", "bracket notation", "both", "neither"],
        "answer": "both",
        "explanation": "You can access the value of an object property using either dot notation or bracket notation.",
        "code": "const obj = { name: 'Alice', age: 25 };\nconsole.log(obj.name); // Output: 'Alice'\nconsole.log(obj['age']); // Output: 25"
    },
    {
        "question": "What is the output of the following code? \n```const person = { name: 'John' };\nperson.age = 30;\nconsole.log(person);```",
        "options": ["{ name: 'John', age: 30 }", "{ name: 'John' }", "undefined", "null"],
        "answer": "{ name: 'John', age: 30 }",
        "explanation": "In JavaScript, objects are mutable, and properties can be added or modified after the object is created.",
        "code": "const person = { name: 'John' };\nperson.age = 30;\nconsole.log(person); // Output: { name: 'John', age: 30 }"
    },
    {
        "question": "Which of the following methods creates a new object with the specified prototype object and properties?",
        "options": ["Object.create()", "Object.assign()", "Object.defineProperty()", "Object.keys()"],
        "answer": "Object.create()",
        "explanation": "The `Object.create()` method creates a new object, using an existing object as the prototype of the newly created object.",
        "code": "const proto = {greet: function() { console.log('Hello!'); }};\nconst obj = Object.create(proto);\nobj.greet(); // Output: 'Hello!'"
    },


    // 10 String Manipulation

        {
          "question": "Which method would you use to extract a section of a string and return it as a new string?",
          "options": ["slice()", "split()", "substr()", "substring()"],
          "answer": "slice()",
          "explanation": "The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.",
          "code": "const str = \"Hello, World!\";\nconst slicedStr = str.slice(7, 12);\nconsole.log(slicedStr); // Output: World"
        },
        {
          "question": "Which method splits a string into an array of substrings based on a specified separator?",
          "options": ["split()", "slice()", "replace()", "concat()"],
          "answer": "split()",
          "explanation": "The split() method splits a string into an array of substrings based on a specified separator, which can be a string or a regular expression.",
          "code": "const str = \"apple,banana,cherry\";\nconst fruits = str.split(\",\");\nconsole.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]"
        },
        {
          "question": "What method would you use to replace a specified substring with a new substring in a string?",
          "options": ["replace()", "slice()", "trim()", "substr()"],
          "answer": "replace()",
          "explanation": "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a regular expression.",
          "code": "const str = \"Hello, World!\";\nconst newStr = str.replace(\"World\", \"JavaScript\");\nconsole.log(newStr); // Output: Hello, JavaScript!"
        },
        {
          "question": "How can you convert a string to uppercase in JavaScript?",
          "options": ["toUpperCase()", "toLowerCase()", "charAt()", "concat()"],
          "answer": "toUpperCase()",
          "explanation": "The toUpperCase() method converts all the characters in a string to uppercase.",
          "code": "const str = \"hello, world!\";\nconst upperStr = str.toUpperCase();\nconsole.log(upperStr); // Output: HELLO, WORLD!"
        },
      
    // Browser-Specific Concepts

        {
          "question": "How do you select an element with the ID 'myElement' using JavaScript?",
          "options": ["document.getElementById('myElement')", "document.querySelector('#myElement')", "document.getElementsByClassName('myElement')", "document.querySelectorAll('#myElement')"],
          "answer": "document.getElementById('myElement')",
          "explanation": "The getElementById method returns the element with the specified ID, which is 'myElement' in this case.",
          "code": "const element = document.getElementById('myElement');\nconsole.log(element);"
        },
        {
          "question": "Which method would you use to add an event listener to an element?",
          "options": ["addEventListener()", "attachEvent()", "addListener()", "bindEvent()"],
          "answer": "addEventListener()",
          "explanation": "The addEventListener() method attaches an event handler to the specified element.",
          "code": "const button = document.getElementById('myButton');\nbutton.addEventListener('click', () => {\n  alert('Button clicked!');\n});"
        },
        {
          "question": "What is the purpose of the Fetch API?",
          "options": ["To handle form validation", "To make network requests", "To manage local storage", "To manipulate the DOM"],
          "answer": "To make network requests",
          "explanation": "The Fetch API provides a way to make network requests similar to XMLHttpRequest.",
          "code": "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data));"
        },
        {
          "question": "How do you create a delay of 2 seconds before executing a function using JavaScript?",
          "options": ["setTimeout(callback, 2000)", "setInterval(callback, 2000)", "delay(callback, 2000)", "pause(callback, 2000)"],
          "answer": "setTimeout(callback, 2000)",
          "explanation": "The setTimeout() function executes a function after a specified delay (in milliseconds).",
          "code": "setTimeout(() => {\n  console.log('2 seconds passed');\n}, 2000);"
        },
        {
          "question": "What method would you use to validate a form's input fields in JavaScript?",
          "options": ["validate()", "checkValidity()", "isValid()", "submit()"],
          "answer": "checkValidity()",
          "explanation": "The checkValidity() method checks if a form or input element satisfies its validation constraints.",
          "code": "const form = document.getElementById('myForm');\nconst isValid = form.checkValidity();\nconsole.log(isValid);"
        },
        {
          "question": "Which method allows you to store a value in localStorage?",
          "options": ["localStorage.setItem()", "localStorage.add()", "localStorage.store()", "localStorage.save()"],
          "answer": "localStorage.setItem()",
          "explanation": "The setItem() method stores a value in the localStorage object.",
          "code": "localStorage.setItem('key', 'value');"
        },
        {
          "question": "What is the primary use of Cookies in web development?",
          "options": ["To store user preferences", "To manage DOM elements", "To handle network requests", "To validate forms"],
          "answer": "To store user preferences",
          "explanation": "Cookies are used to store small amounts of data related to the user's interaction with the website, such as preferences or session data.",
          "code": "document.cookie = 'username=JohnDoe';"
        },
        {
          "question": "What does CORS stand for and what does it do?",
          "options": ["Cross-Origin Resource Sharing; allows resources to be requested from another domain", "Cross-Origin Resource Sharing; limits resource access to the same domain", "Cross-Origin Request Security; protects against data leaks", "Cross-Origin Request Security; allows requests from any domain"],
          "answer": "Cross-Origin Resource Sharing; allows resources to be requested from another domain",
          "explanation": "CORS is a security feature that allows or restricts resources requested from another domain outside the origin domain.",
          "code": "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));"
        },
        {
          "question": "How can you convert a JavaScript object to a JSON string?",
          "options": ["JSON.parse()", "JSON.stringify()", "Object.toJSON()", "Stringify()"],
          "answer": "JSON.stringify()",
          "explanation": "The JSON.stringify() method converts a JavaScript object or value to a JSON string.",
          "code": "const obj = { name: 'John', age: 30 };\nconst jsonString = JSON.stringify(obj);\nconsole.log(jsonString);"
        },
        {
          "question": "How can you retrieve an item from localStorage?",
          "options": ["localStorage.getItem()", "localStorage.retrieve()", "localStorage.fetch()", "localStorage.read()"],
          "answer": "localStorage.getItem()",
          "explanation": "The getItem() method retrieves the value of a specified key from localStorage.",
          "code": "const value = localStorage.getItem('key');\nconsole.log(value);"
        },
        
        
        // ES6 and Beyond

            {
              "question": "What is the correct syntax for an arrow function that returns the square of a number?",
              "options": ["const square = x => x * x;", "const square = (x) => { return x * x; };", "const square = (x) => x * x;", "const square = x => { x * x; }"],
              "answer": "const square = x => x * x;",
              "explanation": "Arrow functions provide a concise syntax and can omit the braces and return keyword for single-expression functions.",
              "code": "const square = x => x * x;\nconsole.log(square(5)); // Output: 25"
            },
            {
              "question": "How do you include a variable within a string using template literals?",
              "options": ["'Hello, ${name}'", "\"Hello, ${name}\"", "'Hello, ' + name", "\"Hello, \" + name"],
              "answer": "\"Hello, ${name}\"",
              "explanation": "Template literals use `${}` to embed expressions and variables inside strings.",
              "code": "const name = 'John';\nconst greeting = `Hello, ${name}`;\nconsole.log(greeting); // Output: Hello, John"
            },
            {
              "question": "What is the result of the following destructuring assignment? const [a, b] = [1, 2];",
              "options": ["a = 1, b = 2", "a = 2, b = 1", "a = [1], b = [2]", "a = [1, 2]"],
              "answer": "a = 1, b = 2",
              "explanation": "Destructuring assignment allows unpacking values from arrays into distinct variables.",
              "code": "const [a, b] = [1, 2];\nconsole.log(a, b); // Output: 1 2"
            },
            {
              "question": "How do you use the spread operator to combine two arrays?",
              "options": ["const combined = [...arr1, ...arr2];", "const combined = arr1 + arr2;", "const combined = arr1.concat(arr2);", "const combined = arr1.join(arr2);"],
              "answer": "const combined = [...arr1, ...arr2];",
              "explanation": "The spread operator `...` can be used to spread elements of arrays into a new array.",
              "code": "const arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst combined = [...arr1, ...arr2];\nconsole.log(combined); // Output: [1, 2, 3, 4]"
            },
            {
              "question": "How do you set a default value for a parameter in a function?",
              "options": ["function greet(name = 'Guest') {}", "function greet(name) { name = 'Guest'; }", "function greet(name) { if (!name) name = 'Guest'; }", "function greet(name) { return name || 'Guest'; }"],
              "answer": "function greet(name = 'Guest') {}",
              "explanation": "Default parameters can be set in the function signature, providing a default value if no argument is passed.",
              "code": "function greet(name = 'Guest') {\n  console.log(`Hello, ${name}`);\n}\ngreet(); // Output: Hello, Guest"
            },
            {
              "question": "What is the purpose of the 'class' keyword in JavaScript?",
              "options": ["To define a function", "To create a new object", "To create a blueprint for objects", "To define a module"],
              "answer": "To create a blueprint for objects",
              "explanation": "The `class` keyword is used to define a class, which serves as a blueprint for creating objects with shared methods and properties.",
              "code": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    console.log(`Hello, ${this.name}`);\n  }\n}\nconst person = new Person('Alice');\nperson.greet(); // Output: Hello, Alice"
            },
            {
              "question": "How do you handle asynchronous operations using Promises?",
              "options": ["promise.then(successCallback, errorCallback)", "promise.catch(errorCallback)", "promise.finally(finalCallback)", "All of the above"],
              "answer": "All of the above",
              "explanation": "Promises have methods like `then()`, `catch()`, and `finally()` to handle success, error, and completion respectively.",
              "code": "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Success'), 1000);\n});\n\npromise\n  .then(result => console.log(result))\n  .catch(error => console.error(error))\n  .finally(() => console.log('Completed'));"
            },
            {
              "question": "How do you handle asynchronous code using async/await?",
              "options": ["const result = await fetch(url);", "const result = async fetch(url);", "const result = fetch(url).await;", "const result = fetch(url).then();"],
              "answer": "const result = await fetch(url);",
              "explanation": "The `await` keyword can only be used inside an `async` function to pause execution until a Promise resolves.",
              "code": "async function fetchData() {\n  const response = await fetch('https://api.example.com/data');\n  const data = await response.json();\n  console.log(data);\n}\nfetchData();"
            },
            {
              "question": "How do you export a function from a module in JavaScript?",
              "options": ["export function myFunction() {}", "module.exports = myFunction;", "export default myFunction;", "exports.myFunction = myFunction;"],
              "answer": "export function myFunction() {}",
              "explanation": "The `export` keyword is used to export functions, objects, or primitives from a module.",
              "code": "export function myFunction() {\n  console.log('Hello');\n}"
            },
            {
              "question": "What is the difference between Map and WeakMap in JavaScript?",
              "options": ["Map can hold primitive keys, WeakMap cannot", "WeakMap can hold only objects as keys, Map can hold both objects and primitives", "Map is garbage collected, WeakMap is not", "WeakMap has more methods than Map"],
              "answer": "WeakMap can hold only objects as keys, Map can hold both objects and primitives",
              "explanation": "Map allows any value as keys, while WeakMap only allows objects as keys. WeakMap entries are also garbage collected if the key is no longer in use.",
              "code": "const map = new Map();\nconst weakMap = new WeakMap();\nconst obj = {};\nmap.set(obj, 'value');\nweakMap.set(obj, 'value');\nconsole.log(map.get(obj)); // Output: value\nconsole.log(weakMap.get(obj)); // Output: value"
            },


            // Advanced Concepts

                {
                  "question": "How do you set up inheritance using prototypes in JavaScript?",
                  "options": ["ClassName.prototype = Object.create(ParentClass.prototype);", "ParentClass.prototype = Object.create(ClassName.prototype);", "ClassName.__proto__ = ParentClass.prototype;", "ClassName.prototype = ParentClass.prototype;"],
                  "answer": "ClassName.prototype = Object.create(ParentClass.prototype);",
                  "explanation": "Setting up inheritance involves creating an object that inherits from the parent class's prototype and assigning it to the child class's prototype.",
                  "code": "function Parent() {}\nParent.prototype.greet = function() {\n  console.log('Hello from Parent');\n};\n\nfunction Child() {}\nChild.prototype = Object.create(Parent.prototype);\nChild.prototype.constructor = Child;\n\nconst child = new Child();\nchild.greet(); // Output: Hello from Parent"
                },
                {
                  "question": "What is a callback function in JavaScript?",
                  "options": ["A function that is called by another function", "A function that is executed synchronously", "A function that returns a Promise", "A function that handles errors"],
                  "answer": "A function that is called by another function",
                  "explanation": "A callback function is passed as an argument to another function and is executed after the completion of that function.",
                  "code": "function fetchData(callback) {\n  setTimeout(() => {\n    callback('Data received');\n  }, 1000);\n}\n\nfetchData(data => {\n  console.log(data); // Output: Data received\n});"
                },
                {
                  "question": "What does the `finally` block do in a `try...catch...finally` statement?",
                  "options": ["Executes code regardless of whether an error was thrown or not", "Executes code only if an error was thrown", "Only executes if no error was thrown", "Catches and handles errors"],
                  "answer": "Executes code regardless of whether an error was thrown or not",
                  "explanation": "`finally` is used to execute code that must run after the `try` and `catch` blocks, regardless of whether an exception was thrown or not.",
                  "code": "try {\n  throw new Error('An error occurred');\n} catch (e) {\n  console.error(e);\n} finally {\n  console.log('This will always execute');\n}"
                },
                {
                  "question": "How do you add an event listener to a button element?",
                  "options": ["element.addEventListener('click', callback);", "element.on('click', callback);", "element.addListener('click', callback);", "element.onclick = callback;"],
                  "answer": "element.addEventListener('click', callback);",
                  "explanation": "The `addEventListener` method attaches an event handler to an element for a specified event type.",
                  "code": "const button = document.getElementById('myButton');\nbutton.addEventListener('click', () => {\n  alert('Button clicked!');\n});"
                },
                {
                  "question": "Which regex pattern matches a string that contains only digits?",
                  "options": ["\\d+", "\\w+", "[0-9]", "\\D+"],
                  "answer": "\\d+",
                  "explanation": "The regex pattern `\\d+` matches one or more digits.",
                  "code": "const regex = /\\d+/;\nconst result = regex.test('12345');\nconsole.log(result); // Output: true"
                },
                {
                  "question": "How do you export a variable from a module?",
                  "options": ["export variableName;", "module.exports = variableName;", "exports.variableName = variableName;", "export default variableName;"],
                  "answer": "export default variableName;",
                  "explanation": "The `export default` syntax is used to export a single variable, function, or class from a module.",
                  "code": "const myVariable = 'Hello';\nexport default myVariable;"
                },
                {
                  "question": "What does 'strict mode' do in JavaScript?",
                  "options": ["Enforces a stricter set of rules and error checking", "Allows use of undeclared variables", "Disables all JavaScript errors", "Makes JavaScript code run faster"],
                  "answer": "Enforces a stricter set of rules and error checking",
                  "explanation": "Strict mode helps catch common coding errors and unsafe actions by enforcing a stricter set of rules.",
                  "code": "'use strict';\n\nfunction test() {\n  x = 10; // Error: x is not declared\n}\ntest();"
                },
                {
                  "question": "What is a higher-order function in JavaScript?",
                  "options": ["A function that takes another function as an argument or returns a function", "A function that performs higher calculations", "A function that has a higher time complexity", "A function that is defined in the global scope"],
                  "answer": "A function that takes another function as an argument or returns a function",
                  "explanation": "Higher-order functions can accept other functions as arguments or return them as results.",
                  "code": "function outerFunction(callback) {\n  callback();\n}\n\nouterFunction(() => {\n  console.log('Callback executed');\n});"
                },
                {
                  "question": "Which of the following is a key principle of functional programming?",
                  "options": ["Avoid side effects", "Use classes for state management", "Manipulate data through mutable variables", "Create stateful objects"],
                  "answer": "Avoid side effects",
                  "explanation": "Functional programming emphasizes avoiding side effects and using pure functions that do not alter external state.",
                  "code": "function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(2, 3)); // Output: 5"
                },
                {
                  "question": "What does IIFE stand for and what is its purpose?",
                  "options": ["Immediately Invoked Function Expression; to execute a function as soon as it is defined", "Internal Invoked Function Expression; to define a function inside another function", "Immediately Invoked Function Expression; to create a closure", "Internally Invoked Function Expression; to manage asynchronous operations"],
                  "answer": "Immediately Invoked Function Expression; to execute a function as soon as it is defined",
                  "explanation": "An IIFE is a function that runs immediately after its definition, often used to create a new scope.",
                  "code": "(function() {\n  console.log('IIFE executed');\n})();"
                },

                {
                  "question": "Which method is used to add a new element to the DOM in JavaScript?",
                  "options": ["appendChild()", "getElementById()", "querySelector()", "removeChild()"],
                  "answer": "appendChild()",
                  "explanation": "The appendChild() method is used to add a new element as the last child of a specified parent element in the DOM.",
                  "code": "const parent = document.getElementById('parent');\nconst newElement = document.createElement('div');\nparent.appendChild(newElement);"
                },

                {
                  "question": "How can you change the text content of an HTML element with id 'demo' using JavaScript?",
                  "options": ["innerHTML", "textContent", "value", "nodeValue"],
                  "answer": "textContent",
                  "explanation": "The textContent property sets or returns the text content of the specified node, without interpreting the HTML tags.",
                  "code": "document.getElementById('demo').textContent = 'New Text';"
                },

                {
                  "question": "Which of the following is the correct way to remove an element from the DOM?",
                  "options": ["remove()", "delete()", "detach()", "cut()"],
                  "answer": "remove()",
                  "explanation": "The remove() method is used to remove the element from the DOM.",
                  "code": "const element = document.getElementById('demo');\nelement.remove();"
                },
                
                {
                  "question": "What does the method getElementsByClassName() return?",
                  "options": ["A single element", "An array", "A NodeList", "A string"],
                  "answer": "A NodeList",
                  "explanation": "The getElementsByClassName() method returns a live NodeList of elements with the specified class names.",
                  "code": "const elements = document.getElementsByClassName('example');\nconsole.log(elements);"
                },
                
                {
                  "question": "What is the output of the following code? document.querySelectorAll('.item').length;",
                  "options": ["A single element", "The number of elements with class 'item'", "Undefined", "An array of elements"],
                  "answer": "The number of elements with class 'item'",
                  "explanation": "The querySelectorAll() method returns a NodeList of all elements that match the specified group of selectors. The length property returns the number of elements.",
                  "code": "const count = document.querySelectorAll('.item').length;\nconsole.log(count);"
                },

                // Array of Objects

                {
                  "question": "How do you access the name property of the second object in the following array?",
                  "options": ["arr[1].name", "arr.name[1]", "arr[2].name", "arr.name"],
                  "answer": "arr[1].name",
                  "explanation": "In an array of objects, you can access an object by its index and then access a property using dot notation.",
                  "code": "const arr = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];\nconsole.log(arr[1].name); // Output: Bob"
                },
                
                {
                  "question": "Which method is used to iterate over an array of objects and return a new array based on some condition?",
                  "options": ["filter()", "map()", "forEach()", "reduce()"],
                  "answer": "filter()",
                  "explanation": "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
                  "code": "const users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}];\nconst result = users.filter(user => user.age > 30);\nconsole.log(result); // Output: [{name: 'Charlie', age: 35}]"
                },
                
                {
                  "question": "What does the following code return? const total = arr.reduce((sum, obj) => sum + obj.value, 0);",
                  "options": ["An array", "The total sum of values", "An object", "Undefined"],
                  "answer": "The total sum of values",
                  "explanation": "The reduce() method executes a reducer function on each element of the array, resulting in a single output value. In this case, it sums the values of all objects in the array.",
                  "code": "const arr = [{value: 10}, {value: 20}, {value: 30}];\nconst total = arr.reduce((sum, obj) => sum + obj.value, 0);\nconsole.log(total); // Output: 60"
                },
                
                {
                  "question": "How do you add a new object to an array of objects?",
                  "options": ["push()", "concat()", "append()", "join()"],
                  "answer": "push()",
                  "explanation": "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
                  "code": "const arr = [{name: 'Alice'}, {name: 'Bob'}];\narr.push({name: 'Charlie'});\nconsole.log(arr); // Output: [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}]"
                },
                
                {
                  "question": "Which method would you use to find an object in an array by a specific property value?",
                  "options": ["find()", "filter()", "map()", "some()"],
                  "answer": "find()",
                  "explanation": "The find() method returns the value of the first element in the array that satisfies the provided testing function.",
                  "code": "const users = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];\nconst user = users.find(u => u.name === 'Bob');\nconsole.log(user); // Output: {name: 'Bob'}"
                },
                
                // Spread Function

                {
                  "question": "What is the output of the following code? console.log([...arr, 4, 5, 6]);",
                  "options": ["[1, 2, 3, 4, 5, 6]", "[[1, 2, 3], 4, 5, 6]", "[1, 2, 3]", "[4, 5, 6]"],
                  "answer": "[1, 2, 3, 4, 5, 6]",
                  "explanation": "The spread operator (...) expands an array into individual elements, so [...arr, 4, 5, 6] results in a new array combining all elements.",
                  "code": "const arr = [1, 2, 3];\nconsole.log([...arr, 4, 5, 6]); // Output: [1, 2, 3, 4, 5, 6]"
                },
                

                {
                  "question": "How can you use the spread operator to copy an array?",
                  "options": ["[...arr]", "copy(arr)", "arr.copy()", "[arr...]"],
                  "answer": "[...arr]",
                  "explanation": "The spread operator can be used to create a shallow copy of an array by spreading the elements into a new array.",
                  "code": "const arr = [1, 2, 3];\nconst copy = [...arr];\nconsole.log(copy); // Output: [1, 2, 3]"
                },
            
                {
                  "question": "What is the output of the following code? const arr1 = [1, 2]; const arr2 = [3, 4]; console.log([...arr1, ...arr2]);",
                  "options": ["[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "[1, 2, 3]", "[3, 4]"],
                  "answer": "[1, 2, 3, 4]",
                  "explanation": "Using the spread operator, you can merge multiple arrays into a new array by spreading the elements.",
                  "code": "const arr1 = [1, 2];\nconst arr2 = [3, 4];\nconsole.log([...arr1, ...arr2]); // Output: [1, 2, 3, 4]"
                },
                
                {
                  "question": "What does the following code return? const newObj = {...obj1, ...obj2};",
                  "options": ["A merged object of obj1 and obj2", "An array of obj1 and obj2", "Undefined", "An error"],
                  "answer": "A merged object of obj1 and obj2",
                  "explanation": "The spread operator can be used to merge the properties of two or more objects into a new object.",
                  "code": "const obj1 = {a: 1, b: 2};\nconst obj2 = {c: 3, d: 4};\nconst newObj = {...obj1, ...obj2};\nconsole.log(newObj); // Output: {a: 1, b: 2, c: 3, d: 4}"
                },           
                
                // Destructuring Function

                {
                  "question": "What is the correct way to extract properties from an object using destructuring?",
                  "options": ["const {name, age} = person;", "const [name, age] = person;", "const name, age = person;", "const name: person.name, age: person.age;"],
                  "answer": "const {name, age} = person;",
                  "explanation": "In JavaScript, destructuring allows you to extract properties from objects and assign them to variables. The correct syntax for destructuring an object is using curly braces {}.",
                  "code": "const person = {name: 'Alice', age: 25};\nconst {name, age} = person;\nconsole.log(name); // Output: Alice\nconsole.log(age); // Output: 25"
                },

                {
                  "question": "How can you swap the values of two variables using array destructuring?",
                  "options": ["[a, b] = [b, a];", "const [a, b] = [b, a];", "[a, b] => [b, a];", "const (a, b) = (b, a);"],
                  "answer": "[a, b] = [b, a];",
                  "explanation": "Array destructuring allows you to unpack values from arrays into variables. You can swap values of two variables using array destructuring like this: [a, b] = [b, a].",
                  "code": "let a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a); // Output: 2\nconsole.log(b); // Output: 1"
                },

                // Ternary Operator

                {
                  "question": "What is the correct syntax for a ternary operator?",
                  "options": ["condition ? expression1 : expression2", "condition ? expression1 ? expression2", "condition : expression1 ? expression2", "condition if expression1 else expression2"],
                  "answer": "condition ? expression1 : expression2",
                  "explanation": "The ternary operator in JavaScript is a shorthand for an if-else statement. The correct syntax is: condition ? expression1 : expression2.",
                  "code": "const isLoggedIn = true;\nconst message = isLoggedIn ? 'Welcome back!' : 'Please log in';\nconsole.log(message); // Output: Welcome back!"
                },
                
                {
                  "question": "What does the following code return? const max = a > b ? a : b;",
                  "options": ["Returns the maximum value between a and b", "Returns the minimum value between a and b", "Always returns a", "Always returns b"],
                  "answer": "Returns the maximum value between a and b",
                  "explanation": "The ternary operator checks the condition a > b. If true, it returns a, otherwise it returns b, effectively giving the maximum value.",
                  "code": "const a = 5, b = 10;\nconst max = a > b ? a : b;\nconsole.log(max); // Output: 10"
                },

                // ES6 Variables (let, const)

                {
                  "question": "What is the main difference between let and const?",
                  "options": ["let can be reassigned, const cannot", "let is block-scoped, const is function-scoped", "const is block-scoped, let is global-scoped", "There is no difference"],
                  "answer": "let can be reassigned, const cannot",
                  "explanation": "The main difference between let and const is that variables declared with let can be reassigned, while those declared with const cannot be reassigned after their initial assignment.",
                  "code": "let x = 10;\nx = 20; // No error\nconst y = 30;\ny = 40; // Error: Assignment to constant variable."
                },

                {
                  "question": "Which variable declaration should be used for a constant value?",
                  "options": ["const", "let", "var", "None of the above"],
                  "answer": "const",
                  "explanation": "The const keyword is used for declaring variables with a constant value, meaning they cannot be reassigned after the initial assignment.",
                  "code": "const pi = 3.14159;\npi = 3.14; // Error: Assignment to constant variable."
                },

                // ES6 Arrow Function

                {
                  "question": "What is the correct syntax for an arrow function?",
                  "options": ["const add = (a, b) => a + b;", "const add = => (a, b) a + b;", "const add => (a, b) => { return a + b; }", "const add = function(a, b) => { return a + b; }"],
                  "answer": "const add = (a, b) => a + b;",
                  "explanation": "Arrow functions provide a shorter syntax for writing functions. The correct syntax is: const functionName = (parameters) => expression.",
                  "code": "const add = (a, b) => a + b;\nconsole.log(add(2, 3)); // Output: 5"
                },

                {
                  "question": "How do arrow functions handle the 'this' keyword compared to regular functions?",
                  "options": ["They don't bind their own 'this', they inherit it from the parent scope", "They bind their own 'this' to the function", "They don't have access to 'this'", "They bind 'this' to the global object"],
                  "answer": "They don't bind their own 'this', they inherit it from the parent scope",
                  "explanation": "Arrow functions don't have their own 'this' context; instead, they inherit it from the enclosing scope, unlike regular functions which bind 'this' to the function itself.",
                  "code": "const obj = {\n  name: 'John',\n  regularFunction: function() { console.log(this.name); },\n  arrowFunction: () => { console.log(this.name); }\n};\nobj.regularFunction(); // Output: John\nobj.arrowFunction(); // Output: undefined"
                },

                // ES6 Classes

                {
                  "question": "How do you create a class in ES6?",
                  "options": ["class MyClass {}", "function MyClass() {}", "var MyClass = function() {}", "const MyClass = () => {}"],
                  "answer": "class MyClass {}",
                  "explanation": "In ES6, classes are created using the class keyword followed by the class name and curly braces containing the class body.",
                  "code": "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\nconst person = new Person('Alice', 30);\nconsole.log(person.name); // Output: Alice"
                },

                {
                  "question": "Which method is used to initialize object properties in an ES6 class?",
                  "options": ["constructor", "init", "setup", "initialize"],
                  "answer": "constructor",
                  "explanation": "In ES6 classes, the constructor method is used to initialize object properties. It is automatically called when a new instance of the class is created.",
                  "code": "class Car {\n  constructor(make, model) {\n    this.make = make;\n    this.model = model;\n  }\n}\nconst myCar = new Car('Toyota', 'Corolla');\nconsole.log(myCar.make); // Output: Toyota"
                },
  
                
];