/**
 * Seed Content — AI Foundations Track
 *
 * Structured lesson data for the first three lessons of the
 * AI Foundations learning track, demonstrating the full block
 * renderer system with all 7 block types.
 */

import type { LessonBlock } from "@ridgemont/types";

export interface SeedLesson {
  slug: string;
  title: string;
  trackSlug: string;
  order: number;
  estimatedMinutes: number;
  personaId: string;
  blocks: LessonBlock[];
}

// ── Lesson 1: What Is Artificial Intelligence? ──

export const lesson01_whatIsAI: SeedLesson = {
  slug: "what-is-artificial-intelligence",
  title: "What Is Artificial Intelligence?",
  trackSlug: "ai-foundations",
  order: 1,
  estimatedMinutes: 20,
  personaId: "professor-hartwell",
  blocks: [
    {
      type: "text",
      content:
        "Artificial intelligence is the science of building systems that can perform tasks which normally require human intelligence — recognizing faces, understanding language, making decisions, or creating art. But what does that actually mean in practice?",
    },
    {
      type: "persona_commentary",
      personaId: "professor-hartwell",
      quote:
        "When I started teaching computer science in the 1980s, AI was science fiction. Today, you carry it in your pocket. The fundamentals haven't changed — only the scale. Let's start there.",
    },
    {
      type: "then_vs_now",
      thenEra: "1950s",
      thenDescription:
        "Alan Turing proposed the Turing Test: if a machine can fool a human into thinking it's human, it's intelligent. The test was purely theoretical — no machine came close.",
      nowDescription:
        "Modern language models regularly pass informal Turing Tests. But researchers now debate whether this measures real understanding or sophisticated pattern matching.",
    },
    {
      type: "text",
      content:
        "AI breaks into two big categories:\n\n**Narrow AI** — Systems built for one specific task. Spam filters, chess engines, image classifiers. This is what exists today.\n\n**General AI (AGI)** — A hypothetical system that can learn and reason across any domain, like a human. This does not exist yet, despite what headlines may suggest.",
    },
    {
      type: "source_card",
      title: "Computing Machinery and Intelligence",
      author: "Alan Turing",
      publication: "Mind, Vol. 59, No. 236",
      year: 1950,
      url: "https://doi.org/10.1093/mind/LIX.236.433",
      description: "The foundational paper proposing the imitation game (Turing Test).",
    },
    {
      type: "quiz",
      question: "Which type of AI exists today?",
      options: [
        "Artificial General Intelligence (AGI)",
        "Narrow AI (specialized systems)",
        "Superintelligent AI",
        "Conscious AI",
      ],
      correctIndex: 1,
      explanation:
        "All current AI systems are narrow — designed for specific tasks. AGI remains a research goal, not a reality.",
    },
    {
      type: "persona_commentary",
      personaId: "professor-hartwell",
      quote:
        "Never trust a headline that says 'AI can now think like humans.' Always ask: what specific task was it tested on? That's the discipline of a scientist.",
    },
  ],
};

// ── Lesson 2: How Machines Learn ──

export const lesson02_howMachinesLearn: SeedLesson = {
  slug: "how-machines-learn",
  title: "How Machines Learn",
  trackSlug: "ai-foundations",
  order: 2,
  estimatedMinutes: 25,
  personaId: "professor-hartwell",
  blocks: [
    {
      type: "text",
      content:
        "Machine learning is the subset of AI where systems improve through experience rather than being explicitly programmed for every scenario. Instead of writing rules, we write algorithms that find patterns in data.",
    },
    {
      type: "then_vs_now",
      thenEra: "1990s",
      thenDescription:
        "In the 90s, spam filters used hand-written rules: 'if email contains FREE MONEY, mark as spam.' Spammers quickly adapted, and engineers played whack-a-mole updating rules.",
      nowDescription:
        "Modern spam filters learn from millions of labeled examples. They adapt automatically as spam evolves — no manual rule updates needed.",
    },
    {
      type: "text",
      content:
        "The three main paradigms of machine learning:\n\n**Supervised Learning** — Train on labeled data. Give the model thousands of photos labeled 'cat' or 'dog,' and it learns to classify new photos.\n\n**Unsupervised Learning** — Find patterns without labels. Group similar customers together, or detect anomalies in network traffic.\n\n**Reinforcement Learning** — Learn by trial and error. An agent takes actions in an environment and receives rewards or penalties.",
    },
    {
      type: "code",
      language: "python",
      code: `# A simple supervised learning example\nfrom sklearn.neighbors import KNeighborsClassifier\n\n# Training data: [height_cm, weight_kg] -> sport\nX_train = [[180, 85], [170, 70], [160, 55], [190, 95]]\ny_train = ["basketball", "soccer", "gymnastics", "basketball"]\n\nmodel = KNeighborsClassifier(n_neighbors=3)\nmodel.fit(X_train, y_train)\n\n# Predict for a new person\nprediction = model.predict([[175, 75]])\nprint(f"Predicted sport: {prediction[0]}")`,
      caption: "K-Nearest Neighbors: classify a new data point based on its closest neighbors in the training set.",
    },
    {
      type: "persona_commentary",
      personaId: "professor-hartwell",
      quote:
        "Every machine learning model is only as good as its training data. Garbage in, garbage out — that principle from the mainframe era is more relevant than ever.",
    },
    {
      type: "quiz",
      question: "Which learning paradigm uses labeled training data?",
      options: [
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Supervised Learning",
        "Transfer Learning",
      ],
      correctIndex: 2,
      explanation:
        "Supervised learning trains models on labeled examples — input-output pairs that teach the model what correct answers look like.",
    },
    {
      type: "lab",
      labType: "code",
      labTitle: "Train Your First Classifier",
      labDescription:
        "Use scikit-learn to build a K-Nearest Neighbors classifier. Experiment with different values of K and see how accuracy changes.",
    },
  ],
};

// ── Lesson 3: Neural Networks Explained ──

export const lesson03_neuralNetworks: SeedLesson = {
  slug: "neural-networks-explained",
  title: "Neural Networks Explained",
  trackSlug: "ai-foundations",
  order: 3,
  estimatedMinutes: 30,
  personaId: "professor-hartwell",
  blocks: [
    {
      type: "text",
      content:
        "Neural networks are computing systems inspired by biological brains. They consist of layers of interconnected nodes (neurons) that process information. Despite the name, they work nothing like actual brains — but the metaphor helped researchers design surprisingly powerful systems.",
    },
    {
      type: "then_vs_now",
      thenEra: "1980s",
      thenDescription:
        "The 1986 backpropagation paper showed how to train multi-layer networks, but computers were too slow and data too scarce to make them practical. Neural networks entered an 'AI Winter.'",
      nowDescription:
        "GPUs, massive datasets, and algorithmic improvements made deep neural networks viable. By 2012, deep learning crushed benchmarks in image recognition and never looked back.",
    },
    {
      type: "text",
      content:
        "A neural network has three types of layers:\n\n**Input Layer** — Receives raw data (pixels, words, numbers).\n\n**Hidden Layers** — Process and transform data. More layers = 'deeper' network = can learn more complex patterns.\n\n**Output Layer** — Produces the final prediction (a class label, a number, generated text).\n\nEach connection between neurons has a **weight**. Training means adjusting these weights so the network's predictions match reality.",
    },
    {
      type: "code",
      language: "python",
      code: `import torch\nimport torch.nn as nn\n\n# A simple neural network with one hidden layer\nclass SimpleNet(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.layer1 = nn.Linear(784, 128)  # Input: 28x28 pixel image\n        self.relu = nn.ReLU()               # Activation function\n        self.layer2 = nn.Linear(128, 10)    # Output: 10 digit classes\n\n    def forward(self, x):\n        x = self.layer1(x)\n        x = self.relu(x)        # Non-linearity lets it learn curves\n        x = self.layer2(x)\n        return x\n\nmodel = SimpleNet()\nprint(f"Parameters: {sum(p.numel() for p in model.parameters()):,}")`,
      caption: "A minimal PyTorch neural network for digit recognition — 101,770 learnable parameters.",
    },
    {
      type: "source_card",
      title: "Learning representations by back-propagating errors",
      author: "Rumelhart, Hinton & Williams",
      publication: "Nature, Vol. 323",
      year: 1986,
      url: "https://doi.org/10.1038/323533a0",
      description: "The paper that made training deep networks practical, launching the connectionist revolution.",
    },
    {
      type: "persona_commentary",
      personaId: "professor-hartwell",
      quote:
        "When Hinton published backpropagation in 1986, most of the field ignored it. Sometimes the most important ideas need decades and better hardware to prove themselves. Patience is a scientific virtue.",
    },
    {
      type: "quiz",
      question: "What does training a neural network actually adjust?",
      options: [
        "The number of layers",
        "The connection weights between neurons",
        "The programming language",
        "The size of the dataset",
      ],
      correctIndex: 1,
      explanation:
        "Training adjusts the weights (and biases) of connections between neurons. The network architecture stays fixed — only the numerical parameters change through gradient descent.",
    },
    {
      type: "lab",
      labType: "code",
      labTitle: "Build a Digit Recognizer",
      labDescription:
        "Train a neural network on the MNIST dataset to recognize handwritten digits. Visualize how accuracy improves over training epochs.",
    },
  ],
};

// ── All seed lessons ──

export const AI_FOUNDATIONS_SEEDS: SeedLesson[] = [
  lesson01_whatIsAI,
  lesson02_howMachinesLearn,
  lesson03_neuralNetworks,
];

// ── Track definition ──

export const AI_FOUNDATIONS_TRACK = {
  slug: "ai-foundations",
  name: "AI Foundations",
  description:
    "Master the fundamentals — from Turing's original question to modern deep learning. Build intuition before diving into specialized tracks.",
  icon: "Brain",
  color: "from-fuchsia-500 to-purple-600",
  level: "Beginner",
  lessonCount: 12,
  estimatedHours: 6,
  prerequisites: [],
  personaIds: ["professor-hartwell"],
};
