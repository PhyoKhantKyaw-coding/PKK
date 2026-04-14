export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'programming-fundamentals';
export const tabLabel = 'PROGRAMMING FUNDAMENTALS';
export const tabIcon = '💻';

export const notes: LearningNote[] = [
  {
    id: 'what-is-programming',
    title: 'What is Programming?',
    content: `Programming ဆိုတာက Computer ကို အလုပ်လုပ်ခိုင်းဖို့ Instructions (ညွှန်ကြားချက်တွေ) ရေးတာပါ။

**How it works?**
1. Developer → Code ရေးတယ်
2. Compiler/Interpreter → Code ကိုနားလည်အောင်ပြောင်းတယ်
3. Computer → Execute လုပ်တယ်

**Why use?**
- Automation (အလုပ်တွေကို auto လုပ်ဖို့)
- Software development
- Problem solving`,
    examples: [
      'System.out.println("Hello World"); — Computer ကို "Hello World" print ထုတ်ခိုင်းတာ',
    ],
    keyPoints: [
      'Programming = Computer instructions ရေးသားခြင်း',
      'Developer ရေးသား → Compiler/Interpreter ပြောင်း → Computer execute လုပ်',
      'Automation, Software development, Problem solving အတွက် အသုံးဝင်',
    ],
  },
  {
    id: 'algorithm-logic-thinking',
    title: 'Algorithm & Logic Thinking',
    content: `Algorithm ဆိုတာ Problem တစ်ခုကို ဖြေရှင်းဖို့ Step-by-step solution ဖြစ်ပါတယ်။

**Why important?**
- Coding မရေးခင် logic clear ဖြစ်စေတယ်
- Bug လျော့တယ်`,
    examples: [
      'Tea လုပ်ခြင်း Algorithm: 1) Water boil → 2) Tea leaf ထည့် → 3) Sugar ထည့် → 4) Drink',
    ],
    keyPoints: [
      'Algorithm = Step-by-step problem solving',
      'Logic clear ဖြစ်ပြီး bug လျော့ကျစေတယ်',
      'Coding မရေးခင် algorithm ချမှတ်သင့်',
    ],
  },
  {
    id: 'data-types',
    title: 'Data Types (Primitive vs Reference)',
    content: `Data Type ဆိုတာ Data ကိုဘယ်လိုသိမ်းမလဲဆိုတာ define လုပ်တာဖြစ်ပါတယ်။

**Primitive Types:** int, float, char, boolean — Simple value သိမ်းတယ်

**Reference Types:** Array, Object — Memory address ကိုညွှန်းတယ်`,
    examples: [
      'int a = 10; // primitive',
      'String name = "PK"; // reference',
    ],
    keyPoints: [
      'Primitive = Simple value (int, float, char, boolean)',
      'Reference = Memory address (Array, Object)',
    ],
  },
  {
    id: 'variables-constants',
    title: 'Variables & Constants',
    content: `**Variable:** Change လို့ရတဲ့ data storage

**Constant:** Change မလုပ်နိုင် (fixed value)

**Why use?**
- Data store လုပ်ဖို့
- Dynamic program ဖြစ်ဖို့`,
    examples: [
      'int age = 20; // variable — change လို့ရ',
      'const double PI = 3.14; // constant — change မလုပ်နိုင်',
    ],
    keyPoints: [
      'Variable = Change လို့ရတဲ့ data storage',
      'Constant = Change မလုပ်နိုင်',
      'Data store နဲ့ dynamic program အတွက် အသုံးဝင်',
    ],
  },
  {
    id: 'operators',
    title: 'Operators',
    content: `Operators are used to perform operations on variables and values.

**Arithmetic:** +, -, *, /, %

**Comparison:** ==, !=, >, <

**Logical:** &&, ||, !`,
    examples: [
      'if (age > 18 && age < 30) { /* valid age range */ }',
    ],
    keyPoints: [
      'Arithmetic operators: +, -, *, /, %',
      'Comparison operators: ==, !=, >, <',
      'Logical operators: &&, ||, !',
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow (if, else, switch)',
    content: `Control Flow ဆိုတာ Decision making ဖြစ်ပါတယ်။ Condition ပေါ်မူတည်ပြီး code execution ကို ထိန်းချုပ်တယ်။`,
    examples: [
      `if(age > 18){
    System.out.println("Adult");
}else{
    System.out.println("Child");
}`,
    ],
    keyPoints: [
      'if/else for conditional execution',
      'switch for multiple conditions',
      'Decision making အတွက် အဓိကကျ',
    ],
  },
  {
    id: 'loops',
    title: 'Loops (for, while, do-while)',
    content: `Loops ဆိုတာ Repeat work ဖြစ်ပါတယ်။

**Types:**
- **for** → known loop count
- **while** → condition based
- **do-while** → at least 1 time run`,
    examples: [
      `for(int i=0; i<5; i++){
    System.out.println(i);
}`,
    ],
    keyPoints: [
      'for = known loop count',
      'while = condition based',
      'do-while = at least 1 time run',
    ],
  },
  {
    id: 'functions-methods',
    title: 'Functions / Methods',
    content: `Functions ဆိုတာ Reusable code block ဖြစ်ပါတယ်။

**Why use?**
- Code reuse
- Clean structure`,
    examples: [
      `int add(int a, int b){
    return a + b;
}`,
    ],
    keyPoints: [
      'Functions = Reusable code block',
      'Code reuse နဲ့ clean structure အတွက် အသုံးဝင်',
    ],
  },
  {
    id: 'oop-introduction',
    title: 'Object-Oriented Programming (OOP)',
    content: `OOP ဆိုတာ Real-world objects ကို code ထဲ represent လုပ်တာဖြစ်ပါတယ်။

**Why?**
- Maintainable
- Reusable
- Scalable`,
    keyPoints: [
      'OOP = Real-world modeling',
      'Maintainable, Reusable, Scalable',
    ],
  },
  {
    id: 'class-object',
    title: 'Class & Object',
    content: `**Class:** Blueprint (ပုံစံပြုတ်)

**Object:** Real instance (တကယ့် instance)`,
    examples: [
      `class Car {
    String color;
}

Car c = new Car();`,
    ],
    keyPoints: [
      'Class = Blueprint',
      'Object = Real instance',
    ],
  },
  {
    id: 'inheritance',
    title: 'Inheritance',
    content: `Inheritance ဆိုတာ Parent → Child inheritance ဖြစ်ပါတယ်။ Child class က Parent class ရဲ့ properties နဲ့ methods ကို inherit လုပ်တယ်။

**Why?**
- Code reuse`,
    examples: [
      `class Animal {}
class Dog extends Animal {}`,
    ],
    keyPoints: [
      'Parent → Child inheritance',
      'Code reuse အတွက် အသုံးဝင်',
    ],
  },
  {
    id: 'polymorphism',
    title: 'Polymorphism',
    content: `Polymorphism ဆိုတာ One method, many forms ဖြစ်ပါတယ်။`,
    examples: [
      `void run(){
   System.out.println("Animal runs");
}

// Override → different behavior`,
    ],
    keyPoints: [
      'One method, many forms',
      'Override → different behavior',
    ],
  },
  {
    id: 'encapsulation',
    title: 'Encapsulation',
    content: `Encapsulation ဆိုတာ Data hide + control access ဖြစ်ပါတယ်။`,
    examples: [
      `private int age;
public int getAge(){
   return age;
}`,
    ],
    keyPoints: [
      'Data hide + control access',
      'Private data, public getters/setters',
    ],
  },
  {
    id: 'abstraction',
    title: 'Abstraction',
    content: `Abstraction ဆိုတာ Only important detail show ဖြစ်ပါတယ်။ Internal complexity ကို hide လုပ်တယ်။`,
    examples: [
      'Car drive → engine detail မမြင်, just drive()',
    ],
    keyPoints: [
      'Only important detail show',
      'Internal complexity hide',
    ],
  },
  {
    id: 'error-handling',
    title: 'Error Handling (Exception)',
    content: `Error Handling ဆိုတာ Error handle လုပ်တဲ့ mechanism ဖြစ်ပါတယ်။`,
    examples: [
      `try{
   int a = 10/0;
}catch(Exception e){
   System.out.println("Error");
}`,
    ],
    keyPoints: [
      'try/catch for error handling',
      'Prevents program crash',
    ],
  },
  {
    id: 'memory-management',
    title: 'Memory Management Basics',
    content: `**Stack:** local variables သိမ်းတယ်

**Heap:** objects သိမ်းတယ်`,
    examples: [
      'int a = 10; // stack',
      'Car c = new Car(); // heap',
    ],
    keyPoints: [
      'Stack = local variables',
      'Heap = objects',
    ],
  },
  {
    id: 'compile-vs-runtime',
    title: 'Compile Time vs Run Time 🔥',
    content: `**Compile Time:** Code compile လုပ်တဲ့အချိန် error (Syntax error)

**Run Time:** Program run ပြီးမှ error (Logical error)

| Compile Time | Run Time |
|---|---|
| Before run | During run |
| Syntax error | Logical error |`,
    examples: [
      'Compile Time: int a = "hello"; // ❌',
      'Run Time: int a = 10/0; // ❌ runtime error',
    ],
    keyPoints: [
      'Compile Time = Before run, Syntax error',
      'Run Time = During run, Logical error',
      'Compile vs Runtime = Error timing',
    ],
  },
  {
    id: 'static-vs-dynamic-typing',
    title: 'Static vs Dynamic Typing',
    content: `**Static (Java, C#):** Type fix

**Dynamic (Python, JS):** Type change possible`,
    examples: [
      'Static: int a = 10; // type fixed',
      'Dynamic: a = 10; a = "hello"; // type change possible',
    ],
    keyPoints: [
      'Static = Type fix (Java, C#)',
      'Dynamic = Type change possible (Python, JS)',
      'Static vs Dynamic = Type flexibility',
    ],
  },
  {
    id: 'interpreted-vs-compiled',
    title: 'Interpreted vs Compiled Languages',
    content: `**Compiled:** First compile → machine code (C, C++, Java partially)

**Interpreted:** Line by line run (Python, JavaScript)`,
    examples: [
      'Compiled: C, C++, Java (partially)',
      'Interpreted: Python, JavaScript',
    ],
    keyPoints: [
      'Compiled = First compile → machine code',
      'Interpreted = Line by line run',
      'Interpreted vs Compiled = Execution method',
    ],
  },
];
