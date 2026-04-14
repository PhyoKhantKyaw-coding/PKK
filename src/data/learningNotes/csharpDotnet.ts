export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'csharp-dotnet';
export const tabLabel = 'C# (.NET)';
export const tabIcon = '🔷';

export const notes: LearningNote[] = [
  {
    id: 'what-is-csharp',
    title: 'C# ဆိုတာဘာလဲ? 🧠',
    content: `C# ဆိုတာ Microsoft ရဲ့ Object-Oriented Programming Language တစ်ခုဖြစ်ပါတယ်။

.NET platform နဲ့အသုံးပြုတယ်။

**How it works?**
C# Code → Compile → IL → CLR → Run
- IL = Intermediate Language
- CLR = Common Language Runtime

CLR က memory, security, execution handle လုပ်တယ်။

**Why use C#?**
✔ Web API
✔ Enterprise System
✔ Desktop App
✔ Game (Unity)`,
    examples: [
      'C# Code → Compile → IL → CLR → Run',
    ],
    keyPoints: [
      'C# = Microsoft OOP language',
      '.NET platform အတွက် အသုံးပြု',
      'IL → CLR handles memory, security, execution',
      'Web API, Enterprise, Desktop, Unity Game အတွက် အသုံးဝင်',
    ],
  },
  {
    id: 'dotnet-version-evolution',
    title: '.NET Version Evolution ⚙️ 🔥',
    content: `**.NET Version Timeline:**

| Version | Type | Use |
|---|---|---|
| .NET Framework | Old | Legacy |
| .NET Core | Transition | Old |
| .NET 6 | LTS | Stable |
| .NET 7 | STS | Testing |
| .NET 8 | LTS 🔥 | Best now |
| .NET 9 | STS | New features |
| .NET 10 | LTS 🔥 | Future |

**Key Understanding:**
- LTS → Production
- STS → Testing

**Interview Answer:** "I use .NET 8 for production and follow .NET 10 for future improvements."`,
    examples: [],
    keyPoints: [
      'LTS = Long Term Support → Production',
      'STS = Short Term Support → Testing',
      '.NET 8 = Best for production now',
      '.NET 10 = Future LTS',
    ],
  },
  {
    id: 'csharp-basics',
    title: 'C# Basics 🧱',
    content: `**Syntax:**
\`using System;\`

**Data Types:**
- int → 10
- double → 3.14
- string → "PK"
- bool → true

**Variable:** Change လို့ရ
\`int age = 20;\`

**Constant:** Change မလုပ်နိုင်
\`const double PI = 3.14;\``,
    examples: [
      `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello PK");
    }
}`,
      'int age = 20; // variable',
      'const double PI = 3.14; // constant',
    ],
    keyPoints: [
      'Common types: int, double, string, bool',
      'Variable = changeable',
      'Constant = fixed value',
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow 🔄',
    content: `Control Flow ဆိုတာ condition ပေါ်မူတည်ပြီး code execution ကို ထိန်းချုပ်တာဖြစ်ပါတယ်။

**if-else:** Conditional branching

**switch:** Multiple conditions`,
    examples: [
      `if(age > 18)
{
    Console.WriteLine("Adult");
}`,
      `switch(age)
{
    case 18:
        Console.WriteLine("18");
        break;
}`,
    ],
    keyPoints: [
      'if-else for conditional execution',
      'switch for multiple conditions',
    ],
  },
  {
    id: 'loops',
    title: 'Loops 🔄',
    content: `Loops ဆိုတာ Repeat work ဖြစ်ပါတယ်။

**for:** Known loop count

**while:** Condition based`,
    examples: [
      `for(int i=0; i<5; i++)
{
    Console.WriteLine(i);
}`,
      `while(age > 0)
{
    age--;
}`,
    ],
    keyPoints: [
      'for = known loop count',
      'while = condition based',
    ],
  },
  {
    id: 'methods',
    title: 'Methods 🔧',
    content: `Methods ဆိုတာ Reusable code block ဖြစ်ပါတယ်။

**Why?**
- Reuse code
- Clean structure`,
    examples: [
      `int Add(int a, int b)
{
    return a + b;
}`,
    ],
    keyPoints: [
      'Methods = Reusable code blocks',
      'Reuse code နဲ့ clean structure',
    ],
  },
  {
    id: 'oop-in-csharp',
    title: 'OOP in C# 🧩 🔥 VERY IMPORTANT',
    content: `**Class & Object:** Blueprint and instance

**Encapsulation:** Data hide + property accessors

**Inheritance:** \`class Child : Parent\`

**Polymorphism:** \`virtual\` / \`override\`

**Abstraction:** \`abstract\` class / methods`,
    examples: [
      `class Car { public string Color; }
Car c = new Car();`,
      `private int age;
public int Age { get { return age; } set { age = value; } }`,
      `class Animal {}
class Dog : Animal {}`,
      `public virtual void Run(){}
public override void Run(){}`,
      `abstract class Animal { public abstract void Run(); }`,
    ],
    keyPoints: [
      'Class & Object = Blueprint & instance',
      'Encapsulation = Private data + public properties',
      'Inheritance = : (colon)',
      'Polymorphism = virtual / override',
      'Abstraction = abstract class / methods',
    ],
  },
  {
    id: 'linq',
    title: 'LINQ 🔍 🔥 MUST',
    content: `LINQ (Language Integrated Query) ဆိုတာ Data query လုပ်တဲ့ C# feature ဖြစ်ပါတယ်။

**Why important?**
- Replace loops
- Clean code`,
    examples: [
      `var list = new List<int> {1, 2, 3, 4};
var result = list.Where(x => x > 2).ToList();`,
    ],
    keyPoints: [
      'LINQ = Language Integrated Query',
      'Replace loops, clean code',
      'Where, Select, OrderBy, etc.',
    ],
  },
  {
    id: 'entity-framework-core',
    title: 'Entity Framework Core 🗄️',
    content: `EF Core ဆိုတာ ORM → DB handle with object ဖြစ်ပါတယ်။

**Concepts:**
- DbContext
- Migration
- DbSet`,
    examples: [
      'var users = context.Users.ToList();',
    ],
    keyPoints: [
      'ORM → Object-Relational Mapping',
      'DbContext → Database context',
      'Migration → Schema updates',
      'DbSet → Table representation',
    ],
  },
  {
    id: 'aspnet-core-web-api',
    title: 'ASP.NET Core Web API 🌐',
    content: `ASP.NET Core Web API ဆိုတာ Backend API တွေ ဖန်တီးတဲ့ framework ဖြစ်ပါတယ်။

**HTTP Methods:**
- GET → read
- POST → create
- PUT → update
- DELETE → delete`,
    examples: [
      `[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    [HttpGet]
    public string Get()
    {
        return "Hello PK";
    }
}`,
    ],
    keyPoints: [
      'Controller-based API development',
      'GET/POST/PUT/DELETE methods',
      '[ApiController] attribute',
      'Route attribute for URL mapping',
    ],
  },
  {
    id: 'dependency-injection',
    title: 'Dependency Injection 🔌 🔥',
    content: `Dependency Injection (DI) ဆိုတာ Object dependencies ကို outside က inject လုပ်တဲ့ pattern ဖြစ်ပါတယ်။

**Why?**
- Loose coupling
- Easy testing`,
    examples: [
      'services.AddScoped<IUserService, UserService>();',
    ],
    keyPoints: [
      'DI = Inject dependencies from outside',
      'Loose coupling',
      'Easy testing',
      'Scoped, Transient, Singleton lifetimes',
    ],
  },
  {
    id: 'middleware',
    title: 'Middleware 🧱',
    content: `Middleware ဆိုတာ Request/Response pipeline မှာ intercept လုပ်တဲ့ component ဖြစ်ပါတယ်။

**Flow:** Request → Middleware → Controller → Response`,
    examples: [
      'app.UseAuthentication();',
      'app.UseAuthorization();',
    ],
    keyPoints: [
      'Middleware = Request pipeline components',
      'Flow: Request → Middleware → Controller → Response',
      'Authentication, Authorization, Logging',
    ],
  },
  {
    id: 'jwt-authentication',
    title: 'JWT Authentication 🔐',
    content: `JWT (JSON Web Token) Authentication flow:

1. Login
2. Token generate
3. Client send token
4. Server validate`,
    examples: [
      '[Authorize]',
      'public IActionResult GetData()',
    ],
    keyPoints: [
      'Login → Token generate → Client sends → Server validates',
      '[Authorize] attribute for protected endpoints',
      'Stateless authentication',
    ],
  },
  {
    id: 'memory-management',
    title: 'Memory Management 🧠',
    content: `**Stack vs Heap:**
- Stack → local variables
- Heap → objects

**Garbage Collection (GC):** Auto delete unused object`,
    examples: [
      'int a = 10; // stack',
      'Car c = new Car(); // heap',
    ],
    keyPoints: [
      'Stack = local variables, method calls',
      'Heap = objects',
      'Garbage Collection = Auto delete unused objects',
    ],
  },
  {
    id: 'async-await',
    title: 'Async / Await ⚡',
    content: `Async/Await ဆိုတာ Non-blocking operations အတွက် ဖြစ်ပါတယ်။

**Why?**
- Non-blocking
- Better performance`,
    examples: [
      `public async Task<string> GetData()
{
    return await Task.FromResult("Hello PK");
}`,
    ],
    keyPoints: [
      'Async/Await = Non-blocking programming',
      'Better performance',
      'Task and Task<T> return types',
    ],
  },
  {
    id: 'clean-architecture',
    title: 'Clean Architecture 🏗️ 🔥',
    content: `Clean Architecture ဆိုတာ Scalable, Maintainable system design ဖြစ်ပါတယ်။

**Layers:**
1. API
2. Application
3. Domain
4. Infrastructure

**Benefit:**
- Scalable
- Maintainable`,
    examples: [],
    keyPoints: [
      '4 Layers: API, Application, Domain, Infrastructure',
      'Scalable and Maintainable',
      'Separation of concerns',
    ],
  },
  {
    id: 'repository-unit-of-work',
    title: 'Repository & Unit of Work 🧩',
    content: `**Repository:** Data access pattern

**Unit of Work:** Transaction control

Two patterns work together for data access layer.`,
    examples: [],
    keyPoints: [
      'Repository = Data access abstraction',
      'Unit of Work = Transaction control',
      'Clean data access layer',
    ],
  },
  {
    id: 'interview-questions',
    title: 'Interview Questions 🔥',
    content: `**❓ IEnumerable vs IQueryable**
- IEnumerable → memory
- IQueryable → DB

**❓ == vs Equals**
- == → reference
- Equals → value

**❓ What is DI?**
👉 Inject dependency

**❓ What is SOLID?**
👉 S, O, L, I, D principles`,
    examples: [],
    keyPoints: [
      'IEnumerable = in-memory, IQueryable = database query',
      '== = reference compare, Equals = value compare',
      'DI = Dependency Injection',
      'SOLID = Single Responsibility, Open-Closed, Liskov, Interface Segregation, Dependency Inversion',
    ],
  },
  {
    id: 'real-world-thinking',
    title: 'Real-World Thinking 🔥',
    content: `**🟢 Use C#:**
✔ Web API
✔ Enterprise
✔ Banking

**🔴 Not for:**
❌ AI
❌ scripting`,
    examples: [],
    keyPoints: [
      'Use for: Web API, Enterprise, Banking',
      'Avoid for: AI, scripting',
    ],
  },
  {
    id: 'final-summary',
    title: 'Final Summary 🔥',
    content: `**C# = powerful backend language**

- .NET = ecosystem
- LINQ + EF = data handling
- DI + Clean Architecture = pro level
- .NET 8 / 10 = future`,
    examples: [],
    keyPoints: [
      'C# = powerful backend language',
      '.NET = ecosystem',
      'LINQ + EF = data handling',
      'DI + Clean Architecture = pro level',
      '.NET 8 / 10 = future',
    ],
  },
];
