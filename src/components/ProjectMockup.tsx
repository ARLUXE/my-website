import type { Project } from "@/data/portfolio";

// A CSS-rendered miniature "screenshot" of each demo website, used on project
// cards and the hero. Each project gets a distinct visual identity.
export function ProjectMockup({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const map: Record<string, JSX.Element> = {
    luxora: <LuxoraMini />,
    "noir-frame": <NoirFrameMini />,
    atelier: <AtelierMini />,
    "nova-digital": <NovaMini />,
    "haven-estates": <HavenMini />,
    "aurel-skin": <AurelMini />,
  };

  return (
    <div className={className} aria-hidden="true">
      {map[project.id] ?? <DefaultMini accent={project.accent} name={project.title} />}
    </div>
  );
}

function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex items-center gap-1 px-3 py-2 bg-white/5 border-b border-white/5">
        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

function LuxoraMini() {
  return (
    <Chrome>
      <div className="h-full bg-[#0c0c0d] text-white p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <span className="font-display text-[10px] tracking-[0.3em] text-[#c9a227]">LUXORA</span>
          <div className="flex gap-2 text-[6px] text-white/40">
            <span>COLLECTION</span><span>ATELIER</span><span>CONTACT</span>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-1.5">
          <div className="bg-gradient-to-br from-[#c9a227]/30 to-[#3a2f10] rounded-sm" />
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0d] rounded-sm border border-[#c9a227]/20" />
          <div className="bg-gradient-to-b from-[#c9a227]/20 to-[#0c0c0d] rounded-sm" />
        </div>
        <div className="mt-2 text-[7px] text-white/50 tracking-widest text-center">AUTUMN / WINTER 2025</div>
      </div>
    </Chrome>
  );
}

function NoirFrameMini() {
  return (
    <Chrome>
      <div className="h-full bg-white text-black p-4 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="font-display font-extrabold text-[10px] tracking-tight">NOIR/FRAME</span>
          <span className="text-[6px] text-black/50">WORK · ABOUT · CONTACT</span>
        </div>
        <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-1.5">
          {[0,1,2,3,4,5,6,7].map((i) => (
            <div key={i} className="bg-black rounded-sm grid place-items-center">
              <span className="text-white text-[7px] font-bold">{["AR","NX","VK","LM","OC","PR","BX","SD"][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

function AtelierMini() {
  return (
    <Chrome>
      <div className="h-full bg-[#f5f3ef] text-[#1a1a1a] p-4 flex flex-col">
        <div className="font-display text-[18px] font-extrabold leading-none mb-1">
          Creative<br />Portfolio.
        </div>
        <div className="text-[6px] text-black/40 mb-3">SELECTED WORK — 2025</div>
        <div className="flex-1 grid grid-cols-2 gap-1.5">
          <div className="bg-[#ff6b4a] rounded-sm" />
          <div className="bg-[#1a1a1a] rounded-sm" />
          <div className="bg-[#1a1a1a] rounded-sm" />
          <div className="bg-[#ff6b4a]/60 rounded-sm" />
        </div>
      </div>
    </Chrome>
  );
}

function NovaMini() {
  return (
    <Chrome>
      <div className="h-full bg-[#070710] text-white p-4 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="font-display font-bold text-[10px] text-[#5b6cff]">NOVA</span>
          <div className="flex gap-1.5 text-[6px] text-white/40"><span>SERVICES</span><span>PRICING</span></div>
        </div>
        <div className="font-display text-[12px] font-bold leading-tight mb-2">
          Software that <span className="text-[#5b6cff]">scales.</span>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-1.5">
          <div className="bg-[#5b6cff]/20 border border-[#5b6cff]/40 rounded-sm" />
          <div className="bg-white/5 border border-white/10 rounded-sm" />
          <div className="bg-white/5 border border-white/10 rounded-sm" />
        </div>
      </div>
    </Chrome>
  );
}

function HavenMini() {
  return (
    <Chrome>
      <div className="h-full bg-[#f8f6f1] text-[#1c2b25] p-4 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="font-display font-bold text-[10px] text-[#2e7d6b]">HAVEN ESTATES</span>
          <span className="text-[6px] text-black/40">LISTINGS</span>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-1.5">
          <div className="bg-gradient-to-br from-[#2e7d6b]/30 to-[#d6e4dd] rounded-sm" />
          <div className="bg-gradient-to-br from-[#1c2b25]/20 to-[#e8e2d8] rounded-sm" />
          <div className="bg-gradient-to-br from-[#2e7d6b]/20 to-[#e8e2d8] rounded-sm" />
          <div className="bg-gradient-to-br from-[#1c2b25]/15 to-[#d6e4dd] rounded-sm" />
        </div>
      </div>
    </Chrome>
  );
}

function AurelMini() {
  return (
    <Chrome>
      <div className="h-full bg-[#f7f1ec] text-[#4a3b32] p-4 flex flex-col">
        <div className="font-display text-[14px] font-bold leading-tight mb-1">
          gentle <span className="text-[#c9a27a]">care</span>
        </div>
        <div className="text-[6px] text-black/40 mb-3">FOR SENSITIVE SKIN</div>
        <div className="flex-1 grid grid-cols-3 gap-1.5">
          <div className="bg-gradient-to-b from-[#e8d5c4] to-[#d8b4a0] rounded-full" />
          <div className="bg-gradient-to-b from-[#f0e0d2] to-[#e8d5c4] rounded-full" />
          <div className="bg-gradient-to-b from-[#d8b4a0] to-[#c9a27a] rounded-full" />
        </div>
        <div className="mt-2 h-4 bg-[#4a3b32] rounded-sm text-white text-[6px] grid place-items-center font-semibold">
          SHOP THE RANGE
        </div>
      </div>
    </Chrome>
  );
}

function DefaultMini({ accent, name }: { accent: string; name: string }) {
  return (
    <Chrome>
      <div className="h-full bg-ink-900 p-4 flex flex-col">
        <div className="font-display text-sm font-bold mb-2" style={{ color: accent }}>
          {name}
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          <div className="rounded-sm" style={{ background: `${accent}33` }} />
          <div className="rounded-sm bg-white/5" />
          <div className="rounded-sm bg-white/5" />
          <div className="rounded-sm" style={{ background: `${accent}22` }} />
        </div>
      </div>
    </Chrome>
  );
}
