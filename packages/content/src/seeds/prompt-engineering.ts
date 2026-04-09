/**
 * Seed Content — Prompt Engineering Track
 *
 * First three lessons of the Prompt Engineering learning track,
 * led by Ms. Chen (the prompt engineering mentor).
 */

import type { LessonBlock } from "@ridgemont/types";
import type { SeedLesson } from "./ai-foundations";

export const lesson01_promptBasics: SeedLesson = {
  slug: "anatomy-of-a-prompt",
  title: "Anatomy of a Prompt",
  trackSlug: "prompt-engineering",
  order: 1,
  estimatedMinutes: 20,
  personaId: "ms-chen",
  blocks: [
    {
      type: "text",
      content:
        "A prompt is the instruction you give to an AI model. The quality of the output depends almost entirely on the quality of the input. Prompt engineering is the discipline of crafting inputs that reliably produce the outputs you need.",
    },
    {
      type: "persona_commentary",
      personaId: "ms-chen",
      quote:
        "Think of prompting like giving directions. 'Go somewhere nice' gets you lost. 'Drive north on Main Street for two miles, turn left at the library' gets you where you need to be. Specificity is everything.",
    },
    {
      type: "text",
      content:
        "Every effective prompt has these components:\n\n**Role** — Who should the AI act as? (e.g., 'You are an expert Python tutor')\n\n**Task** — What should it do? (e.g., 'Explain list comprehensions')\n\n**Context** — What background info does it need? (e.g., 'The student knows basic loops but not functional programming')\n\n**Format** — How should the output look? (e.g., 'Use bullet points with code examples')\n\n**Constraints** — What to avoid? (e.g., 'Do not use advanced decorators')",
    },
    {
      type: "code",
      language: "text",
      code: `# Bad prompt\nExplain Python.\n\n# Good prompt\nYou are a patient Python tutor for a 14-year-old who knows\nScratch but has never written text-based code.\n\nExplain what a variable is in Python.\n\nUse:\n- A real-world analogy (like a labeled box)\n- One simple code example\n- No jargon beyond "variable" and "value"\n\nEnd with a practice challenge the student can try.`,
      caption: "The difference between a vague prompt and an engineered prompt.",
    },
    {
      type: "quiz",
      question: "Which prompt component tells the AI what format to use for its response?",
      options: ["Role", "Task", "Context", "Format"],
      correctIndex: 3,
      explanation:
        "The Format component specifies structure — bullet points, code blocks, tables, paragraph length, etc. Without it, the model guesses.",
    },
    {
      type: "lab",
      labType: "prompt",
      labTitle: "Prompt Anatomy Workshop",
      labDescription:
        "Take a vague prompt and restructure it using all five components: Role, Task, Context, Format, and Constraints. Compare outputs side by side.",
    },
  ],
};

export const lesson02_fewShotPrompting: SeedLesson = {
  slug: "few-shot-prompting",
  title: "Few-Shot Prompting",
  trackSlug: "prompt-engineering",
  order: 2,
  estimatedMinutes: 25,
  personaId: "ms-chen",
  blocks: [
    {
      type: "text",
      content:
        "Few-shot prompting means giving the model examples of what you want before asking it to produce new output. Instead of describing the pattern, you show it.",
    },
    {
      type: "then_vs_now",
      thenEra: "2000s",
      thenDescription:
        "Traditional ML required thousands of labeled examples and hours of training to teach a model a new task. Each new task meant retraining from scratch.",
      nowDescription:
        "Large language models can learn new tasks from just 2-5 examples in the prompt — no retraining needed. This is called 'in-context learning.'",
    },
    {
      type: "code",
      language: "text",
      code: `Classify the sentiment of movie reviews.\n\nReview: "This film was a masterpiece of storytelling."\nSentiment: Positive\n\nReview: "I walked out after 30 minutes. Terrible pacing."\nSentiment: Negative\n\nReview: "It had great visuals but the plot was confusing."\nSentiment: Mixed\n\nReview: "The acting was superb and I cried at the ending."\nSentiment:`,
      caption: "Three examples teach the model the classification pattern. It infers 'Positive' for the last review.",
    },
    {
      type: "persona_commentary",
      personaId: "ms-chen",
      quote:
        "The magic number is usually 3-5 examples. Fewer than that and the model might not catch the pattern. More than that and you're wasting tokens without much benefit.",
    },
    {
      type: "quiz",
      question: "What is the key advantage of few-shot prompting over traditional ML training?",
      options: [
        "It produces more accurate results",
        "It requires no retraining — just examples in the prompt",
        "It uses less memory",
        "It works with smaller models",
      ],
      correctIndex: 1,
      explanation:
        "Few-shot prompting lets you teach new tasks at inference time through examples, eliminating the need for dataset collection and model retraining.",
    },
    {
      type: "lab",
      labType: "prompt",
      labTitle: "Few-Shot Experiment",
      labDescription:
        "Build a few-shot prompt for a custom classification task. Test with 1, 3, and 5 examples and measure how accuracy changes.",
    },
  ],
};

export const lesson03_chainOfThought: SeedLesson = {
  slug: "chain-of-thought",
  title: "Chain-of-Thought Reasoning",
  trackSlug: "prompt-engineering",
  order: 3,
  estimatedMinutes: 25,
  personaId: "ms-chen",
  blocks: [
    {
      type: "text",
      content:
        "Chain-of-thought (CoT) prompting asks the model to show its reasoning step by step before giving a final answer. This dramatically improves performance on math, logic, and multi-step problems.",
    },
    {
      type: "code",
      language: "text",
      code: `# Without CoT\nQ: A store has 15 apples. 8 are sold. 3 more are delivered. How many now?\nA: 10\n\n# With CoT\nQ: A store has 15 apples. 8 are sold. 3 more are delivered. How many now?\nA: Let me think step by step.\n1. Start with 15 apples\n2. 8 are sold: 15 - 8 = 7\n3. 3 more delivered: 7 + 3 = 10\nThe store has 10 apples.`,
      caption: "Both get the right answer here, but CoT is far more reliable on harder problems.",
    },
    {
      type: "source_card",
      title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
      author: "Wei et al.",
      publication: "NeurIPS 2022",
      year: 2022,
      url: "https://arxiv.org/abs/2201.11903",
      description: "The paper that formalized chain-of-thought prompting and showed dramatic accuracy gains on reasoning benchmarks.",
    },
    {
      type: "persona_commentary",
      personaId: "ms-chen",
      quote:
        "The simplest CoT trigger? Just add 'Let's think step by step' to your prompt. It sounds too easy to work, but on the GSM8K math benchmark it improved accuracy from 17.7% to 78.7%. That's the power of structure.",
    },
    {
      type: "quiz",
      question: "What is the main benefit of chain-of-thought prompting?",
      options: [
        "It makes the model respond faster",
        "It improves reasoning by showing intermediate steps",
        "It reduces the number of tokens used",
        "It allows the model to access the internet",
      ],
      correctIndex: 1,
      explanation:
        "Chain-of-thought prompting forces the model to decompose problems into steps, catching errors that would occur if it jumped straight to an answer.",
    },
    {
      type: "lab",
      labType: "prompt",
      labTitle: "CoT Challenge",
      labDescription:
        "Solve 5 logic puzzles with and without chain-of-thought prompting. Compare accuracy and identify which problem types benefit most from CoT.",
    },
  ],
};

export const PROMPT_ENGINEERING_SEEDS: SeedLesson[] = [
  lesson01_promptBasics,
  lesson02_fewShotPrompting,
  lesson03_chainOfThought,
];

export const PROMPT_ENGINEERING_TRACK = {
  slug: "prompt-engineering",
  name: "Prompt Engineering",
  description:
    "Learn to speak AI's language. Master prompt structure, few-shot learning, chain-of-thought, and advanced techniques that turn vague requests into precise results.",
  icon: "MessageSquare",
  color: "from-cyan-500 to-blue-600",
  level: "Beginner",
  lessonCount: 10,
  estimatedHours: 5,
  prerequisites: ["ai-foundations"],
  personaIds: ["ms-chen"],
};
