// ═══════════════════════════════════════════════════════════
// 1. VAR, LET, CONST
// ═══════════════════════════════════════════════════════════

// var → function-scoped, can be redeclared & reassigned
var a;
var b = 12;
var c = 19;
var d = 12;

d = 6;
var d = 10; // redeclaration allowed

// let → block-scoped, can be reassigned but NOT redeclared
let age = 12;
age = 13;

// const → block-scoped, cannot be reassigned
const dulha = "labuba";
const dulhan = "lady";

console.log(dulha + " weds " + dulhan);

// let allows reassignment
let dulhabylet = "labuba";
let dulhanbylet = "lady";

dulhabylet = "harramzada";

console.log(dulhabylet + " weds " + dulhanbylet);

// var allows reassignment
var dulhabyvar = "labuba";
var dulhanbyvar = "lady";

dulhabyvar = "harramzada";

console.log(dulhabyvar + " weds " + dulhanbyvar);

// reassignment vs redeclaration
let reassignment = 12;
reassignment = 6;

var redeclaration = 10;
var redeclaration = 20;

console.log(redeclaration);


// ═══════════════════════════════════════════════════════════
// 2. SCOPE
// ═══════════════════════════════════════════════════════════

// var → function-scoped, leaks out of blocks
var globalVariable = 19;

{
    var globalVariable = 20;
}

console.log(globalVariable); // 20

// let → block-scoped, stays inside { }
let blockVariable = 10;

{
    let blockVariable = 20;
    console.log(blockVariable); // 20
}

console.log(blockVariable); // 10


// ═══════════════════════════════════════════════════════════
// 3. DATA TYPES
// ═══════════════════════════════════════════════════════════

// boolean
let i = true;
let j = false;

console.log(i, j);

// null vs undefined
let nothing = null;
let k;

console.log(k); // undefined

// symbol → always unique
let u1 = Symbol("uid");
let u2 = Symbol("uid");

console.log(u1 === u2); // false

// symbol as object key
let obj = {
    uid: 1,
    name: "ibrahim",
    age: 12,
    email: "ibrahim@gmail.com"
};

let no = Symbol("uid");

obj[no] = 8595507101;

console.log(obj[no]);

// arrays → reference copy
let array = [1, 2, 3];
let copyarray = array;

copyarray.pop();

console.log(array);       // [1, 2]
console.log(copyarray);   // [1, 2]

// arrays → spread copy (independent)
let originalArray = [1, 2, 3];
let separateArray = [...originalArray];

separateArray.pop();

console.log(originalArray);   // [1, 2, 3]
console.log(separateArray);   // [1, 2]

// objects → reference copy
let objects = {
    username: "ibrahim"
};

let copyobjects = objects;

copyobjects.username = "maaz";

console.log(objects.username); // maaz

// dynamic typing
let dynamictyping = 12;

dynamictyping = true;
dynamictyping = "ibrahim";
dynamictyping = [1, 2, 3];
dynamictyping = null;
dynamictyping = undefined;

// typeof checks
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof NaN); // "number"


// ═══════════════════════════════════════════════════════════
// 4. TYPE COERCION, TRUTHY, FALSY, NaN
// ═══════════════════════════════════════════════════════════

// + with string → concatenation
console.log(5 + "1"); // "51"

// - with string → numeric coercion
console.log(5 - "1"); // 4

// falsy values
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// truthy value
console.log(Boolean("ibrahim")); // true

// NaN type
let nan = NaN;

console.log(typeof nan); // "number"


// ═══════════════════════════════════════════════════════════
// 5. OPERATORS
// ═══════════════════════════════════════════════════════════

// arithmetic
console.log(5 + 5);
console.log("ibrahim " + "ahmad");
console.log(10 - 5);
console.log(5 * 5);
console.log(10 / 5);
console.log(13 % 5);
console.log(5 ** 5);

// comparison → == (loose) vs === (strict)
console.log(12 == "12");   // true
console.log(12 === "12");  // false

console.log(12 != 13);     // true
console.log(12 != "12");   // false

console.log(12 !== 13);    // true
console.log(12 !== "12");  // true

console.log(15 > 13);
console.log(15 < 13);
console.log(15 <= 15);
console.log(15 >= 15);

// assignment operators
let equal2 = 10;

equal2 += 3;
console.log(equal2);

equal2 -= 5;
console.log(equal2);

equal2 *= 5;
console.log(equal2);

equal2 /= 5;
console.log(equal2);

equal2 %= 5;
console.log(equal2);

// logical operators
console.log(true && true);
console.log(false && true);

console.log(true || true);
console.log(false || true);

console.log(!true);
console.log(!!12);  // true
console.log(!!0);   // false

// unary operators
let Unarya = 10;
let Unaryb = -5;
let Unaryc = true;
let Unaryd = "Ibrahim";

console.log(+Unarya);
console.log(-Unarya);
console.log(!Unaryc);
console.log(!false);

console.log(typeof Unarya);
console.log(typeof Unaryd);
console.log(typeof Unaryc);
console.log(typeof undefined);
console.log(typeof null);   // "object" (famous bug)
console.log(typeof {});

// pre vs post increment
let Unaryx = 5;
console.log(++Unaryx); // 6

let Unaryy = 5;
console.log(Unaryy++); // 5
console.log(Unaryy);   // 6

let Unaryp = 5;
console.log(--Unaryp); // 4

let Unaryq = 5;
console.log(Unaryq--); // 5
console.log(Unaryq);   // 4

// ternary
console.log(12 > 13 ? "true" : "false");

// instanceof
let arr = [1, 2, 3];

console.log(arr instanceof Array);   // true
console.log(arr instanceof Object);  // true

let objj = {
    name: "Ibrahim"
};

console.log(objj instanceof Object); // true
console.log(objj instanceof Array);  // false

let date = new Date();

console.log(date instanceof Date);   // true
console.log(date instanceof Object); // true


// ═══════════════════════════════════════════════════════════
// 6. CONDITIONS, SWITCH, LOOPS
// ═══════════════════════════════════════════════════════════

// nested ternary
let score = 78;

let grade = score >= 90
    ? "A"
    : score >= 75
        ? "B"
        : score >= 60
            ? "C"
            : "Fail";

console.log(grade);

// if-else
let loggedin = true;
let admin = true;

if (!loggedin) {
    console.log("Please log in");
} else if (admin) {
    console.log("You are admin");
} else {
    console.log("You are normal user");
}

// switch
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid day");
}

// function with if-return
function checkAge(age) {
    if (age < 18) {
        return "You cannot vote";
    }

    return "You can vote";
}

console.log(checkAge(20));

function getgrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else {
        return "Fail";
    }
}

console.log(getgrade(90));

// for loop
for (let loopI = 1; loopI <= 10; loopI++) {
    console.log(loopI);
}

// while loop
let start = 1;

while (start < 33) {
    console.log(start);
    start++;
}

// do-while loop
let dowhilestart = 1;

do {
    console.log(dowhilestart);
    dowhilestart++;
} while (dowhilestart < 20);

// break
for (let loopJ = 1; loopJ <= 20; loopJ++) {
    if (loopJ === 19) {
        console.log("19 is lucky number");
        break;
    }

    console.log(loopJ);
}

// continue
for (let loopK = 1; loopK <= 20; loopK++) {
    if (loopK === 19) {
        continue;
    }

    console.log(loopK);
}


// ═══════════════════════════════════════════════════════════
// 7. FUNCTIONS
// ═══════════════════════════════════════════════════════════

// basic function
function sayHello() {
    console.log("Hello Ibrahim");
}

sayHello();
sayHello();

// function with parameter
function greet(name) {
    console.log("Hello " + name);
}

greet("Ibrahim");
greet("Ali");
greet("Maaz");

// console inside function
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(5, 7);

// return value
function sum(a, b) {
    return a + b;
}

let result = sum(10, 20);

console.log(result);

// code after return never runs
function test() {
    return 10;
    console.log("Hello");
}

console.log(test());

// console vs return
function firstFunction() {
    console.log(10 + 20);
}

firstFunction();

function secondFunction() {
    return 10 + 20;
}

let answer = secondFunction();

console.log(answer);

// multi-condition function
function checkNumber(num) {
    if (num < 0) {
        return "Negative number";
    }

    if (num === 0) {
        return "Zero";
    }

    return "Positive number";
}

console.log(checkNumber(-5));
console.log(checkNumber(0));
console.log(checkNumber(8));

// function expression
const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(4, 5));

// arrow function (block body)
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 4));

// arrow function (one-liner)
const square = num => num * num;

console.log(square(5));

// default parameter
function welcome(name = "Guest") {
    console.log("Welcome " + name);
}

welcome("Ibrahim");
welcome();

// loop inside function
function printNumbers(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index]);
    }
}

printNumbers([10, 20, 30]);

// object as parameter
function showUser(user) {
    console.log(user.name);
    console.log(user.age);
}

showUser({
    name: "Ibrahim",
    age: 14
});

// rest parameter
function addAll(...numbers) {
    let total = 0;

    for (let index = 0; index < numbers.length; index++) {
        total += numbers[index];
    }

    return total;
}

console.log(addAll(1, 2, 3));
console.log(addAll(10, 20, 30, 40));

// callback
function processUser(name, callback) {
    callback(name);
}

function sayWelcome(name) {
    console.log("Welcome " + name);
}

processUser("Ibrahim", sayWelcome);

// nested function
function outer() {
    console.log("Outer function");

    function inner() {
        console.log("Inner function");
    }

    inner();
}

outer();

// recursion
function countdown(n) {
    if (n === 0) {
        console.log("Done!");
        return;
    }

    console.log(n);
    countdown(n - 1);
}

countdown(3);


// ═══════════════════════════════════════════════════════════
// 8. ARRAYS
// ═══════════════════════════════════════════════════════════

// create & access
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

// modify by index
fruits[1] = "Orange";

// push / pop → end
fruits.push("Grapes");
console.log(fruits);

fruits.pop();
console.log(fruits);

// unshift / shift → start
fruits.unshift("Pineapple");
console.log(fruits);

fruits.shift();
console.log(fruits);

// indexOf / includes
let numbers = [10, 20, 30, 40];

console.log(numbers.indexOf(30));
console.log(numbers.indexOf(50));

console.log(numbers.includes(20));
console.log(numbers.includes(99));

// slice → non-mutating
let nums = [10, 20, 30, 40, 50];

let selected = nums.slice(1, 4);

console.log(selected);
console.log(nums);

// splice → mutating
let values = [10, 20, 30, 40];

values.splice(1, 2);

console.log(values);

// for loop
let marks = [80, 90, 75, 95];

for (let index = 0; index < marks.length; index++) {
    console.log(marks[index]);
}

// for...of
let names = ["Ibrahim", "Ali", "Maaz"];

for (let name of names) {
    console.log(name);
}

// forEach
let scores = [10, 20, 30];

scores.forEach(function (score) {
    console.log(score);
});

scores.forEach(score => console.log(score));

// map
let oldNumbers = [1, 2, 3, 4];

let doubled = oldNumbers.map(function (num) {
    return num * 2;
});

console.log(doubled);
console.log(oldNumbers);

// filter
let ages = [12, 18, 25, 15, 30];

let adults = ages.filter(function (age) {
    return age >= 18;
});

console.log(adults);

// find
let findNumbers = [5, 12, 18, 25];

let found = findNumbers.find(num => num > 15);

console.log(found);

// reduce
let prices = [100, 200, 300];

let totalPrice = prices.reduce(function (sum, price) {
    return sum + price;
}, 0);

console.log(totalPrice);

// spread copy
let original = [1, 2, 3];
let copied = [...original];

copied.push(4);

console.log(original);
console.log(copied);

// merge arrays
let firstArray = [1, 2];
let secondArray = [3, 4];

let mergedArray = [...firstArray, ...secondArray];

console.log(mergedArray);

// array destructuring
let colors = ["Red", "Green", "Blue"];

let [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// 2D array
let matrix = [
    [1, 2],
    [3, 4]
];

console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[1][0]);
console.log(matrix[1][1]);


// ═══════════════════════════════════════════════════════════
// 9. OBJECTS
// ═══════════════════════════════════════════════════════════

// create object
let student = {
    name: "Ibrahim",
    age: 14,
    class: 9,
    isLearningJavaScript: true
};

console.log(student);

// dot access
console.log(student.name);
console.log(student.age);
console.log(student.class);

// bracket access
console.log(student["name"]);
console.log(student["age"]);
console.log(student["class"]);

// dynamic key access
let propertyName = "name";

console.log(student[propertyName]);

// add properties
student.city = "Delhi";
student.favoriteLanguage = "JavaScript";
student["favoriteColor"] = "Black";

console.log(student.favoriteColor);

// update property
student.age = 15;

console.log(student.age);

// delete property
delete student.favoriteColor;

console.log(student.favoriteColor);
console.log(student);

// nested object + method
let profile = {
    username: "ibrahim",
    age: 14,
    isStudent: true,
    skills: ["HTML", "CSS", "JavaScript"],

    address: {
        city: "Delhi",
        country: "India"
    },

    sayHello: function () {
        console.log("Hello!");
    }
};

console.log(profile.username);
console.log(profile.skills);
console.log(profile.skills[0]);
console.log(profile.address.city);

profile.sayHello();

// method with `this`
let person = {
    name: "Ibrahim",
    age: 14,

    introduce: function () {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }
};

person.introduce();

// shorthand method
let anotherPerson = {
    name: "Ali",

    introduce() {
        console.log("Hello, I am " + this.name);
    }
};

anotherPerson.introduce();

// calculator object
let calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }

        return a / b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
console.log(calculator.divide(10, 0));

// `in` vs hasOwnProperty
let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025
};

console.log("brand" in car);
console.log("color" in car);

console.log(car.hasOwnProperty("model"));
console.log(car.hasOwnProperty("color"));

// property set to undefined still exists
car.color = undefined;

console.log("color" in car);
console.log(car.color);

// Object.keys / values / entries
let phone = {
    brand: "Apple",
    model: "iPhone",
    price: 80000
};

console.log(Object.keys(phone));
console.log(Object.values(phone));
console.log(Object.entries(phone));

// for...in
let laptop = {
    brand: "Apple",
    model: "MacBook Air",
    ram: "16GB",
    storage: "512GB"
};

for (let key in laptop) {
    console.log(key);
    console.log(laptop[key]);
}

// entries destructuring
for (let [key, value] of Object.entries(laptop)) {
    console.log(key + ": " + value);
}

// nested object
let user = {
    name: "Ibrahim",

    address: {
        house: 10,
        city: "Delhi",
        country: "India"
    }
};

console.log(user.address.city);
console.log(user.address.country);

// array inside object
let developer = {
    name: "Ibrahim",
    skills: ["HTML", "CSS", "JavaScript", "C"]
};

console.log(developer.skills[0]);
console.log(developer.skills[1]);
console.log(developer.skills[2]);

developer.skills.push("C++");

console.log(developer.skills);

// spread copy (shallow)
let originalObj = {
    name: "Ibrahim",
    age: 14
};

let copyObj = { ...originalObj };

copyObj.name = "Ali";

console.log(originalObj.name);
console.log(copyObj.name);

// Object.assign merge
let first = {
    name: "Ibrahim"
};

let second = {
    age: 14,
    city: "Delhi"
};

Object.assign(first, second);

console.log(first);

// object destructuring
let studentInfo = {
    name: "Ibrahim",
    age: 14,
    class: 9
};

let {
    name,
    age: studentAge,
    class: studentClass
} = studentInfo;

console.log(name);
console.log(studentAge);
console.log(studentClass);

// spread merge objects
let personal = {
    name: "Ibrahim",
    age: 14
};

let education = {
    class: 9,
    school: "My School"
};

let completeProfile = {
    ...personal,
    ...education
};

console.log(completeProfile);

// Object.freeze → cannot modify
let settings = {
    theme: "dark",
    language: "English"
};

Object.freeze(settings);

settings.theme = "light";

console.log(settings.theme); // dark

// Object.seal → modify allowed, add/delete not
let account = {
    username: "ibrahim",
    active: true
};

Object.seal(account);

account.active = false;
account.city = "Delhi";
delete account.username;

console.log(account);

// reference copy
let objectA = {
    score: 100
};

let objectB = objectA;

objectB.score = 200;

console.log(objectA.score); // 200
console.log(objectB.score); // 200

// optional chaining
let customer = {
    name: "Ibrahim"
};

console.log(customer.address?.city); // undefined, no error

// method using `this`
let product = {
    id: 101,
    name: "MacBook Air",
    price: 99999,
    inStock: true,

    discountPrice(discountPercentage) {
        let discount = this.price * discountPercentage / 100;
        return this.price - discount;
    },

    displayDetails() {
        console.log("Product: " + this.name);
        console.log("Price: ₹" + this.price);
        console.log("In stock: " + this.inStock);
    }
};

product.displayDetails();

console.log(product.discountPrice(10));


// ═══════════════════════════════════════════════════════════
// 10. DOM MANIPULATION
// ═══════════════════════════════════════════════════════════

// ── SELECTING ELEMENTS ─────────────────────────────────────

let selectedbyid = document.getElementById("abcd");
console.dir(selectedbyid);

let selectedbyclassname = document.getElementsByClassName("text");
console.dir(selectedbyclassname);
console.log(selectedbyclassname[0]);

let selectedbytagname = document.getElementsByTagName("p");
console.dir(selectedbytagname);

let selectedbyquery = document.querySelector("h1");
console.dir(selectedbyquery);

let selectedbyqueryall = document.querySelectorAll("h1");
console.dir(selectedbyqueryall);

// CSS selector selectors
console.log(document.querySelector("#abcd"));
console.log(document.querySelector(".text"));
console.log(document.querySelector("#mybox .text"));


// ── CHANGING TEXT ──────────────────────────────────────────

let h1 = document.getElementById("abcd");

h1.textContent = "hello ibrahim kaise hu";

let text = document.getElementById("text");

text.innerHTML = "<i>i am italian</i>";

console.log(h1.innerText);
console.log(h1.textContent);


// ── CHANGING STYLES ────────────────────────────────────────

h1.style.color = "yellow";
h1.style.backgroundColor = "black";
h1.style.padding = "10px";
h1.style.borderRadius = "8px";

text.style.fontSize = "20px";


// ── CHANGING ATTRIBUTES ────────────────────────────────────

let atag = document.querySelector("a");

console.log(atag);

atag.href = "https://www.google.com";

atag.setAttribute("target", "_blank");
atag.setAttribute("title", "Open Google");

console.log(atag.getAttribute("href"));

let a2tag = document.getElementById("a2tag");

a2tag.setAttribute("href", "https://www.youtube.com");
a2tag.setAttribute("target", "_blank");

console.log(a2tag.getAttribute("href"));


// ── CHANGING IMAGE SRC ─────────────────────────────────────

let img = document.querySelector("img");

img.setAttribute(
    "src",
    "https://placehold.co/300x150?text=New+Image"
);

img.setAttribute("alt", "New image");


// ── CLASSLIST ──────────────────────────────────────────────

let mybox = document.getElementById("mybox");

mybox.classList.add("highlight");
console.log(mybox.classList.contains("highlight"));
mybox.classList.remove("highlight");
mybox.classList.toggle("highlight");


// ── CREATING ELEMENTS ──────────────────────────────────────

let newParagraph = document.createElement("p");

newParagraph.textContent = "i am a new paragraph";
newParagraph.classList.add("text");

document.getElementById("newbox").append(newParagraph);

// append → end
let secondParagraph = document.createElement("p");
secondParagraph.textContent = "i am added at the end";
document.getElementById("newbox").append(secondParagraph);

// prepend → start
let firstParagraph = document.createElement("p");
firstParagraph.textContent = "i am added at the beginning";
document.getElementById("newbox").prepend(firstParagraph);


// ── INSERTING BEFORE / AFTER ───────────────────────────────

let beforeElement = document.createElement("p");
beforeElement.textContent = "i am before the box";
document.getElementById("newbox").before(beforeElement);

let afterElement = document.createElement("p");
afterElement.textContent = "i am after the box";
document.getElementById("newbox").after(afterElement);


// ── REMOVING ELEMENTS ──────────────────────────────────────

// afterElement.remove();
// document.getElementById("newbox").removeChild(firstParagraph);


// ── HIDE / SHOW ────────────────────────────────────────────

// img.hidden = true;
// img.hidden = false;
// img.style.display = "none";
// img.style.display = "block";


// ── REPLACING CONTENT ──────────────────────────────────────

// document.getElementById("newbox").innerHTML = "<h2>hello</h2>";
// document.getElementById("newbox").textContent = "hello";


// ── CHILDREN & NODE INFO ───────────────────────────────────

let parent = document.getElementById("newbox");

console.log(parent.children);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
console.log(parent.parentElement);

console.log(h1.tagName);
console.log(h1.id);
console.log(h1.className);
console.log(h1.textContent);

console.log("DOM manipulation complete!");


// ═══════════════════════════════════════════════════════════
// 11. EVENTS
// ═══════════════════════════════════════════════════════════

// event = some action happens
// event listener = your reaction to that action

// ── BASIC EVENTS ───────────────────────────────────────────

// click
let eventh1 = document.getElementById("event-h1");
eventh1.addEventListener("click", function () {
    eventh1.style.color = "#111 ";
});

// double click
let eventp = document.getElementById("event-p");
function eventpfunc() {
    eventp.style.color = "yellow";
}
eventp.addEventListener("dblclick", eventpfunc);

// remove event listener
let removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", function () {
    eventp.removeEventListener("dblclick", eventpfunc);
    console.log("Double-click listener remove ho gaya!");
});

// click on p
let eventp2 = document.getElementById("eventp2");
eventp2.addEventListener("click", function () {
    eventp2.style.color = "red";
});

// input event → typed data
let eventinput = document.getElementById("eventinput");
eventinput.addEventListener("input", function (output) {
    console.log("typed");
    if (output.data !== null) {
        console.log(output.data);
    }
});

// change event → on input/select/textarea change
let select = document.querySelector("select");
let device = document.getElementById("device");
select.addEventListener("change", function (details) {
    console.log(details.target.value);
    device.textContent = `${details.target.value} device selected`;
});

// keydown → keyboard key
let keyboxh1 = document.getElementById("key-h1");
window.addEventListener("keydown", function (details) {
    keyboxh1.textContent = details.key;
});

// file input
let btn = document.querySelector("#btn");
let file = document.querySelector("#file");
let previewimage = document.querySelector("#preview-image");

btn.addEventListener("click", function () {
    file.click();
});

file.addEventListener("change", function (details) {
    console.log(details.target.files[0].name);
    btn.textContent = `${details.target.files[0].name}`;
});


// ── SUBMIT EVENT (FORM → CARD) ─────────────────────────────

let main = document.querySelector("#second-box");
let form = document.querySelector("#second-form");
let inputs = document.querySelectorAll("#second-form input");

form.addEventListener("submit", function (details) {
    details.preventDefault();

    // inputs[0] = profile pic, inputs[1] = name
    // inputs[2] = email, inputs[3] = age
    console.log(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value
    );

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);
    img.setAttribute("alt", "Profile picture");

    let name = document.createElement("h2");
    name.textContent = inputs[1].value;

    let email = document.createElement("h2");
    email.textContent = inputs[2].value;

    let age = document.createElement("h2");
    age.textContent = inputs[3].value;

    profile.appendChild(img);
    profile.appendChild(name);
    profile.appendChild(email);
    profile.appendChild(age);

    card.appendChild(profile);
    main.appendChild(card);

    form.reset();
});


// ── MOUSE EVENTS ───────────────────────────────────────────

// mouseover / mouseout
let abcd2 = document.querySelector("#abcd-2");

abcd2.addEventListener("mouseover", function () {
    abcd2.style.backgroundColor = "yellow";
});

abcd2.addEventListener("mouseout", function () {
    abcd2.style.backgroundColor = "#000";
});

// mousemove → cursor coordinates
window.addEventListener("mousemove", function (details) {
    console.log(details.clientX, details.clientY);

    abcd2.style.top = details.clientY + "px";
    abcd2.style.left = details.clientX + "px";
});


// ── EVENT OBJECT ───────────────────────────────────────────

let evtobjbtn = document.querySelector("#btn");

evtobjbtn.addEventListener("click", function (event) {
    console.log(event);                    // full event object
    console.log(event.type);               // "click"
    console.log(event.target);             // element that triggered
    console.log(event.target.textContent); // its text
    console.log(event.clientX);            // cursor x
    console.log(event.clientY);            // cursor y
});


// ── EVENT BUBBLING ─────────────────────────────────────────

let ul = document.querySelector("ul");

ul.addEventListener("click", function (details) {
    details.target.classList.toggle("ul");
});


// ── EVENT CAPTURING ────────────────────────────────────────

let grandparent = document.querySelector("#grandparent");
let onlyparent = document.querySelector("#parent");
let child = document.querySelector("#child");

grandparent.addEventListener("click", function (details) {
    console.log("Grandparent clicked");
}, true);

onlyparent.addEventListener("click", function (details) {
    console.log("Parent clicked");
}, true);

child.addEventListener("click", function (details) {
    console.log("Child clicked");
}, true);


// ── FORM VALIDATION ────────────────────────────────────────

let formvalidation = document.getElementById("form-validation");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let genderInput = document.getElementById("gender");
let aboutInput = document.getElementById("about");
let message = document.getElementById("message");

formvalidation.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let password = passwordInput.value;
    let gender = genderInput.value;
    let about = aboutInput.value.trim();

    if (name === "") {
        message.textContent = "Please enter your name";
        return;
    }

    if (email === "") {
        message.textContent = "Please enter your email";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters";
        return;
    }

    if (about === "") {
        message.textContent = "Please tell us about yourself";
        return;
    }

    message.textContent = "Form submitted successfully!";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Gender:", gender);
    console.log("About:", about);
});


// ═══════════════════════════════════════════════════════════
// 12. TIMERS & INTERVALS
// ═══════════════════════════════════════════════════════════

// ── setTimeout (runs once) ─────────────────────────────────

let timeoutText = document.getElementById("timeout-text");
let timeoutBtn = document.getElementById("timeout-btn");
let clearTimeoutBtn = document.getElementById("clear-timeout-btn");
let timer;

timeoutBtn.addEventListener("click", function () {
    clearTimeout(timer);
    timeoutText.textContent = "Please wait...";

    timer = setTimeout(function () {
        timeoutText.textContent = "Hello bhai, 3 seconds ho gaye!";
    }, 3000);
});

clearTimeoutBtn.addEventListener("click", function () {
    clearTimeout(timer);
    timeoutText.textContent = "Timeout cancelled!";
});


// ── setInterval (runs repeatedly) ──────────────────────────

let count = 0;
let countText = document.getElementById("interval-count");
let startIntervalBtn = document.getElementById("start-interval-btn");
let stopIntervalBtn = document.getElementById("stop-interval-btn");
let interval;

startIntervalBtn.addEventListener("click", function () {
    if (interval !== undefined) {
        return;
    }

    interval = setInterval(function () {
        count++;
        countText.textContent = "Count: " + count;
    }, 1000);
});

stopIntervalBtn.addEventListener("click", function () {
    clearInterval(interval);
    interval = undefined;
});


// ── simple clock ───────────────────────────────────────────

let clock = document.getElementById("clock");
let seconds = 0;

setInterval(function () {
    seconds++;
    clock.textContent = "Clock: " + seconds + " seconds";
}, 1000);


// ═══════════════════════════════════════════════════════════
// 13. STORAGE
// ═══════════════════════════════════════════════════════════

// localStorage → persists after browser close
// sessionStorage → cleared when tab closes
// cookies → tiny data (~4kb), auto-sent to server on reload

// ── localStorage ───────────────────────────────────────────

localStorage.setItem("name", "ibrahim");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.setItem("name", "maaz");

// store array in localStorage
localStorage.setItem("friends", JSON.stringify(["ibrahim", "maaz", "taklu"]));
let friends = JSON.parse(localStorage.getItem("friends"));
console.log(friends);


// ── sessionStorage ─────────────────────────────────────────

sessionStorage.setItem("name", "ibrahim");
sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.setItem("name", "maaz");


// ── cookies ────────────────────────────────────────────────

document.cookie = "email=ibu@gmail.com";
document.cookie = "age=14";


// ═══════════════════════════════════════════════════════════
// 14. SCOPE, EXECUTION CONTEXT, CLOSURES
// ═══════════════════════════════════════════════════════════

// ── scope types ────────────────────────────────────────────

let scopea = 10; // global scope

function scopeb() {
    let scopeb = 20; // functional scope
}

{
    let scopec = 30; // block scope
}


// ── execution context ──────────────────────────────────────
// JS runs in 2 phases: memory phase + execution phase

function execution() {
    var executationa = 12;
    var executationb = 13;
    var executationc = 15;
}
execution();


// ── lexical scoping ────────────────────────────────────────
// access depends on where you are physically written

function lexical() {
    let a = 12;

    function defg() {
        console.log(a);
    }

    return defg;
}
lexical();


// ── dynamic scoping (NOT used in JS) ───────────────────────
// access depends on who called you

let india = "ghazwa e hind";

function dyanmic() {
    let india = "bharat";
    dyanmicchild();
}

function dyanmicchild() {
    console.log(india);
}
dyanmic();


// ── closures ───────────────────────────────────────────────
// inner function returns and still remembers outer variable

function closures() {
    let closuresa = 12;

    function child(params) {
        console.log(closuresa);
    }

    return child;
}
closures();


// ═══════════════════════════════════════════════════════════
// 15. THIS KEYWORD IN JAVASCRIPT
// ═══════════════════════════════════════════════════════════

/*
========================================================
                 THIS KEYWORD IN JAVASCRIPT
========================================================

`this` ek special keyword hai.

Iski value is baat par depend karti hai ki function
KO KAISE CALL kiya gaya hai.

Yaad rakh:
- Object ke method mein: usually woh object.
- Normal function mein: strict mode mein undefined.
- Arrow function mein: surrounding scope ka `this`.
- Class ke method mein: jis instance se method call hua.
*/


// ======================================================
// 1. `this` INSIDE AN OBJECT METHOD
// ======================================================

const studentInformation = {
    studentFullName: "Ibrahim Ahmad",
    studentAgeInYears: 14,

    displayStudentInformation: function () {

        // `this` yahan studentInformation object ko refer karta hai.
        // Kyunki function call hua: studentInformation.displayStudentInformation()

        console.log(this.studentFullName);
        console.log(this.studentAgeInYears);
    }
};

studentInformation.displayStudentInformation();

// Output:
// Ibrahim Ahmad
// 14


// ======================================================
// 2. WHY USE `this` INSTEAD OF THE OBJECT NAME?
// ======================================================

const firstStudentProfile = {
    studentName: "Ibrahim",

    introduceStudent: function () {

        // Hardcode object name karne ke bajaye `this` use kar sakte hain.
        console.log("My name is " + this.studentName);
    }
};

firstStudentProfile.introduceStudent();

// Output: My name is Ibrahim


// ======================================================
// 3. SAME METHOD, DIFFERENT OBJECTS
// ======================================================

const secondStudentProfile = {
    studentName: "Ali",
    introduceStudent: firstStudentProfile.introduceStudent
};

firstStudentProfile.introduceStudent();
// `this` = firstStudentProfile
// Output: My name is Ibrahim

secondStudentProfile.introduceStudent();
// `this` = secondStudentProfile
// Output: My name is Ali

// IMPORTANT:
// Function same hai, lekin `this` alag hai.
// Kyunki function ko call karne wala object alag hai.


// ======================================================
// 4. `this` IN A NORMAL FUNCTION
// ======================================================

"use strict";

function showCurrentThisValue() {

    // Strict mode mein normal function ko directly call karne par
    // `this` ki value undefined hoti hai.
    console.log(this);
}

showCurrentThisValue();

// Output: undefined

// Note:
// Browser mein non-strict normal function ke andar `this`
// globalThis (usually window) ho sakta hai.
// Node.js mein top-level behavior context ke hisaab se badal sakta hai.
// Isliye normal function mein `this` ko hamesha object mat samajhna.


// ======================================================
// 5. `this` IN AN ARROW FUNCTION
// ======================================================

const studentWithArrowMethod = {
    studentName: "Ibrahim",

    introduceStudent: () => {

        // Arrow function apna khud ka `this` create NAHI karta.
        // Yeh surrounding scope se `this` leta hai.
        console.log(this);
    }
};

studentWithArrowMethod.introduceStudent();

// IMPORTANT:
// Yahan `this` studentWithArrowMethod nahi hai.
// Arrow function ka `this` surrounding scope se aata hai.
// Isliye object methods ke liye normal method syntax use karna
// generally zyada simple aur predictable hota hai.


// ======================================================
// 6. `this` IN A CLASS
// ======================================================

class StudentProfile {

    constructor(studentName, studentAge) {

        // `new StudentProfile(...)` ek naya object banata hai.
        // Constructor ke andar `this` us naye object ko refer karta hai.

        this.studentName = studentName;
        this.studentAge = studentAge;
    }

    displayProfile() {

        // Jab studentOne.displayProfile() call hota hai,
        // `this` studentOne ko refer karta hai.

        console.log("Name: " + this.studentName);
        console.log("Age: " + this.studentAge);
    }
}

const studentOne = new StudentProfile("Ibrahim", 14);
const studentTwo = new StudentProfile("Ali", 15);

studentOne.displayProfile();
// Name: Ibrahim
// Age: 14

studentTwo.displayProfile();
// Name: Ali
// Age: 15


// ======================================================
// 7. WHAT HAPPENS IF YOU SAVE A METHOD SEPARATELY?
// ======================================================

const schoolStudent = {
    studentName: "Ibrahim",

    introduceStudent: function () {
        console.log(this.studentName);
    }
};

const savedIntroductionFunction = schoolStudent.introduceStudent;

// Yahan function ko object ke through call nahi kiya.
// Isliye normal function ka `this` apna original object
// automatically retain nahi karta.

savedIntroductionFunction();

// Strict mode mein output: undefined
// (Agar kisi non-strict environment mein ho, behavior alag ho sakta hai.)


// ======================================================
// 8. FIX IT WITH `bind()`
// ======================================================

const boundIntroductionFunction =
    schoolStudent.introduceStudent.bind(schoolStudent);

// `bind()` ek naya function return karta hai jiska `this`
// schoolStudent se permanently bound hota hai.

boundIntroductionFunction();

// Output: Ibrahim


// ======================================================
// 9. `call()` AND `apply()`
// ======================================================

function introducePerson(personCity, personCountry) {

    console.log(
        this.personName +
        " lives in " +
        personCity +
        ", " +
        personCountry
    );
}

const personInformation = {
    personName: "Ibrahim"
};

// `call()` arguments ko individually pass karta hai.
introducePerson.call(personInformation, "Delhi", "India");

// Output: Ibrahim lives in Delhi, India


// `apply()` arguments ko array ke andar pass karta hai.
introducePerson.apply(personInformation, ["Delhi", "India"]);

// Output: Ibrahim lives in Delhi, India


// ======================================================
// 10. `this` INSIDE A NESTED NORMAL FUNCTION
// ======================================================

const classroomInformation = {
    classroomName: "JavaScript Class",

    showClassroomName: function () {

        console.log(this.classroomName);
        // Yahan `this` = classroomInformation.

        function showInnerFunctionThis() {

            // Yeh ek separate normal function hai.
            // Strict mode mein iska `this` undefined hoga.
            console.log(this);
        }

        showInnerFunctionThis();
    }
};

classroomInformation.showClassroomName();

// Output:
// JavaScript Class
// undefined


// ======================================================
// 11. ARROW FUNCTION CAN USE OUTER `this`
// ======================================================

const anotherClassroomInformation = {
    classroomName: "Advanced JavaScript",

    showClassroomName: function () {

        // Is method mein `this` = anotherClassroomInformation.

        const showClassroomUsingArrow = () => {

            // Arrow function surrounding method ka `this` use karta hai.
            console.log(this.classroomName);
        };

        showClassroomUsingArrow();
    }
};

anotherClassroomInformation.showClassroomName();

// Output: Advanced JavaScript


// ======================================================
// 12. QUICK SUMMARY
// ======================================================

// object.method()       -> `this` = object
// normalFunction()      -> strict mode mein undefined
// arrowFunction()       -> surrounding scope ka `this`
// new MyClass()         -> constructor mein `this` = new instance
// function.bind(obj)    -> `this` ko obj se bind karta hai
// function.call(obj, x) -> `this` = obj; arguments separately
// function.apply(obj, arr) -> `this` = obj; arguments array mein


// ============================================================
// OOP IN JAVASCRIPT — OBJECT-ORIENTED PROGRAMMING
// ============================================================
// OOP ka full form Object-Oriented Programming hai.
// Ismein hum data (properties) aur actions (methods) ko objects
// ke through organize karte hain.


// ============================================================
// 1. OBJECT, PROPERTIES AUR METHODS
// ============================================================

// Object ek container ki tarah hai jo related data aur functions
// ko ek jagah rakhta hai.

const oopStudentObject = {
    studentName: "Ibrahim", // Property: student ka naam
    studentAge: 14,         // Property: student ki age
    studentSubject: "JavaScript",

    // Object ke andar function ko METHOD kehte hain.
    introduceStudent: function () {
        console.log(`My name is ${this.studentName}.`);
        console.log(`My age is ${this.studentAge}.`);
    }
};

// Dot notation se property ki value access karte hain.
console.log(oopStudentObject.studentName); // Ibrahim
console.log(oopStudentObject.studentAge);  // 14

// Object ka method call kar rahe hain.
oopStudentObject.introduceStudent();


// ============================================================
// 2. ADD, UPDATE AUR DELETE PROPERTIES
// ============================================================

// Nayi property add karna.
oopStudentObject.studentCity = "Delhi";

// Existing property ki value update karna.
oopStudentObject.studentAge = 15;

// Property delete karna.
delete oopStudentObject.studentCity;

console.log(oopStudentObject);


// ============================================================
// 3. THIS KEYWORD
// ============================================================

// Normal method call mein "this" us object ko refer karta hai
// jiske through method call hua hai.

const oopTeacherObject = {
    teacherName: "Ahmed",
    teacherSubject: "Programming",

    introduceTeacher() {
        console.log(this.teacherName);
        console.log(this.teacherSubject);
    }
};

oopTeacherObject.introduceTeacher();
// Ahmed
// Programming

// Yahan this.teacherName ka matlab oopTeacherObject.teacherName hai.
// Yaad rakh: arrow functions apna khud ka "this" nahi banate.


// ============================================================
// 4. FACTORY FUNCTION
// ============================================================

// Factory function ek normal function hai jo objects create
// karke return karta hai. Ismein "new" ki zaroorat nahi hoti.

function createStudent(studentName, studentAge) {

    // Har function call par naya object banega.
    const newlyCreatedStudent = {
        studentName: studentName,
        studentAge: studentAge
    };

    return newlyCreatedStudent; // Object return kar rahe hain.
}

const firstStudent = createStudent("Ibrahim", 14);
const secondStudent = createStudent("Ahmed", 15);

console.log(firstStudent.studentName);  // Ibrahim
console.log(secondStudent.studentName); // Ahmed


// ============================================================
// 5. CONSTRUCTOR FUNCTION AUR NEW KEYWORD
// ============================================================

// Constructor function bhi objects banane ka tareeka hai.
// Convention ke according naam CapitalLetter se shuru hota hai.

function oopStudentConstructor(studentName, studentAge) {

    // "new" se call hone par "this" naye object ko refer karta hai.
    this.studentName = studentName;
    this.studentAge = studentAge;
}

const thirdStudent = new oopStudentConstructor("Ali", 16);

console.log(thirdStudent.studentName); // Ali
console.log(thirdStudent.studentAge);  // 16

// "new" naya object create karta hai aur constructor ko us object
// ke saath call karta hai.


// ============================================================
// 6. CLASS, CONSTRUCTOR AUR OBJECTS
// ============================================================

// Class ek blueprint hai.
// Isse hum same structure wale multiple objects bana sakte hain.

class OopStudent {

    // Constructor tab chalta hai jab "new OopStudent(...)" hota hai.
    constructor(studentName, studentAge) {

        // Parameters ki values naye object mein save hoti hain.
        this.studentName = studentName;
        this.studentAge = studentAge;
    }

    // Class ke andar method likhne ke liye function keyword
    // likhne ki zaroorat nahi hoti.
    introduceStudent() {
        console.log(`My name is ${this.studentName}.`);
        console.log(`My age is ${this.studentAge}.`);
    }

    studySubject(subjectName) {
        console.log(`${this.studentName} is learning ${subjectName}.`);
    }
}

const studentOneOop = new OopStudent("Ibrahim", 14);
const studentTwoOop = new OopStudent("Ahmed", 15);

// Dono objects same class se bane hain, lekin data alag hai.
studentOneOop.introduceStudent();
studentOneOop.studySubject("JavaScript");

studentTwoOop.introduceStudent();
studentTwoOop.studySubject("Python");


// ============================================================
// 7. INHERITANCE — EXTENDS AUR SUPER
// ============================================================

// Inheritance ka matlab ek class doosri class ke features inherit
// kar sakti hai.
// OopStudent class parent hai; ProgrammingStudent child class hai.

class ProgrammingStudent extends OopStudent {

    constructor(studentName, studentAge, programmingLanguage) {

        // super() parent class ka constructor call karta hai.
        // Derived class mein "this" use karne se pehle super() zaroori hai.
        super(studentName, studentAge);

        // Child class ki additional property.
        this.programmingLanguage = programmingLanguage;
    }

    writeCode() {
        console.log(
            `${this.studentName} is coding in ${this.programmingLanguage}.`
        );
    }
}

const programmingStudent = new ProgrammingStudent(
    "Ibrahim",
    14,
    "JavaScript"
);

// Parent class se inherited method.
programmingStudent.introduceStudent();

// Child class ka apna method.
programmingStudent.writeCode();


// ============================================================
// 8. ENCAPSULATION — PRIVATE PROPERTIES
// ============================================================

// Encapsulation data ko protect karne aur controlled access dene
// ka concept hai.
// "#" se shuru hone wali property class ke bahar directly accessible nahi.

class BankAccount {

    #accountBalance = 0; // Private property

    depositMoney(depositAmount) {

        // Validation: sirf positive amount deposit hogi.
        if (depositAmount > 0) {
            this.#accountBalance += depositAmount;
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Getter balance ko read karne ka controlled tareeka hai.
    get balance() {
        return this.#accountBalance;
    }
}

const studentBankAccount = new BankAccount();

studentBankAccount.depositMoney(500);

console.log(studentBankAccount.balance); // 500

// studentBankAccount.#accountBalance;
// Error: private property class ke bahar access nahi kar sakte.


// ============================================================
// 9. POLYMORPHISM — METHOD OVERRIDING
// ============================================================

// Polymorphism ka ek example: same method name, different behaviour.
// Child class parent ka method override kar sakti hai.

class OopAnimal {

    makeSound() {
        console.log("Animal makes a sound.");
    }
}

class OopDog extends OopAnimal {

    makeSound() {
        console.log("Dog barks.");
    }
}

class OopCat extends OopAnimal {

    makeSound() {
        console.log("Cat meows.");
    }
}

const oopDogObject = new OopDog();
const oopCatObject = new OopCat();

oopDogObject.makeSound(); // Dog barks.
oopCatObject.makeSound(); // Cat meows.


// ============================================================
// 10. ABSTRACTION — IMPLEMENTATION DETAILS HIDE KARNA
// ============================================================

// Abstraction mein user ko simple interface milta hai.
// Internal steps ko use karne ke liye unki saari details
// jaanna zaroori nahi hota.

class CoffeeMachine {

    makeCoffee() {
        this.heatWater();
        this.brewCoffee();
        console.log("Your coffee is ready!");
    }

    heatWater() {
        console.log("Heating water...");
    }

    brewCoffee() {
        console.log("Brewing coffee...");
    }
}

const coffeeMachine = new CoffeeMachine();

// User ko sirf makeCoffee() call karna hai.
coffeeMachine.makeCoffee();


// ============================================================
// 11. STATIC METHODS
// ============================================================

// Static method class par call hota hai, instance par nahi.
// Isse utility operations ke liye use kar sakte hain.

class OopCalculator {

    static addNumbers(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

console.log(OopCalculator.addNumbers(10, 20)); // 30

// const calculator = new OopCalculator();
// calculator.addNumbers(10, 20); // Error: instance method nahi hai.


// ============================================================
// 12. GETTERS AUR SETTERS
// ============================================================

// Getter property ko read karne deta hai.
// Setter property update karte waqt validation laga sakta hai.

class UserProfile {

    constructor(userName) {
        this._userName = userName;
    }

    get userName() {
        return this._userName;
    }

    set userName(newUserName) {

        // Empty username accept nahi karenge.
        if (newUserName.trim() !== "") {
            this._userName = newUserName;
        }
    }
}

const userProfile = new UserProfile("Ibrahim");

// Getter ko property ki tarah access karte hain.
console.log(userProfile.userName); // Ibrahim

// Setter ko assignment ki tarah use karte hain.
userProfile.userName = "Ali";

console.log(userProfile.userName); // Ali


// ============================================================
// 13. PROTOTYPES
// ============================================================

// JavaScript prototype-based language hai.
// Objects apne prototype se methods aur properties inherit kar sakte hain.
// Class ke methods aam taur par class ke prototype par store hote hain.

class Vehicle {

    constructor(vehicleBrand) {
        this.vehicleBrand = vehicleBrand;
    }

    startVehicle() {
        console.log(`${this.vehicleBrand} is starting.`);
    }
}

const carObject = new Vehicle("Toyota");

carObject.startVehicle();

console.log(
    Object.getPrototypeOf(carObject) === Vehicle.prototype
); // true

// vehicleBrand object ki apni property hai.
console.log(carObject.hasOwnProperty("vehicleBrand")); // true

// startVehicle prototype par hai, carObject par directly nahi.
console.log(carObject.hasOwnProperty("startVehicle")); // false


// ============================================================
// 14. OBJECT DESTRUCTURING AUR SPREAD
// ============================================================

const bookObject = {
    bookTitle: "The Metamorphosis",
    bookAuthor: "Franz Kafka"
};

// Destructuring: object ki properties ko variables mein nikaalna.
const { bookTitle, bookAuthor } = bookObject;

console.log(bookTitle);  // The Metamorphosis
console.log(bookAuthor); // Franz Kafka

// Spread: object ki own enumerable properties ko copy karna.
// Ye shallow copy hai.
const copiedBook = { ...bookObject, bookYear: 1915 };

console.log(copiedBook);


// ============================================================
// END OF OOP IN JAVASCRIPT
// ============================================================