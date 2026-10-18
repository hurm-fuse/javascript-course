// =====================================================
// 1. VAR, LET, CONST
// =====================================================

var a;
var b = 12;
var c = 19;
var d = 12;

d = 6;
var d = 10;

let age = 12;
age = 13;

const dulha = "labuba";
const dulhan = "lady";

console.log(dulha + " weds " + dulhan);

let dulhabylet = "labuba";
let dulhanbylet = "lady";

dulhabylet = "harramzada";

console.log(dulhabylet + " weds " + dulhanbylet);

var dulhabyvar = "labuba";
var dulhanbyvar = "lady";

dulhabyvar = "harramzada";

console.log(dulhabyvar + " weds " + dulhanbyvar);

let reassignment = 12;
reassignment = 6;

var redeclaration = 10;
var redeclaration = 20;

console.log(redeclaration);

// =====================================================
// 2. SCOPE
// =====================================================

var globalVariable = 19;

{
    var globalVariable = 20;
}

console.log(globalVariable);

let blockVariable = 10;

{
    let blockVariable = 20;
    console.log(blockVariable);
}

console.log(blockVariable);

// =====================================================
// 3. DATA TYPES
// =====================================================

let i = true;
let j = false;

console.log(i, j);

let nothing = null;
let k;

console.log(k);

let u1 = Symbol("uid");
let u2 = Symbol("uid");

console.log(u1 === u2);

let obj = {
    uid: 1,
    name: "ibrahim",
    age: 12,
    email: "ibrahim@gmail.com"
};

let no = Symbol("uid");

obj[no] = 8595507101;

console.log(obj[no]);

let array = [1, 2, 3];
let copyarray = array;

copyarray.pop();

console.log(array);
console.log(copyarray);

let originalArray = [1, 2, 3];
let separateArray = [...originalArray];

separateArray.pop();

console.log(originalArray);
console.log(separateArray);

let objects = {
    username: "ibrahim"
};

let copyobjects = objects;

copyobjects.username = "maaz";

console.log(objects.username);

let dynamictyping = 12;

dynamictyping = true;
dynamictyping = "ibrahim";
dynamictyping = [1, 2, 3];
dynamictyping = null;
dynamictyping = undefined;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof NaN);

// =====================================================
// 4. TYPE COERCION, TRUTHY, FALSY, NaN
// =====================================================

console.log(5 + "1");
console.log(5 - "1");

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean("ibrahim"));

let nan = NaN;

console.log(typeof nan);

// =====================================================
// 5. OPERATORS
// =====================================================

console.log(5 + 5);
console.log("ibrahim " + "ahmad");
console.log(10 - 5);
console.log(5 * 5);
console.log(10 / 5);
console.log(13 % 5);
console.log(5 ** 5);

console.log(12 == "12");
console.log(12 === "12");

console.log(12 != 13);
console.log(12 != "12");

console.log(12 !== 13);
console.log(12 !== "12");

console.log(15 > 13);
console.log(15 < 13);
console.log(15 <= 15);
console.log(15 >= 15);

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

console.log(true && true);
console.log(false && true);

console.log(true || true);
console.log(false || true);

console.log(!true);
console.log(!!12);
console.log(!!0);

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
console.log(typeof null);
console.log(typeof {});

let Unaryx = 5;

console.log(++Unaryx);

let Unaryy = 5;

console.log(Unaryy++);
console.log(Unaryy);

let Unaryp = 5;

console.log(--Unaryp);

let Unaryq = 5;

console.log(Unaryq--);
console.log(Unaryq);

console.log(12 > 13 ? "true" : "false");

let arr = [1, 2, 3];

console.log(arr instanceof Array);
console.log(arr instanceof Object);

let objj = {
    name: "Ibrahim"
};

console.log(objj instanceof Object);
console.log(objj instanceof Array);

let date = new Date();

console.log(date instanceof Date);
console.log(date instanceof Object);

// =====================================================
// 6. CONDITIONS, SWITCH, LOOPS
// =====================================================

let score = 78;

let grade = score >= 90
    ? "A"
    : score >= 75
    ? "B"
    : score >= 60
    ? "C"
    : "Fail";

console.log(grade);

let loggedin = true;
let admin = true;

if (!loggedin) {
    console.log("Please log in");
} else if (admin) {
    console.log("You are admin");
} else {
    console.log("You are normal user");
}

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

for (let loopI = 1; loopI <= 10; loopI++) {
    console.log(loopI);
}

let start = 1;

while (start < 33) {
    console.log(start);
    start++;
}

let dowhilestart = 1;

do {
    console.log(dowhilestart);
    dowhilestart++;
} while (dowhilestart < 20);

for (let loopJ = 1; loopJ <= 20; loopJ++) {
    if (loopJ === 19) {
        console.log("19 is lucky number");
        break;
    }

    console.log(loopJ);
}

for (let loopK = 1; loopK <= 20; loopK++) {
    if (loopK === 19) {
        continue;
    }

    console.log(loopK);
}

// =====================================================
// 7. FUNCTIONS
// =====================================================

function sayHello() {
    console.log("Hello Ibrahim");
}

sayHello();
sayHello();

function greet(name) {
    console.log("Hello " + name);
}

greet("Ibrahim");
greet("Ali");
greet("Maaz");

function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(5, 7);

function sum(a, b) {
    return a + b;
}

let result = sum(10, 20);

console.log(result);

function test() {
    return 10;
    console.log("Hello");
}

console.log(test());

function firstFunction() {
    console.log(10 + 20);
}

firstFunction();

function secondFunction() {
    return 10 + 20;
}

let answer = secondFunction();

console.log(answer);

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

const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5));

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 4));

const square = num => num * num;

console.log(square(5));

function welcome(name = "Guest") {
    console.log("Welcome " + name);
}

welcome("Ibrahim");
welcome();

function printNumbers(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index]);
    }
}

printNumbers([10, 20, 30]);

function showUser(user) {
    console.log(user.name);
    console.log(user.age);
}

showUser({
    name: "Ibrahim",
    age: 14
});

function addAll(...numbers) {
    let total = 0;

    for (let index = 0; index < numbers.length; index++) {
        total += numbers[index];
    }

    return total;
}

console.log(addAll(1, 2, 3));
console.log(addAll(10, 20, 30, 40));

function processUser(name, callback) {
    callback(name);
}

function sayWelcome(name) {
    console.log("Welcome " + name);
}

processUser("Ibrahim", sayWelcome);

function outer() {
    console.log("Outer function");

    function inner() {
        console.log("Inner function");
    }

    inner();
}

outer();

function countdown(n) {
    if (n === 0) {
        console.log("Done!");
        return;
    }

    console.log(n);
    countdown(n - 1);
}

countdown(3);

// =====================================================
// 8. ARRAYS
// =====================================================

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

fruits[1] = "Orange";

fruits.push("Grapes");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("Pineapple");
console.log(fruits);

fruits.shift();
console.log(fruits);

let numbers = [10, 20, 30, 40];

console.log(numbers.indexOf(30));
console.log(numbers.indexOf(50));

console.log(numbers.includes(20));
console.log(numbers.includes(99));

let nums = [10, 20, 30, 40, 50];

let selected = nums.slice(1, 4);

console.log(selected);
console.log(nums);

let values = [10, 20, 30, 40];

values.splice(1, 2);

console.log(values);

let marks = [80, 90, 75, 95];

for (let index = 0; index < marks.length; index++) {
    console.log(marks[index]);
}

let names = ["Ibrahim", "Ali", "Maaz"];

for (let name of names) {
    console.log(name);
}

let scores = [10, 20, 30];

scores.forEach(function(score) {
    console.log(score);
});

scores.forEach(score => console.log(score));

let oldNumbers = [1, 2, 3, 4];

let doubled = oldNumbers.map(function(num) {
    return num * 2;
});

console.log(doubled);
console.log(oldNumbers);

let ages = [12, 18, 25, 15, 30];

let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults);

let findNumbers = [5, 12, 18, 25];

let found = findNumbers.find(num => num > 15);

console.log(found);

let prices = [100, 200, 300];

let totalPrice = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log(totalPrice);

let original = [1, 2, 3];
let copied = [...original];

copied.push(4);

console.log(original);
console.log(copied);

let firstArray = [1, 2];
let secondArray = [3, 4];

let mergedArray = [...firstArray, ...secondArray];

console.log(mergedArray);

let colors = ["Red", "Green", "Blue"];

let [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

let matrix = [
    [1, 2],
    [3, 4]
];

console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[1][0]);
console.log(matrix[1][1]);

// =====================================================
// 9. OBJECTS
// =====================================================

let student = {
    name: "Ibrahim",
    age: 14,
    class: 9,
    isLearningJavaScript: true
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.class);

console.log(student["name"]);
console.log(student["age"]);
console.log(student["class"]);

let propertyName = "name";

console.log(student[propertyName]);

student.city = "Delhi";
student.favoriteLanguage = "JavaScript";
student["favoriteColor"] = "Black";

console.log(student.favoriteColor);

student.age = 15;

console.log(student.age);

delete student.favoriteColor;

console.log(student.favoriteColor);
console.log(student);

let profile = {
    username: "ibrahim",
    age: 14,
    isStudent: true,
    skills: ["HTML", "CSS", "JavaScript"],

    address: {
        city: "Delhi",
        country: "India"
    },

    sayHello: function() {
        console.log("Hello!");
    }
};

console.log(profile.username);
console.log(profile.skills);
console.log(profile.skills[0]);
console.log(profile.address.city);

profile.sayHello();

let person = {
    name: "Ibrahim",
    age: 14,

    introduce: function() {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }
};

person.introduce();

let anotherPerson = {
    name: "Ali",

    introduce() {
        console.log("Hello, I am " + this.name);
    }
};

anotherPerson.introduce();

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

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025
};

console.log("brand" in car);
console.log("color" in car);

console.log(car.hasOwnProperty("model"));
console.log(car.hasOwnProperty("color"));

car.color = undefined;

console.log("color" in car);
console.log(car.color);

let phone = {
    brand: "Apple",
    model: "iPhone",
    price: 80000
};

console.log(Object.keys(phone));
console.log(Object.values(phone));
console.log(Object.entries(phone));

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

for (let [key, value] of Object.entries(laptop)) {
    console.log(key + ": " + value);
}

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

let developer = {
    name: "Ibrahim",
    skills: ["HTML", "CSS", "JavaScript", "C"]
};

console.log(developer.skills[0]);
console.log(developer.skills[1]);
console.log(developer.skills[2]);

developer.skills.push("C++");

console.log(developer.skills);

let originalObj = {
    name: "Ibrahim",
    age: 14
};

let copyObj = { ...originalObj };

copyObj.name = "Ali";

console.log(originalObj.name);
console.log(copyObj.name);

let first = {
    name: "Ibrahim"
};

let second = {
    age: 14,
    city: "Delhi"
};

Object.assign(first, second);

console.log(first);

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

let settings = {
    theme: "dark",
    language: "English"
};

Object.freeze(settings);

settings.theme = "light";

console.log(settings.theme);

let account = {
    username: "ibrahim",
    active: true
};

Object.seal(account);

account.active = false;
account.city = "Delhi";
delete account.username;

console.log(account);

let objectA = {
    score: 100
};

let objectB = objectA;

objectB.score = 200;

console.log(objectA.score);
console.log(objectB.score);

let customer = {
    name: "Ibrahim"
};

console.log(customer.address?.city);

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

// =====================================================
// 10. DOM MANIPULATION
// =====================================================

// HTML se element select karna

// selected by id
let selectedbyid = document.getElementById("abcd");

console.dir(selectedbyid);

// selected by class name
let selectedbyclassname = document.getElementsByClassName("text");

console.dir(selectedbyclassname);
console.log(selectedbyclassname[0]);

// selected by tag name
let selectedbytagname = document.getElementsByTagName("p");

console.dir(selectedbytagname);

// selected by query selector
let selectedbyquery = document.querySelector("h1");

console.dir(selectedbyquery);

// selected by query all selector
let selectedbyqueryall = document.querySelectorAll("h1");

console.dir(selectedbyqueryall);

// CSS selector se element select karna
console.log(document.querySelector("#abcd"));
console.log(document.querySelector(".text"));
console.log(document.querySelector("#mybox .text"));

// =====================================================
// TEXT CHANGE KARNA
// =====================================================

let h1 = document.getElementById("abcd");

h1.textContent = "hello ibrahim kaise hu";

// innerHTML HTML tags ko bhi read karta hai
let text = document.getElementById("text");

text.innerHTML = "<i>i am italian</i>";

// innerText visible text deta hai
console.log(h1.innerText);

// textContent text ko read ya change karta hai
console.log(h1.textContent);

// =====================================================
// STYLE CHANGE KARNA
// =====================================================

h1.style.color = "yellow";
h1.style.backgroundColor = "black";
h1.style.padding = "10px";
h1.style.borderRadius = "8px";

text.style.fontSize = "20px";

// =====================================================
// ATTRIBUTE CHANGE KARNA
// =====================================================

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

// =====================================================
// IMAGE KA SRC CHANGE KARNA
// =====================================================

let img = document.querySelector("img");

img.setAttribute(
    "src",
    "https://placehold.co/300x150?text=New+Image"
);

img.setAttribute("alt", "New image");

// =====================================================
// CLASSLIST
// =====================================================

let mybox = document.getElementById("mybox");

// class add karna
mybox.classList.add("highlight");

// class check karna
console.log(mybox.classList.contains("highlight"));

// class remove karna
mybox.classList.remove("highlight");

// class toggle karna
mybox.classList.toggle("highlight");

// =====================================================
// ELEMENT CREATE KARNA
// =====================================================

let newParagraph = document.createElement("p");

newParagraph.textContent = "i am a new paragraph";

newParagraph.classList.add("text");

document.getElementById("newbox").append(newParagraph);

// append() element ko end mein add karta hai

let secondParagraph = document.createElement("p");

secondParagraph.textContent = "i am added at the end";

document.getElementById("newbox").append(secondParagraph);

// prepend() element ko start mein add karta hai

let firstParagraph = document.createElement("p");

firstParagraph.textContent = "i am added at the beginning";

document.getElementById("newbox").prepend(firstParagraph);

// =====================================================
// ELEMENT BEFORE AND AFTER
// =====================================================

let beforeElement = document.createElement("p");

beforeElement.textContent = "i am before the box";

document.getElementById("newbox").before(beforeElement);

let afterElement = document.createElement("p");

afterElement.textContent = "i am after the box";

document.getElementById("newbox").after(afterElement);

// =====================================================
// ELEMENT REMOVE KARNA
// =====================================================

// element ko remove karna
// afterElement.remove();

// parent se child remove karna
// document.getElementById("newbox").removeChild(firstParagraph);

// =====================================================
// HIDE AND SHOW
// =====================================================

// image hide karna
// img.hidden = true;

// image show karna
// img.hidden = false;

// display none se hide karna
// img.style.display = "none";

// display block se show karna
// img.style.display = "block";

// =====================================================
// HTML CONTENT REPLACE KARNA
// =====================================================

// innerHTML HTML ko bhi render karta hai
// document.getElementById("newbox").innerHTML = "<h2>hello</h2>";

// textContent sirf text ko render karta hai
// document.getElementById("newbox").textContent = "hello";

// =====================================================
// CHILDREN SELECT KARNA
// =====================================================

let parent = document.getElementById("newbox");

console.log(parent.children);

console.log(parent.firstElementChild);

console.log(parent.lastElementChild);

console.log(parent.parentElement);

// =====================================================
// NODE AND ELEMENT INFORMATION
// =====================================================

console.log(h1.tagName);

console.log(h1.id);

console.log(h1.className);

console.log(h1.textContent);

// =====================================================
// END
// =====================================================

console.log("DOM manipulation complete!");