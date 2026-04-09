/**
 * Seed Content — Ethics & Society Track
 *
 * First three lessons exploring AI ethics — bias, transparency,
 * and societal impact — led by Coach Williams.
 */

import type { LessonBlock } from "@ridgemont/types";
import type { SeedLesson } from "./ai-foundations";

export const lesson01_biasInAI: SeedLesson = {
  slug: "bias-in-ai-systems",
  title: "Bias in AI Systems",
  trackSlug: "ethics-society",
  order: 1,
  estimatedMinutes: 25,
  personaId: "coach-williams",
  blocks: [
    {
      type: "text",
      content:
        "AI systems learn from data created by humans — and humans have biases. When those biases appear in training data, AI amplifies them at scale. Understanding how bias enters AI systems is the first step to building fairer technology.",
    },
    {
      type: "persona_commentary",
      personaId: "coach-williams",
      quote:
        "In my playing days, scouts relied on gut feelings — and missed talent from certain neighborhoods. AI was supposed to fix that. But if you train a model on biased scouting data, you just automate the same blind spots. Fairness requires intention.",
    },
    {
      type: "then_vs_now",
      thenEra: "1980s",
      thenDescription:
        "Hiring decisions were made by humans with clipboards and gut instincts. Bias existed but was harder to measure at scale.",
      nowDescription:
        "Amazon built an AI hiring tool trained on 10 years of resumes — mostly from men. It learned to penalize resumes containing the word 'women's.' Amazon scrapped the system in 2018.",
    },
    {
      type: "text",
      content:
        "Three types of AI bias:\n\n**Data Bias** — The training data doesn't represent the real world. A facial recognition system trained mostly on light-skinned faces fails on darker skin tones.\n\n**Algorithmic Bias** — The model's design amplifies certain patterns. Optimizing for 'engagement' can amplify extreme content.\n\n**Deployment Bias** — A fair model used in an unfair context. A recidivism prediction tool accurate overall but disproportionately wrong for specific demographics.",
    },
    {
      type: "source_card",
      title: "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification",
      author: "Buolamwini & Gebru",
      publication: "FAT* 2018",
      year: 2018,
      url: "https://proceedings.mlr.press/v81/buolamwini18a.html",
      description: "Landmark study showing commercial facial recognition error rates were 34.7% for dark-skinned women vs 0.8% for light-skinned men.",
    },
    {
      type: "quiz",
      question: "What happened when Amazon built an AI hiring tool?",
      options: [
        "It perfectly eliminated human bias",
        "It learned to penalize resumes with the word 'women's' and was scrapped",
        "It was deployed successfully worldwide",
        "It only worked for technical roles",
      ],
      correctIndex: 1,
      explanation:
        "Trained on a decade of resumes (mostly male applicants), the system learned gender bias from the historical data and penalized female applicants. Amazon discontinued it.",
    },
    {
      type: "lab",
      labType: "media_analysis",
      labTitle: "Bias Detection Exercise",
      labDescription:
        "Analyze a dataset used for facial recognition. Identify representation gaps across demographics and propose data collection strategies to address them.",
    },
  ],
};

export const lesson02_transparency: SeedLesson = {
  slug: "ai-transparency-explainability",
  title: "Transparency & Explainability",
  trackSlug: "ethics-society",
  order: 2,
  estimatedMinutes: 20,
  personaId: "coach-williams",
  blocks: [
    {
      type: "text",
      content:
        "When an AI makes a decision that affects your life — a loan application, a medical diagnosis, a job screening — you deserve to know why. Explainability means building AI systems that can justify their reasoning in terms humans understand.",
    },
    {
      type: "persona_commentary",
      personaId: "coach-williams",
      quote:
        "In sports, every ref call can be reviewed. Every foul has a rule number. AI decisions affecting people's lives should meet the same standard. No black boxes when the stakes are real.",
    },
    {
      type: "text",
      content:
        "**The Black Box Problem**: Deep neural networks can have billions of parameters. Even their creators can't always explain why they made a specific decision. This is fine for movie recommendations — not acceptable for criminal sentencing.\n\n**Levels of Explainability**:\n1. **Global** — Understanding what the model learned overall\n2. **Local** — Explaining why it made this specific prediction\n3. **Counterfactual** — 'If X had been different, the outcome would have changed'",
    },
    {
      type: "quiz",
      question: "Why is explainability more important for a loan approval AI than a movie recommendation AI?",
      options: [
        "Loan AIs are more expensive",
        "Loan decisions have life-altering consequences requiring justification",
        "Movie AIs are always accurate",
        "Loan AIs use more data",
      ],
      correctIndex: 1,
      explanation:
        "When AI decisions affect rights, opportunities, or wellbeing, people need to understand and potentially challenge the reasoning. A bad movie recommendation wastes 2 hours; a wrongful loan denial can alter a family's future.",
    },
  ],
};

export const lesson03_aiAndJobs: SeedLesson = {
  slug: "ai-and-the-future-of-work",
  title: "AI and the Future of Work",
  trackSlug: "ethics-society",
  order: 3,
  estimatedMinutes: 25,
  personaId: "coach-williams",
  blocks: [
    {
      type: "text",
      content:
        "Every major technology shift has transformed the job market. The printing press displaced scribes but created publishers. The internet eliminated travel agents but created web developers. AI is doing the same — but faster than any previous wave.",
    },
    {
      type: "then_vs_now",
      thenEra: "1990s",
      thenDescription:
        "Experts predicted the internet would eliminate most office jobs. Instead, it created entirely new industries — e-commerce, social media, digital marketing, web development — that employing millions.",
      nowDescription:
        "AI is automating predictable cognitive tasks (data entry, basic analysis, routine writing) while creating demand for skills like prompt engineering, AI ethics, and human-AI collaboration.",
    },
    {
      type: "persona_commentary",
      personaId: "coach-williams",
      quote:
        "The question isn't whether AI will change jobs — it's whether the transition will be fair. Will displaced workers get retraining? Will new opportunities reach underserved communities? That's the real game.",
    },
    {
      type: "text",
      content:
        "**Tasks, not jobs, get automated.** A radiologist's job includes reading scans (automatable), consulting with patients (not automatable), and making treatment decisions (partially automatable). AI changes the job; it rarely eliminates it entirely.\n\n**Skills that stay human**: Empathy, ethical judgment, creative vision, physical dexterity, relationship building, cultural understanding, and novel problem framing.",
    },
    {
      type: "quiz",
      question: "How does AI typically affect existing jobs?",
      options: [
        "It eliminates entire jobs overnight",
        "It automates specific tasks within jobs, changing the role",
        "It has no effect on most jobs",
        "It only affects manufacturing",
      ],
      correctIndex: 1,
      explanation:
        "Research consistently shows AI automates tasks, not whole jobs. Most roles evolve rather than disappear — the mix of tasks shifts toward uniquely human skills.",
    },
    {
      type: "lab",
      labType: "project",
      labTitle: "Future-Proof Career Report",
      labDescription:
        "Research a career you're interested in. Identify which tasks are automatable, which require human judgment, and propose how the role might evolve by 2035.",
    },
  ],
};

export const ETHICS_SOCIETY_SEEDS: SeedLesson[] = [
  lesson01_biasInAI,
  lesson02_transparency,
  lesson03_aiAndJobs,
];

export const ETHICS_SOCIETY_TRACK = {
  slug: "ethics-society",
  name: "Ethics & Society",
  description:
    "Explore the hardest questions in AI — bias, fairness, transparency, jobs, and power. Build the moral compass every AI practitioner needs.",
  icon: "Scale",
  color: "from-amber-500 to-orange-600",
  level: "Beginner",
  lessonCount: 10,
  estimatedHours: 5,
  prerequisites: [],
  personaIds: ["coach-williams"],
};
