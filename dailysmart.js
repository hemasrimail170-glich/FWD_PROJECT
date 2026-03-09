/* ══════════════════════════════════════════════════════
   CO3: Objects – Topic knowledge base with explanations
   All explanations are FRONTEND only — no API needed!
══════════════════════════════════════════════════════ */
const TOPIC_KB = {
  /* ─── CO1: Internet & HTML ─── */
  "internet fundamentals": {
    co:"CO1", def:"The internet is a global network of computers communicating using standardized protocols (TCP/IP). It allows sharing of data, resources and services worldwide.",
    points:["Uses packet switching to send data","TCP/IP is the core communication protocol","Data travels through routers and ISPs","DNS translates domain names to IP addresses"],
    code:`// Example: Checking network status (CO4: Browser API)
if (navigator.onLine) {
  console.log("You are connected to the internet!");
} else {
  console.log("You are offline.");
}`
  },
  "http/https protocols": {
    co:"CO1", def:"HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web. HTTPS adds SSL/TLS encryption for secure communication.",
    points:["HTTP is stateless – each request is independent","HTTPS encrypts data between client and server","Common HTTP methods: GET, POST, PUT, DELETE","Status codes: 200 OK, 404 Not Found, 500 Server Error"],
    code:`// CO5: fetch uses HTTPS by default
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));`
  },
  "web client-server architecture": {
    co:"CO1", def:"A model where the client (browser) requests resources and the server responds. The browser renders HTML/CSS/JS received from the server.",
    points:["Client sends HTTP request to server","Server processes and sends back a response","Browser renders HTML, CSS and runs JavaScript","REST APIs follow client-server architecture"],
    code:`// Client sends request, server responds
// Client side (browser):
fetch('/api/topics')              // request
  .then(res => res.json())        // parse response
  .then(data => render(data));    // use data`
  },
  "html document structure": {
    co:"CO1", def:"An HTML document has a defined structure starting with DOCTYPE, followed by html, head and body tags that organise the page content.",
    points:["<!DOCTYPE html> tells browser it's HTML5","<head> contains meta info, links, title","<body> contains visible page content","Tags are nested and must be properly closed"],
    code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Page</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`
  },
  "headings": {
    co:"CO1", def:"HTML provides 6 heading levels h1–h6. h1 is the most important (page title), h6 the least. Used to structure content hierarchically.",
    points:["Use only ONE h1 per page for SEO","Headings help screen readers navigate","Don't skip heading levels (h1→h3 is bad)","Headings affect SEO ranking"],
    code:`<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Sub-section Heading</h3>
<h4>Sub-sub-section</h4>`
  },
  "css syntax": {
    co:"CO1", def:"CSS uses a selector { property: value; } syntax to apply styles. A rule set targets HTML elements and defines their visual appearance.",
    points:["Selector targets the HTML element","Property is what you're styling (color, font)","Value is what you set it to","Multiple declarations go inside { }"],
    code:`/* Selector { property: value; } */
h1 {
  color: #f5c842;        /* color property */
  font-size: 2rem;       /* size property */
  margin-bottom: 1rem;   /* spacing property */
}`
  },
  "core selectors": {
    co:"CO1", def:"CSS selectors target HTML elements to apply styles. Types include element, class, ID, attribute, pseudo-class and universal selectors.",
    points:["Element selector: p { } – targets all <p>","Class selector: .card { } – targets class='card'","ID selector: #header { } – targets id='header'","* { } is universal selector (targets everything)"],
    code:`p       { color: white; }    /* element */
.card   { padding: 1rem; }   /* class */
#header { background: #000; } /* id */
a:hover { color: yellow; }   /* pseudo-class */
*       { box-sizing: border-box; } /* universal */`
  },
  "color representations": {
    co:"CO1", def:"CSS supports multiple ways to define colors: named colors, hex codes, RGB, RGBA, HSL and HSLA values.",
    points:["Named: red, blue, coral, transparent","Hex: #ff0000 (red), #f5c842 (yellow)","RGB: rgb(255, 0, 0) – red, green, blue values","RGBA adds alpha (opacity): rgba(0,0,0,0.5)","HSL: hsl(hue, saturation%, lightness%)"],
    code:`color: red;                   /* named */
color: #f5c842;               /* hex */
color: rgb(245, 200, 66);     /* rgb */
color: rgba(245,200,66, 0.8); /* rgba */
color: hsl(45, 90%, 61%);     /* hsl */`
  },
  "padding margin border": {
    co:"CO1", def:"The CSS Box Model defines spacing: margin is outside the element, border surrounds it, padding is inside between border and content.",
    points:["Margin: space outside the element","Border: the element's border/outline","Padding: space inside between border & content","box-sizing: border-box includes padding in width"],
    code:`.box {
  margin: 20px;        /* outside space */
  border: 2px solid #f5c842; /* border */
  padding: 16px;       /* inside space */
  
  /* shorthand: top right bottom left */
  margin: 10px 20px 10px 20px;
  padding: 8px 16px;   /* vertical horizontal */
}`
  },
  /* ─── CO2: Forms & CSS Layouts ─── */
  "forms": {
    co:"CO2", def:"HTML forms collect user input and send it to a server. The <form> element wraps inputs and defines how data is submitted.",
    points:["action attribute sets where data goes","method: GET (URL) or POST (hidden body)","enctype needed for file uploads","Use labels for accessibility"],
    code:`<form action="/submit" method="POST">
  <label for="name">Your Name:</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">Submit</button>
</form>`
  },
  "input types": {
    co:"CO2", def:"HTML5 provides many input types beyond text, giving users appropriate keyboards on mobile and built-in validation.",
    points:["text, email, password, number, tel","date, time, color, range, file","checkbox, radio for selections","search, url for specific data formats"],
    code:`<input type="text"     placeholder="Name">
<input type="email"    placeholder="Email">
<input type="password" placeholder="Password">
<input type="number"   min="1" max="10">
<input type="date">
<input type="checkbox"> Accept Terms
<input type="color">   <!-- Color picker -->`
  },
  "semantic tags": {
    co:"CO2", def:"Semantic HTML tags describe the meaning of content, not just its appearance. They improve accessibility and SEO.",
    points:["<header> – page/section header","<nav> – navigation links","<main> – main content area","<article> – self-contained content","<section> – thematic group","<footer> – page/section footer","<aside> – sidebar/related content"],
    code:`<header>  <nav>...</nav>  </header>
<main>
  <article>
    <section>...</section>
  </article>
  <aside>Related links</aside>
</main>
<footer>© 2025 StudySync</footer>`
  },
  "flexbox": {
    co:"CO2", def:"Flexbox is a CSS layout model for arranging items in a row or column, with powerful alignment and distribution controls.",
    points:["display:flex on parent activates flexbox","flex-direction: row (default) or column","justify-content: aligns along main axis","align-items: aligns along cross axis","flex:1 makes item grow to fill space"],
    code:`.container {
  display: flex;
  flex-direction: row;        /* or column */
  justify-content: space-between; /* main axis */
  align-items: center;        /* cross axis */
  gap: 1rem;                  /* space between items */
}
.item { flex: 1; }            /* grow equally */`
  },
  "css grid": {
    co:"CO2", def:"CSS Grid is a two-dimensional layout system for creating complex page layouts with rows and columns.",
    points:["display:grid on parent activates grid","grid-template-columns defines column sizes","grid-template-rows defines row sizes","gap adds space between grid cells","fr unit = fraction of available space"],
    code:`.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 3 cols */
  grid-template-rows: auto;
  gap: 1rem;
}
/* item spans 2 columns */
.wide-item { grid-column: span 2; }`
  },
  "media queries": {
    co:"CO2", def:"Media queries allow applying different CSS styles based on screen size, orientation or device type. Essential for responsive design.",
    points:["@media (condition) { CSS rules }","min-width: applies from that width upward","max-width: applies up to that width","Mobile-first: write mobile CSS first, then add @media for larger screens"],
    code:`/* Mobile first – default styles */
.grid { grid-template-columns: 1fr; }

/* Tablet: 768px and above */
@media (min-width: 768px) {
  .grid { grid-template-columns: 1fr 1fr; }
}

/* Desktop: 1024px and above */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}`
  },
  "css transitions": {
    co:"CO2", def:"CSS transitions smoothly animate changes in CSS properties over a specified duration, triggered by state changes like :hover.",
    points:["transition: property duration timing-function","All properties: transition: all .3s ease","timing functions: ease, linear, ease-in-out","Can transition multiple properties at once"],
    code:`.button {
  background: #f5c842;
  /* property  duration  easing */
  transition: background .3s ease,
              transform  .2s ease;
}
.button:hover {
  background: #42c8f5;
  transform: translateY(-3px);
}`
  },
  "css animations": {
    co:"CO2", def:"CSS animations use @keyframes to define multi-step animations with full control over intermediate states.",
    points:["@keyframes defines animation steps","animation-name links element to keyframes","animation-duration sets how long it runs","animation-iteration-count: infinite loops forever","from/to or 0%/100% define start and end"],
    code:`@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card {
  animation: fadeIn 0.6s ease both;
}`
  },
  "css custom properties": {
    co:"CO2", def:"CSS Custom Properties (variables) store reusable values that can be referenced throughout a stylesheet. Declared with -- prefix.",
    points:["Declared in :root for global scope","Syntax: --variable-name: value","Used with var(--variable-name)","Can be changed with JavaScript","Great for theming (dark/light mode)"],
    code:`:root {
  --primary: #f5c842;
  --bg: #0b0e17;
  --spacing: 1rem;
}

.card {
  background: var(--bg);
  border-color: var(--primary);
  padding: var(--spacing);
}`
  },
  /* ─── CO3: JavaScript ─── */
  "conditions": {
    co:"CO3", def:"Conditions control program flow based on whether expressions are true or false. JavaScript has if/else, else if, switch and ternary operators.",
    points:["if/else: basic true/false branching","else if: multiple conditions","switch: compare one value to many cases","Ternary: condition ? valueIfTrue : valueIfFalse","Falsy values: 0, '', null, undefined, false, NaN"],
    code:`// if / else if / else
if (score >= 90) {
  console.log("A grade");
} else if (score >= 70) {
  console.log("B grade");
} else {
  console.log("Needs improvement");
}

// Ternary
const msg = score >= 50 ? "Pass" : "Fail";`
  },
  "loops": {
    co:"CO3", def:"Loops repeat a block of code multiple times. JavaScript has for, while, do-while, for-of and for-in loops.",
    points:["for loop: known number of iterations","while loop: repeat while condition is true","for-of: iterate array values","for-in: iterate object keys","break exits the loop, continue skips iteration"],
    code:`// for loop
for (let i = 0; i < 5; i++) {
  console.log("Day " + i);
}

// for-of (arrays)
const topics = ["HTML", "CSS", "JS"];
for (const topic of topics) {
  console.log(topic);
}

// while loop
let count = 0;
while (count < 3) { count++; }`
  },
  "functions": {
    co:"CO3", def:"Functions are reusable blocks of code that perform a task. Defined with function keyword or as arrow functions.",
    points:["Parameters are inputs, return sends output","Functions are first-class objects in JS","Can be assigned to variables","Default parameter values: fn(x = 0)","IIFE: immediately invoked function expression"],
    code:`// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const square = function(n) { return n * n; };

// Default parameter
function greet(name = "Student") {
  return "Hello, " + name;
}

console.log(greet("Alice")); // Hello, Alice`
  },
  "arrow functions": {
    co:"CO3", def:"Arrow functions are a shorter syntax for writing functions. They don't have their own 'this' context, making them great for callbacks.",
    points:["Shorter syntax than regular functions","No own 'this' binding","If single expression, can omit return & braces","Great for callbacks and array methods"],
    code:`// Regular function
function add(a, b) { return a + b; }

// Arrow function
const add = (a, b) => a + b;

// Arrow with body
const greet = name => {
  const msg = "Hello " + name;
  return msg;
};

// In array methods
const doubled = [1,2,3].map(n => n * 2);`
  },
  "callback functions": {
    co:"CO3", def:"A callback is a function passed as an argument to another function and called later. Used heavily in events, timers and array methods.",
    points:["Passed as argument to another function","Called inside the outer function","Used in: setTimeout, addEventListener, .map()","Enables asynchronous programming patterns"],
    code:`// setTimeout uses callback
setTimeout(() => {
  console.log("3 seconds passed!");
}, 3000);

// Event listener uses callback
button.addEventListener('click', function() {
  console.log("Button clicked!");
});

// Array method uses callback
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2,4,6]`
  },
  "objects": {
    co:"CO3", def:"Objects store data as key-value pairs (properties) and can also contain functions (methods). They are the core building block of JavaScript.",
    points:["Properties: data stored in key:value format","Methods: functions stored as properties","Access with dot notation or ['bracket']","Object.keys(), Object.values() for iteration","const object can still have properties changed"],
    code:`// Create object
const student = {
  name: "Alice",
  age: 20,
  courses: ["HTML", "CSS", "JS"],
  greet() {                       // method
    return "Hi, I am " + this.name;
  }
};

// Access properties
console.log(student.name);       // Alice
console.log(student['age']);     // 20
student.greet();                 // Hi, I am Alice`
  },
  "array methods": {
    co:"CO3", def:"JavaScript arrays have built-in methods to transform, search, filter and reduce data without manual loops.",
    points:["map(): transform each element, returns new array","filter(): keep elements matching condition","find(): return first match","reduce(): accumulate values into one result","forEach(): loop without returning array","includes(): check if value exists"],
    code:`const topics = ["HTML", "CSS", "JS", "React"];

// map – transform
const upper = topics.map(t => t.toUpperCase());

// filter – keep matching
const short = topics.filter(t => t.length <= 3);
// ["CSS", "JS"]

// find – first match
const found = topics.find(t => t.startsWith("J"));
// "JS"

// reduce – total count of characters
const total = topics.reduce((sum, t) => sum + t.length, 0);`
  },
  /* ─── CO4: DOM & Events ─── */
  "event handling": {
    co:"CO4", def:"Events are actions that happen in the browser (click, input, keypress). addEventListener lets us run code when events occur.",
    points:["addEventListener(event, callback)","Event object contains info about the event","e.preventDefault() stops default behavior","e.stopPropagation() stops event bubbling","Common events: click, input, submit, keydown, mouseover"],
    code:`const btn = document.getElementById('myBtn');

// Click event
btn.addEventListener('click', (e) => {
  console.log('Clicked!', e.target);
});

// Input event (fires as user types)
const input = document.querySelector('input');
input.addEventListener('input', (e) => {
  console.log('Value:', e.target.value);
});

// Prevent form default submit
form.addEventListener('submit', e => e.preventDefault());`
  },
  "dom manipulation": {
    co:"CO4", def:"The DOM (Document Object Model) is a tree of HTML elements that JavaScript can read and modify to dynamically update the page.",
    points:["getElementById, querySelector select elements","innerHTML changes content","classList.add/remove toggles classes","createElement + appendChild adds new elements","style property changes inline styles"],
    code:`// Select elements
const el = document.getElementById('title');
const btn = document.querySelector('.btn');

// Change content
el.textContent = "New Title";
el.innerHTML = "<strong>Bold Title</strong>";

// Change styles
el.style.color = "#f5c842";
el.classList.add('active');
el.classList.remove('hidden');

// Create & add new element
const div = document.createElement('div');
div.textContent = "New Element";
document.body.appendChild(div);`
  },
  "browser storage": {
    co:"CO4", def:"Browser storage lets websites save data locally. localStorage persists after browser closes; sessionStorage is cleared when tab closes.",
    points:["localStorage: persists permanently","sessionStorage: cleared when tab closes","Both store string data (use JSON.stringify)","JSON.parse converts string back to object","Max ~5MB per domain"],
    code:`// Save data
localStorage.setItem('user', JSON.stringify({name: 'Alice'}));

// Read data
const raw = localStorage.getItem('user');
const user = JSON.parse(raw);
console.log(user.name); // Alice

// Remove
localStorage.removeItem('user');

// Clear all
localStorage.clear();`
  },
  "asynchronous programming": {
    co:"CO4", def:"Async programming lets JavaScript run long tasks (API calls, timers) without blocking the page. Uses callbacks, Promises and async/await.",
    points:["JavaScript is single-threaded","Async operations go to the event queue","setTimeout, fetch are async operations","Promises have .then() for success and .catch() for error","async/await is cleaner syntax for Promises"],
    code:`// setTimeout is async
console.log("1");
setTimeout(() => console.log("3"), 1000);
console.log("2");
// Output: 1, 2, 3 (after 1 second)

// async / await
async function getData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}

getData().then(data => console.log(data));`
  },
  "promises": {
    co:"CO4", def:"A Promise represents a value that may be available now, in the future, or never. States: pending, fulfilled, or rejected.",
    points:["new Promise((resolve, reject) => {})","resolve() fulfills the promise","reject() rejects with an error",".then() runs on success, .catch() on error","Promise.all() waits for multiple promises"],
    code:`// Create a promise
const wait = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

// Use the promise
wait
  .then(result => console.log(result)) // "Done!"
  .catch(err => console.error(err));

// async/await version
async function run() {
  const result = await wait;
  console.log(result);
}`
  },
  /* ─── CO5: Advanced ─── */
  "exception handling": {
    co:"CO5", def:"Exception handling catches runtime errors gracefully using try/catch/finally so the program doesn't crash unexpectedly.",
    points:["try: code that might throw an error","catch(e): runs if try throws","finally: always runs (cleanup)","throw: manually throw an error","e.message has the error description"],
    code:`// try / catch / finally
try {
  const data = JSON.parse(invalidJSON);   // might throw
  processData(data);
} catch (error) {
  console.error("Error:", error.message); // handle error
} finally {
  console.log("Always runs");             // cleanup
}

// Throw custom error
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero!");
  return a / b;
}`
  },
  "es6 modules": {
    co:"CO5", def:"ES6 modules allow splitting JavaScript code into separate files with export and import statements for better organization.",
    points:["export: make functions/variables available","import: use exported items from other files","Default export: one main export per file","Named exports: multiple exports per file","<script type='module'> enables modules in HTML"],
    code:`// math.js – export
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }

// app.js – import
import multiply, { PI, add } from './math.js';
console.log(PI);          // 3.14159
console.log(add(2, 3));   // 5
console.log(multiply(4, 5)); // 20`
  },
  "api integration": {
    co:"CO5", def:"API integration means fetching data from external services using the fetch() API. Combined with async/await for clean code.",
    points:["fetch(url) returns a Promise","Response must be parsed (.json(), .text())","Always handle errors with try/catch","CORS: server must allow cross-origin requests","API keys go in headers, not in URLs"],
    code:`// CO5: API Integration with fetch
async function getTopics() {
  try {
    const res = await fetch('https://api.example.com/topics', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_KEY'
      }
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    return data;
  } catch(e) {
    console.error('Fetch failed:', e.message);
  }
}`
  },
  "cors": {
    co:"CO5", def:"CORS (Cross-Origin Resource Sharing) is a security feature that controls which domains can request resources from a server.",
    points:["Browser blocks cross-origin requests by default","Server must send Access-Control-Allow-Origin header","Preflight OPTIONS request sent for complex requests","Same origin = same protocol + domain + port","Use a proxy or backend to bypass CORS in dev"],
    code:`// Server must send this header:
// Access-Control-Allow-Origin: *   (or specific domain)

// Fetch to same origin – always works
fetch('/api/data');

// Fetch to different origin – needs CORS
fetch('https://other-site.com/api', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
});
// If server doesn't allow it → CORS error in browser`
  },
  "form validation with javascript": {
    co:"CO5", def:"JavaScript form validation checks user input before submitting, providing instant feedback without page reload.",
    points:["Check values on submit event","e.preventDefault() stops form submission","Show error messages next to fields","HTML5 required, minlength, pattern attributes","Use regex for custom patterns (email, phone)"],
    code:`form.addEventListener('submit', (e) => {
  e.preventDefault();           // stop default submit

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    showError("Email is required");
    return;
  }
  if (!emailRegex.test(email)) {
    showError("Invalid email format");
    return;
  }

  submitForm();  // all valid!
});`
  },
  "deploying the project": {
    co:"CO5", def:"Deploying means publishing your website so anyone on the internet can access it. Popular free options include GitHub Pages, Netlify and Vercel.",
    points:["GitHub Pages: free, push code to GitHub repo","Netlify: drag-and-drop or GitHub auto-deploy","Vercel: great for React/Next.js projects","Build step: minify CSS/JS for production","Always test on production URL after deploy"],
    code:`# Deploy to GitHub Pages:
# 1. Push code to GitHub repo
# 2. Settings → Pages → Branch: main

# Deploy to Netlify:
# 1. Drag your project folder to netlify.com/drop
# OR
# 2. Connect GitHub repo → auto-deploys on push

# Minify HTML/CSS/JS for production:
# Use build tools like Vite, Webpack, or Parcel`
  }
};

/* ── Helper: fuzzy-match a topic string to knowledge base ── */
function findExplanation(topic) {
  const key = topic.toLowerCase().trim();
  if (TOPIC_KB[key]) return TOPIC_KB[key];
  /* CO3: Array method – find with partial match */
  const match = Object.keys(TOPIC_KB).find(k =>
    key.includes(k) || k.includes(key) ||
    key.split(' ').some(w => w.length > 3 && k.includes(w))
  );
  return match ? TOPIC_KB[match] : null;
}

/* CO3: Objects – App state */
const S = {
  topics:[], schedule:[], days:[0,1,2,3,4],
  startDay:0, tpd:3, done:new Set(), activeEntry:null
};
const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/* CO4: Event Handling – init */
document.addEventListener('DOMContentLoaded', () => {
  initPills(); loadStorage();
  if (!S.topics.length) { preloadSyllabus(); }

  $('plannerForm').addEventListener('submit', e => { e.preventDefault(); generate(); });
  $('resetBtn').addEventListener('click', reset);
  $('si').addEventListener('input', debounce(parseSyllabus, 400));
  $('sdn').addEventListener('change', function(){
    S.days = Array.from({length:Math.min(7,Math.max(1,+this.value||5))},(_,i)=>i);
    initPills();
  });
  $('tpd').addEventListener('change', function(){ S.tpd = Math.max(1,+this.value||3); });

  /* Panel close buttons */
  $('epClose').addEventListener('click', closePanel);
  $('overlay').addEventListener('click', closePanel);
  $('markDoneBtn').addEventListener('click', () => {
    if (S.activeEntry === null) return;
    S.done.add(S.activeEntry); renderSchedule(); saveStorage();
    toast('🎉 Day marked complete!'); closePanel();
  });
});

function preloadSyllabus() {
  $('si').value = [
    'Internet fundamentals,HTTP/HTTPS protocols,Web client-server architecture',
    'HTML document structure,Headings,CSS syntax,Core selectors,Color representations,Padding Margin Border',
    'Forms,Input types,Semantic tags',
    'Flexbox,CSS Grid,Media queries,CSS transitions,CSS animations,CSS custom properties',
    'Conditions,Loops,Functions,Arrow functions,Callback functions',
    'Objects,Array methods',
    'Event handling,DOM manipulation',
    'Browser storage,Asynchronous programming,Promises',
    'Exception handling,ES6 modules',
    'API integration,Form validation with JavaScript,CORS,Deploying the Project',
  ].join(',');
  parseSyllabus();
}

/* CO3: Functions */
function initPills() {
  $('dayPills').innerHTML = '';
  DAYS.forEach((d,i) => {
    const p = document.createElement('button');
    p.type='button'; p.className='pill'+(S.days.includes(i)?' on':'');
    p.textContent=d.slice(0,3); p.setAttribute('aria-pressed',S.days.includes(i));
    p.addEventListener('click',()=>{
      const x=S.days.indexOf(i);
      if(x===-1){S.days.push(i);p.classList.add('on');p.setAttribute('aria-pressed','true');}
      else{if(S.days.length===1)return;S.days.splice(x,1);p.classList.remove('on');p.setAttribute('aria-pressed','false');}
      S.days.sort((a,b)=>a-b); $('sdn').value=S.days.length;
    });
    $('dayPills').appendChild(p);
  });
}

function parseSyllabus() {
  /* CO3: Array methods */
  S.topics = [...new Set($('si').value.split(/,|\n/).map(x=>x.trim()).filter(x=>x.length>2))];
  renderTags(); updateStats();
}

function renderTags() {
  const c=$('topicTags');
  if(!S.topics.length){c.innerHTML='<span style="color:var(--muted);font-size:.76rem">Type topics above…</span>';return;}
  const vis=S.topics.slice(0,8),ex=S.topics.length-vis.length;
  c.innerHTML=vis.map((t,i)=>`<span class="tag">${t.length>26?t.slice(0,26)+'…':t}<span class="x" data-i="${i}">✕</span></span>`).join('')
    +(ex>0?`<span class="tag" style="color:var(--accent)">+${ex} more</span>`:'');
  c.querySelectorAll('.x').forEach(b=>{
    b.addEventListener('click',()=>{S.topics.splice(+b.dataset.i,1);renderTags();updateStats();});
  });
}

/* CO4: Async – generate with promise */
function generate() {
  if(!S.topics.length){toast('⚠️ Enter at least one topic!');return;}
  if(!$('sd').value){toast('⚠️ Select a start day!');return;}
  S.startDay=+$('sd').value; S.tpd=+$('tpd').value||3; S.done.clear();
  setLoad(true);
  new Promise(r=>setTimeout(r,600)).then(()=>{
    buildSchedule(); renderSchedule(); saveStorage();
    setLoad(false); toast('✅ Plan ready! Click any day to study.');
  });
}

/* CO3: Arrow function */
const buildSchedule = () => {
  S.schedule=[];
  const q=[...S.topics]; let di=0;
  while(q.length>0&&di<S.days.length*8){
    S.schedule.push({day:S.days[di%S.days.length],wk:Math.floor(di/S.days.length),topics:q.splice(0,S.tpd)});
    di++;
  }
};

function renderSchedule() {
  const c=$('dayCards'), ti=(new Date().getDay()+6)%7;
  if(!S.schedule.length){c.innerHTML='<div class="empty"><span class="ic">🗓️</span><p>Generate a plan to see your schedule.</p></div>';return;}
  c.innerHTML=S.schedule.map((e,i)=>{
    const iT=e.day===ti&&e.wk===0, iD=S.done.has(i);
    return `<article class="dc ${iT?'today':''} ${iD?'done':''}" data-i="${i}" tabindex="0" role="button">
      <div class="dh">
        <span style="display:flex;align-items:center;gap:.5rem">
          <span class="dn">${DAYS[e.day]}<span class="dw">Wk ${e.wk+1}</span></span>
        </span>
        <span style="display:flex;align-items:center;gap:.4rem">
          <span style="font-size:.68rem;color:var(--muted)">${e.topics.length} topics</span>
          <span class="db ${iT?'':'m'}">${iT?'📍 Today':iD?'✓ Done':'Day '+(i+1)}</span>
        </span>
      </div>
      <ul class="dt">${e.topics.map(t=>`<li>${t}</li>`).join('')}</ul>
      <div style="margin-top:.5rem;font-size:.72rem;color:var(--accent2)">👆 Click to view full explanations</div>
    </article>`;
  }).join('');
  /* CO4: Event handling on dynamic elements */
  $$('.dc').forEach(card=>{
    card.addEventListener('click',()=>openPanel(+card.dataset.i));
    card.addEventListener('keydown',e=>{if(e.key==='Enter')openPanel(+card.dataset.i);});
  });
  updateStats();
}

/* ══════════════════════════════════════════
   OPEN EXPLANATION PANEL – main feature
   Shows detailed explanation for each topic
══════════════════════════════════════════ */
function openPanel(i) {
  const entry = S.schedule[i];
  if (!entry) return;
  S.activeEntry = i;

  /* Highlight selected card */
  $$('.dc').forEach(c=>c.classList.remove('selected'));
  $$('.dc')[i]?.classList.add('selected');

  /* Panel title */
  const iT = entry.day === (new Date().getDay()+6)%7 && entry.wk===0;
  $('epTitle').innerHTML = `📖 ${DAYS[entry.day]} – Week ${entry.wk+1} ${iT?'<span style="font-size:.7rem;background:var(--accent);color:#0b0e17;border-radius:50px;padding:.1rem .5rem;margin-left:.4rem">Today</span>':''}`;
  $('markDoneBtn').style.display = S.done.has(i) ? 'none' : 'flex';

  /* Build explanation cards for each topic */
  $('epBody').innerHTML = entry.topics.map((topic, idx) => {
    const exp = findExplanation(topic);
    const delay = idx * 0.07;

    if (!exp) {
      /* No explanation found – show basic info */
      return `<div class="topic-exp" style="animation-delay:${delay}s">
        <div class="topic-exp-head" onclick="toggleExp(this)">
          <div style="display:flex;align-items:center;flex:1;gap:.5rem">
            <span class="topic-name">${topic}</span>
          </div>
          <span class="toggle-icon">›</span>
        </div>
        <div class="topic-exp-body">
          <div class="exp-section">
            <div class="exp-text">This topic covers <strong>${topic}</strong> as part of your web development curriculum. 
            Study the course materials and practice with hands-on exercises to master this concept.</div>
          </div>
        </div>
      </div>`;
    }

    return `<div class="topic-exp" style="animation-delay:${delay}s">
      <div class="topic-exp-head" onclick="toggleExp(this)">
        <div style="display:flex;align-items:center;flex:1;gap:.5rem;flex-wrap:wrap">
          <span class="topic-name">${topic}</span>
          <span class="topic-co">${exp.co}</span>
        </div>
        <span class="toggle-icon">›</span>
      </div>
      <div class="topic-exp-body">
        <div class="exp-section">
          <div class="exp-label">📌 Definition</div>
          <div class="exp-text">${exp.def}</div>
        </div>
        <div class="exp-section">
          <div class="exp-label">✦ Key Points</div>
          <ul class="key-list">${exp.points.map(p=>`<li>${p}</li>`).join('')}</ul>
        </div>
        <div class="exp-section">
          <div class="exp-label">💻 Code Example</div>
          <div class="code-block"><code>${escHtml(exp.code)}</code></div>
        </div>
      </div>
    </div>`;
  }).join('');

  /* Open panel */
  $('explainPanel').classList.add('open');
  $('overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

/* Toggle individual topic accordion */
function toggleExp(head) {
  const body = head.nextElementSibling;
  const icon = head.querySelector('.toggle-icon');
  const isOpen = body.classList.contains('open');
  /* Close all others */
  $$('.topic-exp-body').forEach(b=>b.classList.remove('open'));
  $$('.topic-exp-head').forEach(h=>{h.classList.remove('active');h.querySelector('.toggle-icon').classList.remove('open');});
  if(!isOpen){
    body.classList.add('open');
    head.classList.add('active');
    icon.classList.add('open');
  }
}

function closePanel() {
  $('explainPanel').classList.remove('open');
  $('overlay').classList.remove('show');
  document.body.style.overflow = '';
  $$('.dc').forEach(c=>c.classList.remove('selected'));
}

/* Escape HTML for code blocks */
function escHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function updateStats() {
  $('stTotal').textContent=S.topics.length;
  $('stDays').textContent=S.schedule.length;
  const pct=S.schedule.length?Math.round(S.done.size/S.schedule.length*100):0;
  $('stDone').textContent=pct+'%';
  $('progB').style.width=pct+'%';
  $('progR').setAttribute('aria-valuenow',pct);
}

/* CO4: Browser Storage | CO5: Exception handling */
function saveStorage(){
  try{localStorage.setItem('ss2',JSON.stringify({topics:S.topics,schedule:S.schedule,days:S.days,done:[...S.done],tpd:S.tpd,startDay:S.startDay}));}
  catch(e){console.warn(e);}
}
function loadStorage(){
  try{
    const r=localStorage.getItem('ss2');if(!r)return;
    const v=JSON.parse(r);
    S.topics=v.topics||[];S.schedule=v.schedule||[];S.days=v.days||[0,1,2,3,4];
    S.tpd=v.tpd||3;S.startDay=v.startDay||0;S.done=new Set(v.done||[]);
    if(S.topics.length){$('si').value=S.topics.join(', ');renderTags();}
    if(S.schedule.length){$('sd').value=S.startDay;$('sdn').value=S.days.length;$('tpd').value=S.tpd;initPills();renderSchedule();}
    updateStats();
  }catch(e){console.warn(e);}
}

/* CO3: Callback – debounce */
function debounce(fn,d){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),d);};}
function setLoad(on){const b=$('genBtn');b.classList.toggle('loading',on);b.disabled=on;}
/* CO4: DOM – Toast */
function toast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);}
function reset(){
  if(!confirm('Reset?'))return;
  S.topics=[];S.schedule=[];S.done=new Set();
  $('si').value='';renderTags();
  $('dayCards').innerHTML='<div class="empty"><span class="ic">🗓️</span><p>Generate a plan to see your schedule.</p></div>';
  closePanel();
  try{localStorage.removeItem('ss2');}catch(e){}
  updateStats();toast('🗑️ Cleared!');
}