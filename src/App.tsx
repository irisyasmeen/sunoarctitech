/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Music, 
  Library, 
  BookOpen, 
  Sparkles, 
  Copy, 
  Check, 
  ChevronRight, 
  Info,
  Mic2,
  Trash2,
  Plus,
  RefreshCw,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  GOLDEN_RULES, 
  ELITE_PROMPTS, 
  MALAY_PROMPTS,
  VOCAL_TRAITS, 
  TROUBLESHOOTING, 
  CASE_STUDIES 
} from "./constants";

type Section = "builder" | "library" | "malay" | "handbook" | "troubleshoot" | "lyrics";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("builder");
  const [prompt, setPrompt] = useState({
    genre: "",
    secondaryGenre: "",
    mood: "",
    instruments: [] as string[],
    vocalGender: "",
    vocalStyle: "",
    theme: "",
    structure: "",
    production: ""
  });
  const [lyrics, setLyrics] = useState({
    v1: "",
    chorus: "",
    v2: "",
    bridge: "",
    outro: ""
  });
  const [finalPrompt, setFinalPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [usePipes, setUsePipes] = useState(false);

  const finalLyrics = `[Verse 1]\n${lyrics.v1}\n\n[Chorus]\n${lyrics.chorus}\n\n[Verse 2]\n${lyrics.v2}\n\n[Bridge]\n${lyrics.bridge}\n\n[Outro]\n${lyrics.outro}`.trim();

  useEffect(() => {
    // [Primary Genre] + [Secondary Influence] + [Mood] + [Core Instruments] + [Vocal Identity] + [Theme] + [Structure] + [Production Quality]
    const separator = usePipes ? " | " : ", ";
    const parts = [
      prompt.genre + (prompt.secondaryGenre ? ` with ${prompt.secondaryGenre} influence` : ""),
      prompt.mood,
      prompt.instruments.length > 0 ? (usePipes ? prompt.instruments.join(" | ") : prompt.instruments.join(" and ")) : "",
      `${prompt.vocalGender} ${prompt.vocalStyle} vocals`.trim(),
      prompt.theme ? `about ${prompt.theme}` : "",
      prompt.structure,
      prompt.production
    ].filter(Boolean);

    setFinalPrompt(parts.join(separator));
  }, [prompt, usePipes]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInstrumentToggle = (inst: string) => {
    setPrompt(prev => ({
      ...prev,
      instruments: prev.instruments.includes(inst)
        ? prev.instruments.filter(i => i !== inst)
        : prev.instruments.length < 4 ? [...prev.instruments, inst] : prev.instruments
    }));
  };

  const resetPrompt = () => {
    setPrompt({
      genre: "",
      secondaryGenre: "",
      mood: "",
      instruments: [],
      vocalGender: "",
      vocalStyle: "",
      theme: "",
      structure: "",
      production: ""
    });
  };

  return (
    <div className="h-screen bg-slate-950 text-slate-100 font-sans flex flex-col overflow-hidden selection:bg-indigo-500/30">
      {/* Top Navigation */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between px-8 z-50 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <Music className="text-white w-4 h-4" />
          </div>
          <h1 className="font-bold text-xl tracking-tight text-white uppercase italic">
            SUNO <span className="text-indigo-400">ARCHITECT</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-4 text-sm font-medium">
            <NavTab active={activeSection === "builder"} onClick={() => setActiveSection("builder")} label="Architecture" />
            <NavTab active={activeSection === "lyrics"} onClick={() => setActiveSection("lyrics")} label="Vocal System" />
            <NavTab active={activeSection === "handbook"} onClick={() => setActiveSection("handbook")} label="Methodology" />
            <NavTab active={activeSection === "library"} onClick={() => setActiveSection("library")} label="Elite Library" />
            <NavTab active={activeSection === "malay"} onClick={() => setActiveSection("malay")} label="Malay Traditional" />
          </nav>
          
          <button 
            disabled={!finalPrompt}
            onClick={() => copyToClipboard(finalPrompt)}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded text-sm font-semibold transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
          >
            {copied ? "Copied!" : "Copy Prompt"}
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Left Sidebar: Elite Library Presets (Shortcut) */}
        <aside className="w-72 border-r border-slate-800 bg-slate-900/30 p-4 hidden lg:flex flex-col shrink-0">
          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar space-y-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4 px-2">Elite Library Presets</h3>
              <div className="space-y-1">
                {ELITE_PROMPTS.map((item, idx) => (
                  <button 
                    key={item.id}
                    onClick={() => copyToClipboard(item.prompt)}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-800 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[10px] font-bold text-indigo-400">0{idx + 1}. {item.category}</p>
                      <Copy className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <p className="text-xs font-bold text-slate-300 mb-1">{item.name}</p>
                    <p className="text-[10px] text-slate-500 leading-tight line-clamp-1">{item.prompt}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-4 px-2">Malay Traditional Selection</h3>
              <div className="space-y-1">
                {MALAY_PROMPTS.slice(0, 15).map((item, idx) => (
                  <button 
                    key={item.id}
                    onClick={() => copyToClipboard(item.prompt)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-emerald-500/20 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-[9px] font-bold text-emerald-400 uppercase">{item.category}</p>
                      <Copy className="w-2.5 h-2.5 text-slate-600 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <p className="text-[11px] font-bold text-slate-300 line-clamp-1">{item.name}</p>
                  </button>
                ))}
                <button 
                  onClick={() => setActiveSection("malay")}
                  className="w-full text-[10px] font-bold text-emerald-400 p-2 text-center hover:underline uppercase tracking-widest"
                >
                  View All 50 Prompts →
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-indigo-950/30 rounded-xl border border-indigo-500/20">
            <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Golden Rule #1
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed italic">
              "Front-load the Style Box. The first 20–30 words carry the most weight."
            </p>
          </div>
        </aside>

        {/* Main Editor Center Section */}
        <section className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {activeSection === "builder" && (
                <motion.div
                  key="builder"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-10"
                >
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded text-[10px] font-bold tracking-widest uppercase mb-2 inline-block">
                        Prompt Architect
                      </span>
                      <h2 className="text-3xl font-bold">Construct Your Sound</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SectionCard title="Style & Texture" icon={<Music className="w-4 h-4" />}>
                      <div className="space-y-4">
                        <InputGroup label="Genre + Influence" placeholder="e.g. Upbeat Pop, Nostalgic" value={prompt.genre} onChange={(v) => setPrompt(p => ({ ...p, genre: v }))} />
                        <InputGroup label="Mood" placeholder="e.g. Aggressive, Euphoric" value={prompt.mood} onChange={(v) => setPrompt(p => ({ ...p, mood: v }))} />
                      </div>
                    </SectionCard>

                    <SectionCard title="Production" icon={<Plus className="w-4 h-4" />}>
                      <div className="space-y-4">
                        <InputGroup label="Quality / Texture" placeholder="e.g. Radio-ready mix, lo-fi" value={prompt.production} onChange={(v) => setPrompt(p => ({ ...p, production: v }))} />
                        <div className="flex items-center gap-2 pt-2">
                          <button 
                            onClick={() => setUsePipes(!usePipes)} 
                            className={`flex-1 py-2 px-3 rounded-lg text-[10px] font-bold transition-all border ${usePipes ? "bg-indigo-600 border-indigo-400 text-white shadow-lg" : "bg-slate-800 border-slate-700 text-slate-400"}`}
                          >
                            PIPE STACK: {usePipes ? "ON" : "OFF"}
                          </button>
                          <button onClick={resetPrompt} className="p-2 bg-slate-800 hover:bg-red-900/30 text-slate-500 hover:text-red-400 rounded-lg transition-all border border-slate-700">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </SectionCard>

                    <SectionCard title="Vocal Character" icon={<Mic2 className="w-4 h-4" />}>
                      <div className="space-y-4">
                        <div className="flex gap-2 flex-wrap mb-2">
                          {VOCAL_TRAITS.gender.map(g => (
                            <Tag key={g} active={prompt.vocalGender === g} onClick={() => setPrompt(p => ({ ...p, vocalGender: g }))}>{g}</Tag>
                          ))}
                        </div>
                        <InputGroup label="Identity" placeholder="e.g. Youthful Female, Haunting" value={prompt.vocalStyle} onChange={(v) => setPrompt(p => ({ ...p, vocalStyle: v }))} />
                      </div>
                    </SectionCard>

                    <SectionCard title="Arrangement" icon={<ChevronRight className="w-4 h-4" />}>
                      <div className="space-y-4">
                        <InputGroup label="Instruments" placeholder="Max 4 (e.g. Guitar, Synth)" value={prompt.instruments.join(", ")} onChange={(v) => setPrompt(p => ({ ...p, instruments: v.split(",").map(i => i.trim()).filter(Boolean) }))} />
                        <InputGroup label="Theme / Flow" placeholder="e.g. Summer, Explosive Chorus" value={prompt.structure} onChange={(v) => setPrompt(p => ({ ...p, structure: v }))} />
                      </div>
                    </SectionCard>
                  </div>

                  <div className="pt-6">
                    <div className="flex justify-between mb-2">
                      <label className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">GENERATED OUTPUT STRING</label>
                      <span className="text-[10px] text-slate-600 font-mono italic">Ready for Generation</span>
                    </div>
                    <div className="bg-indigo-600/5 border-2 border-dashed border-indigo-500/20 p-8 rounded-2xl relative group hover:border-indigo-500/40 transition-all duration-500">
                      <p className="text-xl font-medium leading-relaxed text-indigo-50 font-display">
                        {finalPrompt || <span className="text-slate-600 italic font-sans text-lg">Build your prompt using tiles above...</span>}
                      </p>
                      <div 
                        onClick={() => copyToClipboard(finalPrompt)}
                        className={`absolute -right-4 -bottom-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-xl shadow-indigo-600/40 cursor-pointer active:scale-90 transition-all ${!finalPrompt && "opacity-0 pointer-events-none"}`}
                      >
                        {copied ? <Check className="w-5 h-5 text-white" /> : <Copy className="w-5 h-5 text-white" />}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <StatusBadge color="bg-green-500" label="SIGNAL: HIGH" />
                    <StatusBadge color="bg-indigo-500" label="STRUCTURE: VERIFIED" />
                    <StatusBadge color="bg-cyan-500" label="GENRE LIMIT: 1/2" />
                  </div>
                </motion.div>
              )}

              {activeSection === "library" && (
                <motion.div
                  key="library"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <header>
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-2 inline-block">Pro Templates</span>
                    <h2 className="text-3xl font-bold">Elite Library</h2>
                  </header>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ELITE_PROMPTS.map((item) => (
                      <div 
                        key={item.id}
                        className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-all cursor-pointer"
                        onClick={() => copyToClipboard(item.prompt)}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-400/10 px-2 py-1 rounded inline-block mb-3">
                              {item.category}
                            </span>
                            <h3 className="text-xl font-bold group-hover:text-white transition-colors">{item.name}</h3>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all text-slate-500">
                            <Copy className="w-4 h-4" />
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 font-mono leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                          {item.prompt}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === "malay" && (
                <motion.div
                  key="malay"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <header>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2 inline-block">Specialized Library • PART XI</span>
                    <h2 className="text-3xl font-bold">Malay Traditional Library</h2>
                    <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-medium">50 Managed Prompts for Irama Melayu, Zapin, & more</p>
                  </header>

                  <div className="space-y-12">
                    {["Traditional", "Love & Emotion", "Culture & Storytelling", "Modern Fusion"].map(group => (
                      <div key={group} className="space-y-4">
                        <div className="flex items-center gap-4">
                          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-emerald-500/80 bg-emerald-500/5 px-3 py-1 rounded border border-emerald-500/10 whitespace-nowrap">{group}</h3>
                          <div className="h-px bg-slate-800 flex-grow"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {MALAY_PROMPTS.filter(p => p.category === group).map(item => (
                            <div 
                              key={item.id}
                              className="group bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-all cursor-pointer relative overflow-hidden"
                              onClick={() => copyToClipboard(item.prompt)}
                            >
                              <div className="flex justify-between items-start mb-3 relative z-10">
                                <div>
                                  <h3 className="text-lg font-bold group-hover:text-emerald-400 transition-colors">{item.name}</h3>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all text-slate-500">
                                  <Copy className="w-4 h-4" />
                                </div>
                              </div>
                              <p className="text-[11px] text-slate-400 font-mono leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 relative z-10">
                                {item.prompt}
                              </p>
                              {/* Decorative bg element */}
                              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-600/10 transition-all"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === "handbook" && (
                <motion.div
                  key="handbook"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12"
                >
                  <header>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2 inline-block">Design Philosophy</span>
                    <h2 className="text-3xl font-bold">Methodology</h2>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {GOLDEN_RULES.map((rule, idx) => (
                      <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/20 transition-all group">
                        <span className="text-3xl font-black text-slate-800 group-hover:text-indigo-400/20 transition-colors">0{idx + 1}</span>
                        <h3 className="text-lg font-bold text-slate-200 mt-2 mb-2">{rule.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{rule.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === "lyrics" && (
                <motion.div
                  key="lyrics"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-10"
                >
                  <header>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2 inline-block">Vocal System</span>
                    <h2 className="text-3xl font-bold">Lyrics Architect</h2>
                  </header>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <TextAreaGroup label="Verse 1" placeholder="Narrative intro..." value={lyrics.v1} onChange={(v) => setLyrics(l => ({ ...l, v1: v }))} />
                      <TextAreaGroup label="Chorus" placeholder="Hook phrase..." value={lyrics.chorus} onChange={(v) => setLyrics(l => ({ ...l, chorus: v }))} />
                      <TextAreaGroup label="Bridge" placeholder="Emotional shift..." value={lyrics.bridge} onChange={(v) => setLyrics(l => ({ ...l, bridge: v }))} />
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col min-h-[400px]">
                      <div className="flex justify-between mb-4">
                        <h3 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">FORMATTED OUTPUT</h3>
                        <div onClick={() => copyToClipboard(finalLyrics)} className="text-indigo-400 hover:text-indigo-300 cursor-pointer text-xs font-bold flex items-center gap-1 transition-all">
                          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          {copied ? "COPIED" : "COPY"}
                        </div>
                      </div>
                      <div className="flex-1 bg-slate-950 rounded-xl p-6 font-mono text-xs text-slate-400 whitespace-pre-wrap leading-loose overflow-y-auto border border-slate-800">
                        {finalLyrics || "Structured lyrics will appear here..."}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === "troubleshoot" && (
                <motion.div
                  key="troubleshoot"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <header>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-2 inline-block">Failure Diagnosis</span>
                    <h2 className="text-3xl font-bold">Troubleshooting</h2>
                  </header>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {TROUBLESHOOTING.map((item, idx) => (
                      <div key={idx} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
                        <p className="text-[10px] font-bold text-slate-300 uppercase mb-2 tracking-widest">PROBLEM: {item.problem}</p>
                        <p className="text-sm text-slate-500 italic leading-relaxed">Solution: {item.solution}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Right Sidebar: Quick Reference */}
        <aside className="w-72 border-l border-slate-800 bg-slate-900/30 p-6 hidden xl:flex flex-col shrink-0">
          <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-6">Troubleshooting</h3>
          <div className="space-y-6">
            {TROUBLESHOOTING.slice(0, 3).map((item, idx) => (
              <div key={idx} className="group">
                <p className="text-[11px] font-bold text-slate-300 uppercase group-hover:text-white transition-colors">PROBLEM: {item.problem}</p>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed italic border-l border-slate-800 pl-3">
                  Solution: {item.solution}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-auto flex flex-col gap-2">
            <div className="h-px bg-slate-800 w-full my-4"></div>
            <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 group hover:border-indigo-500/30 transition-all">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-bold text-indigo-400">MASTER PRINCIPLE</span>
              </div>
              <p className="text-[11px] leading-snug text-slate-300 font-semibold uppercase italic">
                Clarity &gt; Complexity &gt; Creativity
              </p>
            </div>
          </div>
        </aside>
      </main>

      {/* Bottom Status Bar */}
      <footer className="h-8 shrink-0 border-t border-slate-800 bg-slate-950 flex items-center px-8 justify-between z-50">
        <div className="flex gap-4">
          <span className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">READY FOR GENERATION</span>
          <span className="text-[10px] text-slate-800">|</span>
          <span className="text-[9px] text-indigo-900/50 font-bold uppercase tracking-widest">MODEL: SUNO V3.5 OPTIMIZED</span>
        </div>
        <div className="flex gap-4">
          <span className="text-[9px] text-slate-700 font-bold uppercase tracking-widest">Iteration Loop: Finalized</span>
        </div>
      </footer>

      {/* Mobile Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-full py-2 px-6 lg:hidden flex gap-6 shadow-2xl z-[100]">
        <MobileNavBtn active={activeSection === "builder"} onClick={() => setActiveSection("builder")} icon={<Sparkles className="w-5 h-5" />} />
        <MobileNavBtn active={activeSection === "lyrics"} onClick={() => setActiveSection("lyrics")} icon={<Mic2 className="w-5 h-5" />} />
        <MobileNavBtn active={activeSection === "library"} onClick={() => setActiveSection("library")} icon={<Library className="w-5 h-5" />} />
        <MobileNavBtn active={activeSection === "malay"} onClick={() => setActiveSection("malay")} icon={<Music className="w-5 h-5" />} />
      </div>
    </div>
  );
}

function NavTab({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`pb-1 transition-all border-b-2 font-bold uppercase tracking-widest text-[10px] ${active ? "text-indigo-400 border-indigo-400" : "text-slate-500 border-transparent hover:text-slate-300"}`}
    >
      {label}
    </button>
  );
}

function MobileNavBtn({ active, onClick, icon }: { active: boolean; onClick: () => void; icon: React.ReactNode }) {
  return (
    <button onClick={onClick} className={active ? "text-indigo-400" : "text-slate-500"}>
      {icon}
    </button>
  );
}

function StatusBadge({ color, label }: { color: string, label: string }) {
  return (
    <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-xl flex gap-3 items-center backdrop-blur-sm group hover:border-slate-700 transition-all">
      <div className={`w-2 h-2 ${color} rounded-full shadow-[0_0_8px] shadow-current`}></div>
      <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase">{label}</span>
    </div>
  );
}

function SectionCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6 shadow-sm hover:bg-slate-900 transition-all duration-300 group">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
          {icon}
        </div>
        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function InputGroup({ label, placeholder, value, onChange }: { label: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="space-y-1.5 font-sans">
      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</label>
      <input 
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all text-slate-200 placeholder:text-slate-700 font-medium"
      />
    </div>
  );
}

function TextAreaGroup({ label, placeholder, value, onChange }: { label: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</label>
      <textarea 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all text-slate-200 placeholder:text-slate-700 font-medium resize-none leading-relaxed"
      />
    </div>
  );
}

function Tag({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button 
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${
        active 
          ? "bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/20" 
          : "bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300"
      }`}
    >
      {children}
    </button>
  );
}

