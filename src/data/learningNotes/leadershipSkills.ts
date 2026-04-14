export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'leadership-skills';
export const tabLabel = 'LEADERSHIP SKILLS';
export const tabIcon = '👑';

export const notes: LearningNote[] = [
  {
    id: 'what-is-leadership',
    title: 'Leadership ဆိုတာဘာလဲ? 🧠',
    content: `Leadership ဆိုတာ လူတွေကို guide လုပ်ပြီး goal တစ်ခုဆီကို အောင်မြင်အောင် lead လုပ်ခြင်း ဖြစ်ပါတယ်။

**Simple Meaning:**
"လူတွေကို မှန်ကန်တဲ့လမ်းကြောင်းပေါ်တင်ပေးခြင်း"

**Key Idea:**
Vision → Guide → Support → Achieve

**🔥 Leadership = Responsibility + Influence**`,
    examples: [
      'Vision → Guide → Support → Achieve',
    ],
    keyPoints: [
      'Leadership = guide people to achieve goals',
      'Meaning: Put people on the right path',
      'Leadership = Responsibility + Influence',
    ],
  },
  {
    id: 'leader-vs-manager',
    title: 'Leader vs Manager 👑',
    content: `**🔵 Leader:**
✔ Vision ပေးတယ်
✔ Inspire လုပ်တယ်
✔ People focus
👉 "Where we go?"

**🟡 Manager:**
✔ Task manage
✔ Process control
✔ Deadline focus
👉 "How we do?"

**🔥 Simple Difference:**
| Leader | Manager |
|---|---|
| Inspire | Control |
| Vision | Execution |
| People | Process |

**🔥 Interview Tip:**
"Leader inspires, Manager organizes"`,
    examples: [
      'Leader: "Where we go?"',
      'Manager: "How we do?"',
    ],
    keyPoints: [
      'Leader = inspire, vision, people focus',
      'Manager = control, execution, process focus',
      'Leader inspires, Manager organizes',
    ],
  },
  {
    id: 'communication-skills',
    title: 'Communication Skills 🗣️',
    content: `**What?**
👉 လူတွေနဲ့ အကျိုးရှိစွာ စကားပြောနိုင်မှု

**Types:**
✔ Verbal (စကားပြော)
✔ Written (Email / Message)
✔ Non-verbal (body language)

**Good Communication Rule:**
Clear + Simple + Respectful

**🔥 Developer Example:**

❌ Bad:
"Bug error code problem"

✔ Good:
"API login endpoint returns 500 error due to null value"`,
    examples: [
      'Bad: "Bug error code problem"',
      'Good: "API login endpoint returns 500 error due to null value"',
    ],
    keyPoints: [
      'Communication = effective talking/writing',
      'Types: Verbal, Written, Non-verbal',
      'Rule: Clear + Simple + Respectful',
      'Be specific, not vague',
    ],
  },
  {
    id: 'decision-making',
    title: 'Decision Making 🎯',
    content: `**What?**
👉 အကောင်းဆုံး option ကိုရွေးချယ်ခြင်း

**Process:**
1. Problem identify
2. Options list
3. Analyze
4. Choose
5. Review

**🔥 Example — Cloud selection:**
Azure vs AWS → cost + performance check

**🔥 Rule:**
Good decision = Data + Experience`,
    examples: [
      'Cloud selection: Azure vs AWS → cost + performance check',
    ],
    keyPoints: [
      'Decision making = choosing best option',
      'Process: Identify → List → Analyze → Choose → Review',
      'Good decision = Data + Experience',
    ],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving 🧩',
    content: `**What?**
👉 ပြဿနာကို analyze + fix လုပ်ခြင်း

**Steps:**
1. Understand problem
2. Break into small parts
3. Find root cause
4. Fix
5. Test

**🔥 Developer Example — Bug in API:**
- Check logs
- Check DB
- Fix null issue

**🔥 Rule:**
"Don't guess, analyze"`,
    examples: [
      'Bug in API: Check logs → Check DB → Fix null issue',
    ],
    keyPoints: [
      'Problem solving = analyze + fix',
      'Steps: Understand → Break → Root cause → Fix → Test',
      "Don't guess, analyze",
    ],
  },
  {
    id: 'team-motivation',
    title: 'Team Motivation 💪',
    content: `**What?**
👉 Team ကို အားတက်အောင်လုပ်ခြင်း

**Methods:**
✔ Praise good work
✔ Set clear goals
✔ Give feedback
✔ Support learning

**🔥 Example:**
"Good job on API performance improvement"

**🔥 Rule:**
Happy team = productive team`,
    examples: [
      '"Good job on API performance improvement"',
    ],
    keyPoints: [
      'Team motivation = energize team',
      'Methods: Praise, clear goals, feedback, support learning',
      'Happy team = productive team',
    ],
  },
  {
    id: 'conflict-resolution',
    title: 'Conflict Resolution ⚔️',
    content: `**What?**
👉 Team အတွင်း ပြဿနာကိုဖြေရှင်းခြင်း

**Common conflicts:**
- Opinion difference
- Deadline pressure
- Code disagreement

**Solution Steps:**
1. Listen both sides
2. Find root cause
3. Stay neutral
4. Decide fair solution

**🔥 Rule:**
"Don't blame, solve"`,
    examples: [
      'Opinion difference, Deadline pressure, Code disagreement',
    ],
    keyPoints: [
      'Conflict resolution = solve team problems',
      'Steps: Listen → Root cause → Neutral → Fair solution',
      "Don't blame, solve",
    ],
  },
  {
    id: 'time-management',
    title: 'Time Management ⏱️',
    content: `**What?**
👉 အချိန်ကိုအကျိုးရှိစွာသုံးခြင်း

**Methods:**
✔ Prioritize tasks
✔ Use schedule
✔ Avoid distraction

**🔥 Rule:**
Important + Urgent first

**Example:**
- Bug fix → urgent
- Feature → important`,
    examples: [
      'Bug fix = urgent, Feature = important',
    ],
    keyPoints: [
      'Time management = use time effectively',
      'Methods: Prioritize, schedule, avoid distraction',
      'Important + Urgent first',
    ],
  },
  {
    id: 'growth-mindset',
    title: 'Growth Mindset 🚀 🔥 VERY IMPORTANT',
    content: `**What?**
👉 "ငါတိုးတက်နိုင်တယ်" ဆိုတဲ့ mindset

**Fixed Mindset ❌:**
"ငါမလုပ်နိုင်ဘူး"

**Growth Mindset ✔:**
"ငါသင်ယူပြီးလုပ်နိုင်တယ်"

**🔥 Developer Example:**
- New framework → learn instead of avoid
- Bug → opportunity to improve

**🔥 Rule:**
Skills grow through effort, not talent only`,
    examples: [
      'New framework → learn instead of avoid',
      'Bug → opportunity to improve',
    ],
    keyPoints: [
      'Growth mindset = "I can improve"',
      'Fixed = "I can\'t", Growth = "I can learn"',
      'Skills grow through effort, not talent only',
    ],
  },
  {
    id: 'final-summary',
    title: 'Final Summary 🧠',
    content: `✔ Leadership = Guide + Inspire
✔ Leader ≠ Manager
✔ Communication = clarity
✔ Decision = data-based
✔ Problem solving = root cause thinking
✔ Motivation = team energy
✔ Conflict = fair resolution
✔ Time = priority control
✔ Growth mindset = continuous learning`,
    examples: [],
    keyPoints: [
      'Leadership = Guide + Inspire',
      'Leader ≠ Manager',
      'Communication = clarity',
      'Decision = data-based',
      'Problem solving = root cause thinking',
      'Motivation = team energy',
      'Conflict = fair resolution',
      'Time = priority control',
      'Growth mindset = continuous learning',
    ],
  },
];
