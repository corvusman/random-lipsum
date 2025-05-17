// script.js

// — Word banks by theme —  
const wordBanks = {
  medical: {
    nouns: [
      "nurse","diagnosis","treatment","injection","recovery","cell","infection","tumor","symptom","dose",
      "surgery","prescription","antibiotic","vaccine","ward","clinic","pulse","artery","vein","organ",
      "scan","x-ray","biopsy","therapy","anesthesia","emergency","triage","monitor","stethoscope","bandage",
      "fracture","cast","virus","bacteria","isolation","ventilator","oxygen","sterile","rehab","symptomatic",
      "chronic","acute","pharmacology","dosage","clinic","consult","appointment","discharge","health","wellness",
      "immunology","genetics","molecular","biochemistry","therapeutic","diagnostic","preventive","primary","secondary"
    ],
    verbs: [
      "stabilizes","accelerates","modifies","influences","determines","disrupts","facilitates",
      "generates","triggers","prevents","ameliorates","inhibits","enhances","regulates","suppresses",
      "induces","stimulates","alters","balances"
    ],
    adjectives: [
      "chronic","anomalous","clinical","systemic","invasive","therapeutic","unstable","autonomous",
      "empirical","symptomatic","asymptomatic","progressive","regressive","severe","moderate","mild",
      "viral","bacterial","genetic"
    ],
    adverbs: [
      "significantly","consistently","rapidly","gradually","theoretically","minimally","ultimately",
      "surprisingly","notably","visibly","broadly","locally","globally","uniformly","quantitatively"
    ]
  },

  business: {
    nouns: [
      "strategy","market","synergy","stakeholder","report","brand","pipeline","platform","value","initiative",
      "investment","revenue","expense","budget","forecast","auditor","compliance","merger","acquisition","dividend",
      "shareholder","portfolio","liability","asset","valuation","equity","benchmark","performance","milestone","culture",
      "leadership","innovation","operation","logistics","distribution","optimization","efficiency","productivity","scalability","workflow"
    ],
    verbs: [
      "enhances","disrupts","leverages","consolidates","accelerates","establishes","monetizes","optimizes","transforms","aligns",
      "streamlines","diversifies","amplifies","capitalizes","orchestrates","integrates","drives","sustains","cultivates"
    ],
    adjectives: [
      "scalable","sustainable","robust","strategic","agile","innovative","disruptive","holistic","tactical","integrated",
      "dynamic","proactive","reactive","forward-looking","cross-functional","data-driven","results-oriented"
    ],
    adverbs: [
      "substantially","organically","strategically","effectively","efficiently","transparently","aggressively","globally","collaboratively","seamlessly"
    ]
  },

  IT: {
    nouns: [
      "algorithm","database","protocol","interface","framework","repository","pipeline","variable","function","endpoint",
      "server","cache","session","token","encryption","firewall","container","docker","kubernetes","microservice",
      "architecture","deployment","API","SDK","runtime","compile","script","library","dependency","CI/CD"
    ],
    verbs: [
      "executes","compiles","initializes","refactors","encapsulates","allocates","renders","transmits","decrypts","orchestrates",
      "provisions","scales","caches","indexes","optimizes","sanitizes"
    ],
    adjectives: [
      "modular","encrypted","scalable","asynchronous","virtual","iterative","responsive","intelligent","distributed","dynamic",
      "stateless","event-driven","object-oriented","functional","declarative"
    ],
    adverbs: [
      "seamlessly","automatically","concurrently","reliably","efficiently","instantly","securely","remotely","optimally","natively"
    ]
  },

  financial: {
    nouns: [
      "asset","portfolio","liability","dividend","bond","inflation","capital","valuation","return","leverage",
      "equity","debt","credit","exchange","broker","margin","hedge","derivative","futures","option",
      "index","stock","currency","reserve","audit","tax","GDP","budget","surplus","deficit","cashflow"
    ],
    verbs: [
      "hedges","amplifies","calculates","evaluates","mitigates","generates","sustains","balances","allocates","adjusts",
      "diversifies","rebalances","underwrites","issues","redeems","trades","settles"
    ],
    adjectives: [
      "liquid","volatile","strategic","speculative","annualized","diversified","robust","conservative","mature","predictive",
      "nominal","real","leveraged","unleveraged","securitized"
    ],
    adverbs: [
      "annually","strategically","marginally","incrementally","precisely","cautiously","globally","systemically","cyclically","procyclically"
    ]
  },

  conversation: {
    nouns: [
      "idea","thought","conversation","response","question","opinion","perspective","statement","emotion","topic",
      "dialogue","tone","context","meaning","nuance","subtext","feedback","comment","critique","agreement"
    ],
    verbs: [
      "reflects","translates","influences","expresses","reshapes","generates","articulates","validates","simplifies","repeats",
      "interrupts","clarifies","elaborates","questions","asserts","denies","explains","summarizes"
    ],
    adjectives: [
      "honest","curious","thoughtful","expressive","open","casual","sincere","meaningful","direct","reflective",
      "sarcastic","witty","candid","tactful","subtle"
    ],
    adverbs: [
      "genuinely","sincerely","casually","honestly","clearly","carefully","often","usually","rarely","subtly",
      "directly","indirectly","precisely","vaguely"
    ]
  },

  // —— New Construction Theme ——
  construction: {
    nouns: [
      "cement","beam","scaffold","excavator","blueprint","foundation","crane","truss","pylon","contractor",
      "plaster","brick","mortar","girder","joist","concrete","rebar","screw","nail","drywall",
      "insulation","weld","pipe","duct","framework","slab","trowel","hardhat","bulldozer","backhoe","invoice","quote"
    ],
    verbs: [
      "erects","pours","welds","constructs","install s","demolishes","excavates","bolts","anchors","levels",
      "drills","frames","plumbs","secures","manipulates","surveys","paints","caulks","fastens","aligns","approves","rejects"
    ],
    adjectives: [
      "reinforced","prefabricated","load-bearing","structural","modular","temporary","durable","sturdy","rustproof","insulated",
      "weather-resistant","acoustic","fire-rated","composite","tensile","compressive","arched","cantilevered","sheathed","ventilated"
    ],
    adverbs: [
      "securely","precisely","uniformly","stably","rigidly","efficiently","rapidly","carefully","accurately","smoothly",
      "evenly","meticulously","safely","steadily","firmly","expertly","professionally","diligently","systematically","thoroughly"
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

// — Utility: shuffle & random —  
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// — Fill a template with words, ensuring each noun appears at most once per sentence —  
function fillTemplate(template, bank) {
  const usedNouns = [];
  return template.replace(/\[(noun|verb|adjective|adverb)\]/g, (_, type) => {
    let word;
    do {
      word = randomFromArray(bank[type + "s"]);
    } while (type === "noun" && usedNouns.filter(n => n === word).length >= 1);
    if (type === "noun") usedNouns.push(word);
    return word;
  });
}

// — Generate one paragraph (3–6 sentences) —  
function generateParagraph(bank) {
  const sentenceCount = Math.floor(Math.random() * 4) + 3; // 3–6
  const tmpls = shuffle(templates);
  return tmpls.slice(0, sentenceCount)
              .map(t => fillTemplate(t, bank))
              .join(" ");
}

// — Main: read inputs, produce output —  
function generate() {
  const theme = document.getElementById("theme").value;
  const count = parseInt(document.getElementById("count").value, 10);
  const bank  = wordBanks[theme];
  const output = [];
  for (let i = 0; i < count; i++) {
    output.push(generateParagraph(bank));
  }
  document.getElementById("output").innerText = output.join("\n\n");
}

// — Copy to clipboard —  
function copyToClipboard() {
  const text = document.getElementById("output").innerText;
  if (!text) return alert("There's nothing to copy.");
  navigator.clipboard.writeText(text)
    .then(() => alert("Text copied to clipboard!"))
    .catch(() => alert("Failed to copy."));
}
