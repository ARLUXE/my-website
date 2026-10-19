import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, MapPin, CheckCircle2, AlertCircle, Send } from "lucide-react";
import Seo from "@/components/Seo";
import { SectionLabel } from "@/components/ui";
import { agency, whatsappLink } from "@/config/agency";

const websiteTypes = [
  "Business Website",
  "Personal Portfolio",
  "Logo Designer Portfolio",
  "Corporate Website",
  "Landing Page",
  "E-commerce Website",
  "Website Redesign",
  "Maintenance / Updates",
  "Branding & Identity",
  "Not sure yet",
];

const budgetRanges = [
  "Under ₹1,000",
  "₹1,000 – ₹5,000",
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000+",
  "Let's discuss",
];

const timelines = ["ASAP", "1–2 weeks", "1 month", "2–3 months", "Flexible"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  brand: string;
  websiteType: string;
  budget: string;
  timeline: string;
  description: string;
  reference: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  brand: "",
  websiteType: websiteTypes[0],
  budget: budgetRanges[0],
  timeline: timelines[0],
  description: "",
  reference: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.phone.trim()) e.phone = "Please enter a WhatsApp or phone number.";
    if (!form.description.trim()) e.description = "Please describe your project.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    // ------------------------------------------------------------------
    // FORM DELIVERY — currently simulated.
    // This form does NOT send an email or save anywhere yet. It validates
    // input and shows a success message. To make it deliver enquiries, see
    // EDITING-GUIDE.md → "Connecting the enquiry form to a backend".
    //
    // Example (Supabase):
    //   const { error } = await supabase.from('enquiries').insert({ ...form });
    //   setStatus(error ? 'error' : 'success');
    // ------------------------------------------------------------------
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  }

  // Build a prefilled WhatsApp message from the current form state.
  function buildWhatsappMessage(): string {
    const lines = [
      `Hi ${agency.name}, I'd like to enquire about a website project.`,
      ``,
      `Name: ${form.name || "—"}`,
      `Email: ${form.email || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Brand: ${form.brand || "—"}`,
      `Website type: ${form.websiteType}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      ``,
      `Project: ${form.description || "—"}`,
    ];
    if (form.reference.trim()) lines.push(``, `Reference: ${form.reference}`);
    return lines.join("\n");
  }

  return (
    <>
      <Seo
        title="Contact — AR Studio"
        description="Start a website project with AR Studio. Send an enquiry or chat on WhatsApp."
        path="/contact"
      />
      <section className="pt-36 pb-16 lg:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl text-balance max-w-3xl">
            Start a project.
          </h1>
          <p className="mt-5 text-white/55 max-w-2xl leading-relaxed">
            Share a few details about what you need. You'll get a response with
            next steps and a custom quote — or message directly on WhatsApp.
          </p>

          <div className="mt-12 grid lg:grid-cols-[1.5fr_1fr] gap-8">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/10 bg-ink-900/50 p-6 sm:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" required error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputCls(errors.name)}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email address" required error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputCls(errors.email)}
                    placeholder="you@email.com"
                  />
                </Field>
                <Field label="WhatsApp / phone" required error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputCls(errors.phone)}
                    placeholder="+91 ..."
                  />
                </Field>
                <Field label="Business / brand name">
                  <input
                    type="text"
                    value={form.brand}
                    onChange={(e) => update("brand", e.target.value)}
                    className={inputCls()}
                    placeholder="Your brand"
                  />
                </Field>
                <Field label="Type of website">
                  <select
                    value={form.websiteType}
                    onChange={(e) => update("websiteType", e.target.value)}
                    className={inputCls()}
                  >
                    {websiteTypes.map((t) => (
                      <option key={t} value={t} className="bg-ink-900">{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Approximate budget">
                  <select
                    value={form.budget}
                    onChange={(e) => update("budget", e.target.value)}
                    className={inputCls()}
                  >
                    {budgetRanges.map((t) => (
                      <option key={t} value={t} className="bg-ink-900">{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Preferred timeline">
                  <select
                    value={form.timeline}
                    onChange={(e) => update("timeline", e.target.value)}
                    className={inputCls()}
                  >
                    {timelines.map((t) => (
                      <option key={t} value={t} className="bg-ink-900">{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Reference website (optional)">
                  <input
                    type="url"
                    value={form.reference}
                    onChange={(e) => update("reference", e.target.value)}
                    className={inputCls()}
                    placeholder="https://..."
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Project description" required error={errors.description}>
                  <textarea
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                    rows={5}
                    className={inputCls(errors.description)}
                    placeholder="Tell us about your project, goals, and anything we should know."
                  />
                </Field>
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="mt-5 flex items-start gap-3 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-200">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Thank you — your enquiry is ready.</p>
                    <p className="text-emerald-200/70 mt-0.5">
                      This demo form doesn't send data anywhere yet. To deliver
                      enquiries, connect a backend — see the editing guide. Or
                      send the same details directly on WhatsApp.
                    </p>
                  </div>
                </div>
              )}
              {status === "error" && (
                <div className="mt-5 flex items-start gap-3 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-sm text-red-200">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>Something went wrong. Please try again or message us on WhatsApp.</p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink-950 font-semibold text-sm hover:bg-white/90 hover:shadow-glow hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                </button>
                <a
                  href={whatsappLink(buildWhatsappMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" /> Send via WhatsApp
                </a>
              </div>
            </form>

            {/* Contact details */}
            <aside className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6">
                <h3 className="font-display font-semibold text-lg mb-5">Direct contact</h3>
                <div className="space-y-4 text-sm">
                  <a href={`mailto:${agency.email}`} className="flex items-center gap-3 text-white/70 hover:text-white">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent/10 text-accent-light">
                      <Mail className="w-4 h-4" />
                    </span>
                    {agency.email}
                  </a>
                  <a
                    href={whatsappLink(`Hi ${agency.name}, I'd like to discuss a website project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-white"
                  >
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent/10 text-accent-light">
                      <MessageCircle className="w-4 h-4" />
                    </span>
                    {agency.whatsappDisplay}
                  </a>
                  <div className="flex items-center gap-3 text-white/70">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent/10 text-accent-light">
                      <MapPin className="w-4 h-4" />
                    </span>
                    {agency.location}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-white/15 bg-ink-900/30 p-6 text-sm text-white/45 leading-relaxed">
                <p className="font-semibold text-white/70 mb-1.5">Response time</p>
                <p>Typically within 24 hours. For urgent enquiries, WhatsApp is fastest.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function inputCls(error?: string): string {
  return `w-full px-4 py-3 rounded-xl bg-ink-800/60 border text-sm text-white placeholder:text-white/30 outline-none transition-colors ${
    error ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-accent/60"
  }`;
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-white/60 mb-2">
        {label} {required && <span className="text-accent-light">*</span>}
      </span>
      {children}
      {error && <span className="block mt-1.5 text-xs text-red-400">{error}</span>}
    </label>
  );
}
