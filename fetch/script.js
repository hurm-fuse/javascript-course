
 // =====================================================
 // FETCH API + HTTP BASICS
 // =====================================================
 // API = Application Programming Interface
 // API ke through hum kisi server se data le ya bhej sakte hain.
 // HTTP = Hypertext Transfer Protocol
 // HTTP browser aur server ke beech communication ke rules hain.
 // FETCH API = JavaScript ka built-in function jo HTTP requests bhejta hai.
 // GET = Server se data lena.
 // POST = Server ko data bhejna ya resource create karne ki request karna.
 // JSON = Data exchange karne ka common format.
 // =====================================================
 // 1. DOM ELEMENTS
 // =====================================================
 // document.querySelector() HTML element ko select karta hai.
 // #getusers ka matlab hai id="getusers" wala element.
 // In variables mein HTML elements store hain, API ka data nahi.
const getusers = document.querySelector("#getusers");
const getposts = document.querySelector("#getposts");
const getwrong = document.querySelector("#getwrong");
const createpost = document.querySelector("#createpost");
const titleinput = document.querySelector("#titleinput");
const bodyinput = document.querySelector("#bodyinput");
const statusbox = document.querySelector("#status");
const output = document.querySelector("#output");
// =====================================================
// 2. STATUS MESSAGE FUNCTION
// =====================================================
// Function ka naam: showstatus
// Parameter: message
// Parameter woh value hai jo function ko call karte waqt milti hai.
// textContent element ke andar plain text change karta hai.
// className CSS class set karta hai.
// "success-text" aur "error-text" hamari CSS classes hain.
function showstatus(message, classname = "") {
    statusbox.textContent = message;
    statusbox.className = classname;
}
// =====================================================
// 3. CLEAR OUTPUT FUNCTION
// =====================================================
// replaceChildren() element ke existing child elements hata deta hai.
// Yahan purane API cards clear honge.
// Isse naye results ke saath purane results mix nahi honge.
function clearoutput() {
    output.replaceChildren();
}
// =====================================================
// 4. CREATE TEXT ELEMENT FUNCTION
// =====================================================
// createTextElement ek reusable function hai.
// Parameters:
// tag = HTML element ka naam, jaise h3 ya p.
// text = element ke andar dikhane wala text.
// classname = optional CSS class.
// document.createElement() naya HTML element banata hai.
// textContent safe tareeke se text add karta hai.
// return element ko function ke bahar use karne deta hai.
function createTextElement(tag, text, classname = "") {
    let element = document.createElement(tag);
    element.textContent = text;
    element.className = classname;
    return element;
}
// =====================================================
// 5. GET USERS
// =====================================================
// addEventListener("click", function) button click par function chalata hai.
// async function ke andar await use kar sakte hain.
// GET request server se users ka data mangti hai.
// JSONPlaceholder ek fake testing API hai.
getusers.addEventListener("click", async function() {
    try {
        showstatus("Loading users...");
        clearoutput();
        // fetch() URL par HTTP request bhejta hai.
        // await response aane tak is async function ko pause karta hai.
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        // response ek Response object hai.
        // response.status HTTP status code deta hai.
        // 200 ka matlab request successful hai.
        console.log("HTTP Status:", response.status);
        // response.ok true hota hai jab status 200-299 ke beech ho.
        console.log("HTTP OK:", response.ok);
        // fetch() 404 ya 500 par automatically reject nahi hota.
        // Isliye hum khud response.ok check karte hain.
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        // response.json() response body ko JavaScript data mein convert karta hai.
        // Yeh bhi asynchronous hai, isliye await lagaya hai.
        let data = await response.json();
        console.log("Users Data:", data);
        showstatus(`Users fetched successfully! Status: ${response.status}`, "success-text");
        // forEach() array ke har user ke liye callback chalata hai.
        data.forEach(function(user) {
            // API se aaye har user ke liye naya card banega.
            let card = document.createElement("div");
            card.className = "user-card";
            // user.name API ke current user ka name hai.
            let name = createTextElement("h3", user.name);
            let email = createTextElement("p", `Email: ${user.email}`);
            let city = createTextElement("p", `City: ${user.address.city}`);
            let company = createTextElement("p", `Company: ${user.company.name}`);
            // append() elements ko card ke andar add karta hai.
            card.append(name, email, city, company);
            // Output container mein complete card add hota hai.
            output.append(card);
        });
    } catch(error) {
        // try block mein network ya thrown error aaye toh catch chalega.
        // error.message error ka readable message deta hai.
        console.log("Error:", error);
        showstatus(`Error: ${error.message}`, "error-text");
    }
});
// =====================================================
// 6. GET POSTS
// =====================================================
// Is request mein hum posts fetch kar rahe hain.
// ?_limit=10 URL query parameter hai.
// Is API se sirf 10 posts mangne ke liye use kiya gaya hai.
getposts.addEventListener("click", async function() {
    try {
        showstatus("Loading posts...");
        clearoutput();
        let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        console.log("HTTP Status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        let data = await response.json();
        console.log("Posts Data:", data);
        showstatus(`Posts fetched successfully! Status: ${response.status}`, "success-text");
        data.forEach(function(post) {
            let card = document.createElement("div");
            card.className = "post-card";
            // Har post mein id, title, body aur userId hota hai.
            let id = createTextElement("p", `Post ID: ${post.id}`, "small-text");
            let title = createTextElement("h3", post.title);
            let body = createTextElement("p", post.body);
            card.append(id, title, body);
            output.append(card);
        });
    } catch(error) {
        console.log("Error:", error);
        showstatus(`Error: ${error.message}`, "error-text");
    }
});
// =====================================================
// 7. POST REQUEST
// =====================================================
// POST request server ko data send karti hai.
// Is example mein user form mein title aur body enter karta hai.
// JSON.stringify() JavaScript object ko JSON string mein convert karta hai.
createpost.addEventListener("click", async function() {
    try {
        // input.value se input ki current value milti hai.
        // trim() shuru aur end ke extra spaces remove karta hai.
        let title = titleinput.value.trim();
        let body = bodyinput.value.trim();
        // Agar title ya body empty ho toh request nahi bhejenge.
        if (!title || !body) {
            showstatus("Please enter both title and content.", "error-text");
            return;
        }
        showstatus("Creating post...");
        clearoutput();
        // fetch() ka second argument options object hota hai.
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            // method request ka HTTP method select karta hai.
            method: "POST",
            // headers request ke baare mein additional information dete hain.
            headers: {
                // Server ko batate hain ki request body JSON format mein hai.
                "Content-Type": "application/json"
            },
            // body mein server ko bheja jane wala data hota hai.
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        });
        console.log("HTTP Status:", response.status);
        console.log("HTTP OK:", response.ok);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        // Server ke response body ko JavaScript object mein convert karo.
        let data = await response.json();
        console.log("Created Post Response:", data);
        showstatus(`POST response received! Status: ${response.status}`, "success-text");
        // Response ko page par display karo.
        let card = document.createElement("div");
        card.className = "post-card";
        let id = createTextElement("p", `Returned Post ID: ${data.id}`, "small-text");
        let heading = createTextElement("h3", data.title);
        let content = createTextElement("p", data.body);
        card.append(id, heading, content);
        output.append(card);
    } catch(error) {
        console.log("Error:", error);
        showstatus(`Error: ${error.message}`, "error-text");
    }
});
// =====================================================
// 8. HTTP 404 ERROR TEST
// =====================================================
// Hum jaanbujhkar ek non-existent URL request karenge.
// Server 404 response dega.
// fetch() normally 404 par reject nahi hota.
// response.ok false hoga, isliye hum Error throw karenge.
getwrong.addEventListener("click", async function() {
    try {
        showstatus("Testing HTTP 404...");
        clearoutput();
        let response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
        console.log("HTTP Status:", response.status);
        console.log("HTTP OK:", response.ok);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log("Caught Error:", error.message);
        showstatus(`Request failed: ${error.message}`, "error-text");
    }
});
