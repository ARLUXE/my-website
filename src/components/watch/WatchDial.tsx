import { useLiveTime, handAngles } from "@/hooks/useLiveTime";
import type { Watch } from "@/data/watches";

// A complete SVG luxury wristwatch: case, bezel, crown, strap/bracelet,
// dial with hour markers, live analogue hands driven by the shared
// useLiveTime hook, AND visible moving skeleton gears.
// Every AR LUXE watch shows an open skeleton dial with rotating gears.

type StrapType = "leather" | "bracelet";

export function WatchDial({
  watch,
  size = 280,
  showDigital = false,
  className = "",
}: {
  watch: Watch;
  size?: number;
  showDigital?: boolean;
  className?: string;
}) {
  const now = useLiveTime();
  const { hour, minute, second } = handAngles(now);

  const w = size;
  const h = size * 1.65;
  const cx = w / 2;
  const cy = h / 2;
  const r = w * 0.42; // case radius

  const hourLen = r * 0.52;
  const minLen = r * 0.74;
  const secLen = r * 0.80;

  const hourTime = now.getHours() % 12 || 12;
  const minTime = now.getMinutes();
  const secTime = now.getSeconds();
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  const digital = `${hourTime}:${String(minTime).padStart(2, "0")}:${String(secTime).padStart(2, "0")}`;

  const strapType: StrapType = watch.strapType ?? (watch.strap.toLowerCase().includes("leather") || watch.strap.toLowerCase().includes("suede") || watch.strap.toLowerCase().includes("alligator") ? "leather" : "bracelet");
  const isLightDial = isLight(watch.dialHex);
  const markerColor = isLightDial ? "#1a1a1a" : "#fff";
  const markerSubColor = isLightDial ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)";
  const handColor = isLightDial ? "#1a1a1a" : "#fff";
  const caseColor = getCaseColor(watch.caseMaterial);
  const uid = watch.id;

  // Gear rotation speeds — driven by milliseconds for smooth continuous motion
  const ms = now.getMilliseconds();
  const gear1Rot = (ms / 1000) * 360; // fast gear
  const gear2Rot = -(ms / 1000) * 240; // counter-rotating
  const gear3Rot = (ms / 1000) * 180; // slow gear
  const balanceRot = (ms / 1000) * 720; // balance wheel oscillates fast

  return (
    <div className={`relative inline-grid place-items-center ${className}`} style={{ width: w, height: h }}>
      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        role="img"
        aria-label={`${watch.name} automatic skeleton watch showing ${digital} ${ampm}`}
      >
        <defs>
          <radialGradient id={`dial-${uid}`} cx="50%" cy="38%" r="70%">
            <stop offset="0%" stopColor={shade(watch.dialHex, 12)} />
            <stop offset="70%" stopColor={watch.dialHex} />
            <stop offset="100%" stopColor={shade(watch.dialHex, -30)} />
          </radialGradient>
          <linearGradient id={`case-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={shade(caseColor, 25)} />
            <stop offset="40%" stopColor={caseColor} />
            <stop offset="60%" stopColor={shade(caseColor, -15)} />
            <stop offset="100%" stopColor={shade(caseColor, 20)} />
          </linearGradient>
          <linearGradient id={`bezel-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={shade(caseColor, 35)} />
            <stop offset="50%" stopColor={shade(caseColor, -10)} />
            <stop offset="100%" stopColor={shade(caseColor, 30)} />
          </linearGradient>
          <linearGradient id={`strap-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={shade(watch.strapHex, -20)} />
            <stop offset="50%" stopColor={watch.strapHex} />
            <stop offset="100%" stopColor={shade(watch.strapHex, -25)} />
          </linearGradient>
          <linearGradient id={`crown-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={shade(caseColor, -10)} />
            <stop offset="50%" stopColor={shade(caseColor, 30)} />
            <stop offset="100%" stopColor={shade(caseColor, -15)} />
          </linearGradient>
          <radialGradient id={`shadow-${uid}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.5)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          {/* Gear metallic gradient */}
          <linearGradient id={`gear-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={shade(caseColor, 20)} />
            <stop offset="50%" stopColor={shade(caseColor, -10)} />
            <stop offset="100%" stopColor={shade(caseColor, 15)} />
          </linearGradient>
        </defs>

        {/* Drop shadow under watch */}
        <ellipse cx={cx} cy={cy + r * 0.05} rx={r * 1.1} ry={r * 0.3} fill={`url(#shadow-${uid})`} opacity="0.6" />

        {/* Top strap */}
        {strapType === "leather" ? (
          <LeatherStrapTop cx={cx} cy={cy} r={r} w={w} gradId={`strap-${uid}`} />
        ) : (
          <BraceletStrapTop cx={cx} cy={cy} r={r} w={w} gradId={`strap-${uid}`} caseColor={caseColor} />
        )}

        {/* Bottom strap */}
        {strapType === "leather" ? (
          <LeatherStrapBottom cx={cx} cy={cy} r={r} w={w} gradId={`strap-${uid}`} />
        ) : (
          <BraceletStrapBottom cx={cx} cy={cy} r={r} w={w} gradId={`strap-${uid}`} caseColor={caseColor} />
        )}

        {/* Crown (right side) */}
        <g>
          <rect x={cx + r - 2} y={cy - r * 0.12} width={r * 0.16} height={r * 0.24} rx={3} fill={`url(#crown-${uid})`} />
          <rect x={cx + r + r * 0.1} y={cy - r * 0.09} width={r * 0.08} height={r * 0.18} rx={2} fill={`url(#crown-${uid})`} />
        </g>

        {/* Outer case ring */}
        <circle cx={cx} cy={cy} r={r} fill={`url(#case-${uid})`} />
        {/* Bezel ring */}
        <circle cx={cx} cy={cy} r={r - 2} fill={`url(#bezel-${uid})`} />
        {/* Inner dial — slightly translucent for skeleton effect */}
        <circle cx={cx} cy={cy} r={r - r * 0.14} fill={`url(#dial-${uid})`} stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" opacity={isLightDial ? "0.85" : "0.92"} />

        {/* === SKELETON GEARS — visible moving mechanism === */}
        <SkeletonGears
          cx={cx}
          cy={cy}
          r={r}
          uid={uid}
          gear1Rot={gear1Rot}
          gear2Rot={gear2Rot}
          gear3Rot={gear3Rot}
          accent={watch.accent}
          isLightDial={isLightDial}
        />

        {/* Minute track (small ticks) */}
        {Array.from({ length: 60 }).map((_, i) => {
          if (i % 5 === 0) return null;
          const angle = (i * 6 - 90) * (Math.PI / 180);
          const inner = r - r * 0.18;
          const outer = r - r * 0.14;
          const x1 = cx + Math.cos(angle) * inner;
          const y1 = cy + Math.sin(angle) * inner;
          const x2 = cx + Math.cos(angle) * outer;
          const y2 = cy + Math.sin(angle) * outer;
          return (
            <line key={`m-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={markerSubColor} strokeWidth={0.6} />
          );
        })}

        {/* Hour markers */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const isCardinal = i % 3 === 0;
          const inner = r - (isCardinal ? r * 0.28 : r * 0.22);
          const outer = r - r * 0.16;
          const x1 = cx + Math.cos(angle) * inner;
          const y1 = cy + Math.sin(angle) * inner;
          const x2 = cx + Math.cos(angle) * outer;
          const y2 = cy + Math.sin(angle) * outer;
          if (isCardinal) {
            return (
              <line key={`h-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={markerColor} strokeWidth={3} strokeLinecap="round" />
            );
          }
          return (
            <line key={`h-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={markerColor} strokeWidth={1.4} strokeLinecap="round" />
          );
        })}

        {/* Brand text on dial */}
        <text
          x={cx}
          y={cy - r * 0.38}
          textAnchor="middle"
          fontSize={w * 0.05}
          fill={isLightDial ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.75)"}
          fontFamily="Manrope, sans-serif"
          fontWeight="800"
          letterSpacing="1.5"
        >
          AR LUXE
        </text>
        <text
          x={cx}
          y={cy - r * 0.38 + w * 0.055}
          textAnchor="middle"
          fontSize={w * 0.028}
          fill={isLightDial ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.35)"}
          fontFamily="Manrope, sans-serif"
          letterSpacing="2.5"
        >
          AUTOMATIC · SKELETON
        </text>

        {/* Digital time display */}
        {showDigital && (
          <text
            x={cx}
            y={cy + r * 0.45}
            textAnchor="middle"
            fontSize={w * 0.055}
            fill={isLightDial ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.8)"}
            fontFamily="monospace"
            fontWeight="500"
          >
            {digital} {ampm}
          </text>
        )}

        {/* Balance wheel — oscillating, part of skeleton mechanism */}
        <g>
          <circle cx={cx} cy={cy + r * 0.22} r={r * 0.16} fill={isLightDial ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.03)"} stroke={markerSubColor} strokeWidth="0.5" />
          <g transform={`rotate(${balanceRot} ${cx} ${cy + r * 0.22})`}>
            <line x1={cx - r * 0.12} y1={cy + r * 0.22} x2={cx + r * 0.12} y2={cy + r * 0.22} stroke={watch.accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
            <circle cx={cx} cy={cy + r * 0.22} r={r * 0.04} fill="none" stroke={watch.accent} strokeWidth="0.8" opacity="0.6" />
            {/* Balance wheel spokes */}
            <line x1={cx} y1={cy + r * 0.22 - r * 0.1} x2={cx} y2={cy + r * 0.22 + r * 0.1} stroke={watch.accent} strokeWidth="0.6" opacity="0.4" />
          </g>
          <text x={cx} y={cy + r * 0.22 + r * 0.07} textAnchor="middle" fontSize={w * 0.02} fill={isLightDial ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.25)"} fontFamily="Manrope, sans-serif" letterSpacing="1">28,800 vph</text>
        </g>

        {/* Hour hand */}
        <line x1={cx} y1={cy} x2={cx} y2={cy - hourLen} stroke={handColor} strokeWidth={4} strokeLinecap="round" transform={`rotate(${hour} ${cx} ${cy})`} />
        {/* Minute hand */}
        <line x1={cx} y1={cy} x2={cx} y2={cy - minLen} stroke={handColor} strokeWidth={2.6} strokeLinecap="round" transform={`rotate(${minute} ${cx} ${cy})`} />
        {/* Second hand */}
        <line x1={cx} y1={cy + r * 0.12} x2={cx} y2={cy - secLen} stroke={watch.accent} strokeWidth={1.3} strokeLinecap="round" transform={`rotate(${second} ${cx} ${cy})`} />
        {/* Center cap */}
        <circle cx={cx} cy={cy} r={4.5} fill={watch.accent} />
        <circle cx={cx} cy={cy} r={2} fill={handColor} />

        {/* Glass reflection highlight */}
        <ellipse cx={cx - r * 0.25} cy={cy - r * 0.3} rx={r * 0.35} ry={r * 0.15} fill="rgba(255,255,255,0.08)" transform={`rotate(-30 ${cx} ${cy})`} />
      </svg>
    </div>
  );
}

// === SKELETON GEARS — visible moving gears through open dial ===
function SkeletonGears({
  cx,
  cy,
  r,
  uid,
  gear1Rot,
  gear2Rot,
  gear3Rot,
  accent,
  isLightDial,
}: {
  cx: number;
  cy: number;
  r: number;
  uid: string;
  gear1Rot: number;
  gear2Rot: number;
  gear3Rot: number;
  accent: string;
  isLightDial: boolean;
}) {
  const gearColor = `url(#gear-${uid})`;
  const gearOpacity = isLightDial ? "0.75" : "0.55";
  const jewelColor = accent;

  return (
    <g opacity={gearOpacity}>
      {/* Gear 1 — upper left, largest, rotates clockwise */}
      <Gear cx={cx - r * 0.28} cy={cy - r * 0.12} outerR={r * 0.18} innerR={r * 0.06} teeth={12} rotation={gear1Rot} fill={gearColor} />
      {/* Jewel on gear 1 */}
      <circle cx={cx - r * 0.28} cy={cy - r * 0.12} r={r * 0.025} fill={jewelColor} opacity="0.8" />

      {/* Gear 2 — upper right, medium, rotates counter-clockwise */}
      <Gear cx={cx + r * 0.3} cy={cy - r * 0.18} outerR={r * 0.14} innerR={r * 0.05} teeth={10} rotation={gear2Rot} fill={gearColor} />
      {/* Jewel on gear 2 */}
      <circle cx={cx + r * 0.3} cy={cy - r * 0.18} r={r * 0.02} fill={jewelColor} opacity="0.8" />

      {/* Gear 3 — lower left, small, rotates clockwise slowly */}
      <Gear cx={cx - r * 0.22} cy={cy + r * 0.38} outerR={r * 0.1} innerR={r * 0.04} teeth={8} rotation={gear3Rot} fill={gearColor} />

      {/* Bridge plate — decorative skeleton bridge connecting gears */}
      <path
        d={`M ${cx - r * 0.4} ${cy - r * 0.1}
            Q ${cx - r * 0.1} ${cy - r * 0.3} ${cx + r * 0.35} ${cy - r * 0.15}
            L ${cx + r * 0.35} ${cy - r * 0.1}
            Q ${cx - r * 0.1} ${cy - r * 0.2} ${cx - r * 0.4} ${cy - r * 0.05}
            Z`}
        fill="none"
        stroke={isLightDial ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.12)"}
        strokeWidth="2"
        opacity="0.6"
      />

      {/* Mainspring barrel hint — lower right */}
      <circle cx={cx + r * 0.25} cy={cy + r * 0.35} r={r * 0.12} fill="none" stroke={gearColor} strokeWidth="2" opacity="0.4" />
      <g transform={`rotate(${gear1Rot * 0.5} ${cx + r * 0.25} ${cy + r * 0.35})`}>
        <line x1={cx + r * 0.25 - r * 0.08} y1={cy + r * 0.35} x2={cx + r * 0.25 + r * 0.08} y2={cy + r * 0.35} stroke={gearColor} strokeWidth="1.5" opacity="0.3" />
        <line x1={cx + r * 0.25} y1={cy + r * 0.35 - r * 0.08} x2={cx + r * 0.25} y2={cy + r * 0.35 + r * 0.08} stroke={gearColor} strokeWidth="1.5" opacity="0.3" />
      </g>
    </g>
  );
}

// A single rotating gear with teeth
function Gear({
  cx,
  cy,
  outerR,
  innerR,
  teeth,
  rotation,
  fill,
}: {
  cx: number;
  cy: number;
  outerR: number;
  innerR: number;
  teeth: number;
  rotation: number;
  fill: string;
}) {
  // Build gear path with teeth
  const toothDepth = outerR * 0.15;
  const points: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a1 = (i / teeth) * Math.PI * 2;
    const a2 = ((i + 0.4) / teeth) * Math.PI * 2;
    const a3 = ((i + 0.6) / teeth) * Math.PI * 2;
    const a4 = ((i + 1) / teeth) * Math.PI * 2;
    // tooth tip
    const tipR = outerR + toothDepth;
    const x1 = cx + Math.cos(a1) * outerR;
    const y1 = cy + Math.sin(a1) * outerR;
    const x2 = cx + Math.cos(a2) * tipR;
    const y2 = cy + Math.sin(a2) * tipR;
    const x3 = cx + Math.cos(a3) * tipR;
    const y3 = cy + Math.sin(a3) * tipR;
    const x4 = cx + Math.cos(a4) * outerR;
    const y4 = cy + Math.sin(a4) * outerR;
    points.push(`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`);
  }

  return (
    <g transform={`rotate(${rotation} ${cx} ${cy})`}>
      <polygon points={points.join(" ")} fill={fill} />
      {/* Inner ring */}
      <circle cx={cx} cy={cy} r={innerR} fill="none" stroke={fill} strokeWidth="1.5" />
      {/* Spokes */}
      <line x1={cx - innerR} y1={cy} x2={cx + innerR} y2={cy} stroke={fill} strokeWidth="1.5" opacity="0.7" />
      <line x1={cx} y1={cy - innerR} x2={cx} y2={cy + innerR} stroke={fill} strokeWidth="1.5" opacity="0.7" />
      {/* Center pivot */}
      <circle cx={cx} cy={cy} r={innerR * 0.3} fill={fill} opacity="0.8" />
    </g>
  );
}

// Full watch unit with glow — used on hero and product detail.
export function LiveWatch({
  watch,
  size = 280,
  showDigital = false,
  className = "",
}: {
  watch: Watch;
  size?: number;
  showDigital?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative inline-grid place-items-center ${className}`} style={{ width: size + 40, height: size * 1.65 + 40 }}>
      <div className="absolute inset-0 rounded-full opacity-20 blur-3xl" style={{ background: watch.accent }} />
      <WatchDial watch={watch} size={size} showDigital={showDigital} />
    </div>
  );
}

// === Strap renderers ===

function LeatherStrapTop({ cx, cy, r, w, gradId }: { cx: number; cy: number; r: number; w: number; gradId: string }) {
  const sw = r * 1.4;
  const top = 0;
  const taperW = r * 1.05;
  return (
    <g>
      <path
        d={`M ${cx - sw / 2} ${cy - r * 0.7}
            L ${cx - taperW / 2} ${top}
            L ${cx + taperW / 2} ${top}
            L ${cx + sw / 2} ${cy - r * 0.7}
            Z`}
        fill={`url(#${gradId})`}
      />
      <path
        d={`M ${cx - sw / 2 + 4} ${cy - r * 0.7} L ${cx - taperW / 2 + 4} ${top + 4}`}
        stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="3 3" fill="none"
      />
      <path
        d={`M ${cx + sw / 2 - 4} ${cy - r * 0.7} L ${cx + taperW / 2 - 4} ${top + 4}`}
        stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="3 3" fill="none"
      />
    </g>
  );
}

function LeatherStrapBottom({ cx, cy, r, w, gradId }: { cx: number; cy: number; r: number; w: number; gradId: string }) {
  const sw = r * 1.4;
  const bottom = cy * 2 + r * 0.5;
  const taperW = r * 1.05;
  return (
    <g>
      <path
        d={`M ${cx - sw / 2} ${cy + r * 0.7}
            L ${cx - taperW / 2} ${bottom}
            L ${cx + taperW / 2} ${bottom}
            L ${cx + sw / 2} ${cy + r * 0.7}
            Z`}
        fill={`url(#${gradId})`}
      />
      <path
        d={`M ${cx - sw / 2 + 4} ${cy + r * 0.7} L ${cx - taperW / 2 + 4} ${bottom - 4}`}
        stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="3 3" fill="none"
      />
      <path
        d={`M ${cx + sw / 2 - 4} ${cy + r * 0.7} L ${cx + taperW / 2 - 4} ${bottom - 4}`}
        stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="3 3" fill="none"
      />
      <rect x={cx - taperW * 0.3} y={bottom - r * 0.18} width={taperW * 0.6} height={r * 0.12} rx={3} fill={shade("#888888", 10)} opacity="0.5" />
    </g>
  );
}

function BraceletStrapTop({ cx, cy, r, w, gradId, caseColor }: { cx: number; cy: number; r: number; w: number; gradId: string; caseColor: string }) {
  const sw = r * 1.3;
  const top = 0;
  const linkH = (cy - r * 0.7) / 4;
  return (
    <g>
      {Array.from({ length: 4 }).map((_, i) => {
        const yTop = top + i * linkH;
        const lw = sw - i * (sw * 0.06);
        return (
          <g key={i}>
            <rect x={cx - lw / 2} y={yTop + 1} width={lw} height={linkH - 1} rx={6} fill={`url(#${gradId})`} stroke={shade(caseColor, -20)} strokeWidth="0.5" />
            <line x1={cx - lw / 2 + 4} y1={yTop + linkH / 2} x2={cx + lw / 2 - 4} y2={yTop + linkH / 2} stroke={shade(caseColor, -25)} strokeWidth="0.5" opacity="0.6" />
          </g>
        );
      })}
    </g>
  );
}

function BraceletStrapBottom({ cx, cy, r, w, gradId, caseColor }: { cx: number; cy: number; r: number; w: number; gradId: string; caseColor: string }) {
  const sw = r * 1.3;
  const bottom = cy * 2 + r * 0.5;
  const linkH = (bottom - (cy + r * 0.7)) / 4;
  return (
    <g>
      {Array.from({ length: 4 }).map((_, i) => {
        const yTop = cy + r * 0.7 + i * linkH;
        const lw = sw - i * (sw * 0.06);
        return (
          <g key={i}>
            <rect x={cx - lw / 2} y={yTop + 1} width={lw} height={linkH - 1} rx={6} fill={`url(#${gradId})`} stroke={shade(caseColor, -20)} strokeWidth="0.5" />
            <line x1={cx - lw / 2 + 4} y1={yTop + linkH / 2} x2={cx + lw / 2 - 4} y2={yTop + linkH / 2} stroke={shade(caseColor, -25)} strokeWidth="0.5" opacity="0.6" />
          </g>
        );
      })}
      <rect x={cx - sw * 0.25} y={bottom - r * 0.15} width={sw * 0.5} height={r * 0.1} rx={4} fill={shade(caseColor, 15)} />
    </g>
  );
}

// === Helpers ===

function getCaseColor(material: string): string {
  const m = material.toLowerCase();
  if (m.includes("gold")) return "#d4af37";
  if (m.includes("black") || m.includes("pvd")) return "#2a2a2e";
  if (m.includes("gunmetal")) return "#3a3a40";
  if (m.includes("titanium")) return "#a8acb0";
  if (m.includes("brushed")) return "#c0c0c8";
  return "#d0d0d8";
}

function isLight(hex: string): boolean {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6;
}

function shade(hex: string, percent: number): string {
  const h = hex.replace("#", "");
  const num = parseInt(h, 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + Math.round((percent / 100) * 255)));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + Math.round((percent / 100) * 255)));
  const b = Math.max(0, Math.min(255, (num & 0xff) + Math.round((percent / 100) * 255)));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
