import type { Project } from "@/data/portfolio";
import { projectPreviews } from "@/data/images";

// A realistic miniature "screenshot" of each demo website, used on project
// cards and the hero. Uses real high-quality imagery with a polished website
// chrome overlay so each preview looks like a real polished website.
export function ProjectMockup({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const img = projectPreviews[project.id];

  return (
    <div className={className} aria-hidden="true">
      <Chrome accent={project.accent} title={project.title}>
        <WebsitePreview project={project} img={img} />
      </Chrome>
    </div>
  );
}

// Browser-like chrome with traffic lights and a fake URL bar.
function Chrome({
  children,
  accent,
  title,
}: {
  children: React.ReactNode;
  accent: string;
  title: string;
}) {
  const url = title.toLowerCase().replace(/\s+/g, "") + ".com";
  return (
    <div className="h-full w-full flex flex-col bg-[#0a0a0c]">
      {/* Top bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/5 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#febc2e]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[7px] text-white/30 font-mono truncate">{url}</span>
      </div>
      {/* Fake site nav bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 shrink-0" style={{ background: `${accent}10` }}>
        <span className="font-display text-[9px] font-bold tracking-tight" style={{ color: accent }}>
          {title}
        </span>
        <div className="flex gap-2 text-[5px] text-white/40 tracking-widest uppercase">
          <span>Home</span><span>Work</span><span>About</span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden relative">{children}</div>
    </div>
  );
}

// The actual website preview — real image with website-like content overlay.
function WebsitePreview({ project, img }: { project: Project; img?: string }) {
  if (!img) {
    return <DefaultPreview accent={project.accent} name={project.title} />;
  }

  const layouts: Record<string, React.ReactNode> = {
    arluxe: <ArLuxePreview img={img} accent={project.accent} />,
    luxora: <LuxoraPreview img={img} accent={project.accent} />,
    "noir-frame": <NoirFramePreview img={img} accent={project.accent} />,
    atelier: <AtelierPreview img={img} accent={project.accent} />,
    "nova-digital": <NovaPreview img={img} accent={project.accent} />,
    "haven-estates": <HavenPreview img={img} accent={project.accent} />,
    "aurel-skin": <AurelPreview img={img} accent={project.accent} />,
  };

  return <>{layouts[project.id] ?? <DefaultPreview accent={project.accent} name={project.title} />}</>;
}

function ArLuxePreview({ img, accent }: { img: string; accent: string }) {
  return (
    <div className="h-full w-full bg-[#070708] flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover opacity-90" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent" />
        <div className="absolute top-2 left-2">
          <p className="font-display text-[8px] font-extrabold tracking-[0.2em] text-white/90">AR LUXE</p>
          <p className="text-[5px] tracking-[0.3em] text-[#c9a227] mt-0.5">SKELETON · AUTOMATIC</p>
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
          <div className="text-[7px] font-display font-bold text-white leading-tight">
            Time, made<br /><span className="text-[#c9a227]">visible.</span>
          </div>
          <span className="inline-flex items-center gap-0.5 text-[5px] font-semibold text-[#c9a227] bg-[#c9a227]/20 px-1.5 py-0.5 rounded border border-[#c9a227]/30">
            ∞ Lifetime
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 p-2 bg-[#070708]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="aspect-square rounded-sm bg-gradient-to-br from-ink-800 to-ink-950 border border-[#c9a227]/10 grid place-items-center">
            <div className="w-3 h-3 rounded-full border border-[#c9a227]/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

function LuxoraPreview({ img, accent }: { img: string; accent: string }) {
  return (
    <div className="h-full w-full bg-[#0c0c0d] flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0d]/70 via-transparent to-transparent" />
        <div className="absolute top-2 left-2">
          <p className="font-display text-[9px] tracking-[0.3em] text-[#c9a227]">LUXORA</p>
          <p className="text-[5px] text-white/50 tracking-widest mt-0.5">AUTUMN / WINTER 2025</p>
        </div>
        <div className="absolute bottom-2 left-2 text-[7px] font-display font-bold text-white leading-tight">
          The new<br /><span className="text-[#c9a227]">collection.</span>
        </div>
        <div className="absolute bottom-2 right-2 text-[5px] text-white/60 tracking-widest">EXPLORE →</div>
      </div>
      <div className="grid grid-cols-3 gap-px bg-[#0c0c0d] p-px">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-6 bg-gradient-to-br from-[#c9a227]/20 to-[#0c0c0d]" />
        ))}
      </div>
    </div>
  );
}

function NoirFramePreview({ img, accent }: { img: string; accent: string }) {
  return (
    <div className="h-full w-full bg-white flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover grayscale contrast-125" loading="lazy" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-2 left-2">
          <p className="font-display text-[10px] font-extrabold tracking-tight text-white">NOIR/FRAME</p>
        </div>
        <div className="absolute bottom-2 left-2 text-[7px] font-display font-bold text-white leading-tight">
          Identity<br />in black<br />& white.
        </div>
      </div>
      <div className="grid grid-cols-4 gap-px bg-white p-px">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-5 bg-black grid place-items-center">
            <span className="text-white text-[5px] font-bold">{["NX", "VK", "LM", "OC"][i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AtelierPreview({ img, accent }: { img: string; accent: string }) {
  return (
    <div className="h-full w-full bg-[#f5f3ef] flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-2 left-2">
          <p className="font-display text-[10px] font-extrabold leading-none text-[#1a1a1a]">
            Creative<br />Portfolio.
          </p>
          <p className="text-[5px] text-black/40 mt-1">SELECTED WORK — 2025</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-px bg-[#f5f3ef] p-px">
        <div className="h-6 bg-[#ff6b4a]" />
        <div className="h-6 bg-[#1a1a1a]" />
      </div>
    </div>
  );
}

function NovaPreview({ img, accent }: { img: string; accent: string }) {
  return (
    <div className="h-full w-full bg-[#070710] flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover opacity-70" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#070710]/80 to-transparent" />
        <div className="absolute top-2 left-2">
          <p className="font-display text-[9px] font-bold text-[#5b6cff]">NOVA</p>
        </div>
        <div className="absolute bottom-2 left-2 text-[7px] font-display font-bold text-white leading-tight">
          Software that<br /><span className="text-[#5b6cff]">scales.</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-px bg-[#070710] p-px">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-5 bg-[#5b6cff]/20 border border-[#5b6cff]/30" />
        ))}
      </div>
    </div>
  );
}

function HavenPreview({ img, accent }: { img: string; accent: string }) {
  return (
    <div className="h-full w-full bg-[#f8f6f1] flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-2 left-2">
          <p className="font-display text-[9px] font-bold text-[#2e7d6b]">HAVEN ESTATES</p>
        </div>
        <div className="absolute bottom-2 left-2 text-[7px] font-display font-bold text-white leading-tight">
          Find your<br />forever home.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-px bg-[#f8f6f1] p-px">
        <div className="h-6 bg-gradient-to-br from-[#2e7d6b]/30 to-[#d6e4dd]" />
        <div className="h-6 bg-gradient-to-br from-[#1c2b25]/20 to-[#e8e2d8]" />
      </div>
    </div>
  );
}

function AurelPreview({ img, accent }: { img: string; accent: string }) {
  return (
    <div className="h-full w-full bg-[#f7f1ec] flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-2 left-2">
          <p className="font-display text-[10px] font-bold leading-tight text-[#4a3b32]">
            gentle <span className="text-[#c9a27a]">care</span>
          </p>
          <p className="text-[5px] text-black/40 mt-0.5">FOR SENSITIVE SKIN</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-px bg-[#f7f1ec] p-px">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-6 rounded-full bg-gradient-to-b from-[#e8d5c4] to-[#d8b4a0]" />
        ))}
      </div>
    </div>
  );
}

function DefaultPreview({ accent, name }: { accent: string; name: string }) {
  return (
    <div className="h-full w-full bg-ink-900 flex flex-col">
      <div className="font-display text-sm font-bold m-3" style={{ color: accent }}>
        {name}
      </div>
      <div className="flex-1 grid grid-cols-2 gap-1 p-1">
        <div className="rounded-sm" style={{ background: `${accent}33` }} />
        <div className="rounded-sm bg-white/5" />
        <div className="rounded-sm bg-white/5" />
        <div className="rounded-sm" style={{ background: `${accent}22` }} />
      </div>
    </div>
  );
}
