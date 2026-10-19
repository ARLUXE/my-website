import { DemoShell, DemoFooter } from "@/components/DemoShell";
import { MapPin, BedDouble, Bath, Maximize, ArrowRight } from "lucide-react";
import { SmartImage } from "@/components/ui";
import { projectImages } from "@/data/images";

const img = projectImages.havenEstates;

// HAVEN ESTATES — Real estate. Premium property listings, image-led, enquiry.
export default function HavenEstatesDemo() {
  const listings = [
    { name: "The Cliff House", loc: "Goa, IN", beds: 4, baths: 3, size: "320 m²", price: "₹3.8 Cr", img: img.hero },
    { name: "Old Mill Loft", loc: "Mumbai, IN", beds: 2, baths: 2, size: "180 m²", price: "₹2.1 Cr", img: img.villa },
    { name: "Garden Villa", loc: "Pune, IN", beds: 5, baths: 4, size: "410 m²", price: "₹5.2 Cr", img: img.modern },
    { name: "Penthouse Nine", loc: "Delhi, IN", beds: 3, baths: 3, size: "260 m²", price: "₹4.5 Cr", img: img.hero },
  ];

  return (
    <DemoShell barColor="bg-[#f8f6f1]">
      <div className="text-[#1c2b25]">
        {/* Hero */}
        <section className="bg-[#f8f6f1] min-h-[80vh] flex items-end pb-16 pt-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <SmartImage src={img.hero} alt="Luxury contemporary home with glass balconies" accent="#2e7d6b" className="w-full h-full object-cover opacity-30" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f8f6f1] via-[#f8f6f1]/80 to-transparent" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full">
            <div className="flex items-center justify-between mb-12">
              <span className="font-display font-bold text-xl text-[#2e7d6b]">HAVEN ESTATES</span>
              <nav className="hidden sm:flex gap-6 text-sm text-black/50">
                <span>Listings</span><span>About</span><span>Contact</span>
              </nav>
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl leading-[0.95] tracking-tight max-w-3xl">
              Find a place<br />worth coming home to.
            </h1>
            <p className="mt-6 text-black/55 max-w-md leading-relaxed">
              A premium real estate concept — image-led property cards and a
              clean enquiry flow designed to turn browsers into buyers.
            </p>
          </div>
        </section>

        {/* Listings */}
        <section className="bg-[#f8f6f1] py-16 border-t border-black/10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display font-bold text-3xl">Featured listings</h2>
              <span className="text-sm text-black/40">04 properties</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {listings.map((l) => (
                <div key={l.name} className="group rounded-2xl overflow-hidden border border-black/10 bg-white cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <SmartImage src={l.img} alt={l.name} accent="#2e7d6b" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 text-[10px] font-semibold text-[#1c2b25] backdrop-blur">
                      For Sale
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg">{l.name}</h3>
                    <p className="text-sm text-black/50 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {l.loc}
                    </p>
                    <div className="mt-4 flex items-center gap-5 text-xs text-black/60">
                      <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4" /> {l.beds}</span>
                      <span className="flex items-center gap-1.5"><Bath className="w-4 h-4" /> {l.baths}</span>
                      <span className="flex items-center gap-1.5"><Maximize className="w-4 h-4" /> {l.size}</span>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-display font-bold text-lg text-[#2e7d6b]">{l.price}</span>
                      <span className="text-sm font-semibold text-[#2e7d6b] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Enquire <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry band */}
        <section className="bg-[#1c2b25] text-white py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 grid sm:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight">
                Looking for something specific?
              </h2>
              <p className="mt-3 text-white/60">Tell us your requirements and we'll match you with properties that fit.</p>
            </div>
            <button className="px-7 py-4 rounded-full bg-[#2e7d6b] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-[#3a9580] transition-colors">
              Start an enquiry <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
      <DemoFooter brand="HAVEN ESTATES" accent="#2e7d6b" />
    </DemoShell>
  );
}
