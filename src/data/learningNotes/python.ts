export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'python';
export const tabLabel = 'PYTHON';
export const tabIcon = '🐍';

export const notes: LearningNote[] = [
  {
    id: 'what-is-python',
    title: 'What is Python?',
    content: `Python ဆိုတာ High-level, easy-to-read programming language တစ်ခုဖြစ်ပါတယ်။

**Beginner friendly + Powerful**

**How it works?**
- Code ကို Interpreter (Python) က line by line run လုပ်တယ်
- Compile မလို (interpreted language)

**Why use?**
- Easy syntax (simple)
- AI / Data Science / Web / Automation
- Fast development`,
    examples: [
      'print("Hello PK")',
    ],
    keyPoints: [
      'Python = Easy + Powerful',
      'High-level, easy-to-read language',
      'Beginner friendly + Powerful',
      'AI, Data Science, Web, Automation အတွက် အသုံးဝင်',
    ],
  },
  {
    id: 'python-environment-setup',
    title: 'Python Environment Setup',
    content: `**Step by Step:**
1. Python Download → python.org
2. Install → "Add to PATH" ✔
3. Check version: \`python --version\`

**IDE / Tools:**
- VS Code
- PyCharm`,
    examples: [
      'python --version  # Check installed version',
    ],
    keyPoints: [
      'Download from python.org',
      'Install with "Add to PATH" checked',
      'Use VS Code or PyCharm as IDE',
    ],
  },
  {
    id: 'python-variables-data-types',
    title: 'Variables & Data Types in Python',
    content: `**Variable:** Type declare မလို (dynamic typing)

**Data Types:**
- **int** → 10
- **float** → 3.14
- **str** → "hello"
- **bool** → True/False
- **list** → [1, 2, 3]
- **dict** → {"name": "PK"}

**Why important?**
- Data structure control
- Memory usage`,
    examples: [
      'name = "PK"',
      'age = 20',
    ],
    keyPoints: [
      'Dynamic typing — no type declaration needed',
      'Common types: int, float, str, bool, list, dict',
      'Data structure control နဲ့ memory usage အတွက် အရေးကြီး',
    ],
  },
  {
    id: 'python-control-flow',
    title: 'Control Flow in Python',
    content: `Control Flow ဆိုတာ condition ပေါ်မူတည်ပြီး code execution ကို ထိန်းချုပ်တာဖြစ်ပါတယ်။

⚠️ **Indentation (space) is VERY IMPORTANT!**`,
    examples: [
      `age = 20

if age > 18:
    print("Adult")
else:
    print("Child")`,
    ],
    keyPoints: [
      'if/else for conditional execution',
      'Indentation (space) is VERY IMPORTANT ❗',
      'No braces {} — uses indentation for blocks',
    ],
  },
  {
    id: 'python-functions',
    title: 'Functions in Python',
    content: `Functions ဆိုတာ Reusable code ဖြစ်ပါတယ်။

**Why use?**
- Code clean
- Reuse`,
    examples: [
      `def add(a, b):
    return a + b

print(add(2, 3))`,
    ],
    keyPoints: [
      'Functions = Reusable code',
      'Use \`def\` keyword to define',
      'Code clean နဲ့ reuse အတွက် အသုံးဝင်',
    ],
  },
  {
    id: 'python-oop',
    title: 'OOP in Python',
    content: `Python မှာ OOP concepts တွေ ပါဝင်ပါတယ်။

**Concepts:**
- Class
- Object
- Inheritance
- Polymorphism`,
    examples: [
      `class Car:
    def __init__(self, color):
        self.color = color

c = Car("Red")
print(c.color)`,
    ],
    keyPoints: [
      'Class and Object',
      '__init__ constructor method',
      'Inheritance and Polymorphism support',
    ],
  },
  {
    id: 'python-file-handling',
    title: 'File Handling',
    content: `File Handling ဆိုတာ File read/write လုပ်တဲ့ mechanism ဖြစ်ပါတယ်။

**Better way:** Use \`with\` statement for automatic file closing.`,
    examples: [
      `file = open("test.txt", "w")
file.write("Hello PK")
file.close()`,
      `with open("test.txt", "r") as file:
    print(file.read())`,
    ],
    keyPoints: [
      'File read/write operations',
      'Use \`with\` statement for auto-close',
      'Modes: "r" (read), "w" (write), "a" (append)',
    ],
  },
  {
    id: 'python-modules-packages',
    title: 'Modules & Packages',
    content: `Modules & Packages ဆိုတာ Code reuse system ဖြစ်ပါတယ်။

**Why use?**
- Large project manage
- Reusable code`,
    examples: [
      `import math

print(math.sqrt(16))`,
    ],
    keyPoints: [
      'Modules = Code reuse system',
      'Use \`import\` to use external code',
      'Large project manage နဲ့ reusable code အတွက် အသုံးဝင်',
    ],
  },
  {
    id: 'python-virtual-environment',
    title: 'Virtual Environment (venv)',
    content: `Virtual Environment ဆိုတာ Project dependency isolate လုပ်တဲ့ tool ဖြစ်ပါတယ်။

**Create venv:**
\`python -m venv myenv\`

**Activate:**
\`myenv\\Scripts\\activate\`

**Why important?**
- Version conflict avoid
- Clean project`,
    examples: [
      'python -m venv myenv  # Create virtual environment',
      'myenv\\Scripts\\activate  # Activate (Windows)',
    ],
    keyPoints: [
      'Project dependency isolation',
      'Version conflict avoid',
      'Clean project environment',
    ],
  },
  {
    id: 'python-popular-libraries',
    title: 'Popular Libraries',
    content: `Python မှာ ကျယ်ပြန့်တဲ့ library ecosystem ရှိပါတယ်။

**Examples:**
- **requests** → API call
- **pandas** → data analysis
- **numpy** → math
- **flask / django** → web`,
    examples: [
      `import requests

res = requests.get("https://api.com")
print(res.json())`,
    ],
    keyPoints: [
      'requests → API call',
      'pandas → data analysis',
      'numpy → math',
      'flask / django → web development',
    ],
  },
  {
    id: 'python-backend-flask-django',
    title: 'Python for Backend (Flask / Django)',
    content: `**Flask (Lightweight):**
Simple, flexible micro-framework

**Django (Full framework):**
- Authentication built-in
- Admin panel

**Why use Python backend?**
- Fast development
- Clean code
- AI integration`,
    examples: [
      `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello PK"

app.run()`,
    ],
    keyPoints: [
      'Flask = Lightweight, flexible',
      'Django = Full framework with built-in features',
      'Fast development, clean code, AI integration',
    ],
  },
  {
    id: 'python-vs-other-languages',
    title: 'Python vs Other Languages',
    content: `| Feature | Python | Java | C# |
|---|---|---|---|
| Typing | Dynamic | Static | Static |
| Speed | Slower | Fast | Fast |
| Syntax | Easy | Medium | Medium |
| Use | AI, Web | Enterprise | Enterprise |

**Python Weakness:**
- Slow (interpreted)
- Not best for heavy system

**Python Strength:**
- Fast development
- Huge libraries
- AI king 👑`,
    examples: [],
    keyPoints: [
      'Dynamic typing vs Static (Java, C#)',
      'Slower but fast development',
      'Best for AI, huge libraries',
      'Not best for high performance systems',
    ],
  },
  {
    id: 'python-real-world-thinking',
    title: 'Real-World Thinking — When to Use Python?',
    content: `**When to use Python?**
✔ Automation
✔ AI / Machine Learning
✔ Data Analysis
✔ Simple backend

**Not best for:**
❌ High performance system (Game engine, OS)`,
    examples: [],
    keyPoints: [
      'Use for: Automation, AI/ML, Data Analysis, Simple backend',
      'Avoid for: High performance systems, Game engines, OS',
    ],
  },
  {
    id: 'python-final-summary',
    title: 'Final Summary 🔥',
    content: `**Python = Easy + Powerful**

- Dynamic typing
- Interpreted language
- Best for AI & fast development
- Huge ecosystem`,
    examples: [],
    keyPoints: [
      'Python = Easy + Powerful',
      'Dynamic typing',
      'Interpreted language',
      'Best for AI & fast development',
      'Huge ecosystem',
    ],
  },
];
