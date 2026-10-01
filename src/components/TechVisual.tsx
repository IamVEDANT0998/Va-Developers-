import React, { useState } from 'react';
import { Sparkles, Film, Code2, Play, Pause, Scissors, SlidersHorizontal, CheckCircle2, Cpu, Smartphone, Layers, Check } from 'lucide-react';

export const TechVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'creator' | 'editor' | 'engine'>('creator');
  const [isPlaying, setIsPlaying] = useState(false);
  const [copiedTitle, setCopiedTitle] = useState(false);

  const sampleTitle = "Building Lag-Free Android Apps with Jetpack Compose";

  const handleCopyTitle = () => {
    navigator.clipboard.writeText(sampleTitle);
    setCopiedTitle(true);
    setTimeout(() => setCopiedTitle(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Subtle ambient glow backdrop */}
      <div 
        aria-hidden="true" 
        className="absolute -top-10 -left-6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-8 -right-6 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      {/* Main Container Card */}
      <div className="relative rounded-2xl border border-white/10 bg-[#0c0e17]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Top Header Bar / Mode Switcher */}
        <div className="px-3.5 py-3 border-b border-white/5 bg-[#080a10]/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
            <span className="ml-2 text-[11px] font-mono text-slate-400">VA Product Studio</span>
          </div>

          {/* Interactive tab controls */}
          <div className="flex items-center p-1 bg-black/40 rounded-lg border border-white/5 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('creator')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === 'creator'
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Creator Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('editor')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === 'editor'
                  ? 'bg-violet-600/30 text-violet-300 border border-violet-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Edit Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('engine')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === 'engine'
                  ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Engine Core</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-5 min-h-[360px] flex flex-col justify-between">
          {/* TAB 1: CREATOR STUDIO UI */}
          {activeTab === 'creator' && (
            <div className="space-y-3.5 animate-fadeIn">
              {/* Product Header */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[11px]">
                    CS
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200">Creator Studio</span>
                    <span className="text-[10px] text-slate-400 ml-1.5">· AI Video Assistant</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  In Development
                </span>
              </div>

              {/* Working Interface Preview */}
              <div className="p-3.5 rounded-xl bg-[#080911] border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono text-slate-400">INPUT TOPIC</span>
                  <span className="text-blue-400 font-mono text-[10px]">YouTube Pre-Production</span>
                </div>

                <div className="text-xs text-slate-200 font-medium bg-black/40 p-2 rounded-lg border border-white/5">
                  "Android Jetpack Compose smooth UI rendering & performance"
                </div>

                {/* AI Structured Output */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-violet-400 font-medium">
                      <Sparkles className="w-3 h-3" />
                      Optimized Title Recommendation
                    </span>
                    <button
                      onClick={handleCopyTitle}
                      className="text-[10px] text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      {copiedTitle ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="p-2.5 rounded-lg bg-violet-950/20 border border-violet-500/20 text-xs font-semibold text-white flex items-center justify-between">
                    <span className="truncate pr-2">{sampleTitle}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  </div>
                </div>

                {/* Structured Chapters */}
                <div className="space-y-1.5">
                  <div className="text-[11px] text-slate-400">Structured Chapters Plan</div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                    <div className="p-1.5 rounded bg-white/[0.02] border border-white/5 text-slate-300">
                      00:00 · Architecture Blueprint
                    </div>
                    <div className="p-1.5 rounded bg-white/[0.02] border border-white/5 text-slate-300">
                      02:40 · Recomposition Rules
                    </div>
                  </div>
                </div>

                {/* Generated Tags */}
                <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">#AndroidDev</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">#JetpackCompose</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">#Kotlin</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Target: Android Mobile & Tablet</span>
                <span className="font-mono text-slate-400">Gemini 2.0 Integration</span>
              </div>
            </div>
          )}

          {/* TAB 2: EDIT STUDIO UI */}
          {activeTab === 'editor' && (
            <div className="space-y-3.5 animate-fadeIn">
              {/* Product Header */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-[11px]">
                    ES
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200">Edit Studio</span>
                    <span className="text-[10px] text-slate-400 ml-1.5">· Mobile Video Editor</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  In Development
                </span>
              </div>

              {/* Working Interface Preview */}
              <div className="p-3.5 rounded-xl bg-[#080911] border border-white/5 space-y-3">
                {/* Transport Header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-6 h-6 rounded bg-violet-600/30 hover:bg-violet-600/50 text-violet-300 flex items-center justify-center transition-colors"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                    </button>
                    <span className="text-white text-[11px]">00:14.28</span>
                    <span className="text-slate-400 text-[10px]">/ 01:30.00</span>
                  </div>
                  <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    HW Render 1080p60
                  </span>
                </div>

                {/* Simulated Visual Multi-Track Timeline */}
                <div className="space-y-1.5 pt-1">
                  {/* Track 1: Video clip track */}
                  <div className="relative h-8 rounded bg-slate-900 border border-white/10 flex items-center overflow-hidden px-1">
                    <div className="absolute top-0 bottom-0 left-[35%] w-0.5 bg-blue-400 z-10" />
                    <div className="w-[35%] h-6 bg-blue-600/40 rounded border border-blue-500/40 text-[9px] text-blue-200 flex items-center px-2 truncate">
                      Clip_01.mp4 (4K)
                    </div>
                    <div className="w-[45%] h-6 bg-blue-600/30 rounded border border-blue-500/30 text-[9px] text-blue-200 flex items-center px-2 ml-1 truncate">
                      Clip_02.mp4 (B-Roll)
                    </div>
                  </div>

                  {/* Track 2: Audio Waveform track */}
                  <div className="h-6 rounded bg-black/40 border border-white/5 flex items-center px-2 justify-between text-[9px] font-mono text-slate-400">
                    <span className="text-violet-400">Audio Track (Voiceover)</span>
                    <span className="text-slate-400">48kHz stereo</span>
                  </div>
                </div>

                {/* Tactile Controls */}
                <div className="pt-1 grid grid-cols-3 gap-2 text-[10px] font-medium text-slate-300">
                  <div className="p-1.5 rounded bg-white/[0.03] border border-white/5 text-center flex items-center justify-center gap-1">
                    <Scissors className="w-3 h-3 text-slate-400" />
                    <span>Split Cut</span>
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.03] border border-white/5 text-center flex items-center justify-center gap-1">
                    <SlidersHorizontal className="w-3 h-3 text-slate-400" />
                    <span>Grading</span>
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.03] border border-white/5 text-center flex items-center justify-center gap-1 text-emerald-400">
                    <Check className="w-3 h-3" />
                    <span>Magnetic</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Architecture: Android Media3 + ExoPlayer</span>
                <span className="text-slate-400 font-mono text-[10px]">Zero Cloud Rendering</span>
              </div>
            </div>
          )}

          {/* TAB 3: ENGINE CORE (PRODUCT ARCHITECTURE) */}
          {activeTab === 'engine' && (
            <div className="space-y-3.5 animate-fadeIn">
              {/* Product Header */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[11px]">
                    EC
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200">Product Engineering</span>
                    <span className="text-[10px] text-slate-400 ml-1.5">· Kotlin & Compose</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
                  Native Code
                </span>
              </div>

              {/* Real Code Architecture */}
              <div className="p-3 rounded-xl bg-black/60 border border-white/5 overflow-hidden">
                <pre className="text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>
{`// VA Developers · Product Architecture
@Composable
fun StudioWorkspace(
  workflowState: WorkflowState,
  modifier: Modifier = Modifier
) {
  val engine = remember { CreatorEngine() }

  Column(modifier = modifier.fillMaxSize()) {
    TactileHeader(title = workflowState.title)
    LiveTimelineView(engine.playbackState)
    HardwareExportPipeline(status = workflowState.status)
  }
}`}
                  </code>
                </pre>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                <div className="p-2 rounded bg-white/[0.02] border border-white/5 text-slate-300">
                  <span className="text-blue-400 font-semibold">Clean Architecture:</span> MVVM + Compose
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5 text-slate-300">
                  <span className="text-violet-400 font-semibold">AI Integration:</span> Gemini Multi-Modal
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Independent Codebase</span>
                <span className="font-mono text-slate-400 text-[10px]">100% Truthful Implementation</span>
              </div>
            </div>
          )}

          {/* Bottom Card Footer */}
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>VA Developers Studio</span>
            </div>
            <span className="text-slate-400 font-mono text-[10px]">Built for People</span>
          </div>
        </div>
      </div>
    </div>
  );
};
