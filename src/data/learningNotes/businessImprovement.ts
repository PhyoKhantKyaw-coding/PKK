export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'business-improvement';
export const tabLabel = 'BUSINESS IMPROVEMENT';
export const tabIcon = '📈';

export const notes: LearningNote[] = [
  {
    id: 'how-to-improve-business',
    title: 'How to Improve Business 🧠',
    content: `Business Improve ဆိုတာဘာလဲ?

👉 Business ကို ပိုအကျိုးရှိအောင်၊ ပိုမြန်အောင်၊ ပို profit ရအောင် တိုးတက်အောင်လုပ်တာ

**Improve Formula:**
Problem → Analyze → Fix → Optimize → Grow

**Example:**
- Slow system → Optimize database
- Low sales → Improve marketing
- Bad UX → Improve UI

**🔥 Key Idea:**
Business improvement = "Remove waste + Increase value"`,
    examples: [
      'Slow system → Optimize database',
      'Low sales → Improve marketing',
      'Bad UX → Improve UI',
    ],
    keyPoints: [
      'Business improvement = optimize for profit, speed, value',
      'Formula: Problem → Analyze → Fix → Optimize → Grow',
      'Remove waste + Increase value',
    ],
  },
  {
    id: 'data-driven-decision-making',
    title: 'Data-Driven Decision Making 📊 🔥',
    content: `**What is it?**

👉 ခံစားချက်နဲ့မဟုတ်ဘဲ Data (အချက်အလက်) နဲ့ဆုံးဖြတ်ခြင်း

**Example:**

❌ Wrong way:
"I think customers like this"

✔ Correct way:
"Analytics shows 70% users click button A"

**Tools:**
- Google Analytics
- Dashboard (Power BI / Tableau)
- API logs

**🔥 Developer Thinking:**
"No data = guessing"
"Data = truth"`,
    examples: [
      'Wrong: "I think customers like this"',
      'Correct: "Analytics shows 70% users click button A"',
    ],
    keyPoints: [
      'Data-driven = decide with data, not feelings',
      'Tools: Google Analytics, Power BI, Tableau, API logs',
      'No data = guessing, Data = truth',
    ],
  },
  {
    id: 'customer-experience-improvement',
    title: 'Customer Experience Improvement (CX) 💡',
    content: `**What is CX?**

👉 Customer သုံးတဲ့ experience ကို ပိုကောင်းအောင်လုပ်ခြင်း

**Example:**
✔ Slow app → make faster
✔ Confusing UI → simplify
✔ Long process → reduce steps

**Real Business Logic:**
👉 Happy customer = more money 💰

**🔥 Key Rule:**
Easy + Fast + Clear = Good Experience`,
    examples: [
      'Slow app → make faster',
      'Confusing UI → simplify',
      'Long process → reduce steps',
    ],
    keyPoints: [
      'CX = Improve customer experience',
      'Happy customer = more money',
      'Easy + Fast + Clear = Good Experience',
    ],
  },
  {
    id: 'automation-in-business',
    title: 'Automation in Business ⚙️ 🔥 VERY IMPORTANT',
    content: `**What is Automation?**

👉 Human မလုပ်ဘဲ system က auto လုပ်ခြင်း

**Example:**
✔ Auto email sending
✔ Telegram bot selling product
✔ Auto payment system
✔ Invoice generation

**Developer Advantage:**
👉 You can build: API systems, Bots, Cloud automation

**🔥 Real Example (YOU) — VPN Key Bot:**
- Payment → auto verify
- Key → auto send
- No human needed

**🔥 Rule:**
Automate repetitive work → save cost → scale faster`,
    examples: [
      'Auto email sending',
      'Telegram bot selling product',
      'VPN Key Bot: Payment → auto verify, Key → auto send',
    ],
    keyPoints: [
      'Automation = system runs without human',
      'Developers can build: API systems, Bots, Cloud automation',
      'Automate repetitive work → save cost → scale faster',
    ],
  },
  {
    id: 'scaling-business',
    title: 'Scaling Business 🚀',
    content: `**What is Scaling?**

👉 Small system → Big system (users, revenue increase)

**Example:**
- 10 users → 10,000 users
- Local app → global app

**Types of Scaling:**

**🟢 Vertical Scaling:**
👉 Improve server power

**🟢 Horizontal Scaling 🔥:**
👉 Add more servers

**🔥 Developer Insight:**
👉 Cloud (AWS / Azure) = scaling tool

**🔥 Formula:**
More Users + Stable System + Automation = Scaling`,
    examples: [
      '10 users → 10,000 users',
      'Local app → global app',
      'Vertical = improve server, Horizontal = add more servers',
    ],
    keyPoints: [
      'Scaling = small system → big system',
      'Vertical Scaling = improve server power',
      'Horizontal Scaling 🔥 = add more servers',
      'Cloud (AWS / Azure) = scaling tool',
      'Formula: More Users + Stable System + Automation = Scaling',
    ],
  },
  {
    id: 'risk-management',
    title: 'Risk Management ⚠️',
    content: `**What is Risk?**

👉 Business မှာ မကောင်းနိုင်တဲ့အခြေအနေ

**🔴 Risks:**
- System crash
- No customers
- Security breach
- High cost

**Risk Management Steps:**
1. **Identify Risk** → What can go wrong?
2. **Analyze Risk** → How serious?
3. **Reduce Risk** → Backup, security, testing
4. **Monitor** → Continuous check

**🔥 Developer Solution:**
✔ Backup database
✔ Cloud redundancy
✔ JWT security
✔ Monitoring tools`,
    examples: [
      'System crash, No customers, Security breach, High cost',
      'Backup database, Cloud redundancy, JWT security, Monitoring tools',
    ],
    keyPoints: [
      'Risk = potential business threat',
      '4 steps: Identify → Analyze → Reduce → Monitor',
      'Developer solutions: Backup, redundancy, JWT, monitoring',
    ],
  },
  {
    id: 'kpi-metrics',
    title: 'KPI & Metrics 📊 🔥 VERY IMPORTANT',
    content: `**What is KPI?**

👉 Key Performance Indicator
👉 Business success measure

**Important Metrics:**

**💰 Revenue:** Money earned

**👥 Users:** Active customers

**🔁 Retention Rate:** Customers coming back

**📉 Churn Rate:** Users leaving

**⚡ Conversion Rate:** Visitors → customers

**Example:**
1000 visitors → 100 users → 10 buyers

**🔥 Developer Thinking:**
"If you can measure it → you can improve it"`,
    examples: [
      '1000 visitors → 100 users → 10 buyers',
      'Retention Rate = customers coming back',
      'Churn Rate = users leaving',
    ],
    keyPoints: [
      'KPI = Key Performance Indicator (success measure)',
      'Revenue = money earned',
      'Retention Rate = customers returning',
      'Churn Rate = users leaving',
      'Conversion Rate = visitors → customers',
      'If you can measure it → you can improve it',
    ],
  },
  {
    id: 'real-business-thinking',
    title: 'Real Business Thinking 🧠 IMPORTANT',
    content: `**❌ Bad Thinking:**
"I just build app"
"Code is enough"

**✔ Good Thinking:**
"How users behave?"
"How to increase conversion?"
"How to reduce cost?"

**🔥 Pro Thinking:**
"System + Data + Automation = Business Growth"`,
    examples: [
      'Bad: "I just build app"',
      'Good: "How to increase conversion?"',
      'Pro: "System + Data + Automation = Business Growth"',
    ],
    keyPoints: [
      'Bad thinking = "I just build app"',
      'Good thinking = user behavior, conversion, cost reduction',
      'Pro thinking = System + Data + Automation = Business Growth',
    ],
  },
  {
    id: 'final-summary',
    title: 'Final Summary 🔥',
    content: `✔ Improve Business = Optimize system
✔ Data = Decision making power
✔ CX = Customer happiness
✔ Automation = scale faster
✔ Scaling = grow system
✔ Risk = control system
✔ KPI = measure success`,
    examples: [],
    keyPoints: [
      'Improve Business = Optimize system',
      'Data = Decision making power',
      'CX = Customer happiness',
      'Automation = scale faster',
      'Scaling = grow system',
      'Risk = control system',
      'KPI = measure success',
    ],
  },
];
