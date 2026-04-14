export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'javascript-typescript';
export const tabLabel = 'JAVASCRIPT & TYPESCRIPT';
export const tabIcon = '⚡';

export const notes: LearningNote[] = [
  {
    id: 'what-is-javascript',
    title: 'JavaScript ဆိုတာဘာလဲ? 🧠',
    content: `JavaScript ဆိုတာ Web browser ထဲမှာ run လုပ်တဲ့ programming language ဖြစ်ပါတယ်။

Frontend (UI) + Backend (Node.js) နှစ်ခုလုံးမှာသုံးနိုင်ပါတယ်။

**How it works?**
JS Code → Browser Engine (V8) → Execute

Single-thread + Event Loop system

**Why use?**
✔ Web development
✔ Interactive UI
✔ API calls
✔ Full-stack (Node.js)`,
    examples: [
      'JS Code → Browser Engine (V8) → Execute',
    ],
    keyPoints: [
      'JavaScript = Web browser programming language',
      'Frontend (UI) + Backend (Node.js)',
      'Single-thread + Event Loop system',
      'Web development, Interactive UI, API calls, Full-stack',
    ],
  },
  {
    id: 'js-version-evolution',
    title: 'JavaScript Version Evolution ⚙️ 🔥',
    content: `**Old JS (ES5 — 2009):**
- var
- function
- basic syntax

**ES6 (2015) 🔥 BIG UPDATE — Most important version**
Features:
- let / const
- Arrow functions
- Classes
- Template literals
- Modules

**ES7 – ES13 (2016 → 2022):**
- async/await 🔥
- optional chaining (?.)
- nullish coalescing (??)

**ES2023+:**
- Faster performance
- New array methods

**Interview Tip:** "ES6 introduced modern JavaScript"`,
    examples: [],
    keyPoints: [
      'ES5 = var, function, basic syntax',
      'ES6 (2015) = let/const, arrow functions, classes, template literals, modules',
      'ES7+ = async/await, optional chaining (?.), nullish coalescing (??)',
      'ES6 introduced modern JavaScript',
    ],
  },
  {
    id: 'js-variables',
    title: 'Variables 🧱',
    content: `**var vs let vs const:**

| var | let | const |
|---|---|---|
| global scope | block scope | block scope |
| reassign ✔ | reassign ✔ | ❌ |

**Myanmar:**
- var = old (မသုံးသင့်)
- let = change possible
- const = fixed`,
    examples: [
      'var a = 10;  // old, global scope',
      'let b = 20;  // block scope, change possible',
      'const c = 30; // block scope, fixed',
    ],
    keyPoints: [
      'var = old, global scope, reassignable',
      'let = block scope, reassignable',
      'const = block scope, fixed',
      'Use let/const instead of var',
    ],
  },
  {
    id: 'js-data-types',
    title: 'Data Types 🔢',
    content: `**Primitive:**
- number
- string
- boolean
- null
- undefined

**Reference:**
- object
- array`,
    examples: [
      'let name = "PK";  // string',
      'let arr = [1, 2, 3];  // array',
    ],
    keyPoints: [
      'Primitive: number, string, boolean, null, undefined',
      'Reference: object, array',
    ],
  },
  {
    id: 'js-control-flow',
    title: 'Control Flow 🔄',
    content: `Control Flow ဆိုတာ condition ပေါ်မူတည်ပြီး code execution ကို ထိန်းချုပ်တာဖြစ်ပါတယ်。

**if-else:** Conditional branching

**switch:** Multiple conditions`,
    examples: [
      `if(age > 18){
    console.log("Adult");
}`,
      `switch(role){
    case "admin":
        break;
}`,
    ],
    keyPoints: [
      'if-else for conditional execution',
      'switch for multiple conditions',
    ],
  },
  {
    id: 'js-loops',
    title: 'Loops 🔄',
    content: `Loops ဆိုတာ Repeat work ဖြစ်ပါတယ်။

**for:** Known loop count

**forEach:** Array iteration`,
    examples: [
      `for(let i=0; i<5; i++){
    console.log(i);
}`,
      'arr.forEach(x => console.log(x));',
    ],
    keyPoints: [
      'for = known loop count',
      'forEach = array iteration',
    ],
  },
  {
    id: 'js-functions',
    title: 'Functions 🔧',
    content: `Functions ဆိုတာ Reusable code block ဖြစ်ပါတယ်။

**Normal function:** Traditional syntax

**Arrow Function 🔥:** Modern, concise syntax`,
    examples: [
      `function add(a, b){
    return a + b;
}`,
      'const add = (a, b) => a + b;  // Arrow function 🔥',
    ],
    keyPoints: [
      'Normal function: traditional syntax',
      'Arrow function: modern, concise syntax',
      'Arrow functions are commonly used in modern JS',
    ],
  },
  {
    id: 'js-objects-arrays',
    title: 'Objects & Arrays 🧩',
    content: `**Object:** Key-value pairs

**Array:** Ordered list`,
    examples: [
      `let user = {
    name: "PK",
    age: 20
};`,
      'let arr = [1, 2, 3];',
    ],
    keyPoints: [
      'Object = key-value pairs',
      'Array = ordered list',
    ],
  },
  {
    id: 'js-async-programming',
    title: 'Async Programming ⏳ 🔥 VERY IMPORTANT',
    content: `**Problem (Blocking):** API call → wait ❌

**Solution:**

**✅ Promise:**
\`fetch(url).then(res => res.json());\`

**✅ async/await 🔥:**
\`async function getData(){ let res = await fetch(url); }\`

**Myanmar:** async = wait without blocking`,
    examples: [
      'fetch(url).then(res => res.json());  // Promise',
      `async function getData(){
    let res = await fetch(url);
}  // async/await 🔥`,
    ],
    keyPoints: [
      'Promise = async result handling',
      'async/await = wait without blocking 🔥',
      'Modern async programming uses async/await',
    ],
  },
  {
    id: 'js-event-loop',
    title: 'Event Loop (Interview 🔥)',
    content: `**What?** JS handles async tasks

**Flow:** Call Stack → Web API → Callback Queue → Event Loop

**Interview Tip:** "JS is single-thread but handles async using event loop"`,
    examples: [
      'Call Stack → Web API → Callback Queue → Event Loop',
    ],
    keyPoints: [
      'Event Loop = JS handles async tasks',
      'Flow: Call Stack → Web API → Callback Queue → Event Loop',
      'JS is single-thread but handles async using event loop',
    ],
  },
  {
    id: 'js-dom-manipulation',
    title: 'DOM Manipulation 🌐',
    content: `DOM Manipulation ဆိုတာ Update UI dynamically လုပ်တဲ့ mechanism ဖြစ်ပါတယ်။`,
    examples: [
      'document.getElementById("id").innerText = "Hello";',
    ],
    keyPoints: [
      'DOM = Document Object Model',
      'Update UI dynamically',
      'getElementById, querySelector, etc.',
    ],
  },
  {
    id: 'js-modules',
    title: 'Modules (ES6) 📦',
    content: `Modules ဆိုတာ Code organize and reuse လုပ်တဲ့ ES6 feature ဖြစ်ပါတယ်。

**Export:** Share code

**Import:** Use shared code`,
    examples: [
      'export const name = "PK";  // Export',
      'import { name } from "./file";  // Import',
    ],
    keyPoints: [
      'ES6 modules: import/export',
      'Export = share code',
      'Import = use shared code',
    ],
  },
  {
    id: 'ts-what-is-typescript',
    title: 'TypeScript 🔷 🔥 MUST',
    content: `TypeScript ဆိုတာ JavaScript + Type safety ဖြစ်ပါတယ်။

**Why use?**
✔ Error reduce
✔ Better large project
✔ Used in Vue / React`,
    examples: [
      'let age: number = 20;  // TypeScript with type',
    ],
    keyPoints: [
      'TypeScript = JavaScript + Type safety',
      'Error reduce, better for large projects',
      'Used in Vue / React',
    ],
  },
  {
    id: 'ts-types',
    title: 'Types in TS 🧠',
    content: `**Basic:**
- \`let name: string;\`
- \`let isDone: boolean;\`

**Array:**
- \`let nums: number[] = [1, 2, 3];\`

**Interface 🔥:**
\`interface User { name: string; age: number; }\``,
    examples: [
      'let name: string;',
      'let isDone: boolean;',
      'let nums: number[] = [1, 2, 3];',
      `interface User {
    name: string;
    age: number;
}`,
    ],
    keyPoints: [
      'Basic types: string, boolean, number',
      'Array types: number[], string[]',
      'Interface = object shape definition 🔥',
    ],
  },
  {
    id: 'ts-type-vs-interface',
    title: 'Type vs Interface 🔁',
    content: `| Type | Interface |
|---|---|
| flexible | extend |
| union ✔ | better for OOP |`,
    examples: [],
    keyPoints: [
      'Type = flexible, supports union',
      'Interface = extend, better for OOP',
      'Choose based on use case',
    ],
  },
  {
    id: 'ts-in-real-project',
    title: 'TS in Real Project 🔥',
    content: `Real project မှာ TypeScript ကို API call နဲ့ data handling အတွက် အသုံးပြုပါတယ်။`,
    examples: [
      `interface User {
    id: number;
    name: string;
}

const users: User[] = [];`,
    ],
    keyPoints: [
      'Use interfaces for API responses',
      'Type-safe data handling',
      'Prevents runtime errors',
    ],
  },
  {
    id: 'js-vs-ts',
    title: 'JS vs TS ⚛️',
    content: `| JS | TS |
|---|---|
| dynamic | static |
| error runtime | compile error |
| simple | safe |`,
    examples: [],
    keyPoints: [
      'JS = dynamic, error at runtime, simple',
      'TS = static, compile error, safe',
      'TS catches errors before runtime',
    ],
  },
  {
    id: 'ts-interview-questions',
    title: 'Interview Questions 🔥',
    content: `**❓ var vs let vs const**
👉 scope difference

**❓ == vs ===**
- == → value
- === → value + type

**❓ What is closure?**
👉 function remembers variable

**❓ What is hoisting?**
👉 variable move to top

**❓ What is promise?**
👉 async result`,
    examples: [],
    keyPoints: [
      'var/let/const = scope difference',
      '== = value, === = value + type',
      'Closure = function remembers variable',
      'Hoisting = variable move to top',
      'Promise = async result',
    ],
  },
  {
    id: 'ts-real-world-thinking',
    title: 'Real-World Thinking 🔥',
    content: `**🟢 Use JS:**
✔ Frontend
✔ API calls
✔ UI

**🟢 Use TS:**
✔ Large project
✔ Team work
✔ Production code`,
    examples: [],
    keyPoints: [
      'Use JS for: Frontend, API calls, UI',
      'Use TS for: Large project, Team work, Production code',
    ],
  },
  {
    id: 'ts-final-summary',
    title: 'Final Summary 🔥',
    content: `**JS = core web language**
**TS = safer version**
**async/await = MUST**
**Event Loop = interview**
**ES6 = modern JS**`,
    examples: [],
    keyPoints: [
      'JS = core web language',
      'TS = safer version of JS',
      'async/await = MUST know',
      'Event Loop = interview favorite',
      'ES6 = modern JavaScript',
    ],
  },
];
