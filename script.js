// ========================================
// JavaScript Complete Learning Guide
// Interactive Examples & Interview Questions
// ========================================

console.log("🚀 JavaScript Learning Guide Loaded!");

// ========================================
// NAVIGATION FUNCTION
// ========================================
function navigateToChapter() {
    const select = document.getElementById('chapterSelect');
    const selectedChapter = select.value;
    
    if (selectedChapter) {
        const element = document.getElementById(selectedChapter);
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========================================
// CHAPTER 1: VARIABLES
// ========================================

function demonstrateVariables() {
    const output = document.getElementById('variableOutput');
    let result = '';
    
    try {
        // var examples
        var varExample = 10;
        var varExample = 20; // Can redeclare
        result += `var example: ${varExample}\n`;
        
        // let examples
        let letExample = 30;
        letExample = 40; // Can reassign
        result += `let example: ${letExample}\n`;
        
        // const examples
        const constExample = 50;
        result += `const example: ${constExample}\n`;
        
        // const with objects
        const constObject = { name: "John" };
        constObject.name = "Jane"; // Can modify contents
        result += `const object modified: ${JSON.stringify(constObject)}\n`;
        
        // const with arrays
        const constArray = [1, 2, 3];
        constArray.push(4); // Can modify contents
        result += `const array modified: [${constArray}]\n`;
        
    } catch (error) {
        result += `Error: ${error.message}\n`;
    }
    
    output.textContent = result;
}

function demonstrateHoisting() {
    const output = document.getElementById('hoistingOutput');
    let result = '';
    
    // Demonstrate var hoisting
    result += "=== VAR HOISTING ===\n";
    result += `Before declaration: ${typeof hoistedVar}\n`;
    var hoistedVar = "I'm hoisted!";
    result += `After declaration: ${hoistedVar}\n\n`;
    
    // Demonstrate function hoisting
    result += "=== FUNCTION HOISTING ===\n";
    result += `Calling hoisted function: ${hoistedFunction()}\n`;
    
    function hoistedFunction() {
        return "Function is hoisted!";
    }
    
    // Demonstrate let/const TDZ
    result += "\n=== LET/CONST TDZ ===\n";
    try {
        result += `Accessing let before declaration: ${temporalDeadZoneVar}\n`;
    } catch (error) {
        result += `Error accessing let: ${error.name}\n`;
    }
    
    let temporalDeadZoneVar = "Now I'm accessible";
    result += `After declaration: ${temporalDeadZoneVar}\n`;
    
    output.textContent = result;
}

function demonstrateScope() {
    const output = document.getElementById('scopeOutput');
    let result = '';
    
    // Global scope
    var globalVar = "I'm global";
    let globalLet = "I'm also global";
    
    result += "=== SCOPE DEMONSTRATION ===\n";
    
    // Function scope
    function testFunctionScope() {
        var functionVar = "I'm function scoped";
        let functionLet = "I'm also function scoped";
        
        // Block scope
        if (true) {
            var blockVar = "var leaks out of block";
            let blockLet = "let stays in block";
            const blockConst = "const stays in block";
            
            result += `Inside block - var: ${blockVar}\n`;
            result += `Inside block - let: ${blockLet}\n`;
            result += `Inside block - const: ${blockConst}\n`;
        }
        
        result += `Outside block - var: ${blockVar}\n`;
        try {
            result += `Outside block - let: ${blockLet}\n`;
        } catch (error) {
            result += `Outside block - let: ${error.name}\n`;
        }
        
        return result;
    }
    
    testFunctionScope();
    output.textContent = result;
}

// ========================================
// CHAPTER 2: DATA TYPES
// ========================================

function demonstrateTypes() {
    const output = document.getElementById('typesOutput');
    let result = '';
    
    result += "=== PRIMITIVE TYPES ===\n";
    
    // String
    const str = "Hello World";
    result += `String: "${str}" - typeof: ${typeof str}\n`;
    
    // Number
    const num = 42;
    const float = 3.14;
    result += `Number: ${num} - typeof: ${typeof num}\n`;
    result += `Float: ${float} - typeof: ${typeof float}\n`;
    
    // Boolean
    const bool = true;
    result += `Boolean: ${bool} - typeof: ${typeof bool}\n`;
    
    // Undefined
    let undef;
    result += `Undefined: ${undef} - typeof: ${typeof undef}\n`;
    
    // Null (JavaScript bug)
    const nullVar = null;
    result += `Null: ${nullVar} - typeof: ${typeof nullVar} (JS bug!)\n`;
    
    // Symbol
    const sym = Symbol('id');
    result += `Symbol: ${sym.toString()} - typeof: ${typeof sym}\n`;
    
    // BigInt
    const bigInt = 123456789012345678901234567890n;
    result += `BigInt: ${bigInt} - typeof: ${typeof bigInt}\n`;
    
    result += "\n=== REFERENCE TYPES ===\n";
    
    // Object
    const obj = { name: "John", age: 30 };
    result += `Object: ${JSON.stringify(obj)} - typeof: ${typeof obj}\n`;
    
    // Array
    const arr = [1, 2, 3, 4, 5];
    result += `Array: [${arr}] - typeof: ${typeof arr}\n`;
    
    // Function
    const func = function() { return "Hello"; };
    result += `Function: ${func.toString().substring(0, 20)}... - typeof: ${typeof func}\n`;
    
    output.textContent = result;
}

function demonstrateCoercion() {
    const output = document.getElementById('coercionOutput');
    let result = '';
    
    result += "=== TYPE COERCION EXAMPLES ===\n";
    
    // String concatenation
    result += `"5" + 1 = ${("5" + 1)} (string concatenation)\n`;
    result += `"5" + true = ${("5" + true)} (boolean to string)\n`;
    
    // Arithmetic operations
    result += `"5" - 1 = ${("5" - 1)} (string to number)\n`;
    result += `"5" * 2 = ${("5" * 2)} (string to number)\n`;
    result += `"5" / 1 = ${("5" / 1)} (string to number)\n`;
    
    // Boolean operations
    result += `true + 1 = ${(true + 1)} (boolean to number)\n`;
    result += `false + 1 = ${(false + 1)} (boolean to number)\n`;
    
    // Null and undefined
    result += `null + 1 = ${(null + 1)} (null to 0)\n`;
    result += `undefined + 1 = ${(undefined + 1)} (undefined to NaN)\n`;
    
    // Comparison coercion
    result += `\n=== COMPARISON COERCION ===\n`;
    result += `5 == "5" = ${(5 == "5")} (loose equality)\n`;
    result += `5 === "5" = ${(5 === "5")} (strict equality)\n`;
    result += `true == 1 = ${(true == 1)} (boolean to number)\n`;
    result += `true === 1 = ${(true === 1)} (strict comparison)\n`;
    
    output.textContent = result;
}

function demonstrateNullUndefined() {
    const output = document.getElementById('nullUndefinedOutput');
    let result = '';
    
    result += "=== NULL vs UNDEFINED ===\n";
    
    // Undefined examples
    let undefinedVar;
    result += `Declared but not assigned: ${undefinedVar}\n`;
    result += `typeof undefined: ${typeof undefinedVar}\n`;
    
    function testFunction(param) {
        return param;
    }
    result += `Function without argument: ${testFunction()}\n`;
    
    // Null examples
    let nullVar = null;
    result += `\nIntentionally set to null: ${nullVar}\n`;
    result += `typeof null: ${typeof nullVar} (JavaScript quirk!)\n`;
    
    // Comparisons
    result += `\n=== COMPARISONS ===\n`;
    result += `null == undefined: ${null == undefined}\n`;
    result += `null === undefined: ${null === undefined}\n`;
    result += `Boolean(null): ${Boolean(null)}\n`;
    result += `Boolean(undefined): ${Boolean(undefined)}\n`;
    
    output.textContent = result;
}

// ========================================
// CHAPTER 3: OPERATORS
// ========================================

function demonstrateArithmetic() {
    const output = document.getElementById('arithmeticOutput');
    let result = '';
    
    const a = 10, b = 3;
    
    result += "=== ARITHMETIC OPERATORS ===\n";
    result += `a = ${a}, b = ${b}\n\n`;
    
    result += `Addition: ${a} + ${b} = ${a + b}\n`;
    result += `Subtraction: ${a} - ${b} = ${a - b}\n`;
    result += `Multiplication: ${a} * ${b} = ${a * b}\n`;
    result += `Division: ${a} / ${b} = ${a / b}\n`;
    result += `Modulus: ${a} % ${b} = ${a % b}\n`;
    result += `Exponentiation: ${a} ** ${b} = ${a ** b}\n`;
    
    // Increment/Decrement
    let x = 5;
    result += `\n=== INCREMENT/DECREMENT ===\n`;
    result += `x = ${x}\n`;
    result += `x++ = ${x++} (post-increment, x is now ${x})\n`;
    result += `++x = ${++x} (pre-increment)\n`;
    result += `x-- = ${x--} (post-decrement, x is now ${x})\n`;
    result += `--x = ${--x} (pre-decrement)\n`;
    
    output.textContent = result;
}

function demonstrateComparison() {
    const output = document.getElementById('comparisonOutput');
    let result = '';
    
    result += "=== COMPARISON OPERATORS ===\n";
    
    const values = [5, "5", 10, "10", true, false, null, undefined];
    
    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            const val1 = values[i];
            const val2 = values[j];
            
            result += `${JSON.stringify(val1)} == ${JSON.stringify(val2)}: ${val1 == val2}\n`;
            result += `${JSON.stringify(val1)} === ${JSON.stringify(val2)}: ${val1 === val2}\n`;
            result += `---\n`;
        }
    }
    
    output.textContent = result;
}

function demonstrateLogical() {
    const output = document.getElementById('logicalOutput');
    let result = '';
    
    result += "=== LOGICAL OPERATORS ===\n";
    
    const testCases = [
        [true, true],
        [true, false],
        [false, true],
        [false, false]
    ];
    
    testCases.forEach(([a, b]) => {
        result += `${a} && ${b} = ${a && b}\n`;
        result += `${a} || ${b} = ${a || b}\n`;
        result += `!${a} = ${!a}\n`;
        result += `---\n`;
    });
    
    // Truthy/Falsy examples
    result += "\n=== TRUTHY/FALSY VALUES ===\n";
    const truthyFalsyValues = [0, "", "0", [], {}, null, undefined, NaN, false, true];
    
    truthyFalsyValues.forEach(val => {
        result += `Boolean(${JSON.stringify(val)}) = ${Boolean(val)}\n`;
    });
    
    output.textContent = result;
}

// ========================================
// CHAPTER 4: CONTROL FLOW
// ========================================

function demonstrateIfElse() {
    const output = document.getElementById('ifElseOutput');
    let result = '';
    
    result += "=== IF-ELSE EXAMPLES ===\n";
    
    // Grade calculator
    function calculateGrade(marks) {
        if (marks >= 90) {
            return "A+";
        } else if (marks >= 80) {
            return "A";
        } else if (marks >= 70) {
            return "B";
        } else if (marks >= 60) {
            return "C";
        } else {
            return "F";
        }
    }
    
    const testMarks = [95, 85, 75, 65, 45];
    testMarks.forEach(marks => {
        result += `Marks: ${marks} -> Grade: ${calculateGrade(marks)}\n`;
    });
    
    // Age checker
    result += "\n=== AGE CHECKER ===\n";
    function checkAge(age) {
        if (age < 13) {
            return "Child";
        } else if (age < 20) {
            return "Teenager";
        } else if (age < 60) {
            return "Adult";
        } else {
            return "Senior";
        }
    }
    
    const testAges = [8, 16, 25, 65];
    testAges.forEach(age => {
        result += `Age: ${age} -> Category: ${checkAge(age)}\n`;
    });
    
    output.textContent = result;
}

function demonstrateSwitch() {
    const output = document.getElementById('switchOutput');
    let result = '';
    
    result += "=== SWITCH-CASE EXAMPLES ===\n";
    
    // Day of week
    function getDayName(dayNumber) {
        switch (dayNumber) {
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            case 7:
                return "Sunday";
            default:
                return "Invalid day";
        }
    }
    
    for (let i = 1; i <= 8; i++) {
        result += `Day ${i}: ${getDayName(i)}\n`;
    }
    
    // Calculator
    result += "\n=== CALCULATOR ===\n";
    function calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return b !== 0 ? a / b : "Cannot divide by zero";
            default:
                return "Invalid operator";
        }
    }
    
    const operations = [
        [10, 5, '+'],
        [10, 5, '-'],
        [10, 5, '*'],
        [10, 5, '/'],
        [10, 0, '/'],
        [10, 5, '%']
    ];
    
    operations.forEach(([a, b, op]) => {
        result += `${a} ${op} ${b} = ${calculate(a, b, op)}\n`;
    });
    
    output.textContent = result;
}

// ========================================
// CHAPTER 5: LOOPS
// ========================================

function demonstrateLoops() {
    const output = document.getElementById('loopsOutput');
    let result = '';
    
    result += "=== DIFFERENT LOOP TYPES ===\n";
    
    // For loop
    result += "For loop (1 to 5):\n";
    for (let i = 1; i <= 5; i++) {
        result += `${i} `;
    }
    result += "\n\n";
    
    // While loop
    result += "While loop (countdown from 5):\n";
    let count = 5;
    while (count > 0) {
        result += `${count} `;
        count--;
    }
    result += "\n\n";
    
    // Do-while loop
    result += "Do-while loop (at least once):\n";
    let x = 0;
    do {
        result += `${x} `;
        x++;
    } while (x < 3);
    result += "\n\n";
    
    // For-of loop (arrays)
    result += "For-of loop (array):\n";
    const fruits = ['apple', 'banana', 'orange'];
    for (const fruit of fruits) {
        result += `${fruit} `;
    }
    result += "\n\n";
    
    // For-of loop (strings)
    result += "For-of loop (string):\n";
    const word = "Hello";
    for (const char of word) {
        result += `${char} `;
    }
    result += "\n\n";
    
    // For-in loop (objects)
    result += "For-in loop (object):\n";
    const person = { name: "John", age: 30, city: "New York" };
    for (const key in person) {
        result += `${key}: ${person[key]}\n`;
    }
    
    output.textContent = result;
}

function demonstrateLoopControl() {
    const output = document.getElementById('loopControlOutput');
    let result = '';
    
    result += "=== BREAK AND CONTINUE ===\n";
    
    // Break example
    result += "Break example (stop at 3):\n";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            result += `Breaking at ${i}\n`;
            break;
        }
        result += `${i} `;
    }
    result += "\n\n";
    
    // Continue example
    result += "Continue example (skip 3):\n";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            result += `Skipping ${i}\n`;
            continue;
        }
        result += `${i} `;
    }
    result += "\n\n";
    
    // Nested loops with labels
    result += "Nested loops with labeled break:\n";
    outer: for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            if (i === 2 && j === 2) {
                result += `Breaking outer loop at i=${i}, j=${j}\n`;
                break outer;
            }
            result += `(${i},${j}) `;
        }
        result += "\n";
    }
    
    output.textContent = result;
}

// ========================================
// CHAPTER 6: FUNCTIONS
// ========================================

function demonstrateFunctions() {
    const output = document.getElementById('functionsOutput');
    let result = '';
    
    result += "=== FUNCTION TYPES ===\n";
    
    // Function declaration
    function regularFunction(name) {
        return `Hello, ${name}!`;
    }
    result += `Function declaration: ${regularFunction("World")}\n`;
    
    // Function expression
    const functionExpression = function(x, y) {
        return x + y;
    };
    result += `Function expression: ${functionExpression(5, 3)}\n`;
    
    // Arrow function
    const arrowFunction = (x, y) => x * y;
    result += `Arrow function: ${arrowFunction(4, 5)}\n`;
    
    // Arrow function with block
    const arrowWithBlock = (name) => {
        const greeting = `Hi there, ${name}!`;
        return greeting.toUpperCase();
    };
    result += `Arrow with block: ${arrowWithBlock("JavaScript")}\n`;
    
    // Default parameters
    function greetWithDefault(name = "Guest", greeting = "Hello") {
        return `${greeting}, ${name}!`;
    }
    result += `Default params: ${greetWithDefault()}\n`;
    result += `Default params: ${greetWithDefault("John")}\n`;
    result += `Default params: ${greetWithDefault("Jane", "Hi")}\n`;
    
    // Rest parameters
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    result += `Rest params: sum(1,2,3,4,5) = ${sum(1,2,3,4,5)}\n`;
    
    // Spread operator
    const numbers = [1, 2, 3, 4, 5];
    result += `Spread operator: sum(...[1,2,3,4,5]) = ${sum(...numbers)}\n`;
    
    output.textContent = result;
}

function demonstrateClosures() {
    const output = document.getElementById('closuresOutput');
    let result = '';
    
    result += "=== CLOSURES EXAMPLES ===\n";
    
    // Basic closure
    function outerFunction(x) {
        return function innerFunction(y) {
            return x + y;
        };
    }
    
    const addFive = outerFunction(5);
    result += `Basic closure: addFive(3) = ${addFive(3)}\n`;
    
    // Counter closure
    function createCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
    }
    
    const counter1 = createCounter();
    const counter2 = createCounter();
    
    result += `Counter1: ${counter1()}, ${counter1()}, ${counter1()}\n`;
    result += `Counter2: ${counter2()}, ${counter2()}\n`;
    
    // Module pattern
    const calculator = (function() {
        let result = 0;
        
        return {
            add: function(x) {
                result += x;
                return this;
            },
            multiply: function(x) {
                result *= x;
                return this;
            },
            getResult: function() {
                return result;
            },
            reset: function() {
                result = 0;
                return this;
            }
        };
    })();
    
    const calcResult = calculator.add(5).multiply(3).add(2).getResult();
    result += `Module pattern: ((0 + 5) * 3) + 2 = ${calcResult}\n`;
    
    output.textContent = result;
}

// ========================================
// CHAPTER 7: ARRAYS
// ========================================

function demonstrateArrays() {
    const output = document.getElementById('arraysOutput');
    let result = '';
    
    result += "=== ARRAY METHODS ===\n";
    
    // Original array
    let fruits = ['apple', 'banana', 'orange'];
    result += `Original array: [${fruits}]\n\n`;
    
    // Mutating methods
    result += "=== MUTATING METHODS ===\n";
    
    fruits.push('grape');
    result += `After push('grape'): [${fruits}]\n`;
    
    const popped = fruits.pop();
    result += `After pop(): [${fruits}], popped: ${popped}\n`;
    
    fruits.unshift('mango');
    result += `After unshift('mango'): [${fruits}]\n`;
    
    const shifted = fruits.shift();
    result += `After shift(): [${fruits}], shifted: ${shifted}\n`;
    
    // Splice
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const spliced = numbers.splice(2, 3, 'a', 'b');
    result += `\nSplice example:\n`;
    result += `Original: [1,2,3,4,5,6,7]\n`;
    result += `After splice(2,3,'a','b'): [${numbers}]\n`;
    result += `Spliced elements: [${spliced}]\n`;
    
    // Non-mutating methods
    result += "\n=== NON-MUTATING METHODS ===\n";
    
    const testArray = [1, 2, 3, 4, 5];
    result += `Original: [${testArray}]\n`;
    
    const sliced = testArray.slice(1, 4);
    result += `slice(1,4): [${sliced}]\n`;
    
    const joined = testArray.join(' - ');
    result += `join(' - '): ${joined}\n`;
    
    const reversed = [...testArray].reverse();
    result += `reversed (copy): [${reversed}]\n`;
    
    const sorted = ['banana', 'apple', 'orange'].sort();
    result += `sorted strings: [${sorted}]\n`;
    
    output.textContent = result;
}

function demonstrateArrayIteration() {
    const output = document.getElementById('arrayIterationOutput');
    let result = '';
    
    const numbers = [1, 2, 3, 4, 5];
    const people = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Bob', age: 35 }
    ];
    
    result += "=== ARRAY ITERATION METHODS ===\n";
    result += `Numbers: [${numbers}]\n\n`;
    
    // forEach
    result += "forEach (side effects):\n";
    numbers.forEach((num, index) => {
        result += `Index ${index}: ${num}\n`;
    });
    
    // map
    result += "\nmap (transform):\n";
    const doubled = numbers.map(num => num * 2);
    result += `Doubled: [${doubled}]\n`;
    
    const names = people.map(person => person.name);
    result += `Names: [${names}]\n`;
    
    // filter
    result += "\nfilter (select):\n";
    const evens = numbers.filter(num => num % 2 === 0);
    result += `Even numbers: [${evens}]\n`;
    
    const adults = people.filter(person => person.age >= 30);
    result += `Adults (30+): ${JSON.stringify(adults)}\n`;
    
    // reduce
    result += "\nreduce (accumulate):\n";
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    result += `Sum: ${sum}\n`;
    
    const totalAge = people.reduce((acc, person) => acc + person.age, 0);
    result += `Total age: ${totalAge}\n`;
    
    // find
    result += "\nfind (first match):\n";
    const found = numbers.find(num => num > 3);
    result += `First number > 3: ${found}\n`;
    
    const foundPerson = people.find(person => person.age > 30);
    result += `First person > 30: ${JSON.stringify(foundPerson)}\n`;
    
    // some & every
    result += "\nsome & every (boolean tests):\n";
    const hasEven = numbers.some(num => num % 2 === 0);
    result += `Has even numbers: ${hasEven}\n`;
    
    const allPositive = numbers.every(num => num > 0);
    result += `All positive: ${allPositive}\n`;
    
    output.textContent = result;
}

// ========================================
// CHAPTER 8: OBJECTS
// ========================================

function demonstrateObjects() {
    const output = document.getElementById('objectsOutput');
    let result = '';
    
    result += "=== OBJECT OPERATIONS ===\n";
    
    // Object creation
    const person = {
        name: 'John Doe',
        age: 30,
        city: 'New York',
        hobbies: ['reading', 'coding', 'gaming']
    };
    
    result += `Original object: ${JSON.stringify(person, null, 2)}\n\n`;
    
    // Property access
    result += "=== PROPERTY ACCESS ===\n";
    result += `Dot notation - name: ${person.name}\n`;
    result += `Bracket notation - age: ${person['age']}\n`;
    
    // Dynamic property access
    const prop = 'city';
    result += `Dynamic access - ${prop}: ${person[prop]}\n`;
    
    // Adding properties
    person.email = 'john@example.com';
    person['phone'] = '123-456-7890';
    result += `\nAfter adding properties: ${JSON.stringify(person, null, 2)}\n`;
    
    // Deleting properties
    delete person.phone;
    result += `\nAfter deleting phone: ${JSON.stringify(person, null, 2)}\n`;
    
    // Nested objects
    const user = {
        name: 'Alice',
        address: {
            street: '123 Main St',
            city: 'Boston',
            country: 'USA'
        },
        preferences: {
            theme: 'dark',
            language: 'en'
        }
    };
    
    result += `\n=== NESTED OBJECTS ===\n`;
    result += `User city: ${user.address.city}\n`;
    result += `User theme: ${user.preferences.theme}\n`;
    
    // Optional chaining (if supported)
    result += `Safe access: ${user.address?.zipcode || 'Not provided'}\n`;
    
    output.textContent = result;
}

function demonstrateObjectMethods() {
    const output = document.getElementById('objectMethodsOutput');
    let result = '';
    
    const student = {
        name: 'Emma',
        age: 22,
        grade: 'A',
        subjects: ['Math', 'Physics', 'Chemistry']
    };
    
    result += "=== OBJECT METHODS ===\n";
    result += `Student: ${JSON.stringify(student)}\n\n`;
    
    // Object.keys()
    const keys = Object.keys(student);
    result += `Object.keys(): [${keys}]\n`;
    
    // Object.values()
    const values = Object.values(student);
    result += `Object.values(): ${JSON.stringify(values)}\n`;
    
    // Object.entries()
    const entries = Object.entries(student);
    result += `Object.entries(): ${JSON.stringify(entries)}\n\n`;
    
    // Looping through objects
    result += "=== LOOPING THROUGH OBJECTS ===\n";
    
    // for...in loop
    result += "for...in loop:\n";
    for (const key in student) {
        result += `${key}: ${JSON.stringify(student[key])}\n`;
    }
    
    // Object.entries() with for...of
    result += "\nObject.entries() with for...of:\n";
    for (const [key, value] of Object.entries(student)) {
        result += `${key}: ${JSON.stringify(value)}\n`;
    }
    
    // Object copying
    result += "\n=== OBJECT COPYING ===\n";
    
    // Shallow copy
    const shallowCopy = { ...student };
    shallowCopy.name = 'Modified Emma';
    shallowCopy.subjects.push('Biology'); // This affects original!
    
    result += `Original after shallow copy modification:\n`;
    result += `Name: ${student.name} (unchanged)\n`;
    result += `Subjects: [${student.subjects}] (changed!)\n`;
    
    // Deep copy (simple method)
    const originalForDeepCopy = {
        name: 'Tom',
        details: { age: 25, city: 'Paris' }
    };
    
    const deepCopy = JSON.parse(JSON.stringify(originalForDeepCopy));
    deepCopy.details.city = 'London';
    
    result += `\nDeep copy example:\n`;
    result += `Original city: ${originalForDeepCopy.details.city}\n`;
    result += `Copy city: ${deepCopy.details.city}\n`;
    
    // Object destructuring
    result += "\n=== OBJECT DESTRUCTURING ===\n";
    const { name, age, subjects } = student;
    result += `Destructured - name: ${name}, age: ${age}\n`;
    
    // Nested destructuring
    const company = {
        name: 'TechCorp',
        location: {
            city: 'San Francisco',
            state: 'CA'
        }
    };
    
    const { location: { city, state } } = company;
    result += `Nested destructuring - city: ${city}, state: ${state}\n`;
    
    output.textContent = result;
}

// ========================================
// INTERVIEW QUESTIONS
// ========================================

function showAnswer(answerId) {
    const answer = document.getElementById(answerId);
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}

function runInterviewQuestions() {
    const output = document.getElementById('interviewOutput');
    let result = '';
    
    result += "=== INTERACTIVE INTERVIEW PRACTICE ===\n\n";
    
    // Question 1: Hoisting
    result += "Q1: What will this code output?\n";
    result += "console.log(x);\n";
    result += "var x = 5;\n";
    result += `Answer: ${typeof x !== 'undefined' ? x : 'undefined'} (due to hoisting)\n\n`;
    
    // Question 2: Closure
    result += "Q2: What will this code output?\n";
    result += "for (var i = 0; i < 3; i++) {\n";
    result += "  setTimeout(() => console.log(i), 100);\n";
    result += "}\n";
    result += "Answer: 3, 3, 3 (closure captures final value of var)\n\n";
    
    // Question 3: This binding
    result += "Q3: What is 'this' in different contexts?\n";
    const obj = {
        name: 'Object',
        regularMethod: function() {
            return this.name;
        },
        arrowMethod: () => {
            return this.name || 'undefined (arrow function)';
        }
    };
    
    result += `Regular method: ${obj.regularMethod()}\n`;
    result += `Arrow method: ${obj.arrowMethod()}\n\n`;
    
    // Question 4: Type coercion
    result += "Q4: Type coercion examples:\n";
    result += `[] + [] = "${[] + []}"\n`;
    result += `[] + {} = "${[] + {}}"\n`;
    result += `{} + [] = "${({}) + []}"\n`;
    result += `true + false = ${true + false}\n`;
    result += `"1" + 2 + 3 = ${"1" + 2 + 3}\n`;
    result += `1 + 2 + "3" = ${1 + 2 + "3"}\n\n`;
    
    // Question 5: Scope chain
    result += "Q5: Scope chain example:\n";
    let globalVar = 'global';
    
    function outerFunc() {
        let outerVar = 'outer';
        
        function innerFunc() {
            let innerVar = 'inner';
            return `${globalVar} -> ${outerVar} -> ${innerVar}`;
        }
        
        return innerFunc();
    }
    
    result += `Scope chain: ${outerFunc()}\n\n`;
    
    // Question 6: Prototype
    result += "Q6: Prototype chain:\n";
    function Person(name) {
        this.name = name;
    }
    
    Person.prototype.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
    
    const john = new Person('John');
    result += `${john.greet()}\n`;
    result += `john.hasOwnProperty('name'): ${john.hasOwnProperty('name')}\n`;
    result += `john.hasOwnProperty('greet'): ${john.hasOwnProperty('greet')}\n\n`;
    
    result += "=== PRACTICE COMPLETE ===\n";
    result += "Review the answers and practice more!";
    
    output.textContent = result;
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    console.log('🎉 All examples loaded and ready to run!');
    console.log('📚 Navigate through chapters using the dropdown menu');
    console.log('🎯 Try the interview questions to test your knowledge');
});

// Error handling wrapper
function safeExecute(func, outputId) {
    try {
        func();
    } catch (error) {
        const output = document.getElementById(outputId);
        output.textContent = `Error: ${error.message}\nStack: ${error.stack}`;
        console.error('Execution error:', error);
    }
}

// Performance monitoring
console.time('Script Load Time');
window.addEventListener('load', () => {
    console.timeEnd('Script Load Time');
    console.log('🚀 JavaScript Learning Guide fully loaded!');
});