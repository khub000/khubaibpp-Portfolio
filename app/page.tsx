"use client";

import { type FormEvent, type MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { createPortal } from "react-dom";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronUp,
  Download,
  ExternalLink,
  Filter,
  Github,
  Hammer,
  LoaderCircle,
  Mail,
  Menu,
  Moon,
  Search,
  Send,
  Shield,
  Sparkles,
  Sun,
  Target,
  X,
  Zap,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import {
  blogPosts,
  certifications,
  contactDetails,
  education,
  experience,
  navItems,
  profile,
  projects,
  services,
  skillGroups
} from "@/data/portfolio";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

const PROFILE_IMAGE_URL = "/profile.png";
const PROFILE_IMAGE_ALT = "Khubaib PP - Cybersecurity Professional and Security Researcher";
const HERO_SUMMARY = "Dedicated and motivated aspiring cybersecurity professional with a Bachelor's degree in Computer Applications (BCA), an add-on specialization in Ethical Hacking and Cybersecurity, and the EC-Council Certified SOC Analyst (CSA) certification. Passionate about cybersecurity and eager to begin my career by applying my technical knowledge, contributing to organizational security, and continuously developing my skills in a professional environment.";
const CYBER_QUOTES = [
  "Security is not a product, it's a process.",
  "Every alert is a story waiting to be understood.",
  "Trust is earned through strong security.",
  "The best defense begins with understanding the attack.",
  "Think like an attacker. Defend like a professional.",
  "Cybersecurity is protecting today's systems for tomorrow's challenges.",
  "Stay curious. Stay secure. Never stop learning."
];
const CERTIFICATE_CATEGORY_ORDER = [
  "All",
  "Professional Certifications",
  "Cloud Security",
  "SOC & SIEM",
  "Penetration Testing",
  "Networking",
  "Threat Intelligence",
  "Learning & Labs"
];

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "AI-Powered-DLP-Tool",
    html_url: "https://github.com/khub000/AI-Powered-DLP-Tool",
    description: "AI-powered data loss prevention tool for monitoring files, USB devices, and network traffic.",
    language: "Python",
    stargazers_count: 0,
    updated_at: "2026-01-01T00:00:00Z"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const atFullWord = letterIndex === current.length;
    const atStart = letterIndex === 0;
    const delay = deleting ? 42 : atFullWord ? 1250 : 76;

    const timer = window.setTimeout(() => {
      if (!deleting && atFullWord) {
        setDeleting(true);
        return;
      }

      if (deleting && atStart) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setLetterIndex((index) => index + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, letterIndex, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationId = 0;
    const characters = "01{}[]<>/\\SOCXAI";
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -100);
    };

    const draw = () => {
      context.fillStyle = "rgba(9, 9, 11, 0.08)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = `${fontSize}px monospace`;
      context.fillStyle = "rgba(168, 85, 247, 0.16)";

      drops.forEach((drop, index) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        context.fillText(text, index * fontSize, drop * fontSize);

        if (drop * fontSize > canvas.height && Math.random() > 0.985) {
          drops[index] = 0;
        } else {
          drops[index] = drop + 1;
        }
      });

      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-60" />;
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let animationId = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(88, Math.floor((canvas.width * canvas.height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.8
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = index % 4 === 0 ? "rgba(34, 211, 238, 0.42)" : "rgba(168, 85, 247, 0.34)";
        context.fill();

        for (let next = index + 1; next < particles.length; next += 1) {
          const target = particles[next];
          const distance = Math.hypot(particle.x - target.x, particle.y - target.y);
          if (distance < 126) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(target.x, target.y);
            context.strokeStyle = `rgba(148, 163, 184, ${0.12 - distance / 1500})`;
            context.stroke();
          }
        }
      });

      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-70" />;
}

function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-10 hidden h-72 w-72 rounded-full bg-neon/[0.16] blur-3xl lg:block"
      style={{ left: position.x - 144, top: position.y - 144 }}
    />
  );
}

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mb-10 max-w-3xl"
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-cyan">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-black text-[var(--text)] sm:text-4xl lg:text-5xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-neon/30 bg-neon/10 text-neon shadow-glow">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}


function ProfilePhotoFrame({ compact = false }: { compact?: boolean }) {
  const [imageSrc, setImageSrc] = useState(PROFILE_IMAGE_URL);

  return (
    <motion.div
      animate={{ y: compact ? 0 : [0, -12, 0] }}
      transition={compact ? undefined : { duration: 5.2, ease: "easeInOut", repeat: Infinity }}
      whileHover={{ rotateX: compact ? 0 : 5, rotateY: compact ? 0 : -7, scale: compact ? 1.04 : 1.025 }}
      className={`neon-border group relative mx-auto ${compact ? "h-28 w-28" : "w-[min(20rem,84vw)] sm:w-[17.5rem] lg:w-[22rem]"} rounded-2xl p-2`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={`glass relative overflow-hidden ${compact ? "h-full w-full rounded-full p-1" : "rounded-xl p-4"}`}>
        <div className={`relative overflow-hidden border border-white/10 bg-panel shadow-2xl transition duration-300 group-hover:shadow-glow ${compact ? "h-full w-full rounded-full" : "aspect-[4/5] rounded-lg"}`}>
          <Image
            src={imageSrc}
            alt={PROFILE_IMAGE_ALT}
            fill
            sizes={compact ? "112px" : "(max-width: 640px) 220px, (max-width: 1024px) 280px, 360px"}
            className={compact ? "object-cover object-[center_38%]" : "object-cover object-center"}
            loading="lazy"
            quality={100}
            onError={() => setImageSrc("/profile-placeholder.svg")}
          />
          {!compact ? (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/30 via-transparent to-transparent opacity-80" />
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

function CyberQuote() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    setQuoteIndex(Math.floor(Math.random() * CYBER_QUOTES.length));

    const timer = window.setInterval(() => {
      setQuoteIndex((current) => {
        let next = Math.floor(Math.random() * CYBER_QUOTES.length);
        if (next === current) next = (next + 1) % CYBER_QUOTES.length;
        return next;
      });
    }, 14000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute right-0 top-3 z-10 max-w-[19rem] text-left text-[var(--text)] sm:right-2 lg:right-0">
      <AnimatePresence mode="wait">
        <motion.p
          key={quoteIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex items-start gap-2 text-base leading-6 text-white/90 drop-shadow-[0_0_14px_rgba(168,85,247,0.45)] light:text-slate-800"
          style={{ fontFamily: "Caveat, 'Segoe Print', cursive" }}
        >
          <Sparkles className="mt-1 h-4 w-4 shrink-0 text-neon" aria-hidden="true" />
          <span>{CYBER_QUOTES[quoteIndex]}</span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Navigation({
  isDark,
  setIsDark,
  hidden
}: {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  hidden: boolean;
}) {
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/70 backdrop-blur-xl transition-all duration-500 light:bg-white/[0.72] ${
        hidden ? "pointer-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <a href="#home" className="sr-only-focusable rounded bg-neon px-4 py-2 text-sm font-bold text-white">
        Skip to content
      </a>
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        <a href="#home" className="group flex items-center gap-3" aria-label="Khubaib PP home">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-neon/40 bg-neon/10 font-black text-neon shadow-glow">
            KP
          </span>
          <span className="hidden text-sm font-black uppercase tracking-[0.22em] text-[var(--text)] sm:inline">Khubaib PP</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-md px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)] transition hover:bg-white/[0.08] hover:text-[var(--text)]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-[var(--text)] transition hover:border-neon/50 hover:text-neon"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-[var(--text)] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-void/[0.94] px-4 py-4 backdrop-blur-xl light:bg-white/[0.94] lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 px-4 py-3 text-sm font-bold text-[var(--text)]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  const typed = useTypewriter(profile.roles);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.22], [0, 90]);
  const focusAreas = [
    { label: "SOC Monitoring", detail: "Alert triage" },
    { label: "SIEM Analysis", detail: "Logs & detections" },
    { label: "Python Automation", detail: "Security tooling" }
  ];
  const heroSocials = [{ label: "Gmail", href: `mailto:${profile.email}`, icon: Mail }, ...profile.socials];

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${sectionId}`);
  };

  return (
    <section id="home" className="relative z-10 min-h-screen overflow-hidden px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 grid-mask opacity-55" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-8 pb-12 lg:grid-cols-[0.6fr_0.4fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative z-10 max-w-3xl"
        >
          <div className="mb-8 sm:hidden">
            <ProfilePhotoFrame />
          </div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-cyan/30 bg-cyan/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            EC-Council Certified SOC Analyst
          </div>
          <h1 className="text-5xl font-black leading-[0.98] text-[var(--text)] sm:text-6xl lg:text-7xl">
            <span className="title-gradient">{profile.name}</span>
          </h1>
          <div className="mt-5 h-10 font-mono text-lg font-bold text-neon sm:text-2xl">
            <span className="terminal-line inline-block"> {typed || "\u00a0"}</span>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">{HERO_SUMMARY}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {heroSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                title={social.label}
                aria-label={social.label}
                className="group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-[var(--text)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-neon/60 hover:text-neon hover:shadow-glow"
              >
                <social.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/resume.pdf"
              download
              className="neon-border inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white shadow-glow transition hover:-translate-y-0.5 sm:whitespace-nowrap"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#projects"
              onClick={(event) => scrollToSection(event, "projects")}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.15] bg-white/[0.06] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[var(--text)] transition hover:border-cyan/50 hover:text-cyan sm:whitespace-nowrap"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "contact")}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.15] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[var(--text)] transition hover:border-neon/50 hover:text-neon sm:whitespace-nowrap"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
            {focusAreas.map((item) => (
              <div key={item.label} className="glass rounded-lg px-4 py-4">
                <p className="text-sm font-black text-[var(--text)]">{item.label}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y }} className="relative mx-auto hidden min-h-[34rem] w-full items-center justify-center sm:flex lg:mr-8">
          <CyberQuote />
          <div className="pointer-events-none absolute inset-0 grid-mask opacity-40" aria-hidden="true" />
          <div className="pointer-events-none absolute left-4 top-8 h-20 w-20 rounded-full border border-cyan/25" aria-hidden="true" />
          <div className="pointer-events-none absolute right-6 top-20 h-28 w-28 rounded-full border border-neon/30 blur-[1px]" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-10 left-10 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 font-mono text-xs font-bold text-cyan backdrop-blur-xl" aria-hidden="true">SOC</div>
          <div className="pointer-events-none absolute bottom-24 right-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 font-mono text-xs font-bold text-neon backdrop-blur-xl" aria-hidden="true">SIEM</div>
          <div className="pt-16">
            <ProfilePhotoFrame />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 z-10 grid -translate-x-1/2 place-items-center rounded-full border border-white/[0.15] p-3 text-cyan transition hover:border-cyan/60"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}

function AboutSection() {
  return (
    <Section id="about" eyebrow="Identity" title="Security-minded, automation-driven, recruiter-ready.">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]"
      >
        <div className="glass rounded-xl p-6">
          <div className="mb-6 flex justify-center">
            <ProfilePhotoFrame compact />
          </div>
          <div className="flex items-center gap-4">
            <IconBadge icon={Shield} />
            <div>
              <p className="text-sm text-[var(--muted)]">Name</p>
              <h3 className="text-2xl font-black text-[var(--text)]">{profile.name}</h3>
            </div>
          </div>
          <dl className="mt-7 grid gap-5">
            <div>
              <dt className="text-sm text-[var(--muted)]">Role</dt>
              <dd className="font-bold text-[var(--text)]">{profile.title}</dd>
            </div>
            <div>
              <dt className="text-sm text-[var(--muted)]">Location</dt>
              <dd className="font-bold text-[var(--text)]">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-sm text-[var(--muted)]">Mission</dt>
              <dd className="leading-7 text-[var(--text)]">{profile.mission}</dd>
            </div>
          </dl>
        </div>

        <div className="glass rounded-xl p-6 sm:p-8">
          <p className="text-lg leading-8 text-[var(--muted)]">{profile.summary}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {profile.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-[var(--text)]"
              >
                <BadgeCheck className="h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Tools and skills organized for real security work.">
      <div className="mb-6 grid gap-3 md:grid-cols-3">
        {[
          { title: "Detect", body: "SOC, SIEM, log analysis, incident response", icon: Target },
          { title: "Test", body: "Web security, vulnerability assessment, labs", icon: Shield },
          { title: "Automate", body: "Python scripts, AI workflows, custom tooling", icon: Bot }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 22, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass h-full rounded-xl p-4"
          >
            <IconBadge icon={item.icon} />
            <h3 className="mt-3 text-xl font-black text-[var(--text)]">{item.title}</h3>
            <p className="mt-1.5 leading-6 text-[var(--muted)]">{item.body}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid auto-rows-fr gap-4 lg:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: groupIndex * 0.06, duration: 0.55, ease: "easeOut" }}
            className="glass group relative h-full overflow-hidden rounded-xl p-4"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-cyan/20 opacity-40 transition group-hover:scale-125 group-hover:border-neon/40" />
            <div className="mb-3 flex items-center gap-3">
              <IconBadge icon={group.icon} />
              <h3 className="text-xl font-black text-[var(--text)]">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.04 + skillIndex * 0.025, duration: 0.35 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-sm font-bold text-[var(--text)] transition hover:border-cyan/50 hover:text-cyan"
                >
                  <Hammer className="h-4 w-4 text-neon" aria-hidden="true" />
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function ServicesSection() {
  return (
    <Section id="services" eyebrow="Services" title="Cybersecurity support for assessment, monitoring, and automation.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.035, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="glass group rounded-xl p-5 transition"
          >
            <IconBadge icon={service.icon} />
            <h3 className="mt-5 text-lg font-black text-[var(--text)]">{service.title}</h3>
            <p className="mt-3 leading-7 text-[var(--muted)]">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function TimelineSection() {
  return (
    <Section id="experience" eyebrow="Experience" title="Interactive cybersecurity experience.">
      <div className="grid gap-5 lg:grid-cols-2">
        {experience.map((item, index) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="glass group relative min-h-72 overflow-hidden rounded-xl p-6 transition hover:border-neon/50 hover:shadow-glow"
          >
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-neon via-cyan to-ember opacity-70" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan">{item.period}</p>
            <h3 className="mt-3 text-2xl font-black text-[var(--text)]">{item.role}</h3>
            <p className="mt-1 font-bold text-neon">{item.company}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {(item.skills || []).slice(0, 4).map((skill) => (
                <span key={skill} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-[var(--muted)]">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-96 group-hover:opacity-100">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan">Responsibilities</p>
              <ul className="mt-3 grid gap-3">
                {item.items.map((entry) => (
                  <li key={entry} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
              {(item.achievements || []).length ? (
                <div className="mt-4 rounded-lg border border-neon/20 bg-neon/10 p-3">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-neon">Achievements</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.achievements.join(" | ")}</p>
                </div>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function EducationCard({ item, index, featured = false }: { item: (typeof education)[number]; index: number; featured?: boolean }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      whileHover={{ y: -6 }}
      className={`glass group relative overflow-hidden rounded-xl p-5 transition hover:border-neon/50 hover:shadow-glow sm:p-6 ${
        featured ? "neon-border" : ""
      }`}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-neon/20 opacity-40 transition group-hover:scale-125 group-hover:border-cyan/35" />
      <div className="flex items-start gap-4">
        <IconBadge icon={item.icon} />
        <div className="min-w-0">
          <span className="inline-flex rounded-md border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.2em] text-cyan">
            {item.period}
          </span>
          <h3 className="mt-4 text-xl font-black leading-tight text-[var(--text)] sm:text-2xl">{item.title}</h3>
          <p className="mt-2 font-bold text-neon">{item.place}</p>
          {item.emphasis ? <p className="mt-3 text-lg font-black leading-7 text-[var(--text)]">{item.emphasis}</p> : null}
          {item.body && item.body !== item.emphasis ? <p className="mt-3 leading-7 text-[var(--muted)]">{item.body}</p> : null}
        </div>
      </div>
    </motion.article>
  );
}

function EducationSection() {
  const bca = education.find((item) => item.title === "Bachelor of Computer Applications (BCA)");
  const ethicalHacking = education.find((item) => item.title === "Ethical Hacking & Cybersecurity Program");
  const cicsa = education.find((item) => item.title === "Certified IT Infrastructure & Cyber SOC Analyst (CICSA v3)");

  return (
    <Section id="education" eyebrow="Education" title="Academic and cybersecurity training.">
      <div className="grid items-start gap-6 md:grid-cols-[0.92fr_1.08fr] lg:gap-7">
        <div className="grid gap-6">
          {bca ? <EducationCard item={bca} index={0} /> : null}
          {ethicalHacking ? <EducationCard item={ethicalHacking} index={1} /> : null}
        </div>
        <div>{cicsa ? <EducationCard item={cicsa} index={2} featured /> : null}</div>
      </div>
    </Section>
  );
}

function CertificationsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const selectedCert = selectedCertIndex === null ? null : certifications[selectedCertIndex];
  const categories = [
    ...CERTIFICATE_CATEGORY_ORDER.filter(
      (category) => category === "All" || certifications.some((cert) => cert.category === category)
    ),
    ...Array.from(new Set(certifications.map((cert) => cert.category))).filter(
      (category) => !CERTIFICATE_CATEGORY_ORDER.includes(category)
    )
  ];
  const filteredCertifications = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return certifications.filter((cert) => {
      const matchesCategory = activeCategory === "All" || cert.category === activeCategory;
      const matchesSearch =
        !query ||
        [cert.title, cert.issuer, cert.credentialId, cert.category, ...cert.skills]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const openCertificate = (cert: (typeof certifications)[number]) => {
    setSelectedCertIndex(certifications.findIndex((item) => item.title === cert.title));
    setZoom(1);
  };

  const closeCertificate = () => setSelectedCertIndex(null);
  const showPreviousCertificate = () => {
    setSelectedCertIndex((index) => (index === null ? index : (index - 1 + certifications.length) % certifications.length));
    setZoom(1);
  };
  const showNextCertificate = () => {
    setSelectedCertIndex((index) => (index === null ? index : (index + 1) % certifications.length));
    setZoom(1);
  };
  const previewSource = (cert: (typeof certifications)[number]) =>
    imageErrors[cert.title] ? "/certificates/certificate-placeholder.svg" : cert.thumbnail;

  useEffect(() => {
    if (!selectedCert) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCertificate();
      if (event.key === "ArrowLeft") showPreviousCertificate();
      if (event.key === "ArrowRight") showNextCertificate();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedCert]);

  return (
    <Section id="certifications" eyebrow="Certifications" title="Digital credential vault for verified security learning.">
      <div className="glass mb-8 rounded-xl p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan" aria-hidden="true" />
            <span className="sr-only">Search certificates</span>
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search certificate, issuer, credential ID, or skill"
              className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm font-bold text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-neon"
            />
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan">
              <Filter className="h-4 w-4" aria-hidden="true" />
              Filter
            </span>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-3 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
                  activeCategory === category
                    ? "bg-neon text-white shadow-glow"
                    : "border border-white/10 bg-white/[0.04] text-[var(--muted)] hover:border-cyan/50 hover:text-cyan"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredCertifications.map((cert, index) => (
          <motion.article
            key={cert.title}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.035, duration: 0.48, ease: "easeOut" }}
            whileHover={{ y: -7 }}
            className={`glass group relative overflow-hidden rounded-xl ${cert.featured ? "neon-border" : ""}`}
          >
            <button
              type="button"
              onClick={() => openCertificate(cert)}
              className="block w-full text-left"
              aria-label={`View certificate ${cert.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-panel">
                <img
                  src={previewSource(cert)}
                  alt={`${cert.title} certificate thumbnail`}
                  loading="lazy"
                  decoding="async"
                  onError={() => setImageErrors((errors) => ({ ...errors, [cert.title]: true }))}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 bg-void/75 font-mono text-xs font-black text-cyan backdrop-blur-xl">
                  {cert.logoText}
                </div>
                {cert.official ? (
                  <span className="absolute right-4 top-4 rounded-full border border-cyan/30 bg-cyan/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan backdrop-blur-xl">
                    Verified
                  </span>
                ) : null}
                {cert.featured ? (
                  <span className="absolute bottom-4 left-4 rounded-full border border-neon/40 bg-neon/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                    Featured
                  </span>
                ) : null}
              </div>
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan">
                    {cert.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-[var(--muted)]">{cert.issueDate}</span>
                </div>
                <h3 className="min-h-16 text-xl font-black leading-tight text-[var(--text)]">{cert.title}</h3>
                <p className="mt-3 text-sm font-bold text-neon">{cert.issuer}</p>
                {cert.credentialId ? (
                  <p className="mt-3 break-words font-mono text-xs text-[var(--muted)]">ID: {cert.credentialId}</p>
                ) : null}
                {cert.expiration ? <p className="mt-2 text-xs font-bold text-[var(--muted)]">Expires: {cert.expiration}</p> : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.slice(0, 4).map((skill) => (
                    <span key={skill} className="rounded-md bg-white/[0.05] px-2.5 py-1 text-xs font-bold text-[var(--muted)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </button>
            <div className="grid grid-cols-2 gap-3 px-5 pb-5">
              <button
                type="button"
                onClick={() => openCertificate(cert)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-glow"
              >
                View
                <Award className="h-4 w-4" aria-hidden="true" />
              </button>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-cyan transition hover:border-cyan/50"
              >
                Verify
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {filteredCertifications.length === 0 ? (
        <div className="glass mt-6 rounded-xl p-8 text-center">
          <p className="text-lg font-black text-[var(--text)]">No certificates found</p>
          <p className="mt-2 text-[var(--muted)]">Try another search term or category.</p>
        </div>
      ) : null}

      {selectedCert && typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              <motion.div
                className="fixed inset-0 z-[200] overflow-y-auto bg-void/88 p-3 backdrop-blur-xl sm:p-5"
                role="dialog"
                aria-modal="true"
                aria-label={selectedCert.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeCertificate}
              >
                <motion.div
                  className="glass relative mx-auto flex min-h-[calc(100vh-1.5rem)] w-full max-w-7xl flex-col overflow-hidden rounded-xl sm:min-h-[calc(100vh-2.5rem)]"
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="sticky top-0 z-10 flex flex-col gap-4 border-b border-white/10 bg-panel/92 p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan">Certificate Preview</p>
                      <h3 className="mt-1 truncate text-lg font-black text-white sm:text-xl">{selectedCert.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button type="button" onClick={showPreviousCertificate} className="rounded-lg border border-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-cyan transition hover:border-cyan/50">
                        Previous
                      </button>
                      <button type="button" onClick={() => setZoom((value) => Math.max(0.6, Number((value - 0.15).toFixed(2))))} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-cyan transition hover:border-cyan/50" aria-label="Zoom out" title="Zoom out">
                        <ZoomOut className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <span className="grid h-10 min-w-16 place-items-center rounded-lg border border-white/10 px-3 font-mono text-xs font-black text-white">{Math.round(zoom * 100)}%</span>
                      <button type="button" onClick={() => setZoom((value) => Math.min(2.25, Number((value + 0.15).toFixed(2))))} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-cyan transition hover:border-cyan/50" aria-label="Zoom in" title="Zoom in">
                        <ZoomIn className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button type="button" onClick={showNextCertificate} className="rounded-lg border border-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-cyan transition hover:border-cyan/50">
                        Next
                      </button>
                      <a href={selectedCert.verifyUrl} target="_blank" rel="noreferrer" download className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 text-xs font-black uppercase tracking-[0.14em] text-cyan transition hover:border-cyan/50">
                        <Download className="h-4 w-4" aria-hidden="true" />
                        Download
                      </a>
                      <button type="button" onClick={closeCertificate} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white transition hover:border-neon/50 hover:text-neon" aria-label="Close certificate preview" title="Close">
                        <X className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="grid min-h-0 flex-1 gap-4 p-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
                    <div
                      className="flex min-h-[55vh] items-start justify-center overflow-auto rounded-lg border border-white/10 bg-void/80 p-3 sm:p-5"
                      onWheel={(event) => {
                        if (!event.ctrlKey) return;
                        event.preventDefault();
                        setZoom((value) => Math.min(2.25, Math.max(0.6, Number((value + (event.deltaY < 0 ? 0.1 : -0.1)).toFixed(2)))));
                      }}
                    >
                      <img
                        src={previewSource(selectedCert)}
                        alt={`${selectedCert.title} full-size certificate`}
                        loading="eager"
                        decoding="async"
                        onError={() => setImageErrors((errors) => ({ ...errors, [selectedCert.title]: true }))}
                        className="h-auto max-h-none w-auto max-w-full origin-top rounded-md object-contain shadow-2xl transition-transform duration-300"
                        style={{ transform: `scale(${zoom})` }}
                      />
                    </div>
                    <aside className="overflow-auto rounded-lg border border-white/10 bg-white/[0.04] p-5">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10 font-mono text-xs font-black text-cyan">{selectedCert.logoText}</span>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan">{selectedCert.category}</p>
                          <p className="mt-1 text-sm font-bold text-[var(--muted)]">{selectedCert.issueDate}</p>
                        </div>
                      </div>
                      <p className="text-2xl font-black text-white">{selectedCert.title}</p>
                      <p className="mt-3 font-bold text-neon">{selectedCert.issuer}</p>
                      {selectedCert.credentialId ? (
                        <p className="mt-5 break-words rounded-lg border border-white/10 bg-white/[0.04] p-3 font-mono text-xs text-[var(--muted)]">Credential ID: {selectedCert.credentialId}</p>
                      ) : null}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill) => (
                          <span key={skill} className="rounded-md bg-neon/10 px-3 py-2 text-xs font-bold text-neon">{skill}</span>
                        ))}
                      </div>
                      <a href={selectedCert.verifyUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neon px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-white shadow-glow">
                        Verify Credential
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </aside>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>,
            document.body
          )
        : null}    </Section>
  );
}

function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Projects" title="Security engineering work with clear practical outcomes.">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            className="glass flex h-full flex-col rounded-xl p-6"
          >
            <div className="flex items-start justify-between gap-5">
              <IconBadge icon={project.icon} />
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
                Completed
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-black text-[var(--text)]">{project.title}</h3>
            <p className="mt-4 leading-7 text-[var(--muted)]">{project.description}</p>
            <div className="mt-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan">Features</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span key={feature} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-[var(--text)]">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-neon">Technologies</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-md bg-neon/10 px-3 py-2 text-sm font-bold text-neon">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-cyan transition hover:-translate-y-0.5 hover:border-neon/50 hover:text-neon hover:shadow-glow"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              {project.cta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function GitHubActivity() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/users/khub000/repos?sort=updated&per_page=6", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : fallbackRepos))
      .then((data: Repo[]) => setRepos(Array.isArray(data) && data.length ? data : fallbackRepos))
      .catch(() => setRepos(fallbackRepos));

    return () => controller.abort();
  }, []);

  const languages = useMemo(() => {
    const counts = repos.reduce<Record<string, number>>((accumulator, repo) => {
      if (repo.language) accumulator[repo.language] = (accumulator[repo.language] || 0) + 1;
      return accumulator;
    }, {});

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [repos]);

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="github-title">
      <div className="glass rounded-xl p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-cyan">GitHub Activity</p>
            <h2 id="github-title" className="mt-3 text-3xl font-black text-[var(--text)]">Open-source footprint and latest repositories.</h2>
          </div>
          <a
            href="https://github.com/khub000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-black uppercase tracking-[0.18em] text-cyan transition hover:border-cyan/50"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            GitHub Profile
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.65fr]">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3">
            <img
              src="https://ghchart.rshah.org/A855F7/khub000"
              alt="Khubaib PP GitHub contribution graph"
              className="min-h-32 w-full rounded-md bg-white object-cover p-2"
            />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-neon">Most Used Languages</p>
            <div className="mt-4 grid gap-3">
              {(languages.length ? languages : [["Python", 1]]).map(([language, count]) => (
                <div key={language} className="flex items-center justify-between rounded-md bg-white/5 px-4 py-3">
                  <span className="font-bold text-[var(--text)]">{language}</span>
                  <span className="font-mono text-xs text-cyan">{count} repo{count === 1 ? "" : "s"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-neon/50"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-black text-[var(--text)]">{repo.name}</h3>
                <ExternalLink className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
              </div>
              <p className="mt-3 line-clamp-3 min-h-16 text-sm leading-6 text-[var(--muted)]">
                {repo.description || "Security project repository by Khubaib PP."}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-bold text-[var(--muted)]">
                <span>{repo.language || "Repository"}</span>
                <span>{repo.stargazers_count} stars</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <Section id="blog" eyebrow="Blog" title="Cybersecurity writing themes.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className="glass rounded-xl p-4"
          >
            <BookOpen className="h-8 w-8 text-cyan" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-black text-[var(--text)]">{post}</h3>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              Field notes and practical observations for defenders, builders, and security learners.
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<{ type: "success" | "error" | "idle"; message: string }>({
    type: "idle",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const hcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!hcaptchaSiteKey || typeof window === "undefined") return;

    (window as unknown as { onPortfolioCaptcha?: (token: string) => void }).onPortfolioCaptcha = (token: string) => {
      setCaptchaToken(token);
    };

    if (!document.getElementById("hcaptcha-script")) {
      const script = document.createElement("script");
      script.id = "hcaptcha-script";
      script.src = "https://js.hcaptcha.com/1/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [hcaptchaSiteKey]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const website = String(formData.get("website") || "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (website) {
      setStatus({ type: "success", message: "✅ Message sent successfully. I'll get back to you soon." });
      event.currentTarget.reset();
      return;
    }

    if (!name || !email || !subject || !message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    if (hcaptchaSiteKey && !captchaToken) {
      setStatus({ type: "error", message: "Please complete the security check before sending." });
      return;
    }

    const now = Date.now();
    const recentSubmissions = JSON.parse(localStorage.getItem("contactSubmissionTimes") || "[]") as number[];
    const activeWindow = recentSubmissions.filter((time) => now - time < 10 * 60 * 1000);

    if (activeWindow.length >= 3) {
      setStatus({ type: "error", message: "Too many messages sent recently. Please try again later." });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured yet. Please add the EmailJS environment keys."
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: name,
            reply_to: email,
            subject,
            message,
            hcaptcha_token: captchaToken
          }
        })
      });

      if (!response.ok) {
        throw new Error("EmailJS request failed");
      }

      localStorage.setItem("contactSubmissionTimes", JSON.stringify([...activeWindow, now]));
      event.currentTarget.reset();
      setCaptchaToken("");
      (window as unknown as { hcaptcha?: { reset: () => void } }).hcaptcha?.reset();
      setStatus({ type: "success", message: "✅ Message sent successfully. I'll get back to you soon." });
    } catch {
      setStatus({ type: "error", message: "Something went wrong.\nPlease try again later." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Reach out for security roles, projects, or collaboration.">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="glass rounded-xl p-6">
          <h3 className="text-2xl font-black text-[var(--text)]">Contact details</h3>
          <div className="mt-6 grid gap-3">
            {contactDetails.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.href.startsWith("http") ? "_blank" : undefined}
                rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan/50"
              >
                <detail.icon className="h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">{detail.label}</span>
                  <span className="block text-sm font-bold text-[var(--text)]">{detail.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="glass rounded-xl p-6 sm:p-8" noValidate>
          <label className="sr-only" aria-hidden="true">
            Website
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-[var(--text)]">
              Name
              <input
                name="name"
                required
                autoComplete="name"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-neon"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[var(--text)]">
              Email
              <input
                name="email"
                required
                type="email"
                autoComplete="email"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-neon"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-[var(--text)]">
            Subject
            <input
              name="subject"
              required
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-neon"
              placeholder="Security role or project"
            />
          </label>
          <label className="mt-5 grid gap-2 text-sm font-bold text-[var(--text)]">
            Message
            <textarea
              name="message"
              required
              rows={6}
              className="resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-neon"
              placeholder="Tell me what you want to discuss"
            />
          </label>
          {hcaptchaSiteKey ? (
            <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <div className="h-captcha" data-sitekey={hcaptchaSiteKey} data-callback="onPortfolioCaptcha" />
            </div>
          ) : null}
          <button
            type="submit"
            disabled={isSending}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neon px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white shadow-glow transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {isSending ? <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Send className="h-5 w-5" aria-hidden="true" />}
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {status.message ? (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`mt-4 rounded-lg border px-4 py-3 text-sm font-bold whitespace-pre-line ${
                status.type === "success"
                  ? "border-cyan/30 bg-cyan/10 text-cyan"
                  : "border-neon/30 bg-neon/10 text-neon"
              }`}
              role="status"
            >
              {status.type === "success" ? "✓ " : "✕ "}
              {status.message}
            </motion.div>
          ) : null}
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black text-[var(--text)]">&copy; 2026 Khubaib PP</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Built with passion for Cybersecurity.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {navItems.slice(0, 6).map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-[var(--muted)] transition hover:text-cyan">
              {item}
            </a>
          ))}
        </div>
        <a
          href="#home"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-cyan transition hover:border-cyan/50"
          aria-label="Back to top"
          title="Back to top"
        >
          <ChevronUp className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

function LoadingOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-void"
    >
      <div className="w-[min(30rem,calc(100vw-2rem))] rounded-xl border border-neon/30 bg-panel/80 p-6 shadow-glow">
        <div className="mb-4 flex items-center gap-3 text-cyan">
          <Zap className="h-5 w-5" aria-hidden="true" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.24em]">Initializing Portfolio</span>
        </div>
        <div className="grid gap-2 font-mono text-sm text-[var(--muted)]">
          <span>&gt; Loading SOC profile...</span>
          <span>&gt; Mounting project intelligence...</span>
          <span>&gt; Recruiter signal online.</span>
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.95, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-neon via-cyan to-ember"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [navHidden, setNavHidden] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const nextDark = stored ? stored === "dark" : true;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    document.documentElement.classList.toggle("light", !nextDark);
  }, []);

  useEffect(() => {
    const updateNavigation = () => setNavHidden(window.scrollY < window.innerHeight * 0.72);
    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);
    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  return (
    <>
      <LoadingOverlay />
      <MatrixRain />
      <ParticleField />
      <CursorGlow />
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-neon via-cyan to-ember"
      />
      <Navigation isDark={isDark} setIsDark={setIsDark} hidden={navHidden} />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <TimelineSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <GitHubActivity />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}








