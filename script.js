const wordBanks = {
  medical: [
    "patients", "injection", "nurse", "diagnosis", "hospital", "vital", "symptoms", "blood", "monitor", "fracture",
    "treatment", "surgery", "prescription", "dosage", "allergy", "infection", "recovery", "pulse", "x-ray", "scan",
    "anesthesia", "clinic", "immunization", "thermometer", "mask", "ventilator", "vaccine", "IV", "triage", "emergency",
    "discharge", "ward", "doctor", "consult", "appointment", "nausea", "fatigue", "pain", "swelling", "tumor",
    "biopsy", "lab", "pharmacy", "medication", "therapy", "rehab", "operation", "specialist", "health", "checkup",
    "disease", "virus", "bacteria", "organ", "heart", "lung", "brain", "muscle", "spine", "nerve",
    "bloodwork", "needle", "procedure", "cast", "bandage", "rash", "fever", "cough", "chronic", "acute",
    "care", "first-aid", "defibrillator", "oxygen", "screening", "test", "glucose", "diabetes", "cardiac", "exam",
    "insurance", "clinic", "gown", "reception", "clipboard", "case", "stethoscope", "crutches", "support", "mobility",
    "contagious", "isolated", "sterile", "wound", "dressing", "syringe", "inflammation", "procedure", "monitoring", "record"
  ],

  business: [
    "strategy", "growth", "profit", "meeting", "stakeholder", "report", "scale", "quarter", "brand", "synergy",
    "revenue", "expense", "marketing", "target", "mission", "value", "vision", "roadmap", "leverage", "assets",
    "liabilities", "budget", "forecast", "collaboration", "presentation", "workflow", "optimization", "audit", "client", "customer",
    "innovation", "market", "analysis", "competition", "goal", "objective", "agenda", "review", "milestone", "performance",
    "benchmark", "investment", "merger", "acquisition", "pipeline", "lead", "negotiation", "proposal", "pitch", "campaign",
    "branding", "outreach", "feedback", "survey", "team", "management", "leader", "visionary", "cofounder", "board",
    "startup", "corporate", "resources", "restructuring", "balance", "scalability", "workflow", "deployment", "execution", "culture",
    "finance", "departments", "structure", "position", "promotion", "contract", "deliverable", "deal", "compliance", "KPI",
    "review", "strategy", "funding", "backlog", "solution", "process", "cashflow", "profitability", "returns", "growth"
  ],

  IT: [
    "server", "framework", "frontend", "backend", "debug", "deploy", "code", "module", "compile", "interface",
    "database", "schema", "API", "function", "variable", "loop", "object", "class", "constructor", "array",
    "syntax", "runtime", "query", "response", "request", "endpoint", "token", "session", "login", "hash",
    "encryption", "firewall", "protocol", "network", "packet", "bandwidth", "latency", "DNS", "cache", "thread",
    "cloud", "container", "docker", "kubernetes", "virtual", "infrastructure", "instance", "deployment", "pipeline", "CI/CD",
    "git", "commit", "branch", "merge", "repository", "pull", "push", "build", "release", "testing",
    "unit", "integration", "agile", "scrum", "sprint", "ticket", "issue", "JIRA", "devops", "monitoring",
    "log", "exception", "stack", "terminal", "command", "script", "shell", "npm", "dependency", "version",
    "patch", "upgrade", "environment", "configuration", "localhost", "SSL", "certificate", "browser", "HTML", "CSS"
  ],

  financial: [
    "equity", "interest", "dividend", "portfolio", "asset", "bond", "market", "yield", "return", "liability",
    "debt", "credit", "rating", "capital", "investment", "hedge", "fund", "stock", "index", "forex",
    "margin", "leverage", "volatility", "bull", "bear", "broker", "exchange", "option", "derivative", "futures",
    "rate", "inflation", "GDP", "tax", "audit", "revenue", "profit", "loss", "ledger", "cash",
    "liquidity", "banking", "reserve", "deposit", "withdrawal", "statement", "balance", "loan", "mortgage", "principal",
    "interest", "diversification", "risk", "premium", "valuation", "ratio", "EBITDA", "IPO", "divest", "merger",
    "acquisition", "holding", "net", "gross", "earnings", "quarter", "fiscal", "budget", "projection", "forecast",
    "compliance", "regulation", "SEC", "ASIC", "superannuation", "retirement", "insurance", "pension", "fee", "commission",
    "currency", "exchange", "inflation", "creditor", "debtor", "statement", "limit", "expenditure", "transfer", "authorization"
  ],

  conversation: [
    "hello", "sure", "maybe", "thanks", "alright", "always", "never", "again", "okay", "because",
    "yeah", "nope", "yep", "kinda", "actually", "seriously", "really", "though", "anyway", "perhaps",
    "absolutely", "totally", "fine", "whatever", "right", "wrong", "exactly", "cool", "sweet", "nice",
    "sorry", "please", "hello", "hi", "bye", "goodbye", "later", "cheers", "morning", "evening",
    "how", "what", "where", "when", "why", "which", "who", "someone", "something", "anyone",
    "nothing", "everything", "everyone", "somehow", "sometimes", "often", "rarely", "usually", "soon", "before",
    "after", "now", "then", "today", "tomorrow", "yesterday", "moment", "second", "minute", "hour",
    "talk", "speak", "say", "ask", "tell", "listen", "hear", "understand", "think", "feel",
    "mean", "know", "guess", "remember", "forget", "want", "need", "should", "could", "would"
  ]
};


const connectors = ['the', 'a', 'with', 'without', 'during', 'after', 'before', 'while', 'and', 'but', 'if', 'on', 'in', 'by', 'for'];

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSentence(words) {
  const length = Math.floor(Math.random() * 6) + 6; // 6–12 words per sentence
  let sentence = [];
  for (let i = 0; i < length; i++) {
    sentence.push(Math.random() < 0.3 ? randomFromArray(connectors) : randomFromArray(words));
  }
  sentence[0] = sentence[0][0].toUpperCase() + sentence[0].slice(1);
  return sentence.join(' ') + '.';
}

function generate() {
  const theme = document.getElementById('theme').value;
  const count = parseInt(document.getElementById('count').value, 10);
  const words = wordBanks[theme];
  const output = [];

  for (let i = 0; i < count; i++) {
    output.push(generateSentence(words));
  }

  document.getElementById('output').innerText = output.join(' ');
}
