export const GOLDEN_RULES = [
  {
    title: "Front-Load the Style Box",
    description: "The first 20–30 words carry the most weight. Place genre, mood, and core sound immediately."
  },
  {
    title: "Limit Genre Scope",
    description: "Use a maximum of 2 genres. Always lead with the dominant one."
  },
  {
    title: "Control Instrument Density",
    description: "Use 3–4 key instruments max. Excess reduces clarity."
  },
  {
    title: "Use Brackets Correctly",
    description: "[ ] = instructions (never sung). ( ) = vocalized or stylistic cues."
  },
  {
    title: "Be Specific, Not Verbose",
    description: "Precision beats length. Avoid conflicting descriptors."
  }
];

export const ELITE_PROMPTS = [
  {
    id: "viral-pop",
    name: "Viral Pop",
    prompt: "Upbeat pop, bright synth production, youthful female vocals, about falling in love in the summer, catchy chorus, strong hook, radio-ready mix",
    category: "Pop"
  },
  {
    id: "sad-acoustic",
    name: "Sad Acoustic",
    prompt: "Acoustic ballad, melancholic and emotional, guitar and piano, soft male vocals, about heartbreak and regret, slow build with powerful chorus",
    category: "Acoustic"
  },
  {
    id: "indie-nostalgia",
    name: "Indie Nostalgia",
    prompt: "Indie pop with nostalgic tone, warm guitars and soft synths, dreamy female vocals, about youth and memories, gentle progression with emotional hook",
    category: "Indie"
  },
  {
    id: "cinematic-trailer",
    name: "Cinematic Trailer",
    prompt: "Epic cinematic orchestral score, dark dramatic atmosphere, strings and choir, no vocals, slow build into massive climax, trailer-style intensity",
    category: "Cinematic"
  },
  {
    id: "lo-fi-study",
    name: "Lo-fi Study",
    prompt: "Lo-fi hip hop beat, relaxed late-night mood, soft piano, vinyl crackle, dusty drums, no vocals, study atmosphere loopable",
    category: "Lo-fi"
  },
  {
    id: "trap-anthem",
    name: "Trap Anthem",
    prompt: "Dark trap, heavy 808 bass, fast hi-hats, aggressive male rap vocals, about ambition and struggle, hard-hitting beat, modern production",
    category: "Hip-hop"
  },
  {
    id: "chill-rnb",
    name: "Chill R&B",
    prompt: "Smooth R&B, laid-back vibe, electric piano and soft drums, sensual female vocals, about love and intimacy, clean mix, slow groove",
    category: "R&B"
  },
  {
    id: "synthwave",
    name: "Synthwave Night Drive",
    prompt: "Synthwave, nostalgic 80s vibe, analog synths and driving bassline, male vocals, about neon city nights and loneliness, steady groove, atmospheric",
    category: "Electronic"
  },
  {
    id: "edm-festival",
    name: "EDM Festival Drop",
    prompt: "EDM festival track, high energy, big build-up and explosive drop, synth leads and heavy bass, instrumental, crowd hype style",
    category: "Electronic"
  },
  {
    id: "jazz-lounge",
    name: "Jazz Lounge",
    prompt: "Smooth jazz, relaxed and classy mood, piano, saxophone, and upright bass, no vocals, late-night lounge atmosphere",
    category: "Jazz"
  },
  {
    id: "rock-anthem",
    name: "Rock Anthem",
    prompt: "Alternative rock, energetic and emotional, electric guitar and drums, powerful male vocals, about breaking free, strong chorus, stadium vibe",
    category: "Rock"
  },
  {
    id: "dream-pop",
    name: "Dream Pop",
    prompt: "Dream pop, ethereal and atmospheric, reverb-heavy guitars and synth pads, soft female vocals, about longing and dreams, floating texture",
    category: "Pop"
  },
  {
    id: "afrobeat",
    name: "Afrobeat Groove",
    prompt: "Afrobeat, rhythmic and vibrant, percussion and bass groove, smooth male vocals, about celebration and life, danceable energy",
    category: "World"
  },
  {
    id: "piano-instr",
    name: "Piano Instrumental",
    prompt: "Minimalist piano piece, emotional and reflective, solo piano, no vocals, slow tempo, cinematic feel",
    category: "Classical"
  },
  {
    id: "horror-ambient",
    name: "Horror Ambience",
    prompt: "Dark ambient soundscape, eerie and tense, drones and subtle FX, no vocals, horror atmosphere, slow evolving texture",
    category: "Cinematic"
  }
];

export const MALAY_PROMPTS = [
  // CORE TRADITIONAL (1–15)
  {
    id: "malay-core-1",
    name: "Traditional Malay Asli",
    prompt: "Traditional Malay asli, soft and nostalgic, gambus and violin, gentle male vocals, about longing and love, slow tempo",
    category: "Traditional"
  },
  {
    id: "malay-core-2",
    name: "Irama Melayu Klasik",
    prompt: "Irama Melayu klasik, romantic mood, accordion and flute, female vocals, about separation and memory",
    category: "Traditional"
  },
  {
    id: "malay-core-3",
    name: "Lagu Zapin",
    prompt: "Lagu zapin, rhythmic and lively, gambus and percussion, male vocals, about cultural pride and dance",
    category: "Traditional"
  },
  {
    id: "malay-core-4",
    name: "Dondang Sayang",
    prompt: "Dondang sayang, poetic and conversational, violin and gong, duet vocals, about love and pantun exchange",
    category: "Traditional"
  },
  {
    id: "malay-core-5",
    name: "Joget Melayu",
    prompt: "Joget Melayu, upbeat and cheerful, traditional drums and accordion, female vocals, about celebration and joy",
    category: "Traditional"
  },
  {
    id: "malay-core-6",
    name: "Inang Style",
    prompt: "Inang style, graceful and flowing, violin and rebana, soft vocals, about courtship and beauty",
    category: "Traditional"
  },
  {
    id: "malay-core-7",
    name: "Ghazal Melayu",
    prompt: "Ghazal Melayu, melancholic and deep, harmonium and tabla, expressive male vocals, about heartbreak",
    category: "Traditional"
  },
  {
    id: "malay-core-8",
    name: "Asli Slow Ballad",
    prompt: "Asli slow ballad, emotional, flute and strings, female vocals, about lost love and nostalgia",
    category: "Traditional"
  },
  {
    id: "malay-core-9",
    name: "Traditional Malay Folk",
    prompt: "Traditional Malay folk, warm and simple, acoustic instruments, storytelling vocals, about village life",
    category: "Traditional"
  },
  {
    id: "malay-core-10",
    name: "Zapin Modern Fusion",
    prompt: "Zapin modern fusion, energetic, gambus and light electronic beats, male vocals, about youth and identity",
    category: "Traditional"
  },
  {
    id: "malay-core-11",
    name: "Joget Kampung",
    prompt: "Joget kampung, playful and lively, percussion and accordion, duet vocals, about festivity",
    category: "Traditional"
  },
  {
    id: "malay-core-12",
    name: "Dondang Sayang Klasik",
    prompt: "Dondang sayang klasik, poetic, violin and gong, soft vocals, about romance and wit",
    category: "Traditional"
  },
  {
    id: "malay-core-13",
    name: "Ghazal Johor Style",
    prompt: "Ghazal Johor style, elegant and emotional, harmonium and violin, male vocals, about longing",
    category: "Traditional"
  },
  {
    id: "malay-core-14",
    name: "Inang Klasik",
    prompt: "Inang klasik, slow and graceful, rebana and flute, female vocals, about gentle love",
    category: "Traditional"
  },
  {
    id: "malay-core-15",
    name: "Lagu Rakyat Melayu",
    prompt: "Lagu rakyat Melayu, nostalgic, simple instrumentation, storytelling vocals, about heritage",
    category: "Traditional"
  },
  // LOVE & EMOTION (16–30)
  {
    id: "malay-love-16",
    name: "Malay Asli Love Song",
    prompt: "Malay asli love song, soft and melancholic, violin and piano, female vocals, about unspoken love",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-17",
    name: "Ghazal Cinta",
    prompt: "Ghazal cinta, deep emotional tone, harmonium and tabla, male vocals, about heartbreak",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-18",
    name: "Dondang Sayang Cinta",
    prompt: "Dondang sayang cinta, poetic and romantic, duet vocals, about longing through pantun",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-19",
    name: "Inang Love Ballad",
    prompt: "Inang love ballad, graceful and emotional, flute and strings, female vocals",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-20",
    name: "Joget Cinta Riang",
    prompt: "Joget cinta riang, cheerful and playful, upbeat rhythm, about young love",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-21",
    name: "Lagu Melayu Sedih",
    prompt: "Lagu Melayu sedih, slow and emotional, piano and violin, female vocals, about separation",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-22",
    name: "Zapin Cinta",
    prompt: "Zapin cinta, rhythmic yet emotional, gambus and percussion, male vocals",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-23",
    name: "Asli Heartbreak Song",
    prompt: "Asli heartbreak song, melancholic, soft strings, female vocals, about loss",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-24",
    name: "Ghazal Nostalgia",
    prompt: "Ghazal nostalgia, reflective and deep, harmonium, male vocals, about memories",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-25",
    name: "Dondang Sayang Rindu",
    prompt: "Dondang sayang rindu, poetic longing, duet style, about distance and love",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-26",
    name: "Inang Kesedihan",
    prompt: "Inang kesedihan, soft and flowing, violin, female vocals, about loneliness",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-27",
    name: "Joget Cinta Kampung",
    prompt: "Joget cinta kampung, cheerful and romantic, duet vocals",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-28",
    name: "Zapin Rindu",
    prompt: "Zapin rindu, emotional rhythm, gambus, male vocals",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-29",
    name: "Lagu Klasik Melayu Cinta Agung",
    prompt: "Lagu klasik Melayu cinta agung, orchestral touch, powerful vocals",
    category: "Love & Emotion"
  },
  {
    id: "malay-love-30",
    name: "Asli Cinta Tak Kesampaian",
    prompt: "Asli cinta tak kesampaian, slow emotional, piano and flute, female vocals",
    category: "Love & Emotion"
  },
  // CULTURE & STORYTELLING (31–40)
  {
    id: "malay-culture-31",
    name: "Lagu Rakyat Melayu Storytelling",
    prompt: "Lagu rakyat Melayu, storytelling, acoustic instruments, about village life",
    category: "Culture & Storytelling"
  },
  {
    id: "malay-culture-32",
    name: "Zapin Budaya",
    prompt: "Zapin budaya, energetic, gambus and drums, about tradition and heritage",
    category: "Culture & Storytelling"
  },
  {
    id: "malay-culture-33",
    name: "Dondang Sayang Pantun Storytelling",
    prompt: "Dondang sayang pantun, conversational duet, poetic storytelling",
    category: "Culture & Storytelling"
  },
  {
    id: "malay-culture-34",
    name: "Joget Perayaan",
    prompt: "Joget perayaan, festive and lively, about celebrations",
    category: "Culture & Storytelling"
  },
  {
    id: "malay-culture-35",
    name: "Inang Istana",
    prompt: "Inang istana, elegant and refined, about royal court life",
    category: "Culture & Storytelling"
  },
  {
    id: "malay-culture-36",
    name: "Ghazal Sejarah",
    prompt: "Ghazal sejarah, emotional storytelling, about past events",
    category: "Culture & Storytelling"
  },
  {
    id: "malay-culture-37",
    name: "Lagu Melayu Klasik Alam",
    prompt: "Lagu Melayu klasik tentang alam, soft and descriptive, about nature",
    category: "Culture & Storytelling"
  },
  {
    id: "malay-culture-38",
    name: "Zapin Perjalanan",
    prompt: "Zapin perjalanan, rhythmic storytelling, about journeys",
    category: "Culture & Storytelling"
  },
  {
    id: "malay-culture-39",
    name: "Dondang Sayang Nasihat",
    prompt: "Dondang sayang nasihat, poetic moral themes",
    category: "Culture & Storytelling"
  },
  {
    id: "malay-culture-40",
    name: "Joget Masyarakat",
    prompt: "Joget masyarakat, upbeat and communal, about unity",
    category: "Culture & Storytelling"
  },
  // MODERN FUSION (41–50)
  {
    id: "malay-fusion-41",
    name: "Modern Malay Asli Electronic",
    prompt: "Modern Malay asli with soft electronic elements, emotional, female vocals",
    category: "Modern Fusion"
  },
  {
    id: "malay-fusion-42",
    name: "Zapin EDM Fusion",
    prompt: "Zapin EDM fusion, energetic, gambus with electronic beats, male vocals",
    category: "Modern Fusion"
  },
  {
    id: "malay-fusion-43",
    name: "Ghazal Contemporary",
    prompt: "Ghazal contemporary, traditional instruments with modern production",
    category: "Modern Fusion"
  },
  {
    id: "malay-fusion-44",
    name: "Joget Pop Fusion",
    prompt: "Joget pop fusion, upbeat and catchy, female vocals, radio-ready",
    category: "Modern Fusion"
  },
  {
    id: "malay-fusion-45",
    name: "Inang Cinematic Fusion",
    prompt: "Inang cinematic fusion, orchestral elements, emotional tone",
    category: "Modern Fusion"
  },
  {
    id: "malay-fusion-46",
    name: "Dondang Sayang Modern Duet",
    prompt: "Dondang sayang modern duet, clean production, poetic lyrics",
    category: "Modern Fusion"
  },
  {
    id: "malay-fusion-47",
    name: "Malay Folk Indie Fusion",
    prompt: "Malay folk + indie fusion, acoustic guitar and traditional elements",
    category: "Modern Fusion"
  },
  {
    id: "malay-fusion-48",
    name: "Zapin Hip-hop Fusion",
    prompt: "Zapin hip-hop fusion, rhythmic, gambus and beats, rap vocals",
    category: "Modern Fusion"
  },
  {
    id: "malay-fusion-49",
    name: "Ghazal Ambient Fusion",
    prompt: "Ghazal ambient fusion, atmospheric, slow evolving soundscape",
    category: "Modern Fusion"
  },
  {
    id: "malay-fusion-50",
    name: "Traditional Malay Orchestral Fusion",
    prompt: "Traditional Malay orchestral fusion, grand cinematic feel, no vocals",
    category: "Modern Fusion"
  }
];

export const VOCAL_TRAITS = {
  gender: ["Male", "Female", "Androgynous", "Childlike"],
  age: ["Youthful", "Mature", "Aged"],
  style: ["Soft", "Whispery", "Breathless", "Powerful", "Belted", "Conversational", "Spoken", "Rhythmic", "Rap-like"],
  effects: ["Reverb-heavy", "Auto-tuned", "Distorted", "Layered harmonies"],
  emotion: ["Melancholic", "Euphoric", "Aggressive", "Reflective", "Nostalgic", "Energetic"]
};

export const TROUBLESHOOTING = [
  {
    problem: "Flat Output",
    solution: "Add structure + emotion",
    icon: "Activity"
  },
  {
    problem: "Muddy Sound",
    solution: "Reduce instruments",
    icon: "MicOff"
  },
  {
    problem: "Weak Hook",
    solution: "Explicitly request 'catchy chorus'",
    icon: "Repeat"
  },
  {
    problem: "Inconsistent Style",
    solution: "Simplify genres",
    icon: "Settings2"
  }
];

export const CASE_STUDIES = [
  {
    title: "Viral Pop Optimization",
    initial: "Pop song, happy, synths, female vocals, about love",
    refined: "Upbeat pop, bright synth-driven production, youthful female vocals, about falling in love for the first time, strong catchy chorus, dynamic build from soft verse to explosive hook, radio-ready mix",
    why: "Front-loaded genre, specific narrative, explicit chorus request, dynamic contrast."
  },
  {
    title: "Cinematic Score Depth",
    initial: "Orchestral music, epic, no vocals",
    refined: "Epic cinematic orchestral score, dark dramatic tone, full strings and choir, no vocals, slow atmospheric intro building into powerful climax, deep emotional progression, film trailer style",
    why: "Specifies instrument families, adds temporal structure, defines use-case aesthetic."
  }
];
