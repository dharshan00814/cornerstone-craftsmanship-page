import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Home as HomeIcon,
  Building2,
  Factory,
  Palette,
  Hammer,
  Ruler,
  ClipboardList,
  ShieldCheck,
  Users,
  Wallet,
  HardHat,
  Wrench,
  Clock,
  Award,
  Headphones,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronDown,
  Star,
  Menu,
  X,
  ArrowUp,
  Send,
  Quote,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import heroImg from "@/assets/hero-construction.jpg";
import aboutImg from "@/assets/about-team.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

import { Counter, Reveal, ScrollProgress, useReveal } from "@/lib/landing-utils";
import BeforeAfter from "@/components/BeforeAfter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: HomeIcon, title: "Residential Construction", desc: "Custom homes, villas and apartments engineered for lasting comfort." },
  { icon: Building2, title: "Commercial Construction", desc: "Offices, retail and mixed-use developments built to a higher standard." },
  { icon: Factory, title: "Industrial Projects", desc: "Warehouses, plants and factories delivered on time and on budget." },
  { icon: Palette, title: "Interior Design", desc: "Curated interiors that balance craft, material and light." },
  { icon: Hammer, title: "Renovation", desc: "Restore and reimagine existing structures with modern finishes." },
  { icon: Ruler, title: "Architectural Planning", desc: "Concept, feasibility and permit drawings by senior architects." },
  { icon: ClipboardList, title: "Project Management", desc: "End-to-end coordination — schedule, cost, quality and safety." },
];

const WHY = [
  { icon: ShieldCheck, title: "Premium Materials", desc: "Only certified, sustainably sourced materials enter our sites." },
  { icon: Users, title: "Experienced Engineers", desc: "A senior bench with decades of complex-project experience." },
  { icon: Wallet, title: "Transparent Pricing", desc: "Line-item quotes with no hidden extras — ever." },
  { icon: HardHat, title: "Safety Standards", desc: "ISO-aligned safety protocols on every active site." },
  { icon: Wrench, title: "Latest Equipment", desc: "A modern fleet that keeps productivity and precision high." },
  { icon: Clock, title: "On-Time Delivery", desc: "Milestone-tracked schedules with contractual guarantees." },
  { icon: Award, title: "Quality Assurance", desc: "Independent QA at every stage — foundation to handover." },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated project managers available around the clock." },
];

const PROCESS = [
  { n: "01", t: "Consultation", d: "Understand your vision, site and budget." },
  { n: "02", t: "Planning", d: "Feasibility, scope and timeline." },
  { n: "03", t: "Design", d: "Architectural and engineering drawings." },
  { n: "04", t: "Construction", d: "Skilled execution with weekly progress reports." },
  { n: "05", t: "Inspection", d: "Multi-stage QA and safety inspections." },
  { n: "06", t: "Handover", d: "Snag-free delivery with full documentation." },
];

const PROJECTS = [
  { img: p1, name: "Aurora Villa", cat: "Residential", loc: "Bengaluru, India", year: 2024, span: "row-span-2" },
  { img: p2, name: "Meridian Tower", cat: "Commercial", loc: "Mumbai, India", year: 2023, span: "" },
  { img: p3, name: "Ironworks Plant", cat: "Industrial", loc: "Pune, India", year: 2024, span: "" },
  { img: p4, name: "Marbleaux Residence", cat: "Interiors", loc: "Hyderabad, India", year: 2025, span: "row-span-2" },
  { img: p5, name: "Coastal Interchange", cat: "Infrastructure", loc: "Chennai, India", year: 2022, span: "" },
  { img: p6, name: "Solstice Apartments", cat: "Residential", loc: "Delhi NCR, India", year: 2024, span: "" },
];

const CATS = ["All", "Residential", "Commercial", "Industrial", "Interiors", "Infrastructure"] as const;

const TESTIMONIALS = [
  {
    name: "Ananya Rao",
    role: "Homeowner · Aurora Villa",
    text: "VINS delivered our home three weeks ahead of schedule. Every finish is impeccable — genuinely a landmark on our street.",
  },
  {
    name: "Rohit Menon",
    role: "COO · Meridian Group",
    text: "The most transparent contractor we've worked with. Cost, schedule and quality — all three, without excuses.",
  },
  {
    name: "Priya Iyer",
    role: "Founder · Ironworks",
    text: "Complex industrial project, zero safety incidents, on-time handover. VINS is now our default partner.",
  },
  {
    name: "Vikram Shah",
    role: "Director · Coastal Infra",
    text: "The engineering rigor is second to none. Our interchange has held up beautifully through two monsoons.",
  },
];

const TEAM = [
  { name: "Vinod Sharma", role: "Founder & CEO", exp: "28 years" },
  { name: "Aisha Kapoor", role: "Project Director", exp: "18 years" },
  { name: "Marcus D'Souza", role: "Chief Civil Engineer", exp: "22 years" },
  { name: "Rahul Verma", role: "Site Supervisor", exp: "14 years" },
];

const AWARDS = [
  { t: "ISO 9001:2015", s: "Certified" },
  { t: "MSME Registered", s: "Govt. of India" },
  { t: "Quality Assurance", s: "Bureau Verified" },
  { t: "Safety Excellence", s: "National Award '24" },
];

const FAQ = [
  { q: "How long does a typical construction take?", a: "Timelines depend on scope. Residential villas typically run 8–14 months; commercial towers 18–36 months. We commit to a milestone schedule in writing before breaking ground." },
  { q: "Do you provide architectural planning?", a: "Yes — our in-house architecture studio handles concept, feasibility, permit drawings and 3D visualisation as a single package." },
  { q: "Can I customize my project?", a: "Every VINS project is bespoke. You work directly with the lead architect and project manager to shape layout, finishes and materials." },
  { q: "Do you provide warranties?", a: "All structural work carries a 10-year warranty. Fittings, waterproofing and interior finishes carry a 2–5 year warranty depending on category." },
  { q: "How do payments work?", a: "We follow a milestone-based schedule — typically 6 to 10 stages tied to physical progress, verified before each release." },
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<(typeof CATS)[number]>("All");
  const [tIndex, setTIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowTop(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTIndex((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);

  const filteredProjects = useMemo(
    () => (category === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === category)),
    [category],
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />

      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong py-3" : "py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
              <HardHat className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              VINS<span className="text-primary">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden lg:inline-flex btn-primary hover:[transform:translateY(-2px)]">
            Get Free Quote <ArrowRight className="h-4 w-4" />
          </a>

          <button
            aria-label="Open menu"
            className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-border"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden">
            <div className="container-x mt-3 glass rounded-2xl p-4">
              <nav className="flex flex-col gap-1">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-white/5"
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary mt-2"
                >
                  Get Free Quote
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
        <img
          src={heroImg}
          alt="Construction site at golden hour"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />

        {/* floating icons */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {[HardHat, Ruler, Wrench, Hammer].map((Icon, i) => (
            <span
              key={i}
              className="absolute animate-float text-primary/25"
              style={{
                top: `${15 + i * 18}%`,
                left: `${5 + i * 22}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              <Icon className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
            </span>
          ))}
        </div>

        <div className="container-x relative py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Est. 2009 · 15+ Years of Craft
            </span>

            <h1 className="animate-fade-up mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl">
              Building Tomorrow, <br />
              <span className="text-gradient">Today.</span>
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-2xl text-lg text-foreground/75 md:text-xl"
              style={{ animationDelay: "150ms" }}
            >
              We build premium residential, commercial, industrial and infrastructure projects
              with exceptional quality and on-time delivery.
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "300ms" }}
            >
              <a href="#contact" className="btn-primary hover:[transform:translateY(-2px)]">
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="btn-ghost hover:bg-white/5">
                View Projects
              </a>
            </div>
          </div>
        </div>

        <a
          href="#stats"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60"
        >
          <span>Scroll</span>
          <span className="grid h-9 w-6 place-items-start rounded-full border border-foreground/30 p-1.5">
            <span className="h-2 w-1 rounded-full bg-primary animate-scroll-hint" />
          </span>
        </a>
      </section>

      {/* STATS */}
      <section id="stats" className="relative border-y border-border bg-[color:var(--surface)] py-16 md:py-20">
        <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { end: 15, suffix: "+", label: "Years Experience" },
            { end: 350, suffix: "+", label: "Projects Completed" },
            { end: 120, suffix: "+", label: "Expert Engineers" },
            { end: 99, suffix: "%", label: "Client Satisfaction" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="text-center md:text-left">
                <div className="font-display text-5xl font-bold text-gradient md:text-6xl">
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative">
              <div
                className="overflow-hidden rounded-3xl border border-border"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <img
                  src={aboutImg}
                  alt="VINS engineers reviewing blueprints on site"
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-glow)] md:block">
                <div className="font-display text-4xl font-bold leading-none">15+</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest">
                  Years of Craft
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              — About VINS
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Trusted craft. Landmark results.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              For over a decade, VINS Construction has partnered with homeowners, enterprises and
              governments to build spaces that outlast trends. Our engineers, architects and
              craftspeople share one obsession: doing the small things exceptionally well, at
              every stage.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { icon: Award, t: "Premium Quality" },
                { icon: Users, t: "Trusted Team" },
                { icon: Wrench, t: "Modern Technology" },
                { icon: ShieldCheck, t: "Sustainable Construction" },
              ].map((f) => (
                <div
                  key={f.t}
                  className="glass group flex items-center gap-3 rounded-2xl p-4 transition-all hover:border-primary/40 hover:bg-primary/5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:rotate-6">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{f.t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96" style={{ background: "var(--gradient-glow)" }} />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                — What we do
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                Services engineered for scale.
              </h2>
              <p className="mt-4 text-muted-foreground">
                From single residences to city-scale infrastructure — one accountable team,
                seven disciplines, zero compromise.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article
                  className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                       style={{ background: "linear-gradient(135deg, oklch(0.82 0.17 85 / 0.15), transparent 60%)" }} />
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[var(--shadow-glow)]">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-6 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <a
                    href="#contact"
                    className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-3"
                  >
                    Read more <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - zigzag */}
      <section className="relative border-y border-border bg-[color:var(--surface)] py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                — Why choose us
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                Eight reasons clients stay for life.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 100}>
                <div
                  className={`flex items-start gap-5 ${i % 2 === 1 ? "md:ml-10" : "md:mr-10"}`}
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold">
                      <span className="mr-2 text-primary/60">0{i + 1}.</span>
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                — Our process
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                Six clear steps. Zero surprises.
              </h2>
            </div>
          </Reveal>

          <div className="relative mt-16">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block" />
            <ol className="grid gap-6 lg:grid-cols-2">
              {PROCESS.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <li
                    className={`relative rounded-3xl border border-border bg-card p-8 ${
                      i % 2 === 1 ? "lg:mt-16" : ""
                    }`}
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <span className="font-display text-5xl font-bold text-primary/25">
                      {s.n}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{s.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative border-y border-border bg-[color:var(--surface)] py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  — Featured projects
                </span>
                <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                  A portfolio of landmarks.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {CATS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                      category === c
                        ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 60}
                className={`group relative overflow-hidden rounded-3xl border border-border ${
                  p.span && category === "All" ? p.span : ""
                }`}
              >
                <div className="h-full w-full">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-flex rounded-full bg-primary/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                      {p.cat}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-white">{p.name}</h3>
                    <div className="mt-1 flex items-center gap-3 text-xs text-white/70">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {p.loc}
                      </span>
                      <span>· {p.year}</span>
                    </div>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex translate-y-4 items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      View project <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                — Transformations
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                Drag to compare.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every renovation tells a story of restraint and craft. Slide the handle to see
                a Marbleaux Residence living room, before and after.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-12 max-w-5xl">
              <BeforeAfter before={beforeImg} after={afterImg} alt="Marbleaux Residence" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative overflow-hidden border-y border-border bg-[color:var(--surface)] py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                — Testimonials
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                Trusted by the people we build for.
              </h2>
            </div>
          </Reveal>

          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${tIndex * 100}%)` }}
              >
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="w-full shrink-0 px-2">
                    <div className="glass rounded-3xl p-8 md:p-12">
                      <Quote className="h-8 w-8 text-primary" />
                      <p className="mt-5 font-display text-xl leading-relaxed md:text-2xl">
                        "{t.text}"
                      </p>
                      <div className="mt-6 flex items-center gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/20 font-display text-lg font-bold text-primary">
                          {t.name[0]}
                        </div>
                        <div>
                          <div className="font-semibold">{t.name}</div>
                          <div className="text-xs text-muted-foreground">{t.role}</div>
                        </div>
                        <div className="ml-auto flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setTIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === tIndex ? "w-8 bg-primary" : "w-4 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                — Meet the team
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                Senior people, on your project.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <article className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:border-primary/50">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/40 to-primary/5">
                    <div className="grid h-full w-full place-items-center font-display text-6xl font-bold text-primary/60 transition-transform duration-700 group-hover:scale-110">
                      {m.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{m.name}</h3>
                  <div className="text-sm text-primary">{m.role}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {m.exp} experience
                  </div>
                  <div className="mt-4 flex gap-2 opacity-70 transition-opacity group-hover:opacity-100">
                    {[Linkedin, Twitter, Instagram].map((I, k) => (
                      <a
                        key={k}
                        href="#"
                        aria-label="Social profile"
                        className="grid h-8 w-8 place-items-center rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:text-primary"
                      >
                        <I className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="relative border-y border-border bg-[color:var(--surface)] py-20">
        <div className="container-x">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                — Certifications
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                Awards & recognition
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AWARDS.map((a, i) => (
              <Reveal key={a.t} delay={i * 60}>
                <div className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-primary/40">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-primary/40 text-primary transition-transform group-hover:rotate-12">
                    <Award className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-display font-semibold">{a.t}</div>
                    <div className="text-xs text-muted-foreground">{a.s}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              — FAQ
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Answers before you ask.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Still curious? Our project consultants love a good question — drop us a line and
              we'll respond within a business day.
            </p>
            <a href="#contact" className="btn-ghost mt-8 hover:bg-white/5">
              Ask a question <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {FAQ.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass overflow-hidden rounded-2xl border-none px-6"
                >
                  <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline hover:text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden border-y border-border bg-[color:var(--surface)] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
        <div className="container-x relative grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              — Get in touch
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Let's build your next landmark.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Share a few details and a senior project consultant will call you back within one
              business day with a no-obligation estimate.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, t: "+91 98765 43210", s: "Mon–Sat · 9am to 7pm" },
                { icon: Mail, t: "hello@vinsconstruction.com", s: "We reply within a business day" },
                { icon: MapPin, t: "Tower A, Prestige Landmark, Bengaluru 560001", s: "Head office" },
                { icon: Clock, t: "Mon – Sat · 9:00 – 19:00", s: "Sunday by appointment" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-medium">{c.t}</div>
                    <div className="text-sm text-muted-foreground">{c.s}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 aspect-[16/8] w-full overflow-hidden rounded-2xl border border-border bg-[color:var(--surface-elevated)]">
              <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_50%_50%,oklch(0.82_0.17_85/0.15),transparent_60%)]">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-primary" />
                  <div className="mt-2 text-sm font-semibold">Map preview</div>
                  <div className="text-xs text-muted-foreground">Bengaluru · Prestige Landmark</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — a consultant will reach out shortly.");
              }}
              className="glass rounded-3xl p-6 md:p-10"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Full name" />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" className="sm:col-span-2" />
                <Select label="Project Type" name="type" options={["Residential", "Commercial", "Industrial", "Interior", "Renovation", "Infrastructure"]} />
                <Select label="Budget" name="budget" options={["< ₹50 L", "₹50 L – ₹2 Cr", "₹2 – ₹10 Cr", "₹10 Cr +"]} />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project…"
                    className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn-primary mt-6 w-full hover:[transform:translateY(-2px)]"
              >
                Send inquiry <Send className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                By submitting you agree to be contacted about your project.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-background pt-20">
        <div className="container-x grid gap-10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <HardHat className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold">
                VINS<span className="text-primary">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Building Trust. Creating Landmarks. Premium residential, commercial, industrial and
              infrastructure construction since 2009.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((I, k) => (
                <a
                  key={k}
                  href="#"
                  aria-label="Social profile"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" items={NAV.map((n) => n.label)} />
          <FooterCol title="Services" items={SERVICES.slice(0, 6).map((s) => s.title)} />

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Occasional stories from our sites. No spam.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex gap-2 rounded-full border border-border bg-card p-1.5"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" /> +91 98765 43210</div>
              <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" /> hello@vinsconstruction.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
            <div>© {new Date().getFullYear()} VINS Construction. All rights reserved.</div>
            <div className="flex gap-5">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="animate-fade-in fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          className="w-full appearance-none rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        >
          <option value="">Select…</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-widest">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="transition-colors hover:text-primary">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
