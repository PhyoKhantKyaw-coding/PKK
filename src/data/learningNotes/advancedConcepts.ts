export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'advanced-concepts';
export const tabLabel = 'ADVANCED CONCEPTS';
export const tabIcon = '🚀';

export const notes: LearningNote[] = [
  {
    id: 'clean-code-principles',
    title: 'Clean Code Principles 🧼',
    content: `**What is Clean Code?**

👉 Code that is easy to read, understand, and maintain

**Why important?**
✔ Team work easier
✔ Bug reduce
✔ Maintenance fast

**🔥 RULES (IMPORTANT):**

**1. Meaningful Naming**
❌ Bad: \`int a;\`
✔ Good: \`int userAge;\`

**2. Small Functions**
👉 One function = one job

**3. Avoid Duplicate Code**
👉 Reuse functions

**4. Keep It Simple (KISS)**
👉 Don't overcomplicate

**5. DRY Principle**
👉 Don't Repeat Yourself

**🔥 Summary:**
Readable + Simple + Maintainable`,
    examples: [
      'Bad: int a; → Good: int userAge;',
      'One function = one job',
      'DRY = Don\'t Repeat Yourself',
    ],
    keyPoints: [
      'Clean code = readable, understandable, maintainable',
      'Meaningful naming is crucial',
      'Small functions, one job each',
      'Avoid duplication (DRY principle)',
      'Keep It Simple (KISS)',
    ],
  },
  {
    id: 'design-patterns',
    title: 'Design Patterns 🧩',
    content: `**What?**
👉 Reusable solutions to common problems

**🔥 Types:**

**🔵 1. Singleton Pattern:**
👉 Only one instance
\`class Singleton { private static Singleton instance; }\`

**🔵 2. Factory Pattern:**
👉 Object creation hide

**🔵 3. Repository Pattern:**
👉 Data access abstraction

**🔵 4. Dependency Injection (DI):**
👉 Object inject instead of create

**🔥 Why use?**
✔ Clean architecture
✔ Testable code
✔ Scalable system`,
    examples: [
      'Singleton: Only one instance exists',
      'Factory: Hide object creation',
      'Repository: Data access abstraction',
      'DI: Inject dependencies instead of creating',
    ],
    keyPoints: [
      'Design patterns = reusable solutions to common problems',
      'Singleton = only one instance',
      'Factory = object creation hide',
      'Repository = data access abstraction',
      'DI = inject instead of create',
      'Clean architecture, testable code, scalable system',
    ],
  },
  {
    id: 'system-design-basics',
    title: 'System Design Basics 🏗️ 🔥 VERY IMPORTANT',
    content: `**What?**
👉 Large system structure design

**Example System:**
Facebook, Amazon, Banking system

**Basic Components:**
Client → API → Backend → Database → Cache

**🔥 Key Concepts:**
✔ Scalability
✔ Reliability
✔ Performance
✔ Availability

**🔥 Interview Tip:**
"System design = how to handle millions of users"`,
    examples: [
      'Client → API → Backend → Database → Cache',
      'Facebook, Amazon, Banking system',
    ],
    keyPoints: [
      'System design = large system structure design',
      'Components: Client, API, Backend, Database, Cache',
      'Key concepts: Scalability, Reliability, Performance, Availability',
      'System design = how to handle millions of users',
    ],
  },
  {
    id: 'microservices-architecture',
    title: 'Microservices Architecture 🧱',
    content: `**What?**
👉 System split into small services

**Example — Instead of one big system:**
✔ User Service
✔ Order Service
✔ Payment Service

**Flow:**
API Gateway → Microservices → Database per service

**🔥 Advantages:**
✔ Scalable
✔ Independent deploy
✔ Easy maintenance

**🔴 Disadvantages:**
❌ Complex
❌ Network overhead

**🔥 Real Example:**
Netflix, Amazon`,
    examples: [
      'User Service, Order Service, Payment Service',
      'API Gateway → Microservices → Database per service',
      'Netflix, Amazon use microservices',
    ],
    keyPoints: [
      'Microservices = split system into small services',
      'Each service has its own database',
      'Advantages: Scalable, independent deploy, easy maintenance',
      'Disadvantages: Complex, network overhead',
      'API Gateway routes to services',
    ],
  },
  {
    id: 'api-design-best-practices',
    title: 'API Design Best Practices 🌐',
    content: `**What?**
👉 Good API structure design

**🔥 Rules:**

**1. Use REST standard:**
GET → read
POST → create
PUT → update
DELETE → remove

**2. Clean URLs:**
❌ Bad: \`/getUserData\`
✔ Good: \`/api/users\`

**3. Versioning:**
\`/api/v1/users\`

**4. Proper Status Codes:**
✔ 200 → success
✔ 400 → bad request
✔ 401 → unauthorized
✔ 500 → server error

**5. Secure API:**
✔ JWT
✔ HTTPS
✔ Authorization

**🔥 Rule:**
Simple + Secure + Scalable`,
    examples: [
      'Bad: /getUserData → Good: /api/users',
      '/api/v1/users (versioning)',
      '200 = success, 400 = bad request, 401 = unauthorized, 500 = server error',
    ],
    keyPoints: [
      'Use REST standard (GET/POST/PUT/DELETE)',
      'Clean URLs (noun-based, not verb-based)',
      'Versioning: /api/v1/...',
      'Proper HTTP status codes',
      'Secure with JWT, HTTPS, Authorization',
      'Rule: Simple + Secure + Scalable',
    ],
  },
  {
    id: 'devops-basics-cicd',
    title: 'DevOps Basics (CI/CD) ⚙️',
    content: `**What is DevOps?**
👉 Development + Operations integration

**CI/CD Meaning:**

**🔵 CI (Continuous Integration):**
👉 Code merge + test automatic

**🔵 CD (Continuous Deployment):**
👉 Auto deploy to server

**🔥 Flow:**
Code → GitHub → Build → Test → Deploy → Cloud

**Tools:**
✔ GitHub Actions
✔ Azure DevOps
✔ Jenkins

**Example Pipeline:**
1. Developer push code
2. GitHub trigger
3. Build project
4. Run tests
5. Deploy to Azure/AWS

**🔥 Why important?**
✔ Faster release
✔ Less human error
✔ Automation`,
    examples: [
      'Code → GitHub → Build → Test → Deploy → Cloud',
      'Developer push → GitHub trigger → Build → Test → Deploy',
    ],
    keyPoints: [
      'DevOps = Development + Operations integration',
      'CI = Continuous Integration (code merge + auto test)',
      'CD = Continuous Deployment (auto deploy)',
      'Tools: GitHub Actions, Azure DevOps, Jenkins',
      'Faster release, less human error, automation',
    ],
  },
  {
    id: 'final-summary',
    title: 'Final Summary 🧠',
    content: `**🧼 Clean Code:**
👉 Simple + readable + maintainable

**🧩 Design Patterns:**
👉 Reusable architecture solutions

**🏗️ System Design:**
👉 Big system thinking

**🔗 Microservices:**
👉 Split system into services

**🌐 API Design:**
👉 Clean + secure + standard

**⚙️ DevOps:**
👉 Automation of deployment`,
    examples: [],
    keyPoints: [
      'Clean Code = simple + readable + maintainable',
      'Design Patterns = reusable architecture solutions',
      'System Design = big system thinking',
      'Microservices = split system into services',
      'API Design = clean + secure + standard',
      'DevOps = automation of deployment',
    ],
  },
];
