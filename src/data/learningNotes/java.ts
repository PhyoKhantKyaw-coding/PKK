export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'java';
export const tabLabel = 'JAVA';
export const tabIcon = '☕';

export const notes: LearningNote[] = [
  {
    id: 'what-is-java',
    title: 'What is Java?',
    content: `Java ဆိုတာ Object-Oriented, Platform Independent Programming Language တစ်ခုဖြစ်ပါတယ်။

**"Write Once, Run Anywhere" (WORA)**

**How it works?**
Flow: \`.java\` → compile → \`.class\` → JVM → Run

Java code ကို machine code မဟုတ်ဘဲ bytecode အဖြစ်ပြောင်းပြီး JVM က run လုပ်တယ်။

**Why use?**
- Enterprise systems
- Banking systems
- Backend APIs`,
    examples: [
      '.java → compile → .class → JVM → Run',
    ],
    keyPoints: [
      'Java = Object-Oriented, Platform Independent',
      '"Write Once, Run Anywhere" (WORA)',
      'Bytecode → JVM runs it',
      'Enterprise, Banking, Backend APIs အတွက် အသုံးဝင်',
    ],
  },
  {
    id: 'jvm-jdk-jre',
    title: 'JVM, JDK, JRE 🔥',
    content: `**JDK (Java Development Kit):** Developer tools (compile, debug)

**JRE (Java Runtime Environment):** Program run ဖို့လို

**JVM (Java Virtual Machine):** Bytecode run လုပ်တဲ့ engine

**Simple Analogy:**
- JDK = Kitchen + Chef tools 🍳
- JRE = Food serve area 🍽️
- JVM = Cooker 🔥

**Interview Tip:** "JVM is platform dependent but Java is platform independent"`,
    examples: [
      'JDK = Kitchen + Chef tools 🍳',
      'JRE = Food serve area 🍽️',
      'JVM = Cooker 🔥',
    ],
    keyPoints: [
      'JDK = Development tools (compile, debug)',
      'JRE = Runtime environment',
      'JVM = Bytecode execution engine',
      'JVM is platform dependent, Java is platform independent',
    ],
  },
  {
    id: 'java-syntax-basics',
    title: 'Java Syntax Basics',
    content: `Java ရဲ့ အဓိက ကျသော syntax များ။

**Key Points:**
- Class-based
- Strong typing
- Entry point → main()`,
    examples: [
      `public class Main {
    public static void main(String[] args){
        System.out.println("Hello PK");
    }
}`,
    ],
    keyPoints: [
      'Class-based structure',
      'Strong typing',
      'Entry point → main() method',
    ],
  },
  {
    id: 'oop-in-java',
    title: 'OOP in Java 🔥 MUST MASTER',
    content: `**4 Pillars of OOP:**

**✅ Encapsulation:** Data hide + getter/setter

**✅ Inheritance:** \`extends\`

**✅ Polymorphism:** override / overload

**✅ Abstraction:** \`abstract\` class / \`interface\`

**Real-world Example — ATM System:**
- \`Account\` → class
- \`SavingsAccount\` → inheritance
- \`withdraw()\` → polymorphism`,
    examples: [
      'ATM System: Account → class, SavingsAccount → inheritance, withdraw() → polymorphism',
    ],
    keyPoints: [
      '4 Pillars: Encapsulation, Inheritance, Polymorphism, Abstraction',
      'Encapsulation = Data hide + getter/setter',
      'Inheritance = extends',
      'Polymorphism = override / overload',
      'Abstraction = abstract class / interface',
    ],
  },
  {
    id: 'collections-framework',
    title: 'Collections Framework',
    content: `Collections Framework ဆိုတာ Data store & manage လုပ်တဲ့ data structures ဖြစ်ပါတယ်။

**✅ List:** ArrayList, LinkedList

**✅ Set:** No duplicate

**✅ Map:** Key-value

**Interview Question — Difference: ArrayList vs LinkedList:**
| ArrayList | LinkedList |
|---|---|
| Fast read | Fast insert/delete |
| Array based | Node based |`,
    examples: [
      `List<String> list = new ArrayList<>();
list.add("PK");`,
      `Set<Integer> set = new HashSet<>();`,
      `Map<Integer, String> map = new HashMap<>();`,
    ],
    keyPoints: [
      'List: ArrayList (fast read), LinkedList (fast insert/delete)',
      'Set: No duplicate elements',
      'Map: Key-value pairs',
      'ArrayList = Array based, LinkedList = Node based',
    ],
  },
  {
    id: 'exception-handling',
    title: 'Exception Handling',
    content: `Exception Handling ဆိုတာ Runtime error handle လုပ်တဲ့ mechanism ဖြစ်ပါတယ်။

**Types:**
- **Checked** (compile time)
- **Unchecked** (runtime)

**Interview Tip:** "Exception is recoverable, Error is not"`,
    examples: [
      `try{
    int a = 10/0;
}catch(Exception e){
    System.out.println(e.getMessage());
}`,
    ],
    keyPoints: [
      'Runtime error handling',
      'Checked (compile time) vs Unchecked (runtime)',
      'Exception is recoverable, Error is not',
    ],
  },
  {
    id: 'multithreading',
    title: 'Multithreading 🔥 ADVANCED',
    content: `Multithreading ဆိုတာ Multiple tasks at same time လုပ်ဆောင်ခြင်းဖြစ်ပါတယ်။

**Why use?**
- Performance improve
- Async tasks

**Real-world:** API calls, background jobs`,
    examples: [
      `class MyThread extends Thread{
    public void run(){
        System.out.println("Running...");
    }
}`,
    ],
    keyPoints: [
      'Multiple tasks at same time',
      'Performance improve, async tasks',
      'Real-world: API calls, background jobs',
    ],
  },
  {
    id: 'file-io',
    title: 'File I/O',
    content: `File I/O ဆိုတာ Save data နဲ့ Read data အတွက် ဖြစ်ပါတယ်။`,
    examples: [
      `FileWriter fw = new FileWriter("test.txt");
fw.write("Hello PK");
fw.close();`,
    ],
    keyPoints: [
      'File read/write operations',
      'Save data, read data',
      'Always close file to avoid resource leak',
    ],
  },
  {
    id: 'jdbc-database-connection',
    title: 'JDBC (Database Connection)',
    content: `JDBC ဆိုတာ Java → Database connect လုပ်တဲ့ API ဖြစ်ပါတယ်။

**Flow:**
1. Load driver
2. Create connection
3. Execute query
4. Close connection

**Interview Tip:** "Always close connection to avoid memory leak"`,
    examples: [
      `Connection con = DriverManager.getConnection(url, user, pass);`,
    ],
    keyPoints: [
      'Java → Database connection',
      'Flow: Load driver → Create connection → Execute query → Close',
      'Always close connection to avoid memory leak',
    ],
  },
  {
    id: 'spring-boot-introduction',
    title: 'Spring Boot Introduction 🔥 MUST KNOW',
    content: `Spring Boot ဆိုတာ Java backend framework ဖြစ်ပါတယ်။

**Why use?**
- Fast API development
- Built-in server (Tomcat)`,
    examples: [
      `@RestController
public class HelloController {

    @GetMapping("/")
    public String hello(){
        return "Hello PK";
    }
}`,
    ],
    keyPoints: [
      'Java backend framework',
      'Fast API development',
      'Built-in server (Tomcat)',
    ],
  },
  {
    id: 'rest-api-with-spring-boot',
    title: 'REST API with Spring Boot',
    content: `REST API ဆိုတာ Frontend အတွက် API ဖြစ်ပါတယ်။

**Methods:**
- **GET** → read
- **POST** → create
- **PUT** → update
- **DELETE** → delete`,
    examples: [
      `@PostMapping("/user")
public String createUser(){
    return "User created";
}`,
    ],
    keyPoints: [
      'API for frontend consumption',
      'GET → read, POST → create, PUT → update, DELETE → delete',
    ],
  },
  {
    id: 'java-memory',
    title: 'Java Memory 🔥 INTERVIEW FAVORITE',
    content: `**Memory Types:**

**✅ Stack:** Method calls, Local variables

**✅ Heap:** Objects

**Garbage Collection (GC):** Unused object → auto delete

**Interview Question — Why Java has no memory leak?**
Answer: GC handle memory, but bad code still can cause leak.`,
    examples: [
      'int a = 10; // stack',
      'Car c = new Car(); // heap',
    ],
    keyPoints: [
      'Stack = Method calls, local variables',
      'Heap = Objects',
      'Garbage Collection = Auto delete unused objects',
      'GC handles memory, but bad code can still cause leak',
    ],
  },
  {
    id: 'deep-interview-questions',
    title: 'Deep Interview Questions 🔥',
    content: `**❓ Why Java is platform independent?**
👉 Because of JVM

**❓ Why String is immutable?**
👉 Security + performance

**❓ Difference between == and equals()?**
👉 \`==\` → reference compare
👉 \`equals()\` → value compare

**❓ What is interface?**
👉 Fully abstract (before Java 8)

**❓ What is dependency injection?**
👉 Object create outside class`,
    examples: [],
    keyPoints: [
      'Java platform independent → Because of JVM',
      'String immutable → Security + performance',
      '== → reference compare, equals() → value compare',
      'Interface → Fully abstract (before Java 8)',
      'Dependency injection → Object create outside class',
    ],
  },
  {
    id: 'real-world-thinking',
    title: 'Real-World Thinking',
    content: `**Use Java when:**
✔ Enterprise system
✔ Banking system
✔ Large backend

**Not best for:**
❌ Quick scripting
❌ Small apps`,
    examples: [],
    keyPoints: [
      'Use for: Enterprise, Banking, Large backend',
      'Avoid for: Quick scripting, Small apps',
    ],
  },
  {
    id: 'final-summary',
    title: 'Final Summary 🔥',
    content: `**Java = Strong, scalable backend language**

- JVM = core engine
- OOP = must master
- Spring Boot = real-world tool
- GC = memory management`,
    examples: [],
    keyPoints: [
      'Java = Strong, scalable backend language',
      'JVM = core engine',
      'OOP = must master',
      'Spring Boot = real-world tool',
      'GC = memory management',
    ],
  },
];
