export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'business-knowledge';
export const tabLabel = 'BUSINESS THINKING + MONEY SYSTEM';
export const tabIcon = '📊';

export const notes: LearningNote[] = [
  {
    id: 'what-is-business',
    title: 'Business ဆိုတာဘာလဲ? 🧠',
    content: `Business ဆိုတာ Customer ပြဿနာကို ဖြေရှင်းပြီး ပိုက်ဆံရတဲ့ system ဖြစ်ပါတယ်။

**Simple Formula:**
Problem → Solution → Value → Money

**Example:**
- Problem → People need food
- Solution → Restaurant
- Value → Delicious food
- Money → Sales`,
    examples: [
      'Problem: People need food → Solution: Restaurant → Value: Delicious food → Money: Sales',
    ],
    keyPoints: [
      'Business = Problem solving + money earning system',
      'Formula: Problem → Solution → Value → Money',
      'No problem = no money',
    ],
  },
  {
    id: 'money-system',
    title: 'Money System (How Business Makes Money) 💰',
    content: `**1. Direct Sales:**
👉 Product selling
Example: Software license, Shoes, Online course

**2. Subscription Model 🔥:**
👉 Monthly payment
Example: Netflix, SaaS system, Cloud services

**3. Service Model:**
👉 Skill for money
Example: Freelancer, Developer job

**4. Ads Model:**
👉 Free product + ads revenue
Example: YouTube, Mobile apps

**5. Marketplace Model:**
👉 Buyer + seller connect
Example: Amazon, Shopee`,
    examples: [
      'Direct: Software license, Online course',
      'Subscription: Netflix, SaaS 🔥',
      'Service: Freelancer, Developer job',
      'Ads: YouTube, Mobile apps',
      'Marketplace: Amazon, Shopee',
    ],
    keyPoints: [
      'Direct Sales = Product selling',
      'Subscription Model 🔥 = Monthly recurring revenue',
      'Service Model = Skill for money',
      'Ads Model = Free product + ads revenue',
      'Marketplace Model = Buyer + seller connect',
    ],
  },
  {
    id: 'business-thinking',
    title: 'Business Thinking 🧠 🔥 VERY IMPORTANT',
    content: `**Rule 1: Solve Problem**
👉 No problem = no money

**Rule 2: Scale Matters**
👉 Small income → big system
Example: 1 client → 1000 clients

**Rule 3: Automation**
👉 System must run without you
Example: Telegram bot selling VPN keys, Auto payment system

**Rule 4: Leverage Technology**
👉 Developers have advantage
✔ API, ✔ Cloud, ✔ Automation, ✔ AI tools`,
    examples: [
      '1 client → 1000 clients (scaling)',
      'Telegram bot selling VPN keys (automation)',
    ],
    keyPoints: [
      'Rule 1: Solve real problem',
      'Rule 2: Scale from small to big system',
      'Rule 3: Automate — system runs without you',
      'Rule 4: Leverage technology (API, Cloud, AI)',
    ],
  },
  {
    id: 'digital-business',
    title: 'Digital Business (Tech World) 💡',
    content: `**Examples:**
✔ SaaS (Software as a Service)
✔ Mobile App
✔ E-commerce system
✔ API service

**Real Example (YOU CAN BUILD 🔥) — VPN Key Bot:**
- Telegram bot
- Auto payment (KPay)
- Auto key delivery`,
    examples: [
      'VPN Key Bot: Telegram bot + Auto payment + Auto delivery',
    ],
    keyPoints: [
      'Digital business: SaaS, Mobile App, E-commerce, API service',
      'Developers can build their own systems',
      'VPN Key Bot example: Telegram + Auto payment + Auto delivery',
    ],
  },
  {
    id: 'business-model-canvas',
    title: 'Business Model Canvas (BMC) 📊',
    content: `**9 Parts of BMC:**
1. Customer Segment
2. Value Proposition
3. Channels
4. Customer Relationship
5. Revenue Stream
6. Key Resources
7. Key Activities
8. Key Partners
9. Cost Structure

**Example (VPN Business):**
- Customer → Internet users
- Value → Secure VPN
- Revenue → Subscription
- Channel → Telegram bot`,
    examples: [
      'VPN Business: Customer=Internet users, Value=Secure VPN, Revenue=Subscription, Channel=Telegram bot',
    ],
    keyPoints: [
      'BMC has 9 parts to plan business',
      'Customer Segment → Who are your users?',
      'Value Proposition → What problem do you solve?',
      'Revenue Stream → How do you make money?',
      'Channels → How do you reach customers?',
    ],
  },
  {
    id: 'business-scaling',
    title: 'How Business Grows (Scaling) 📈',
    content: `**Stage 1: Idea**
👉 Problem identify

**Stage 2: MVP**
👉 Minimum product

**Stage 3: Growth**
👉 Marketing + users

**Stage 4: Scale 🔥**
👉 Automation + cloud + system`,
    examples: [
      'Idea → MVP → Growth → Scale (automation + cloud)',
    ],
    keyPoints: [
      'Stage 1: Identify problem',
      'Stage 2: Build MVP (minimum viable product)',
      'Stage 3: Marketing + acquire users',
      'Stage 4: Scale with automation + cloud 🔥',
    ],
  },
  {
    id: 'money-mindset',
    title: 'Money Thinking (Important Mindset) 💸',
    content: `**❌ Poor Thinking:**
"I need job only"
"Fixed salary enough"

**✔ Developer Thinking:**
"I build system that earns money"
"I automate income"

**🔥 Entrepreneur Thinking:**
"I solve problem for thousands"
"I scale globally"`,
    examples: [],
    keyPoints: [
      'Poor mindset = Only job, fixed salary',
      'Developer mindset = Build systems that earn money',
      'Entrepreneur mindset = Solve for thousands, scale globally 🔥',
    ],
  },
  {
    id: 'software-business-ideas',
    title: 'Software Business Ideas (For You PK 🔥) 🧠',
    content: `**🔥 1. SaaS System:**
✔ Inventory system
✔ Order system
✔ School management

**🔥 2. AI Tools:**
✔ Resume generator
✔ Chatbot system
✔ Automation tools

**🔥 3. Telegram Business:**
✔ VPN key bot
✔ Digital product selling
✔ Subscription system

**🔥 4. API Business:**
✔ Payment API
✔ SMS API
✔ Authentication API`,
    examples: [
      'SaaS: Inventory, Order, School management',
      'AI Tools: Resume generator, Chatbot, Automation',
      'Telegram: VPN key bot, Digital product selling',
      'API: Payment, SMS, Authentication',
    ],
    keyPoints: [
      'SaaS Systems = Inventory, Order, School management',
      'AI Tools = Resume generator, Chatbot, Automation',
      'Telegram Business = VPN key bot, Digital products',
      'API Business = Payment, SMS, Authentication APIs',
    ],
  },
  {
    id: 'developer-to-business-system',
    title: 'Developer → Business System Thinking ⚙️',
    content: `**Traditional Developer:**
👉 Write code only

**Smart Developer 🔥:**
👉 Build system + earn money

**Example:**
Code → API → Cloud → Users → Money`,
    examples: [
      'Code → API → Cloud → Users → Money',
    ],
    keyPoints: [
      'Traditional developer = writes code only',
      'Smart developer 🔥 = builds systems + earns money',
      'Flow: Code → API → Cloud → Users → Money',
    ],
  },
  {
    id: 'business-risks',
    title: 'Risk in Business 🔐',
    content: `**🔴 Risks:**
- No customers
- Wrong pricing
- Competition

**🟢 Solution:**
- MVP first
- Test market
- Improve step by step`,
    examples: [],
    keyPoints: [
      'Risks: No customers, wrong pricing, competition',
      'Solution: MVP first, test market, improve step by step',
    ],
  },
  {
    id: 'kpi-business-measurement',
    title: 'KPI (Business Measurement) 📊',
    content: `**Key Performance Indicators:**
✔ Users count
✔ Revenue
✔ Conversion rate
✔ Retention`,
    examples: [],
    keyPoints: [
      'Users count = How many active users?',
      'Revenue = How much money earned?',
      'Conversion rate = Free → Paid users %',
      'Retention = How many users stay?',
    ],
  },
  {
    id: 'real-world-thinking',
    title: 'Real-World Thinking 🔥 IMPORTANT',
    content: `**Big companies think:**
✔ Amazon → convenience
✔ Google → information
✔ Netflix → entertainment

**YOU should think:**
✔ "What problem can I solve with code?"`,
    examples: [
      'Amazon = convenience, Google = information, Netflix = entertainment',
      'Think: "What problem can I solve with code?"',
    ],
    keyPoints: [
      'Big companies solve specific problems',
      'Think: "What problem can I solve with code?"',
      'Code is your superpower for business',
    ],
  },
  {
    id: 'developer-money-path',
    title: 'Developer Money Path 💰',
    content: `**Level 1:** Job salary 💼

**Level 2:** Freelance 💻

**Level 3:** SaaS business 💰

**Level 4 🔥:** Automated system income`,
    examples: [],
    keyPoints: [
      'Level 1: Job salary (fixed income)',
      'Level 2: Freelance (project-based income)',
      'Level 3: SaaS business (recurring revenue)',
      'Level 4 🔥: Automated system income (passive)',
    ],
  },
  {
    id: 'final-summary',
    title: 'Final Summary 🔥',
    content: `✔ Business = Problem solving system
✔ Money = Value exchange
✔ Developers = Advantage (automation power)
✔ Cloud + API = scalability
✔ Best mindset = build systems, not just code`,
    examples: [],
    keyPoints: [
      'Business = Problem solving system',
      'Money = Value exchange',
      'Developers = Advantage (automation power)',
      'Cloud + API = scalability',
      'Best mindset = build systems, not just code',
    ],
  },
];
