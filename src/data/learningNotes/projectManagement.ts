export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'project-management';
export const tabLabel = 'PROJECT MANAGEMENT';
export const tabIcon = '📋';

export const notes: LearningNote[] = [
  {
    id: 'what-is-project-management',
    title: 'Project Management ဆိုတာဘာလဲ? 🧠',
    content: `Project Management ဆိုတာ Project တစ်ခုကို အချိန် + Budget + Scope + Quality နဲ့ပြီးမြောက်အောင် စီမံခန့်ခွဲခြင်း ဖြစ်ပါတယ်။

**Simple Formula:**
Plan → Execute → Monitor → Deliver

**Example:**
- E-commerce system build
- ATM system
- Mobile app development

**🔥 Goal:**
"Right work + Right time + Right quality"`,
    examples: [
      'E-commerce system build, ATM system, Mobile app development',
    ],
    keyPoints: [
      'Project Management = Time + Budget + Scope + Quality control',
      'Formula: Plan → Execute → Monitor → Deliver',
      'Goal: Right work + Right time + Right quality',
    ],
  },
  {
    id: 'project-life-cycle',
    title: 'Project Life Cycle 🔄',
    content: `**5 Stages:**

1. **Initiation (စတင်ခြင်း)**
👉 Idea + requirement

2. **Planning (အစီအစဉ်)**
👉 Timeline + resources

3. **Execution (လုပ်ဆောင်ခြင်း)**
👉 Coding + development

4. **Monitoring (စောင့်ကြည့်)**
👉 Progress tracking

5. **Closing (ပြီးဆုံးခြင်း)**
👉 Delivery + feedback

**🔥 Flow:**
Idea → Plan → Build → Track → Deliver`,
    examples: [
      'Initiation → Planning → Execution → Monitoring → Closing',
    ],
    keyPoints: [
      'Stage 1: Initiation (idea + requirement)',
      'Stage 2: Planning (timeline + resources)',
      'Stage 3: Execution (coding + development)',
      'Stage 4: Monitoring (progress tracking)',
      'Stage 5: Closing (delivery + feedback)',
    ],
  },
  {
    id: 'waterfall-vs-agile',
    title: 'Waterfall vs Agile ⚖️',
    content: `**🔵 Waterfall Model:**
👉 Step-by-step linear process
Flow: Requirement → Design → Build → Test → Deploy
🔴 Weakness: Not flexible, late feedback

**🔥 Agile Model (Modern 🔥):**
👉 Iterative + flexible development
Key Idea: Small updates → continuous improvement
Myanmar: "တစ်ခါတည်းမပြီးဘူး၊ အဆင့်ဆင့်လုပ်"

**🔥 Why Agile better?**
✔ Fast delivery
✔ Customer feedback
✔ Flexible changes`,
    examples: [
      'Waterfall: Requirement → Design → Build → Test → Deploy',
      'Agile: Small updates → continuous improvement',
    ],
    keyPoints: [
      'Waterfall = linear, not flexible, late feedback',
      'Agile = iterative, flexible, fast delivery',
      'Agile is modern and preferred',
      'Small updates → continuous improvement',
    ],
  },
  {
    id: 'scrum-framework',
    title: 'Scrum Framework 🔁 🔥 VERY IMPORTANT',
    content: `**What is Scrum?**
👉 Agile framework for team work

**Roles:**
- **👨‍💼 Product Owner:** What to build
- **👨‍💻 Scrum Master:** Process guide
- **👨‍💻 Team:** Developers

**Scrum Flow:**
Backlog → Sprint → Review → Retrospective`,
    examples: [
      'Backlog → Sprint → Review → Retrospective',
    ],
    keyPoints: [
      'Scrum = Agile team framework',
      'Product Owner = what to build',
      'Scrum Master = process guide',
      'Team = developers',
      'Flow: Backlog → Sprint → Review → Retrospective',
    ],
  },
  {
    id: 'sprint-planning',
    title: 'Sprint Planning ⚡',
    content: `**What is Sprint?**
👉 Short development cycle (1–2 weeks)

**Sprint Planning:**
👉 What to build in this sprint

**Example:**
Sprint 1: Login system, Database setup
Sprint 2: Product system

**🔥 Rule:**
Small tasks → fast delivery`,
    examples: [
      'Sprint 1: Login system, Database setup',
      'Sprint 2: Product system',
    ],
    keyPoints: [
      'Sprint = short development cycle (1-2 weeks)',
      'Plan what to build in each sprint',
      'Small tasks → fast delivery',
    ],
  },
  {
    id: 'gantt-chart',
    title: 'Gantt Chart 📅',
    content: `**What?**
👉 Timeline chart for project tasks

**Example:**
Task A → Jan 1–5
Task B → Jan 6–10
Task C → Jan 11–15

**Why use?**
✔ Track progress
✔ Deadlines control`,
    examples: [
      'Task A → Jan 1-5, Task B → Jan 6-10, Task C → Jan 11-15',
    ],
    keyPoints: [
      'Gantt Chart = timeline visualization',
      'Track progress and deadlines',
      'Shows task dependencies and schedule',
    ],
  },
  {
    id: 'risk-management',
    title: 'Risk Management ⚠️ 🔥 IMPORTANT',
    content: `**What is Risk?**
👉 Project မှာ ဖြစ်နိုင်တဲ့ ပြဿနာ

**🔴 Risks:**
- Delay
- Bugs
- Budget over
- Team issue

**Solution:**
✔ Backup plan
✔ Testing
✔ Code review
✔ Cloud failover`,
    examples: [
      'Delay, Bugs, Budget over, Team issue',
      'Backup plan, Testing, Code review, Cloud failover',
    ],
    keyPoints: [
      'Risk = potential project problem',
      'Common risks: delay, bugs, budget over, team issue',
      'Solutions: backup plan, testing, code review, failover',
    ],
  },
  {
    id: 'team-management',
    title: 'Team Management 👥',
    content: `**What is it?**
👉 Team ကို manage လုပ်ခြင်း

**Key Skills:**
✔ Communication
✔ Task distribution
✔ Motivation
✔ Conflict solving

**🔥 Developer Insight:**
"Good code + bad team = failure"`,
    examples: [],
    keyPoints: [
      'Team management = lead and coordinate team',
      'Key skills: communication, task distribution, motivation, conflict solving',
      'Good code + bad team = failure',
    ],
  },
  {
    id: 'project-management-tools',
    title: 'Tools 🛠️ VERY IMPORTANT',
    content: `**🔷 Jira:**
👉 Agile project tracking
✔ Task board
✔ Sprint tracking

**🔷 Trello:**
👉 Simple task board
✔ To Do
✔ Doing
✔ Done

**🔷 GitHub:**
✔ Code version control
✔ Collaboration

**🔥 Example Workflow:**
Task → Jira → Developer → GitHub → Review → Done`,
    examples: [
      'Jira = Agile tracking, Trello = simple board, GitHub = version control',
      'Task → Jira → Developer → GitHub → Review → Done',
    ],
    keyPoints: [
      'Jira = Agile project tracking',
      'Trello = simple To Do/Doing/Done board',
      'GitHub = code version control + collaboration',
      'Workflow: Task → Jira → Developer → GitHub → Review → Done',
    ],
  },
  {
    id: 'real-project-workflow',
    title: 'Real Project Workflow 🔄 REAL WORLD 🔥',
    content: `**Step 1: Requirement**
👉 Client says what they want

**Step 2: Planning**
✔ Tech stack
✔ Database design
✔ Timeline

**Step 3: Development**
✔ Frontend
✔ Backend
✔ API

**Step 4: Testing**
✔ Bug fix
✔ QA testing

**Step 5: Deployment**
✔ Azure / AWS deploy

**Step 6: Maintenance**
✔ Fix bugs
✔ Add features`,
    examples: [
      'Requirement → Planning → Development → Testing → Deployment → Maintenance',
    ],
    keyPoints: [
      'Step 1: Requirement gathering',
      'Step 2: Planning (tech stack, DB design, timeline)',
      'Step 3: Development (frontend, backend, API)',
      'Step 4: Testing (bug fix, QA)',
      'Step 5: Deployment (Azure/AWS)',
      'Step 6: Maintenance (fix bugs, add features)',
    ],
  },
  {
    id: 'developer-vs-project-thinking',
    title: 'Developer vs Project Thinking 🧠',
    content: `**🔴 Developer Only:**
"I just code"

**🟢 Project Mindset 🔥:**
"Is this deliverable?"
"Is this scalable?"
"Is this on time?"`,
    examples: [
      'Developer: "I just code"',
      'Project: "Is this deliverable? Scalable? On time?"',
    ],
    keyPoints: [
      'Developer only = "I just code"',
      'Project mindset 🔥 = deliverable, scalable, on time',
      'Think beyond code — think business value',
    ],
  },
  {
    id: 'kpi-in-project',
    title: 'KPI in Project 📊',
    content: `**Project Key Performance Indicators:**
✔ Timeline
✔ Budget
✔ Quality
✔ Customer satisfaction`,
    examples: [],
    keyPoints: [
      'Timeline = on schedule delivery',
      'Budget = within cost',
      'Quality = bug-free, reliable',
      'Customer satisfaction = meets expectations',
    ],
  },
  {
    id: 'final-summary',
    title: 'Final Summary 🔥',
    content: `✔ Project = structured work
✔ Agile = modern method
✔ Scrum = team framework
✔ Sprint = small delivery cycle
✔ Tools = Jira + Trello + GitHub
✔ Risk = always prepare backup
✔ Team = success factor`,
    examples: [],
    keyPoints: [
      'Project = structured work',
      'Agile = modern method',
      'Scrum = team framework',
      'Sprint = small delivery cycle',
      'Tools = Jira + Trello + GitHub',
      'Risk = always prepare backup',
      'Team = success factor',
    ],
  },
];
