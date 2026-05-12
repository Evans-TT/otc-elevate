import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { Clock, Mail, MessageCircle, Phone, Send } from "lucide-react";

const services = [
  "Logistics & Delivery",
  "Apartment Cleaning",
  "Commercial Cleaning",
  "Home Moving",
  "Furniture Transport",
  "Office Relocation",
  "Packing Assistance",
  "Long Distance Delivery",
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: services[0], message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi OTC, my name is ${form.name}.%0A%0AService: ${form.service}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`https://wa.me/27000000000?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Contact</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Let's get your <span className="text-gradient-brand">quote</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Send us a message and we'll respond within the hour during business times.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { icon: Phone, l: "Phone", v: "+27 00 000 0000" },
              { icon: Mail, l: "Email", v: "info@otclogistics.co.za" },
              { icon: MessageCircle, l: "WhatsApp", v: "Chat with us instantly" },
              { icon: Clock, l: "Hours", v: "Mon–Sat · 07:00 – 19:00" },
            ].map((c) => (
              <div key={c.l} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-card">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <c.icon size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.l}</div>
                  <div className="font-medium">{c.v}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="field" />
              </Field>
              <Field label="Email">
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="field" />
              </Field>
              <Field label="Phone">
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="field" />
              </Field>
              <Field label="Service">
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="field">
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message">
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="field resize-none" placeholder="Tell us about your job, location, and dates..." />
              </Field>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.02]"
            >
              {sent ? "Opening WhatsApp..." : "Send Message"}
              <Send size={16} />
            </button>
            <style>{`
              .field { width:100%; border-radius: 0.75rem; border:1px solid var(--color-border); background: var(--color-background); padding: 0.75rem 1rem; font-size: 0.95rem; outline: none; transition: border-color .2s, box-shadow .2s; }
              .field:focus { border-color: var(--color-primary); box-shadow: 0 0 0 4px oklch(0.42 0.22 264 / 0.12); }
            `}</style>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
