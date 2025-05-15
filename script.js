const wordBanks = {
  medical: {
    nouns: ["nurse", "diagnosis", "treatment", "injection", "recovery", "cell", "infection", "tumor", "symptom", "dose"],
    verbs: ["stabilizes", "accelerates", "modifies", "influences", "determines", "disrupts", "facilitates", "generates", "triggers", "prevents"],
    adjectives: ["chronic", "anomalous", "clinical", "systemic", "invasive", "therapeutic", "unstable", "autonomous", "empirical", "symptomatic"],
    adverbs: ["significantly", "consistently", "rapidly", "gradually", "theoretically", "minimally", "ultimately", "surprisingly", "notably", "visibly"]
  },
  business: {
    nouns: ["strategy", "market", "synergy", "stakeholder", "report", "brand", "pipeline", "platform", "value", "initiative"],
    verbs: ["enhances", "disrupts", "leverages", "consolidates", "accelerates", "establishes", "monetizes", "optimizes", "transforms", "aligns"],
    adjectives: ["scalable", "sustainable", "robust", "strategic", "agile", "innovative", "disruptive", "holistic", "tactical", "integrated"],
    adverbs: ["substantially", "organically", "strategically", "economically", "effectively", "efficiently", "transparently", "aggressively", "globally", "collaboratively"]
  },
  IT: {
    nouns: ["algorithm", "database", "protocol", "interface", "framework", "repository", "pipeline", "variable", "function", "endpoint"],
    verbs: ["executes", "compiles", "disrupts", "initializes", "refactors", "encapsulates", "allocates", "renders", "transmits", "decrypts"],
    adjectives: ["modular", "encrypted", "scalable", "asynchronous", "virtual", "iterative", "responsive", "intelligent", "distributed", "dynamic"],
    adverbs: ["seamlessly", "virtually", "automatically", "concurrently", "reliably", "consistently", "efficiently", "instantly", "securely", "remotely"]
  },
  financial: {
    nouns: ["asset", "portfolio", "liability", "dividend", "bond", "inflation", "capital", "valuation", "return", "leverage"],
    verbs: ["hedges", "amplifies", "calculates", "evaluates", "mitigates", "generates", "sustains", "balances", "allocates", "adjusts"],
    adjectives: ["liquid", "volatile", "strategic", "speculative", "annualized", "diversified", "robust", "conservative", "mature", "predictive"],
    adverbs: ["annually", "strategically", "marginally", "proportionally", "incrementally", "precisely", "notably", "cautiously", "persistently", "temporarily"]
  },
  conversation: {
    nouns: ["idea", "thought", "conversation", "response", "question", "opinion", "perspective", "statement", "emotion", "topic"],
    verbs: ["reflects", "translates", "influences", "expresses", "reshapes", "generates", "articulates", "validates", "simplifies", "repeats"],
    adjectives: ["honest", "curious", "thoughtful", "expressive", "open", "casual", "sincere", "meaningful", "direct", "reflective"],
    adverbs: ["genuinely", "sincerely", "casually", "honestly", "clearly", "carefully", "often", "usually", "rarely", "subtly"]
  }
};

const templates = [
  "The [noun], according to [adjective] models, [verb] the [noun] [adverb].",
  "In this context, the [adjective] [noun] [adverb] [verb] the [noun].",
  "A [adjective] [noun] [verb]s when the [noun] [adverb] reacts.",
  "While the [noun] remains [adjective], it [adverb] [verb]s the [noun].",
  "Recent studies show that the [noun] [verb]s a [adjective] [noun] [adverb].",
  "The combination of [adjective] [noun]s and [noun] [verb]s [adverb] under analysis.",
  "According to theory, a [noun] never [verb]s without [adjective] influence.",
  "The [adjective] [noun] is [adverb] known to [verb] the [noun] under stress.",
  "Every [noun] eventually [adverb] [verb]s due to [adjective] [noun] conditions.",
  "It is well-established that [noun]s [verb] [adjective] [noun]s [adverb].",
  "The [noun], when examined [adverb], [verb]s through the [adjective] [noun].",
  "A series of [adjective] [noun]s may [verb] the [noun] [adverb].",
  "Empirical results suggest the [noun] [verb]s a [adjective] [noun].",
  "Theoretical analysis shows that the [noun] [adverb] [verb]s with [noun].",
  "Despite assumptions, the [adjective] [noun] can [verb] [adverb].",
  "Often, a [noun] [verb]s the [adjective] [noun] without prior [noun] [adverb].",
  "Although [adjective], the [noun] [adverb] [verb]s the [noun].",
  "Ultimately, the [noun] [verb]s its [adjective] counterpart [adverb].",
  "The [adjective] outcome of the [noun] [verb]s through [noun]s [adverb].",
  "Without intervention, the [noun] [adverb] [verb]s the [adjective] [noun]."
];

// Utility to shuffle arrays
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function fillTemplate(template, bank) {
  const usedNouns = [];
  return template.replace(/\[(noun|verb|adjective|adverb)\]/g, (_, type) => {
    let word;
    do {
      word = randomFromArray(bank[type + "s"]);
    } while (type === "noun" && usedNouns.filter(n => n === word).length >= 2);
    if (type === "noun") usedNouns.push(word);
    return word;
  });
}

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateParagraph(themeBank) {
  const sentenceCount = Math.floor(Math.random() * 4) + 3; // 3 to 6 sentences
  const paragraph = [];
  const shuffledTemplates = shuffle(templates);

  for (let i = 0; i < sentenceCount; i++) {
    const template = shuffledTemplates[i % templates.length];
    const sentence = fillTemplate(template, themeBank);
    paragraph.push(sentence);
  }

  return paragraph.join(" ");
}

function generate() {
  const theme = document.getElementById("theme").value;
  const count = parseInt(document.getElementById("count").value, 10);
  const bank = wordBanks[theme];

  const output = [];
  for (let i = 0; i < count; i++) {
    output.push(generateParagraph(bank));
  }

  document.getElementById("output").innerText = output.join("\n\n");
}

function copyToClipboard() {
  const text = document.getElementById("output").innerText;
  if (!text) {
    alert("There's nothing to copy.");
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => alert("Text copied to clipboard!"))
    .catch(() => alert("Failed to copy text."));
}

