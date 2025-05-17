// script.js
// — Word banks by theme —
const wordBanks = {
  medical: {
    nouns: [
      "nurse","diagnosis","treatment","injection","recovery","cell","infection","tumor","symptom","dose",
      "surgery","prescription","antibiotic","vaccine","ward","clinic","pulse","artery","vein","organ",
      "scan","x-ray","biopsy","therapy","anesthesia","emergency","triage","ward","monitor","stethoscope",
      "bandage","fracture","cast","virology","microbe","pathogen","germ","epidemic","pandemic","pharmacy",
      "tablet","capsule","serum","graft","transplant","immune","antibody","receptor","allergy","inflammation",
      "fever","cough","virus","bacteria","isolation","ventilator","oxygen","sterile","sterilization","rehab",
      "symptomatic","asymptomatic","chronic","acute","therapy","rehabilitation","oncology","cardiology","neurology","psychiatry",
      "dermatology","radiology","pathology","hematology","endocrine","metabolism","nutrient","hormone","protein","enzyme",
      "therapy","dosage","pharmacology","clinic","consult","appointment","discharge","follow-up","health","wellness",
      "immunology","genetics","molecular","biochemistry","clinical","therapeutic","diagnostic","preventive","primary","secondary"
    ],
    verbs: [
      "stabilizes","accelerates","modifies","influences","determines","disrupts","facilitates","generates","triggers","prevents",
      "ameliorates","compromises","inhibits","enhances","regulates","suppresses","induces","stimulates","alters","balances"
    ],
    adjectives: [
      "chronic","anomalous","clinical","systemic","invasive","therapeutic","unstable","autonomous","empirical","symptomatic",
      "asymptomatic","progressive","regressive","acute","severe","moderate","mild","viral","bacterial","genetic"
    ],
    adverbs: [
      "significantly","consistently","rapidly","gradually","theoretically","minimally","ultimately","surprisingly","notably","visibly",
      "broadly","narrowly","locally","globally","uniformly","heterogeneously","quantitatively","qualitatively","routinely","sporadically"
    ]
  },
  business: {
    nouns: [
      "strategy","market","synergy","stakeholder","report","brand","pipeline","platform","value","initiative",
      "investment","revenue","expense","budget","forecast","auditor","compliance","merger","acquisition","dividend",
      "shareholder","portfolio","liability","asset","valuation","equity","benchmark","performance","milestone","culture",
      "leadership","innovation","operation","logistics","distribution","optimization","efficiency","productivity","scalability","workflow",
      "process","procedure","contract","agreement","negotiation","partnership","franchise","subsidiary","startup","corporation"
    ],
    verbs: [
      "enhances","disrupts","leverages","consolidates","accelerates","establishes","monetizes","optimizes","transforms","aligns",
      "streamlines","benchmark","diversifies","amplifies","capitalizes","orchestrates","integrates","drives","sustains","cultivates"
    ],
    adjectives: [
      "scalable","sustainable","robust","strategic","agile","innovative","disruptive","holistic","tactical","integrated",
      "dynamic","proactive","reactive","forward-looking","backward-compatible","cross-functional","data-driven","results-oriented","stakeholder-focused","mission-critical"
    ],
    adverbs: [
      "substantially","organically","strategically","economically","effectively","efficiently","transparently","aggressively","globally","collaboratively",
      "seamlessly","rapidly","incrementally","radically","competitively","synergistically","tactically","holistically","optimally","iteratively"
    ]
  },
  IT: {
    nouns: [
      "algorithm","database","protocol","interface","framework","repository","pipeline","variable","function","endpoint",
      "server","client","cache","cookie","session","token","authentication","encryption","firewall","load-balancer",
      "container","docker","kubernetes","microservice","architecture","deployment","API","SDK","runtime","compile",
      "binary","script","middleware","library","package","dependency","CI/CD","branch","merge","commit",
      "rollback","debugger","profiler","virtualization","hypervisor","node","cluster","data-center","edge","cloud"
    ],
    verbs: [
      "executes","compiles","initializes","refactors","encapsulates","allocates","renders","transmits","decrypts","hydrates",
      "serializes","deserializes","orchestrates","provisions","scales","caches","queues","indexes","optimizes","sanitizes"
    ],
    adjectives: [
      "modular","encrypted","scalable","asynchronous","virtual","iterative","responsive","intelligent","distributed","dynamic",
      "stateless","stateful","micro","macro","event-driven","object-oriented","functional","imperative","declarative","reactive"
    ],
    adverbs: [
      "seamlessly","virtually","automatically","concurrently","reliably","consistently","efficiently","instantly","securely","remotely",
      "locally","globally","scalably","optimally","natively","cross-platform","backward-compatibly","forward-compatibly","transparently","gracefully"
    ]
  },
  financial: {
    nouns: [
      "asset","portfolio","liability","dividend","bond","inflation","capital","valuation","return","leverage",
      "equity","debt","credit","exchange","broker","margin","hedge","derivative","futures","option",
      "index","stock","share","currency","reserve","reserve-bank","fiat","crypto","yield","spread",
      "matrix","rating","audit","compliance","tax","GDP","fiscal-year","quarter","budget","surplus",
      "deficit","cashflow","liquidity","bank","lender","borrower","mortgage","underwriting","securitization","collateral"
    ],
    verbs: [
      "hedges","amplifies","calculates","evaluates","mitigates","generates","sustains","balances","allocates","adjusts",
      "leverages","diversifies","rebalances","underwrites","issues","redeems","trades","settles","credits","debits"
    ],
    adjectives: [
      "liquid","volatile","strategic","speculative","annualized","diversified","robust","conservative","mature","predictive",
      "nominal","real","leveraged","unleveraged","securitized","piggyback","offshore","onshore","hedged","unhedged"
    ],
    adverbs: [
      "annually","strategically","marginally","proportionally","incrementally","precisely","notably","cautiously","persistently","temporarily",
      "dynamically","globally","locally","systemically","cyclically","countercyclically","procyclically","transparently","confidentially","legally"
    ]
  },
  conversation: {
    nouns: [
      "idea","thought","conversation","response","question","opinion","perspective","statement","emotion","topic",
      "sentence","phrase","utterance","dialogue","monologue","tone","context","meaning","nuance","subtext",
      "reaction","feedback","comment","critique","agreement","disagreement","clarification","explanation","description","narrative",
      "dialogue","banter","chatter","exchange","remark","observation","inquiry","retort","rebuttal","reflection"
    ],
    verbs: [
      "reflects","translates","influences","expresses","reshapes","generates","articulates","validates","simplifies","repeats",
      "interrupts","clarifies","elaborates","questions","answers","asserts","denies","explains","summarizes","paraphrases"
    ],
    adjectives: [
      "honest","curious","thoughtful","expressive","open","casual","sincere","meaningful","direct","reflective",
      "sarcastic","ironic","humorous","dry","witty","candid","tactful","blunt","subtle","overt"
    ],
    adverbs: [
      "genuinely","sincerely","casually","honestly","clearly","carefully","often","usually","rarely","subtly",
      "directly","indirectly","precisely","vaguely","repeatedly","sporadically","frequently","incessantly","briefly","thoroughly"
    ]
  }
};

// — Sentence skeletons —
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

// — Utility functions —
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
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

function generateParagraph(bank) {
  const sentences = Math.floor(Math.random() * 4) + 3; // 3–6
  const tmpls = shuffle(templates);
  const result = [];
  for (let i = 0; i < sentences; i++) {
    result.push(fillTemplate(tmpls[i], bank));
  }
  return result.join(" ");
}

// — Main handlers —
function generate() {
  const theme = document.getElementById("theme").value;
  const count = parseInt(document.getElementById("count").value, 10);
  const bank = wordBanks[theme];
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push(generateParagraph(bank));
  }
  document.getElementById("output").innerText = out.join("\n\n");
}

function copyToClipboard() {
  const text = document.getElementById("output").innerText;
  if (!text) return alert("There's nothing to copy.");
  navigator.clipboard.writeText(text)
    .then(() => alert("Text copied to clipboard!"))
    .catch(() => alert("Failed to copy."));
}
