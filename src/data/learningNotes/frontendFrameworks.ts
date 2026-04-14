export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'frontend-frameworks';
export const tabLabel = 'VUE.JS + REACT.JS';
export const tabIcon = '🎨';

export const notes: LearningNote[] = [
  {
    id: 'what-is-frontend-framework',
    title: 'Frontend Framework ဆိုတာဘာလဲ? 🧠',
    content: `Frontend Framework ဆိုတာ UI (User Interface) ကို structure + reusable + fast လုပ်ဖို့ tool ဖြစ်ပါတယ်။

**Why use?**
✔ Clean code
✔ Component reuse
✔ Fast development
✔ Maintainable`,
    examples: [],
    keyPoints: [
      'Frontend Framework = UI structure tool',
      'Clean code, component reuse, fast development, maintainable',
    ],
  },
  {
    id: 'what-is-vue',
    title: 'Vue.js ဆိုတာဘာလဲ? 🔷',
    content: `Vue.js ဆိုတာ Progressive JavaScript Framework ဖြစ်ပါတယ်။

Easy to learn + powerful

**Why use Vue?**
✔ Simple syntax
✔ Two-way binding
✔ Fast learning`,
    examples: [],
    keyPoints: [
      'Vue.js = Progressive JavaScript Framework',
      'Easy to learn + powerful',
      'Simple syntax, two-way binding, fast learning',
    ],
  },
  {
    id: 'vue-version-evolution',
    title: 'Vue Version Evolution 🔥',
    content: `**Vue 2 (Old):**
- Options API
- Less scalable

**Vue 3 (Current 🔥) — BIG upgrade**
Features:
- Composition API 🔥
- Better performance
- TypeScript support

**Interview Tip:** "Vue 3 is recommended due to Composition API and better performance"`,
    examples: [],
    keyPoints: [
      'Vue 2 = Options API, less scalable',
      'Vue 3 = Composition API, better performance, TypeScript support',
      'Vue 3 is recommended',
    ],
  },
  {
    id: 'vue3-basics',
    title: 'Vue 3 Basics',
    content: `Vue 3 uses \`<script setup>\` syntax with Composition API.`,
    examples: [
      `<template>
  <h1>Hello PK</h1>
</template>

<script setup>
</script>`,
    ],
    keyPoints: [
      'Vue 3 uses <script setup>',
      'Composition API syntax',
    ],
  },
  {
    id: 'vue-components',
    title: 'Components 🔥 VERY IMPORTANT',
    content: `Components ဆိုတာ Reusable UI parts ဖြစ်ပါတယ်။

**Why?**
- Clean UI
- Reusable`,
    examples: [
      `<template>
  <button>Click</button>
</template>`,
    ],
    keyPoints: [
      'Components = Reusable UI parts',
      'Clean UI, reusable',
    ],
  },
  {
    id: 'vue-props-emits',
    title: 'Props & Emits',
    content: `**Props (Parent → Child):**
\`defineProps(['name'])\`

**Emits (Child → Parent):**
\`const emit = defineEmits(['click'])\``,
    examples: [
      "defineProps(['name'])  // Parent → Child",
      "const emit = defineEmits(['click'])  // Child → Parent",
    ],
    keyPoints: [
      'Props = Parent → Child data flow',
      'Emits = Child → Parent event flow',
    ],
  },
  {
    id: 'vue-reactive-state',
    title: 'Reactive State',
    content: `**ref / reactive:**
\`import { ref } from 'vue'\`
\`const count = ref(0)\`

**Why?**
👉 UI auto update`,
    examples: [
      `import { ref } from 'vue'

const count = ref(0)`,
    ],
    keyPoints: [
      'ref / reactive = reactive state',
      'UI auto update when state changes',
    ],
  },
  {
    id: 'vue-router',
    title: 'Vue Router',
    content: `Vue Router ဆိုတာ Page navigation အတွက် ဖြစ်ပါတယ်။`,
    examples: [
      `createRouter({
  routes: []
})`,
    ],
    keyPoints: [
      'Vue Router = Page navigation',
      'createRouter for route setup',
    ],
  },
  {
    id: 'vue-state-management-pinia',
    title: 'State Management (Pinia 🔥)',
    content: `Pinia ဆိုတာ Global state management tool ဖြစ်ပါတယ်။`,
    examples: [
      `export const useStore = defineStore('main', {
  state: () => ({ count: 0 })
})`,
    ],
    keyPoints: [
      'Pinia = Global state management',
      'defineStore for state definition',
    ],
  },
  {
    id: 'vue-api-integration',
    title: 'API Integration',
    content: `Vue မှာ API call လုပ်ဖို့ axios ကို အသုံးပြုပါတယ်။`,
    examples: [
      `import axios from 'axios'

axios.get('/api')`,
    ],
    keyPoints: [
      'Use axios for API calls',
      'HTTP requests to backend',
    ],
  },
  {
    id: 'vue-best-practices',
    title: 'Vue Best Practices',
    content: `✔ Use Composition API
✔ Use TypeScript
✔ Component split
✔ Clean structure`,
    examples: [],
    keyPoints: [
      'Use Composition API',
      'Use TypeScript',
      'Component split',
      'Clean structure',
    ],
  },
  {
    id: 'what-is-react',
    title: 'React.js ဆိုတာဘာလဲ? ⚛️',
    content: `React.js ဆိုတာ UI Library (Facebook) ဖြစ်ပါတယ်။

Component-based UI

**Why use React?**
✔ Huge ecosystem
✔ Flexible
✔ Popular 🔥`,
    examples: [],
    keyPoints: [
      'React.js = UI Library by Facebook',
      'Component-based UI',
      'Huge ecosystem, flexible, popular',
    ],
  },
  {
    id: 'react-version-evolution',
    title: 'React Version Evolution',
    content: `**Old React:**
- Class components

**Modern React (Hooks 🔥) — BIG change**

**React 18 (Current):**
Features:
- Concurrent rendering
- Automatic batching`,
    examples: [],
    keyPoints: [
      'Old React = Class components',
      'Modern React = Hooks 🔥',
      'React 18 = Concurrent rendering, automatic batching',
    ],
  },
  {
    id: 'react-jsx',
    title: 'JSX',
    content: `JSX ဆိုတာ HTML + JS ပေါင်းထားတဲ့ syntax ဖြစ်ပါတယ်။`,
    examples: [
      '<h1>Hello PK</h1>',
    ],
    keyPoints: [
      'JSX = HTML + JS',
      'Template syntax in React',
    ],
  },
  {
    id: 'react-components',
    title: 'React Components',
    content: `React Components ဆိုတာ Reusable UI blocks ဖြစ်ပါတယ်။`,
    examples: [
      `function App(){
  return <h1>Hello</h1>
}`,
    ],
    keyPoints: [
      'Components = Reusable UI blocks',
      'Function components',
    ],
  },
  {
    id: 'react-props',
    title: 'React Props',
    content: `Props ဆိုတာ Parent → Child data pass လုပ်တဲ့ mechanism ဖြစ်ပါတယ်။`,
    examples: [
      `function User({name}){
  return <p>{name}</p>
}`,
    ],
    keyPoints: [
      'Props = Parent → Child data passing',
      'Destructuring props',
    ],
  },
  {
    id: 'react-state-hooks',
    title: 'State & Hooks 🔥',
    content: `**useState:**
\`const [count, setCount] = useState(0);\`

**useEffect:**
\`useEffect(() => { console.log("mounted"); }, []);\`

**Why?**
👉 Manage data + lifecycle`,
    examples: [
      'const [count, setCount] = useState(0);',
      `useEffect(() => {
  console.log("mounted");
}, []);`,
    ],
    keyPoints: [
      'useState = state management',
      'useEffect = side effects / lifecycle',
      'Manage data + lifecycle',
    ],
  },
  {
    id: 'react-routing',
    title: 'React Routing',
    content: `React Router ဆိုတာ Page navigation အတွက် ဖြစ်ပါတယ်။`,
    examples: [
      '<Route path="/" element={<Home />} />',
    ],
    keyPoints: [
      'React Router = Page navigation',
      'Route component for path mapping',
    ],
  },
  {
    id: 'react-api-calls',
    title: 'React API Calls',
    content: `React မှာ API call ကို useEffect ထဲမှာ လုပ်ပါတယ်။`,
    examples: [
      `useEffect(() => {
  fetch('/api')
}, []);`,
    ],
    keyPoints: [
      'Use useEffect for API calls',
      'Fetch data on mount',
    ],
  },
  {
    id: 'react-state-management',
    title: 'React State Management',
    content: `**Options:**
- Context API
- Redux
- React Query 🔥`,
    examples: [],
    keyPoints: [
      'Context API = built-in state',
      'Redux = global state',
      'React Query 🔥 = server state management',
    ],
  },
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization',
    content: `✔ useMemo
✔ useCallback
✔ Lazy loading`,
    examples: [],
    keyPoints: [
      'useMemo = memoize values',
      'useCallback = memoize functions',
      'Lazy loading = code splitting',
    ],
  },
  {
    id: 'vue-vs-react',
    title: 'Vue vs React 🔥',
    content: `| Vue | React |
|---|---|
| Easy | Flexible |
| Built-in | Library based |
| Cleaner | Powerful |`,
    examples: [],
    keyPoints: [
      'Vue = Easy, built-in tools, cleaner syntax',
      'React = Flexible, library based, powerful',
      'Choose based on project needs',
    ],
  },
  {
    id: 'frontend-interview-questions',
    title: 'Interview Questions 🔥',
    content: `**❓ Vue vs React?**
👉 Vue easier, React more flexible

**❓ What is Virtual DOM?**
👉 Faster UI update

**❓ What is Hook?**
👉 Function for state/lifecycle

**❓ What is Component?**
👉 Reusable UI`,
    examples: [],
    keyPoints: [
      'Vue easier, React more flexible',
      'Virtual DOM = Faster UI update',
      'Hook = Function for state/lifecycle',
      'Component = Reusable UI',
    ],
  },
  {
    id: 'frontend-real-world-thinking',
    title: 'Real-World Thinking 🔥',
    content: `**🟢 Use Vue:**
✔ Small-mid project
✔ Fast development

**🟢 Use React:**
✔ Large project
✔ Team work
✔ Complex UI`,
    examples: [],
    keyPoints: [
      'Use Vue for: Small-mid project, fast development',
      'Use React for: Large project, team work, complex UI',
    ],
  },
  {
    id: 'frontend-final-summary',
    title: 'Final Summary 🔥',
    content: `**Vue = simple + fast**
**React = flexible + powerful**
**Component = core**
**State = important**
**Hooks = must know**`,
    examples: [],
    keyPoints: [
      'Vue = simple + fast',
      'React = flexible + powerful',
      'Component = core concept',
      'State = important',
      'Hooks = must know',
    ],
  },
];
