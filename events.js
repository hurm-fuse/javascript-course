
// ==================================================
// EVENTS AND EVENT LISTENER
// ==================================================

// EVENT KYA HOTA HAI?
// Jab user browser mein koi action karta hai,
// jaise click, typing, mouse move ya form submit,
// toh us action ko event kehte hain.

// EVENT LISTENER KYA HOTA HAI?
// Event listener kisi event ko listen karta hai.
// Event hone par uska function execute hota hai.

// Syntax:
// element.addEventListener("event", function() {
//     // event hone par ye code chalega
// });

// ==================================================
// 1. CLICK EVENT
// ==================================================

// HTML se elements select kar rahe hain.

let heading = document.getElementById("heading");
let clickBtn = document.getElementById("clickBtn");

// click event tab chalega jab button click hoga.

clickBtn.addEventListener("click", function () {
    heading.textContent = "Bhai tune button click kar diya!";
    
    console.log("Button clicked");
});

// ==================================================
// 2. DOUBLE CLICK EVENT
// ==================================================

let doubleClickBtn = document.getElementById("doubleClickBtn");

doubleClickBtn.addEventListener("dblclick", function () {
    heading.textContent = "Bhai tune double click kiya!";
});

// dblclick ka matlab double click.

// ==================================================
// 3. MOUSEOVER EVENT
// ==================================================

let box = document.getElementById("box");

// mouseover tab hota hai jab mouse element ke upar aata hai.

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "yellow";
    box.style.color = "black";

    console.log("Mouse box ke upar aaya");
});

// ==================================================
// 4. MOUSEOUT EVENT
// ==================================================

// mouseout tab hota hai jab mouse element se bahar jaata hai.

box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "cornsilk";
    box.style.color = "crimson";

    console.log("Mouse box se bahar gaya");
});

// ==================================================
// 5. MOUSEDOWN AND MOUSEUP
// ==================================================

// mousedown jab mouse ka button press hota hai.

box.addEventListener("mousedown", function () {
    console.log("Mouse button press hua");
});

// mouseup jab mouse ka button release hota hai.

box.addEventListener("mouseup", function () {
    console.log("Mouse button release hua");
});

// ==================================================
// 6. INPUT EVENT
// ==================================================

let nameInput = document.getElementById("nameInput");
let inputOutput = document.getElementById("inputOutput");

// input event tab chalta hai jab input ki value change hoti hai.
// Jaise user keyboard se text type karta hai.

nameInput.addEventListener("input", function () {
    inputOutput.textContent = nameInput.value;

    console.log("Current value:", nameInput.value);
});

// value input ke andar likha hua text deta hai.

// ==================================================
// 7. CHANGE EVENT
// ==================================================

// change event tab chalta hai jab value change ho
// aur change confirm ho jaaye.
// Text input mein aam taur par focus hatne par
// change event trigger hota hai, agar value badli ho.

nameInput.addEventListener("change", function () {
    console.log("Input ki value change hui:", nameInput.value);
});

// input aur change same nahi hain.
// input typing ke dauran baar-baar chal sakta hai.
// change committed change par chalta hai.

// ==================================================
// 8. KEYDOWN EVENT
// ==================================================

let keyboardInput = document.getElementById("keyboardInput");
let keyOutput = document.getElementById("keyOutput");

// keydown tab chalta hai jab keyboard key press hoti hai.

keyboardInput.addEventListener("keydown", function (event) {
    console.log("Key press hui:", event.key);

    keyOutput.textContent = "Key pressed: " + event.key;
});

// event.key batata hai kaunsi key press hui.

// ==================================================
// 9. KEYUP EVENT
// ==================================================

// keyup tab chalta hai jab keyboard key release hoti hai.

keyboardInput.addEventListener("keyup", function (event) {
    console.log("Key release hui:", event.key);
});

// keydown = key press hui
// keyup = key release hui

// ==================================================
// 10. EVENT OBJECT
// ==================================================

// Event listener ka function event object receive kar sakta hai.
// Isse event ke baare mein information milti hai.

clickBtn.addEventListener("click", function (event) {
    console.log(event);
});

// event object mein event ki details hoti hain.
// Jaise event ka type, target aur doosri information.

// ==================================================
// 11. event.type
// ==================================================

// event.type batata hai ki kaunsa event hua.

clickBtn.addEventListener("click", function (event) {
    console.log(event.type); // click
});

// ==================================================
// 12. event.target
// ==================================================

// event.target woh actual element hota hai
// jis par event hua.

box.addEventListener("click", function (event) {
    console.log(event.target);
});

// ==================================================
// 13. event.currentTarget
// ==================================================

// event.currentTarget woh element hota hai
// jis par event listener laga hua hai.

box.addEventListener("click", function (event) {
    console.log(event.currentTarget);
});

// target aur currentTarget alag ho sakte hain.
// Example: parent par listener hai aur click child par hua.

// ==================================================
// 14. FORM SUBMIT EVENT
// ==================================================

let myForm = document.getElementById("myForm");
let emailInput = document.getElementById("emailInput");
let formOutput = document.getElementById("formOutput");

// submit event form submit karne par chalta hai.

myForm.addEventListener("submit", function (event) {

    // preventDefault browser ka default submit action rokta hai.
    // Is example mein page reload hone se rok rahe hain.

    event.preventDefault();

    formOutput.textContent = "Form submitted: " + emailInput.value;

    console.log("Form submit hua");
});

// NOTE:
// Ye practice example hai.
// Real website par email ko server par bhejne ke liye
// alag backend ya service ki zaroorat hoti hai.

// ==================================================
// 15. preventDefault()
// ==================================================

// preventDefault() kisi event ka default browser action rokta hai.

// Form submit karne par page reload hone se rok sakte hain.
// Link open hone se bhi rok sakte hain.

// Example:

// let link = document.querySelector("a");
//
// link.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("Link ka default action roka gaya");
// });

// ==================================================
// 16. REMOVE EVENT LISTENER
// ==================================================

// removeEventListener() event listener ko remove karta hai.
// Iske liye same function reference dena zaroori hai.

let listenerOutput = document.getElementById("listenerOutput");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

// Function ko alag banaya hai taaki baad mein
// isi function reference se listener remove kar sakein.

function showMessage() {
    listenerOutput.textContent = "Listener active hai bhai!";
}

// Start button listener add karega.
startBtn.addEventListener("click", function () {
    clickBtn.addEventListener("click", showMessage);

    listenerOutput.textContent = "Listener start kar diya";
});

// Stop button listener remove karega.
stopBtn.addEventListener("click", function () {
    clickBtn.removeEventListener("click", showMessage);

    listenerOutput.textContent = "Listener remove kar diya";
});

// ==================================================
// 17. EVENT DELEGATION
// ==================================================

// Event delegation mein parent par ek listener lagate hain
// aur uske child elements ke events handle karte hain.

let parent = document.getElementById("parent");

parent.addEventListener("click", function (event) {

    // Check kar rahe hain ki click child button par hua hai.

    if (event.target.classList.contains("childBtn")) {
        console.log("Button clicked:", event.target.textContent);

        heading.textContent = event.target.textContent + " clicked";
    }
});

// Teeno buttons ke liye alag-alag listener lagane ki zaroorat nahi.
// Parent ka listener teeno ko handle kar raha hai.

// ==================================================
// 18. EVENT BUBBLING
// ==================================================

// Event bubbling mein event child se parent ki taraf
// propagate kar sakta hai.

// Example:
// Child button click hua toh child ka event parent tak bhi
// pahunch sakta hai.

parent.addEventListener("click", function () {
    console.log("Parent ka click listener chala");
});

// Upar event delegation wala listener bhi parent par laga hai.
// Isliye parent ke multiple listeners execute ho sakte hain.

// ==================================================
// 19. stopPropagation()
// ==================================================

// stopPropagation() event ko aage propagate hone se rokta hai.

// Example:
// parent.addEventListener("click", function() {
//     console.log("Parent clicked");
// });
//
// let child = document.querySelector(".childBtn");
//
// child.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("Child clicked");
// });

// Is example mein child ka event parent tak bubble nahi karega
// isliye parent ka click listener us event ke liye nahi chalega.

// ==================================================
// 20. ONCE OPTION
// ==================================================

// { once: true } se listener sirf ek baar chalega.

doubleClickBtn.addEventListener("click", function () {
    console.log("Ye listener sirf ek baar chalega");
}, { once: true });

// Dhyan de:
// Ye listener click event par laga hai.
// Upar double-click listener alag hai.

// ==================================================
// 21. MOUSEMOVE EVENT
// ==================================================

// mousemove tab chalta hai jab mouse move karta hai.
// Ye event bahut baar fire ho sakta hai.

box.addEventListener("mousemove", function (event) {
    console.log("Mouse position:", event.clientX, event.clientY);
});

// clientX = viewport ke left se mouse ki horizontal position
// clientY = viewport ke top se mouse ki vertical position

// ==================================================
// 22. FOCUS AND BLUR EVENTS
// ==================================================

// focus tab chalta hai jab input active hota hai.

nameInput.addEventListener("focus", function () {
    console.log("Name input focus mein hai");
});

// blur tab chalta hai jab input ka focus hat jaata hai.

nameInput.addEventListener("blur", function () {
    console.log("Name input se focus hat gaya");
});

// ==================================================
// 23. EVENT LISTENER COMPLETE
// ==================================================

console.log("Events and event listeners loaded successfully");
