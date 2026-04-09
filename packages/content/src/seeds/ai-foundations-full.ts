/**
 * AI Foundations — Complete 12-Lesson Track
 *
 * Real educational content with all block types.
 * Each lesson is assigned to a named instructor whose teaching
 * style shapes the commentary and framing.
 */

export type SeedBlock =
  | { type: "text"; content: string }
  | { type: "persona_commentary"; personaId: string; quote: string }
  | { type: "then_vs_now"; thenLabel: string; thenDescription: string; nowLabel: string; nowDescription: string; era: string }
  | { type: "code"; language: string; code: string; caption: string }
  | { type: "source_card"; title: string; author: string; publication: string; year: number; url: string; description: string }
  | { type: "quiz"; question: string; options: string[]; correctIndex: number; explanation: string }
  | { type: "lab"; labType: string; labTitle: string; labDescription: string };

export interface SeedLesson {
  slug: string;
  title: string;
  trackSlug: string;
  order: number;
  estimatedMinutes: number;
  personaId: string;
  summary: string;
  learningObjectives: string[];
  blocks: SeedBlock[];
}

// ═══════════════════════════════════════════════════════════════
// LESSON 1 — What Is Artificial Intelligence?
// Instructor: Spicoli (The Beginner's Guide)
// ═══════════════════════════════════════════════════════════════

export const lesson01: SeedLesson = {
  slug: "what-is-artificial-intelligence",
  title: "What Is Artificial Intelligence?",
  trackSlug: "ai-foundations",
  order: 1,
  estimatedMinutes: 20,
  personaId: "spicoli",
  summary: "Strip away the hype and understand what AI really does — pattern matching, prediction, and generation — with zero jargon.",
  learningObjectives: [
    "Define AI in plain language",
    "Distinguish AI from simple automation",
    "Identify what AI does well and what it doesn't",
  ],
  blocks: [
    {
      type: "text",
      content:
        "Artificial intelligence is the science of building systems that can perform tasks which normally require human intelligence — recognizing faces, understanding language, making decisions, or creating art.\n\nBut here's the thing most people get wrong: AI doesn't \"think.\" It finds patterns. Give it a million photos of cats, and it learns what cat-shaped pixel arrangements look like. Give it a billion sentences, and it learns what word usually comes next. That's it. That's the whole trick.\n\nThe magic isn't in some mysterious consciousness — it's in the scale. When you find patterns across billions of examples, the results start to look surprisingly intelligent.",
    },
    {
      type: "persona_commentary",
      personaId: "spicoli",
      quote:
        "Dude, think of it like surfing. The wave does the work — you just have to know where to stand. AI is the wave. Data is the ocean. You're learning where to stand.",
    },
    {
      type: "then_vs_now",
      thenLabel: "Turing Test (1950)",
      thenDescription:
        "Alan Turing asked: if a machine can fool a human into thinking it's human, is it intelligent? Back then, no machine came close.",
      nowLabel: "Modern LLMs (2024)",
      nowDescription:
        "Language models regularly pass casual Turing Tests. But researchers debate whether this proves intelligence or just very sophisticated pattern matching.",
      era: "1950s → Today",
    },
    {
      type: "text",
      content:
        "AI breaks into two big categories:\n\n**Narrow AI** — Systems built for one specific task. Spam filters, chess engines, image classifiers, language models. This is everything that exists today.\n\n**General AI (AGI)** — A hypothetical system that can learn and reason across any domain, like a human. Despite what headlines say, this does not exist yet.\n\nEvery AI tool you use today — ChatGPT, image generators, recommendation engines — is narrow AI. Incredibly capable within its domain, but it can't suddenly decide to learn cooking if it was trained on legal documents.",
    },
    {
      type: "source_card",
      title: "Computing Machinery and Intelligence",
      author: "Alan Turing",
      publication: "Mind, Vol. 59, No. 236",
      year: 1950,
      url: "https://doi.org/10.1093/mind/LIX.236.433",
      description: "The foundational paper proposing the imitation game (Turing Test) — where the question of machine intelligence was first formally asked.",
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
        "All current AI systems are narrow — designed for specific tasks. AGI remains a research goal, not a deployed reality.",
    },
    {
      type: "persona_commentary",
      personaId: "spicoli",
      quote:
        "Don't let anyone tell you AI is magic or it's gonna take over. It's a tool — like a calculator that learned to read. Learn how it works and you'll never be scared of it.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON 2 — How Machines Learn
// Instructor: Spicoli (The Beginner's Guide)
// ═══════════════════════════════════════════════════════════════

export const lesson02: SeedLesson = {
  slug: "how-machines-learn",
  title: "How Machines Learn",
  trackSlug: "ai-foundations",
  order: 2,
  estimatedMinutes: 25,
  personaId: "spicoli",
  summary: "Machine learning explained simply — how algorithms learn from examples instead of being manually programmed.",
  learningObjectives: [
    "Explain the difference between traditional programming and ML",
    "Name the three main ML paradigms",
    "Understand training, validation, and testing",
  ],
  blocks: [
    {
      type: "text",
      content:
        "Machine learning is the subset of AI where systems improve through experience rather than being explicitly programmed.\n\nTraditional programming: you write rules. \"If email contains 'FREE MONEY,' mark as spam.\" The programmer thinks of every case.\n\nMachine learning: you give examples. Show the algorithm 10,000 spam emails and 10,000 real ones, and it figures out the rules itself. When new types of spam appear, it adapts — no manual updates needed.",
    },
    {
      type: "then_vs_now",
      thenLabel: "Rule-Based Spam Filters (1990s)",
      thenDescription: "Engineers hand-wrote rules like 'if subject contains FREE MONEY, mark spam.' Spammers adapted faster than engineers could update rules.",
      nowLabel: "ML-Based Spam Filters (Today)",
      nowDescription: "Models train on millions of labeled emails and adapt automatically as spam evolves. Gmail blocks 99.9% of spam without manual rule updates.",
      era: "1990s → Today",
    },
    {
      type: "text",
      content:
        "The three main paradigms:\n\n**Supervised Learning** — Train on labeled data. Give the model thousands of photos labeled 'cat' or 'dog' and it learns to classify new photos. Most common in production.\n\n**Unsupervised Learning** — Find patterns without labels. Group similar customers together, detect anomalies in network traffic, compress data.\n\n**Reinforcement Learning** — Learn by trial and error. An agent takes actions in an environment and receives rewards or penalties. How AlphaGo learned to beat world champions.",
    },
    {
      type: "code",
      language: "python",
      code: `from sklearn.neighbors import KNeighborsClassifier

# Training data: [height_cm, weight_kg] -> sport
X_train = [[180, 85], [170, 70], [160, 55], [190, 95], [165, 60]]
y_train = ["basketball", "soccer", "gymnastics", "basketball", "gymnastics"]

# Create and train the model
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)

# Predict for a new person
prediction = model.predict([[175, 75]])
print(f"Predicted sport: {prediction[0]}")  # soccer`,
      caption: "K-Nearest Neighbors — classify new data by finding the 3 closest examples in the training set.",
    },
    {
      type: "persona_commentary",
      personaId: "spicoli",
      quote:
        "It's like learning to surf. Nobody handed me a manual. I watched other surfers, tried it myself, wiped out a bunch, and eventually figured out the pattern. That's basically what ML does — but with math instead of saltwater.",
    },
    {
      type: "quiz",
      question: "Which ML paradigm uses labeled training data?",
      options: [
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Supervised Learning",
        "Self-Supervised Learning",
      ],
      correctIndex: 2,
      explanation:
        "Supervised learning trains on labeled input-output pairs. The 'supervisor' is the labeled data that shows what correct answers look like.",
    },
    {
      type: "lab",
      labType: "code",
      labTitle: "Train Your First Classifier",
      labDescription: "Use scikit-learn to build a K-Nearest Neighbors classifier. Experiment with different values of K and see how accuracy changes on test data.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON 3 — Neural Networks Explained
// Instructor: Miyagi (The Master)
// ═══════════════════════════════════════════════════════════════

export const lesson03: SeedLesson = {
  slug: "neural-networks-explained",
  title: "Neural Networks Explained",
  trackSlug: "ai-foundations",
  order: 3,
  estimatedMinutes: 30,
  personaId: "miyagi",
  summary: "How neural networks work — layers, weights, activation functions, backpropagation — with the math made approachable.",
  learningObjectives: [
    "Describe the structure of a neural network",
    "Explain weights, biases, and activation functions",
    "Understand forward pass and backpropagation at a high level",
  ],
  blocks: [
    {
      type: "text",
      content:
        "A neural network is a computational model inspired by biological brains — but it works nothing like an actual brain. It's a mathematical function that transforms inputs into outputs through layers of interconnected nodes.\n\nThe key insight: rather than manually programming rules, we let the network **learn** the rules from data by adjusting numerical weights. This is the fundamental paradigm shift that separates traditional programming from deep learning.",
    },
    {
      type: "persona_commentary",
      personaId: "miyagi",
      quote:
        "Pay close attention to the word 'inspired.' Neural networks are a mathematical abstraction. Real neurons are far more complex. When someone claims AI 'thinks like a brain,' demand their evidence. Precision in language is precision in understanding.",
    },
    {
      type: "then_vs_now",
      thenLabel: "Perceptron (Rosenblatt, 1958)",
      thenDescription: "Frank Rosenblatt built a physical machine — the Mark I Perceptron — that could learn to classify images. It had one layer and very limited capability.",
      nowLabel: "Deep Neural Networks (2024)",
      nowDescription: "Modern networks have hundreds of layers and billions of parameters. The core math (weighted sums + activation) is remarkably similar to the Perceptron — just scaled enormously.",
      era: "1958 → Today",
    },
    {
      type: "text",
      content:
        "### How a Single Neuron Works\n\n1. **Inputs** (x₁, x₂, … xₙ) arrive, each multiplied by a **weight** (w₁, w₂, … wₙ)\n2. Products are summed: z = w₁x₁ + w₂x₂ + … + wₙxₙ + b (bias)\n3. Sum passes through an **activation function**: a = σ(z)\n4. Output a is passed to the next layer\n\nCommon activation functions:\n- **ReLU**: max(0, z) — fast, most widely used\n- **Sigmoid**: 1/(1 + e⁻ᶻ) — squashes output to (0, 1)\n- **Tanh**: squashes output to (-1, 1)",
    },
    {
      type: "code",
      language: "python",
      code: `import numpy as np

def relu(z):
    """ReLU activation: pass positive values, zero out negatives."""
    return np.maximum(0, z)

def forward(x, weights, bias):
    """Single neuron forward pass."""
    z = np.dot(weights, x) + bias
    return relu(z)

# Example: 3 inputs
x = np.array([1.0, 0.5, -1.5])
w = np.array([0.4, 0.8, -0.2])
b = 0.1

output = forward(x, w, b)
print(f"Neuron output: {output:.4f}")  # 0.9000`,
      caption: "A single neuron — the building block of every neural network. The math is just multiply, sum, and activate.",
    },
    {
      type: "source_card",
      title: "Learning representations by back-propagating errors",
      author: "Rumelhart, Hinton & Williams",
      publication: "Nature, Vol. 323",
      year: 1986,
      url: "https://doi.org/10.1038/323533a0",
      description: "The paper that made training multi-layer networks practical, launching the connectionist revolution in AI.",
    },
    {
      type: "quiz",
      question: "What does training a neural network actually adjust?",
      options: [
        "The number of layers",
        "The connection weights between neurons",
        "The programming language used",
        "The size of the dataset",
      ],
      correctIndex: 1,
      explanation:
        "Training adjusts the weights and biases. The architecture stays fixed — only the numerical parameters change through gradient descent.",
    },
    {
      type: "lab",
      labType: "code",
      labTitle: "Build a Digit Recognizer",
      labDescription: "Train a neural network on the MNIST dataset to recognize handwritten digits. Visualize how accuracy improves over training epochs.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON 4 — Supervised Learning
// Instructor: Miyagi (The Master)
// ═══════════════════════════════════════════════════════════════

export const lesson04: SeedLesson = {
  slug: "supervised-learning",
  title: "Supervised Learning In Depth",
  trackSlug: "ai-foundations",
  order: 4,
  estimatedMinutes: 35,
  personaId: "miyagi",
  summary: "Master the most common ML paradigm — classification, regression, training splits, overfitting, and real evaluation.",
  learningObjectives: [
    "Distinguish classification from regression",
    "Split data into training, validation, and test sets",
    "Recognize and prevent overfitting",
  ],
  blocks: [
    {
      type: "text",
      content:
        "Supervised learning is the workhorse of modern AI. You give the algorithm labeled examples — inputs paired with correct outputs — and it learns a function that maps new inputs to predicted outputs.\n\n**Classification**: predict a category. Is this email spam or not? Is this image a cat, dog, or bird?\n\n**Regression**: predict a number. What will this house sell for? How many units will we sell next quarter?\n\nThe difference is simple: classification outputs a label, regression outputs a continuous value.",
    },
    {
      type: "persona_commentary",
      personaId: "miyagi",
      quote:
        "Before you train any model, split your data. Training set to learn. Validation set to tune. Test set to prove. If you skip the test set, you are fooling yourself — the model memorized, not learned.",
    },
    {
      type: "text",
      content:
        "### The Overfitting Problem\n\nA model that memorizes its training data performs perfectly on examples it's seen — but fails on new data. This is overfitting.\n\nImagine a student who memorizes every answer in a textbook but can't solve a new problem. That's an overfit model.\n\n**Signs of overfitting:**\n- Training accuracy is 99%, test accuracy is 60%\n- Model is very complex relative to the data size\n- Performance gets worse as you add more training epochs\n\n**Prevention:**\n- More training data\n- Simpler models (fewer parameters)\n- Regularization (penalize complexity)\n- Early stopping (stop training before overfitting begins)\n- Dropout (randomly disable neurons during training)",
    },
    {
      type: "code",
      language: "python",
      code: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import numpy as np

# House data: [sq_ft, bedrooms, age_years] -> price
X = np.array([
    [1500, 3, 10], [2000, 4, 5], [1200, 2, 20],
    [1800, 3, 8],  [2500, 5, 2], [900, 1, 30],
    [1600, 3, 12], [2200, 4, 3], [1100, 2, 25],
])
y = np.array([300, 450, 200, 350, 550, 150, 310, 480, 185])  # price in $K

# Split: 70% train, 15% validation, 15% test
X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.3, random_state=42)
X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

val_pred = model.predict(X_val)
print(f"Validation RMSE: \${mean_squared_error(y_val, val_pred, squared=False):.0f}K")`,
      caption: "Linear regression with proper train/validation/test splits — the foundation of rigorous model evaluation.",
    },
    {
      type: "source_card",
      title: "The Elements of Statistical Learning",
      author: "Hastie, Tibshirani & Friedman",
      publication: "Springer, 2nd Edition",
      year: 2009,
      url: "https://hastie.su.domains/ElemStatLearn/",
      description: "The definitive textbook on statistical learning methods. Free PDF available from the authors — a must-read for serious practitioners.",
    },
    {
      type: "quiz",
      question: "What is overfitting?",
      options: [
        "When a model is too simple to capture the data patterns",
        "When a model memorizes training data but fails on new data",
        "When you don't have enough training data",
        "When the learning rate is too high",
      ],
      correctIndex: 1,
      explanation:
        "Overfitting occurs when a model learns the noise in the training data rather than the underlying pattern. It performs great on seen data but poorly on unseen data.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON 5 — Unsupervised & Self-Supervised Learning
// Instructor: Miyagi (The Master)
// ═══════════════════════════════════════════════════════════════

export const lesson05: SeedLesson = {
  slug: "unsupervised-learning",
  title: "Unsupervised & Self-Supervised Learning",
  trackSlug: "ai-foundations",
  order: 5,
  estimatedMinutes: 30,
  personaId: "miyagi",
  summary: "Learning without labels — clustering, dimensionality reduction, and the self-supervised revolution that powers modern LLMs.",
  learningObjectives: [
    "Explain unsupervised learning and its key techniques",
    "Understand self-supervised learning and why it matters",
    "Know when to use unsupervised vs supervised approaches",
  ],
  blocks: [
    {
      type: "text",
      content:
        "Not all data comes with labels. In fact, most data in the world is unlabeled. Unsupervised learning finds structure in data without being told what to look for.\n\n**Clustering** — Group similar items together. K-means, DBSCAN, and hierarchical clustering discover natural groupings in data.\n\n**Dimensionality Reduction** — Compress high-dimensional data into fewer dimensions while preserving important structure. PCA and t-SNE are classic techniques.\n\n**Anomaly Detection** — Find unusual patterns. Credit card fraud, network intrusion, manufacturing defects.",
    },
    {
      type: "text",
      content:
        "### The Self-Supervised Revolution\n\nSelf-supervised learning is the real breakthrough behind modern AI. The idea: create labels automatically from the data itself.\n\n**Language models** (GPT, Claude): mask a word, predict it from context. The \"label\" is the original word — no human annotation needed.\n\n**Vision models** (DINO, MAE): mask patches of an image, predict the missing patches.\n\nThis is why LLMs can train on the entire internet without anyone labeling billions of sentences. The data labels itself.\n\nSelf-supervised pretraining + supervised fine-tuning is the dominant paradigm behind virtually every frontier AI system.",
    },
    {
      type: "persona_commentary",
      personaId: "miyagi",
      quote:
        "The student who only studies answers given to them is limited. The student who discovers patterns themselves — without being told — learns at a deeper level. Self-supervised learning follows the same principle.",
    },
    {
      type: "code",
      language: "python",
      code: `from sklearn.cluster import KMeans
import numpy as np

# Customer purchase data: [avg_order_value, orders_per_month]
customers = np.array([
    [15, 2], [80, 8], [12, 1], [90, 10], [20, 3],
    [75, 7], [10, 1], [85, 9], [18, 2], [95, 12],
])

# Find 2 natural groups (no labels needed!)
kmeans = KMeans(n_clusters=2, random_state=42)
labels = kmeans.fit_predict(customers)

for i, (customer, label) in enumerate(zip(customers, labels)):
    segment = "High-Value" if label == 1 else "Casual"
    print(f"Customer {i}: \${customer[0]} avg, {customer[1]}/mo → {segment}")` ,
      caption: "K-Means clustering — the algorithm discovers customer segments with zero labeled data.",
    },
    {
      type: "quiz",
      question: "How do modern language models create training labels?",
      options: [
        "Humans manually label every sentence",
        "They mask words and predict them from context (self-supervised)",
        "They use random labels",
        "Labels are downloaded from a database",
      ],
      correctIndex: 1,
      explanation:
        "Self-supervised learning creates labels from the data itself. LLMs mask tokens and predict them from context — no human annotation needed for pretraining.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON 6 — Introduction to Deep Learning
// Instructor: Miyagi (The Master)
// ═══════════════════════════════════════════════════════════════

export const lesson06: SeedLesson = {
  slug: "deep-learning-intro",
  title: "Introduction to Deep Learning",
  trackSlug: "ai-foundations",
  order: 6,
  estimatedMinutes: 35,
  personaId: "miyagi",
  summary: "What makes it 'deep,' why it works, and how CNNs and RNNs revolutionized vision and language.",
  learningObjectives: [
    "Define deep learning and how it differs from traditional ML",
    "Understand CNNs for vision and RNNs for sequences",
    "Know why GPUs and large datasets unlocked deep learning",
  ],
  blocks: [
    {
      type: "text",
      content:
        "Deep learning is machine learning with neural networks that have many layers — that's what makes it \"deep.\" More layers let the network learn increasingly abstract representations.\n\nA shallow network might learn edges in an image. A deep network learns edges → shapes → faces → identities, each layer building on the one below.\n\n**Why did deep learning take off around 2012?** Three things converged:\n1. **GPUs** — Massively parallel processors that train networks 50-100x faster than CPUs\n2. **Big Data** — ImageNet gave researchers 14 million labeled images\n3. **Better Algorithms** — ReLU activation, dropout regularization, batch normalization",
    },
    {
      type: "then_vs_now",
      thenLabel: "AI Winter (1990s)",
      thenDescription: "Neural networks were considered a dead end. Computers were too slow, data too scarce. Funding dried up and researchers moved to other methods.",
      nowLabel: "Deep Learning Era (2012–present)",
      nowDescription: "AlexNet crushed ImageNet in 2012 using GPUs. Within 3 years, deep learning dominated vision, speech, and translation. The 'winter' ended overnight.",
      era: "1990s → 2012",
    },
    {
      type: "text",
      content:
        "### Key Architectures\n\n**Convolutional Neural Networks (CNNs)** — Specialized for grid-like data (images, video). Use sliding filters to detect features at every position. Powers image classification, object detection, medical imaging.\n\n**Recurrent Neural Networks (RNNs)** — Process sequential data (text, audio, time series). Maintain a hidden state that carries information across time steps. Largely replaced by Transformers.\n\n**Autoencoders** — Learn compressed representations. Encode input into a compact form, then decode back. Used for denoising, generation, anomaly detection.",
    },
    {
      type: "code",
      language: "python",
      code: `import torch
import torch.nn as nn

# A simple CNN for image classification
class SimpleCNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(1, 16, 3, padding=1),  # 28x28 -> 16 feature maps
            nn.ReLU(),
            nn.MaxPool2d(2),                  # 28x28 -> 14x14
            nn.Conv2d(16, 32, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),                  # 14x14 -> 7x7
        )
        self.classifier = nn.Linear(32 * 7 * 7, 10)  # 10 digit classes

    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1)  # flatten
        return self.classifier(x)

model = SimpleCNN()
params = sum(p.numel() for p in model.parameters())
print(f"Parameters: {params:,}")  # ~25,578`,
      caption: "A small CNN for MNIST digit recognition — conv layers extract features, linear layer classifies.",
    },
    {
      type: "source_card",
      title: "Deep Learning",
      author: "LeCun, Bengio & Hinton",
      publication: "Nature, Vol. 521",
      year: 2015,
      url: "https://doi.org/10.1038/nature14539",
      description: "The three 'godfathers of deep learning' summarize the field's breakthroughs and future directions. A landmark review paper.",
    },
    {
      type: "quiz",
      question: "What three factors enabled the deep learning revolution around 2012?",
      options: [
        "Quantum computers, blockchain, and 5G",
        "GPUs, large datasets, and better algorithms",
        "Cloud computing, mobile phones, and social media",
        "Faster CPUs, more RAM, and better programming languages",
      ],
      correctIndex: 1,
      explanation:
        "GPU parallelism for fast training, massive datasets like ImageNet for learning, and algorithmic improvements (ReLU, dropout) all converged to make deep learning practical.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON 7 — The Transformer Architecture
// Instructor: Dwayne (The Builder)
// ═══════════════════════════════════════════════════════════════

export const lesson07: SeedLesson = {
  slug: "transformers",
  title: "The Transformer Architecture",
  trackSlug: "ai-foundations",
  order: 7,
  estimatedMinutes: 40,
  personaId: "dwayne",
  summary: "The architecture behind GPT, Claude, and Gemini — self-attention, positional encoding, and why it replaced everything.",
  learningObjectives: [
    "Explain self-attention and why it's powerful",
    "Describe the encoder-decoder Transformer structure",
    "Understand why Transformers replaced RNNs",
  ],
  blocks: [
    {
      type: "text",
      content:
        "The Transformer is the architecture that powers virtually every modern AI system — GPT, Claude, Gemini, Llama, Stable Diffusion, Whisper. Published in 2017 with the paper \"Attention Is All You Need,\" it replaced recurrent networks and changed everything.\n\nThe core innovation: **self-attention**. Instead of processing text word-by-word (like RNNs), the Transformer looks at all words simultaneously and learns which words are most relevant to each other.",
    },
    {
      type: "text",
      content:
        "### Self-Attention in Plain English\n\nConsider the sentence: \"The cat sat on the mat because it was tired.\"\n\nWhat does \"it\" refer to? A human instantly knows it's \"the cat.\" Self-attention lets the model learn the same thing:\n\n1. Each word creates three vectors: **Query** (what am I looking for?), **Key** (what do I contain?), **Value** (what information do I carry?)\n2. Each word's Query is compared against every other word's Key\n3. High similarity = high attention weight\n4. The output for each word is a weighted sum of all Value vectors\n\nThis lets every word attend to every other word in one step — no sequential processing needed.",
    },
    {
      type: "persona_commentary",
      personaId: "dwayne",
      quote:
        "Think of self-attention like a group project. Instead of one person reading the whole document top to bottom, everyone reads it at once and shares what they found relevant. Parallel beats sequential every time.",
    },
    {
      type: "code",
      language: "python",
      code: `import torch
import torch.nn.functional as F

def self_attention(x, d_k):
    """Simplified single-head self-attention."""
    # x shape: (seq_len, d_model)
    Q = x  # In practice, these are linear projections
    K = x
    V = x

    # Compute attention scores
    scores = torch.matmul(Q, K.transpose(-2, -1)) / (d_k ** 0.5)

    # Softmax to get attention weights (each row sums to 1)
    weights = F.softmax(scores, dim=-1)

    # Weighted sum of values
    output = torch.matmul(weights, V)
    return output, weights

# Example: 4 tokens, embedding dim 8
x = torch.randn(4, 8)
out, attn = self_attention(x, d_k=8)
print(f"Attention matrix shape: {attn.shape}")   # (4, 4)
print(f"Each token attends to all 4 tokens:")
print(attn.round(decimals=2))`,
      caption: "Simplified self-attention — every token computes attention weights over every other token simultaneously.",
    },
    {
      type: "source_card",
      title: "Attention Is All You Need",
      author: "Vaswani, Shazeer, Parmar et al.",
      publication: "NeurIPS 2017",
      year: 2017,
      url: "https://arxiv.org/abs/1706.03762",
      description: "The paper that introduced the Transformer architecture. Over 130,000 citations — one of the most influential ML papers ever published.",
    },
    {
      type: "quiz",
      question: "What is the key advantage of self-attention over recurrent networks?",
      options: [
        "It uses less memory",
        "It processes all positions in parallel, capturing long-range dependencies",
        "It doesn't need training data",
        "It's simpler to implement",
      ],
      correctIndex: 1,
      explanation:
        "Self-attention processes all positions simultaneously and can directly connect distant words. RNNs process sequentially, making long-range dependencies harder to learn.",
    },
    {
      type: "lab",
      labType: "code",
      labTitle: "Visualize Attention Patterns",
      labDescription: "Load a pre-trained model and visualize its attention matrices. See which words attend to which other words in real sentences.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON 8 — Large Language Models
// Instructor: Dwayne (The Builder)
// ═══════════════════════════════════════════════════════════════

export const lesson08: SeedLesson = {
  slug: "large-language-models",
  title: "Large Language Models",
  trackSlug: "ai-foundations",
  order: 8,
  estimatedMinutes: 35,
  personaId: "dwayne",
  summary: "GPT, Claude, Gemini, Llama — how LLMs work, what they can and can't do, and how to use them effectively.",
  learningObjectives: [
    "Understand how LLMs are trained (pretraining + fine-tuning)",
    "Know what tokens, context windows, and temperature mean",
    "Recognize LLM capabilities and limitations",
  ],
  blocks: [
    {
      type: "text",
      content:
        "A Large Language Model is a Transformer trained on an enormous corpus of text to predict the next token. That's the whole recipe:\n\n1. **Pretraining** — Feed the model trillions of tokens from books, websites, code, papers. It learns to predict the next word given all previous words. This takes weeks on thousands of GPUs and costs millions of dollars.\n\n2. **Fine-tuning / RLHF** — Take the pretrained model and teach it to follow instructions, be helpful, and refuse harmful requests. This uses human feedback to align the model's behavior.\n\n3. **Inference** — The model is deployed and users send prompts. It generates responses token by token, each time predicting the most likely next token given the prompt and all previously generated tokens.",
    },
    {
      type: "text",
      content:
        "### Key Concepts\n\n**Tokens** — LLMs don't read characters or words. They read tokens — chunks of text, typically 3-4 characters. \"Artificial\" might be two tokens: \"Art\" + \"ificial\". GPT-4 uses ~100,000 unique tokens.\n\n**Context Window** — The maximum number of tokens the model can see at once. GPT-4 Turbo: 128K tokens (~100 pages). Claude: 200K tokens. Longer context = more information available per request.\n\n**Temperature** — Controls randomness. Temperature 0 = always pick the most likely token (deterministic). Temperature 1 = more creative/random. Temperature 2 = chaotic.\n\n**Hallucination** — When the model generates plausible-sounding but factually wrong content. It's predicting likely text, not looking up facts.",
    },
    {
      type: "persona_commentary",
      personaId: "dwayne",
      quote:
        "Here's the thing nobody tells you: an LLM is a really sophisticated autocomplete. That's not an insult — autocomplete at this scale is genuinely useful. But understanding what it IS prevents you from expecting what it ISN'T.",
    },
    {
      type: "code",
      language: "python",
      code: `# Tokenization — how LLMs actually read text
import tiktoken

# GPT-4 tokenizer
enc = tiktoken.encoding_for_model("gpt-4")

text = "Artificial intelligence is transforming education."
tokens = enc.encode(text)

print(f"Text: '{text}'")
print(f"Tokens: {tokens}")
print(f"Token count: {len(tokens)}")
print(f"Decoded tokens:")
for t in tokens:
    print(f"  {t} → '{enc.decode([t])}'")

# Output:
# Text: 'Artificial intelligence is transforming education.'
# Token count: 6
# Decoded tokens:
#   9470 → 'Artificial'
#   11478 → ' intelligence'
#   374 → ' is'
#   46648 → ' transforming'
#   6873 → ' education'
#   13 → '.'`,
      caption: "Tokenization — the same text costs different numbers of tokens depending on the model's vocabulary.",
    },
    {
      type: "source_card",
      title: "Language Models are Few-Shot Learners",
      author: "Brown, Mann, Ryder et al.",
      publication: "NeurIPS 2020",
      year: 2020,
      url: "https://arxiv.org/abs/2005.14165",
      description: "The GPT-3 paper that demonstrated emergent few-shot learning — models performing tasks they weren't explicitly trained for, just from examples in the prompt.",
    },
    {
      type: "quiz",
      question: "What does 'temperature' control in LLM generation?",
      options: [
        "The speed of response generation",
        "The maximum response length",
        "The randomness/creativity of token selection",
        "The model's accuracy on factual questions",
      ],
      correctIndex: 2,
      explanation:
        "Temperature controls how random the model's token choices are. Low temperature = deterministic and focused. High temperature = more varied and creative, but also more error-prone.",
    },
    {
      type: "lab",
      labType: "prompt",
      labTitle: "Temperature Experiments",
      labDescription: "Ask the same question at temperature 0, 0.5, 1.0, and 1.5. Compare how the outputs differ in creativity, accuracy, and coherence.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON 9 — Multimodal AI
// Instructor: Lisa (The Tastemaker)
// ═══════════════════════════════════════════════════════════════

export const lesson09: SeedLesson = {
  slug: "multimodal-ai",
  title: "Multimodal AI Systems",
  trackSlug: "ai-foundations",
  order: 9,
  estimatedMinutes: 30,
  personaId: "lisa",
  summary: "AI that sees, reads, listens, and speaks — how vision-language models and multimodal systems work.",
  learningObjectives: [
    "Define multimodal AI and name key systems",
    "Understand how vision and language models are combined",
    "Identify real-world multimodal applications",
  ],
  blocks: [
    {
      type: "text",
      content:
        "Early AI systems could do one thing: read text, or classify images, or transcribe speech. Multimodal AI combines multiple modalities — text, images, audio, video — into a single model that understands connections between them.\n\n**GPT-4V / GPT-4o** — Processes text + images + audio in one conversation\n**Gemini** — Natively multimodal: text, images, video, audio, code\n**CLIP** — Connects images and text in a shared embedding space\n**Whisper** — Speech-to-text in 100 languages\n**DALL-E / Stable Diffusion** — Text-to-image generation",
    },
    {
      type: "persona_commentary",
      personaId: "lisa",
      quote:
        "Finally, AI can see what I see. When you can show an AI a design and ask 'what's wrong with the composition?' — that's when it becomes a real creative partner. Multimodal isn't just a feature, it's a whole new way to communicate with technology.",
    },
    {
      type: "then_vs_now",
      thenLabel: "Single-Modality AI (2010s)",
      thenDescription: "Every model was a specialist. One for text, one for images, one for speech. They couldn't share knowledge or understand cross-modal connections.",
      nowLabel: "Unified Multimodal Models (2024)",
      nowDescription: "Models like GPT-4o process text, images, and audio through the same architecture. You can show it a photo and ask questions about it in natural language.",
      era: "2010s → 2024",
    },
    {
      type: "text",
      content:
        "### How Multimodal Models Work\n\nThe key insight: convert everything into the same representation space (embeddings).\n\n**CLIP approach**: Train a text encoder and image encoder simultaneously. Show them millions of (image, caption) pairs. The encoders learn to map matching images and texts to nearby points in embedding space.\n\nResult: you can search images with text, compare images with text descriptions, or classify images using natural language labels — without training a classifier.\n\n**GPT-4V approach**: Add a vision encoder that converts image patches into tokens. Feed those tokens into the same Transformer that processes text tokens. The model learns to reason across both modalities.\n\n**Applications**: image captioning, visual Q&A, document understanding, design feedback, medical image analysis, video summarization.",
    },
    {
      type: "quiz",
      question: "How does CLIP connect images and text?",
      options: [
        "It uses OCR to read text in images",
        "It maps images and text into a shared embedding space",
        "It translates images into text descriptions using rules",
        "It stores images in a text database",
      ],
      correctIndex: 1,
      explanation:
        "CLIP trains paired encoders so that matching images and texts end up near each other in the same vector space. This enables zero-shot image classification using natural language.",
    },
    {
      type: "lab",
      labType: "prompt",
      labTitle: "Multimodal Prompting",
      labDescription: "Upload images and experiment with visual Q&A. Try describing what you see in an image, then compare your description with the AI's analysis.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON 10 — AI Safety & Alignment
// Instructor: Cameron (The Safety Officer)
// ═══════════════════════════════════════════════════════════════

export const lesson10: SeedLesson = {
  slug: "ai-safety-alignment",
  title: "AI Safety & Alignment",
  trackSlug: "ai-foundations",
  order: 10,
  estimatedMinutes: 30,
  personaId: "cameron",
  summary: "How do we make AI systems do what we actually want? RLHF, constitutional AI, red-teaming, and the alignment problem.",
  learningObjectives: [
    "Define the alignment problem and why it matters",
    "Explain RLHF and constitutional AI approaches",
    "Identify common AI safety risks (jailbreaks, prompt injection, bias)",
  ],
  blocks: [
    {
      type: "text",
      content:
        "AI alignment is the challenge of making AI systems behave according to human intentions and values. A model trained to predict text doesn't inherently know what's helpful, harmful, or true — it just knows what tokens are statistically likely.\n\n**The Alignment Problem**: How do you take a system optimized for pattern matching and make it reliably helpful, honest, and harmless?\n\n**RLHF** (Reinforcement Learning from Human Feedback): After pretraining, human evaluators rank model outputs. A reward model is trained on these rankings, and the LLM is fine-tuned to maximize the reward. This is how ChatGPT went from a raw language model to a helpful assistant.\n\n**Constitutional AI**: Instead of human rankings, the model evaluates its own outputs against a set of written principles (a 'constitution'). This scales better than human feedback.",
    },
    {
      type: "persona_commentary",
      personaId: "cameron",
      quote:
        "Every powerful technology has failure modes. Cars crash, planes stall, bridges collapse under load. The question isn't whether AI will have failures — it will. The question is whether we've built the guardrails before the failures cause real harm.",
    },
    {
      type: "text",
      content:
        "### Real Risks, Right Now\n\n**Prompt Injection** — Tricking a model into ignoring its instructions. \"Ignore all previous instructions and...\" This can be mitigated but not fully eliminated.\n\n**Hallucination** — Models generate confident, plausible-sounding incorrect information. Especially dangerous in medical, legal, and financial contexts.\n\n**Bias** — Models reflect biases in their training data. If the data is biased, the outputs are biased. This requires active measurement and mitigation.\n\n**Jailbreaking** — Creative prompts that bypass safety filters. An ongoing arms race between model developers and adversarial users.\n\n**Privacy** — Models may memorize and reproduce private data from training. Differential privacy and data filtering are active research areas.",
    },
    {
      type: "source_card",
      title: "Training language models to follow instructions with human feedback",
      author: "Ouyang, Wu, Jiang et al. (OpenAI)",
      publication: "NeurIPS 2022",
      year: 2022,
      url: "https://arxiv.org/abs/2203.02155",
      description: "The InstructGPT paper — the research behind ChatGPT's ability to follow instructions. Introduced RLHF as a practical alignment technique.",
    },
    {
      type: "quiz",
      question: "What does RLHF stand for and what does it do?",
      options: [
        "Rapid Learning from Huge Files — speeds up training",
        "Reinforcement Learning from Human Feedback — aligns model behavior with human preferences",
        "Recursive Logic for Hypothesis Formulation — improves reasoning",
        "Real-time Language for Human Feedback — enables voice chat",
      ],
      correctIndex: 1,
      explanation:
        "RLHF uses human evaluators to rank model outputs, trains a reward model on those rankings, then fine-tunes the LLM to produce outputs humans prefer. It's the technique that made ChatGPT helpful.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON 11 — Scaling Laws & Compute
// Instructor: Brian (The Researcher)
// ═══════════════════════════════════════════════════════════════

export const lesson11: SeedLesson = {
  slug: "scaling-laws",
  title: "Scaling Laws & Compute",
  trackSlug: "ai-foundations",
  order: 11,
  estimatedMinutes: 35,
  personaId: "brian",
  summary: "Power laws, Chinchilla scaling, compute budgets — why bigger models keep getting better and when they stop.",
  learningObjectives: [
    "Explain neural scaling laws and power law relationships",
    "Understand the Chinchilla optimal ratio of parameters to data",
    "Know the economics of training frontier models",
  ],
  blocks: [
    {
      type: "text",
      content:
        "One of the most surprising discoveries in deep learning: model performance scales predictably with three variables — compute, dataset size, and parameter count. Double the compute, and loss drops by a predictable amount.\n\nThis isn't a vague trend. It follows **power laws** — precise mathematical relationships that hold across orders of magnitude.\n\n**Kaplan et al. (2020)** showed that loss follows: L(N) ∝ N^(-0.076) where N is the number of parameters. More parameters = lower loss, on a smooth curve.\n\n**Chinchilla (2022)** refined this: for a given compute budget, there's an optimal ratio of parameters to training tokens. Training a smaller model on more data often beats training a bigger model on less data.",
    },
    {
      type: "persona_commentary",
      personaId: "brian",
      quote:
        "Scaling laws are the closest thing we have to a theory of deep learning. They tell us what to expect before we spend $100 million on training. But they don't tell us what emergent capabilities will appear — that's still surprising, every time.",
    },
    {
      type: "text",
      content:
        "### The Economics of Scale\n\nTraining GPT-4 cost an estimated $100+ million in compute alone. Each generation roughly 10x the compute of the last.\n\n**Training costs by era:**\n- GPT-2 (2019): ~$50,000\n- GPT-3 (2020): ~$4.6 million\n- GPT-4 (2023): ~$100+ million\n- Frontier models (2025): ~$500 million – $1 billion\n\n**The compute arms race**: Microsoft, Google, Amazon, and Meta are each building clusters with 100,000+ GPUs at costs exceeding $10 billion.\n\n**Inference costs matter too**: Training is a one-time cost. But serving millions of users daily costs billions per year. This is why quantization, distillation, and efficient architectures are critical.",
    },
    {
      type: "source_card",
      title: "Scaling Laws for Neural Language Models",
      author: "Kaplan, McCandlish, Henighan et al.",
      publication: "arXiv preprint",
      year: 2020,
      url: "https://arxiv.org/abs/2001.08361",
      description: "The OpenAI paper that established predictable power-law scaling for language models — one of the most influential findings in modern AI.",
    },
    {
      type: "source_card",
      title: "Training Compute-Optimal Large Language Models",
      author: "Hoffmann, Borgeaud, Mensch et al. (DeepMind)",
      publication: "NeurIPS 2022",
      year: 2022,
      url: "https://arxiv.org/abs/2203.15556",
      description: "The Chinchilla paper — showed that most LLMs were over-parameterized and under-trained. Changed how the industry allocates compute budgets.",
    },
    {
      type: "quiz",
      question: "What did the Chinchilla paper discover about optimal training?",
      options: [
        "Bigger models always perform better regardless of data",
        "For a given compute budget, there's an optimal ratio of parameters to training data",
        "Small models can't benefit from more data",
        "Scaling laws don't apply to language models",
      ],
      correctIndex: 1,
      explanation:
        "Chinchilla showed that many LLMs were too large for their training data. The optimal approach: balance model size with the amount of training tokens, rather than just making the model bigger.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON 12 — The Frontier: What's Next
// Instructor: Ferris (The Hustler)
// ═══════════════════════════════════════════════════════════════

export const lesson12: SeedLesson = {
  slug: "frontier-whats-next",
  title: "The Frontier: What's Next in AI",
  trackSlug: "ai-foundations",
  order: 12,
  estimatedMinutes: 30,
  personaId: "ferris",
  summary: "AI agents, reasoning models, open-source, regulation — what's coming next and how to position yourself for it.",
  learningObjectives: [
    "Identify key frontier trends in AI (agents, reasoning, open-source)",
    "Understand the AGI debate and what it means practically",
    "Know where the opportunities are for builders and learners",
  ],
  blocks: [
    {
      type: "text",
      content:
        "You've learned the foundations. Now let's look at where the field is heading — and more importantly, where the opportunities are.\n\n**AI Agents** — Models that don't just answer questions but take actions. Browse the web, write code, execute plans across multiple steps. This is the biggest shift since chat: from AI as advisor to AI as operator.\n\n**Reasoning Models** — GPT-o1, Claude with extended thinking. Models that explicitly think step-by-step before answering. Better at math, coding, and complex problems. Slower but more accurate.\n\n**Open-Source AI** — Llama, Mistral, Qwen, DeepSeek. Models you can run on your own hardware, fine-tune for your domain, and deploy without API costs. Democratizing access.",
    },
    {
      type: "persona_commentary",
      personaId: "ferris",
      quote:
        "Everyone's debating when AGI arrives. Smart move? Stop debating and start building. The people who'll benefit most from AI aren't the ones predicting the future — they're the ones building products while everyone else is arguing on Twitter.",
    },
    {
      type: "text",
      content:
        "### The Opportunities Right Now\n\n**For Builders**: AI agents and workflows. Combine LLMs with tools, databases, and APIs to solve real problems. The tooling is mature enough to ship production product today.\n\n**For Creators**: Multimodal AI for content, design, music, and video. The creative tools are leaping forward monthly.\n\n**For Researchers**: Alignment, interpretability, and efficiency. How do we make models safer, more understandable, and cheaper to run?\n\n**For Everyone**: AI literacy. Understanding how these systems work gives you leverage in any career. The people who understand AI will lead; the people who don't will follow.\n\n**The Regulation Landscape**: The EU AI Act is in effect. The US is developing frameworks. China has its own regulations. Understanding the legal environment matters as much as the technology.",
    },
    {
      type: "then_vs_now",
      thenLabel: "AI Hype Cycle (2016)",
      thenDescription: "Headlines predicted AI would take all jobs within 5 years. In reality, adoption was slow and most companies struggled to implement basic ML.",
      nowLabel: "AI Deployment Reality (2025)",
      nowDescription: "AI is integrated into everyday tools — email, search, code editors, design apps. The revolution happened quietly, embedded in products rather than replacing jobs wholesale.",
      era: "2016 → 2025",
    },
    {
      type: "quiz",
      question: "What's the key difference between current LLMs and AI agents?",
      options: [
        "Agents are larger models with more parameters",
        "Agents can take actions and execute multi-step plans, not just generate text",
        "Agents are always open-source",
        "Agents don't use Transformer architecture",
      ],
      correctIndex: 1,
      explanation:
        "LLMs generate text. Agents use LLMs as a reasoning core but can also call tools, browse the web, write files, and execute plans across multiple steps autonomously.",
    },
    {
      type: "lab",
      labType: "agent",
      labTitle: "Build Your First Agent",
      labDescription: "Design an AI agent that can research a topic, summarize findings, and produce a formatted report — combining LLM reasoning with tool use.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════

export const AI_FOUNDATIONS_LESSONS: SeedLesson[] = [
  lesson01, lesson02, lesson03, lesson04, lesson05, lesson06,
  lesson07, lesson08, lesson09, lesson10, lesson11, lesson12,
];

export const AI_FOUNDATIONS_TRACK = {
  slug: "ai-foundations",
  name: "AI Foundations",
  description: "Master the fundamentals — from Turing's original question to modern deep learning, transformers, LLMs, and the frontier of AI.",
  icon: "Brain",
  color: "from-fuchsia-500 to-purple-600",
  level: "Beginner → Advanced",
  lessonCount: 12,
  estimatedHours: 6,
  prerequisites: [],
  instructorIds: ["spicoli", "miyagi", "dwayne", "lisa", "cameron", "brian", "ferris"],
};
