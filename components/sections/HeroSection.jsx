"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import {
  ArrowLeft,
  ArrowRight,
  BanknoteArrowUp,
  BriefcaseBusiness,
  CreditCard,
  Landmark,
  PenLine,
  Search,
  Sparkles,
  WalletCards,
} from "lucide-react";

const tickerLogos = [
  "Tally Prime",
  "Tally ERP 9",
  "YES BANK",
  "CANARA BANK",
  "AU BANK",
  "GST Recon",
  "Smart TDS",
];

const quickLinks = [
  { label: "Accept Payments", icon: CreditCard },
  { label: "Make Payouts", icon: BanknoteArrowUp },
  { label: "Start Business Banking", icon: Landmark },
  { label: "Get Credit", icon: WalletCards },
  { label: "Automate Payroll", icon: BriefcaseBusiness },
  { label: "Something else?", icon: PenLine },
];

const statCards = ["135 Currencies", "95%+ Success Rates", "Apple Pay & Google Pay"];

const heroSlides = [
  {
    heading: "Smart TDS Automation",
    description: "built for the accountant who lives in Tally",
    image: "/images/tallykonnect-hero-model-removebg-preview.png",
    alt: "International payments representative",
    badge: "INTERNATIONAL PAYMENTS",
  },
  {
    heading: "Connected Banking",
    description: "pay vendors without leaving Tally",
    image: "/images/tallykonnect-hero-model-removebg-preview.png",
    alt: "Business banking representative",
    badge: "BUSINESS BANKING",
  },
  {
    heading: "Smart Bank Recon",
    description: "close your books in 30 minutes",
    image: "/images/tallykonnect-hero-model-removebg-preview.png",
    alt: "Cross-border payouts representative",
    badge: "GLOBAL PAYOUTS",
  },
  {
    heading: "Connected Banking",
    description: "pay vendors without leaving Tally",
    image: "/images/tallykonnect-hero-model-removebg-preview.png",
    alt: "Money movement representative",
    badge: "MONEY MOVEMENT",
  },
  {
    heading: "Smart Purchase",
    description: "reads the invoice so your team doesn't have to",
    image: "/images/tallykonnect-hero-model-removebg-preview.png",
    alt: "Money movement representative",
    badge: "MONEY MOVEMENT",
  },
  {
    heading: "GST Reconciliation",
    description: "find every mismatch before it costs you",
    image: "/images/tallykonnect-hero-model-removebg-preview.png",
    alt: "Money movement representative",
    badge: "MONEY MOVEMENT",
  },
  {
    heading: "Smart Reports",
    description: "the reports Tally never gave you",
    image: "/images/tallykonnect-hero-model-removebg-preview.png",
    alt: "Money movement representative",
    badge: "MONEY MOVEMENT",
  },
];

export default function HeroSection() {
  const rootRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const currentSlide = heroSlides[slideIndex];

  function previousSlide() {
    setSlideIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  }

  function nextSlide() {
    setSlideIndex((current) => (current + 1) % heroSlides.length);
  }

  useEffect(() => {
    const intervalId = window.setInterval(nextSlide, 4200);
    return () => window.clearInterval(intervalId);
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from(".hero-copy > *", {
          opacity: 0,
          y: 28,
          duration: 0.78,
          stagger: 0.09,
        })
        .from(
          ".hero-portrait",
          { opacity: 0, x: 48, scale: 0.97, duration: 1 },
          "-=0.48",
        )
        .from(
          ".floating-card",
          { opacity: 0, x: 22, duration: 0.64, stagger: 0.09 },
          "-=0.55",
        )
        .from(
          ".search-dock",
          { opacity: 0, y: 30, duration: 0.74 },
          "-=0.4",
        );
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate min-h-screen overflow-hidden bg-white font-sans text-[#13263f]"
      aria-labelledby="payments-heading"
    >
      <BackgroundArtwork />

      <div className="relative mx-auto flex min-h-[calc(100vh-82px)] w-full max-w-[1600px] flex-col px-5 pb-48 pt-20 sm:px-10 lg:px-14 lg:pb-36 lg:pt-0 xl:px-16">
        <div className="grid flex-1 items-center gap-14 lg:grid-cols-[minmax(510px,0.98fr)_minmax(560px,1.02fr)]">
          <div className="hero-copy relative z-20 max-w-[700px] lg:pl-4">
            <h1
              id="payments-heading"
              className="text-balance text-[clamp(2.7rem,4.1vw,4.55rem)] font-medium leading-[1.08] tracking-[-0.065em] text-[#16283e]"
            >
              <span className="relative block min-h-[1.12em] overflow-hidden text-[#365cf3]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={currentSlide.heading}
                    className="block"
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -32 }}
                    transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {currentSlide.heading}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="block">for founders defying all odds</span>
            </h1>

            <div className="relative mt-6 min-h-[32px] overflow-hidden text-[clamp(1rem,1.13vw,1.18rem)] font-medium tracking-[-0.012em] text-[#33455c]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={currentSlide.description}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.34 }}
                >
                  {currentSlide.description}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-7">
              <a
                href="#signup"
                className="rounded-md bg-[#365cf3] px-7 py-[18px] text-[1.06rem] font-semibold text-white shadow-[0_15px_30px_rgba(54,92,243,0.16)] transition hover:-translate-y-0.5 hover:bg-[#294ee7]"
              >
                Sign Up Now
              </a>
              <a
                href="#more"
                className="group inline-flex items-center gap-2 text-[1.05rem] font-semibold text-[#3158ec]"
              >
                Know More
                <ArrowRight className="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          <div className="relative z-10 hidden h-full min-h-[650px] lg:block">
            <div className="hero-portrait absolute inset-x-0 bottom-0 top-[7%]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={currentSlide.image}
                  src={currentSlide.image}
                  alt={currentSlide.alt}
                  className="absolute inset-0 h-full w-full object-contain object-bottom"
                  initial={{ opacity: 0, x: 44, scale: 0.985 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -32, scale: 0.985 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.6, ease: "easeInOut", repeat: Infinity }}
              className="floating-card absolute right-[10%] top-[3%] w-[200px] rounded-2xl border border-white/55 bg-gradient-to-br from-[#6c98f7]/95 to-[#acccfd]/90 px-6 py-5 text-center text-white shadow-[0_24px_58px_rgba(62,105,213,0.22)] backdrop-blur"
            >
              <p className="text-[1.35rem] font-semibold tracking-[-0.03em]">◢ TallyKonnect</p>
              <p className="mt-2 text-[10px] tracking-[0.22em] text-white/85">POWERED BY</p>
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={currentSlide.badge}
                  className="mt-2 text-xs font-semibold tracking-[0.11em]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  TALLY AUTOMATION
                  <br />
                  {currentSlide.badge}
                </motion.p>
              </AnimatePresence>
            </motion.div>


            <motion.div
              className="floating-card absolute bottom-[8%] left-[9%] rounded-full bg-gradient-to-r from-[#6f9cf5] to-[#3957d8] px-8 py-4 text-lg text-white shadow-xl"
              animate={{ x: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <strong>TallyKonnect</strong>{" "}
              <span className="text-white/75">Automation Suite ↗</span>
            </motion.div>
          </div>
        </div>

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-[45%] hidden h-9 w-9 place-items-center rounded-full border border-[#b9d2ff] bg-[#edf4ff] text-[#244779] transition hover:bg-white lg:grid"
        >
          <ArrowLeft size={17} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-[45%] hidden h-9 w-9 place-items-center rounded-full border border-[#b9d2ff] bg-[#edf4ff] text-[#244779] transition hover:bg-white lg:grid"
        >
          <ArrowRight size={17} />
        </button>

        {/* <div className="search-dock absolute inset-x-5 bottom-8 z-40 flex flex-col gap-4 lg:inset-x-14 lg:flex-row lg:items-center">
          <nav className="flex min-h-[80px] flex-1 flex-col items-start gap-4 rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-[0_14px_42px_rgba(24,42,72,0.10)] lg:flex-row lg:items-center lg:gap-8 lg:px-8">
            <div className="flex shrink-0 items-center gap-3 font-semibold text-[#182d46]">
              <Search className="h-5 w-5 text-[#4166f5]" strokeWidth={2.4} />
              <span>Start your search</span>
            </div>

            <div className="flex flex-1 flex-wrap items-center gap-2.5">
              {quickLinks.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-[#edf2ff] px-3.5 py-2 text-sm font-medium text-[#2954ef] transition hover:-translate-y-0.5 hover:bg-[#e4ebff]"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <button
            type="button"
            className="inline-flex h-[58px] shrink-0 items-center justify-center gap-3 rounded-md border border-[#8adcc7] bg-white px-7 text-lg font-semibold text-[#052945] shadow-sm transition hover:bg-[#f4fffb] lg:h-[64px]"
          >
            <Sparkles className="h-5 w-5 text-[#17c98e]" /> Ask RAY
          </button>
        </div> */}
      </div>

      <LogoTracker />
    </section>
  );
}

function BackgroundArtwork() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-28 -top-28 h-[780px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(115,175,253,0.21)_0%,rgba(255,255,255,0)_68%)]" />
      <motion.div
        className="absolute bottom-[84px] right-0 hidden h-[83%] w-[57%] lg:block"
        animate={{ x: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute bottom-0 right-[4%] h-full w-[72%] -skew-x-[21deg] bg-gradient-to-r from-transparent via-[#d5e8ff]/55 to-transparent blur-xl" />
        <div className="absolute bottom-0 right-[12%] h-[93%] w-[115px] -skew-x-[21deg] bg-gradient-to-b from-[#b7d7ff]/15 via-[#87bcff]/58 to-[#d4e8ff]/20 blur-sm" />
        <div className="absolute bottom-0 right-[34%] h-[75%] w-[102px] -skew-x-[21deg] bg-gradient-to-b from-transparent via-[#80b4fe]/58 to-[#dbeaff]/10 blur-[3px]" />
        <div className="absolute bottom-0 right-[50%] h-[59%] w-[118px] -skew-x-[21deg] bg-gradient-to-b from-transparent via-[#c2dcff]/55 to-transparent blur-lg" />
      </motion.div>
    </div>
  );
}

//sdadsad

function LogoTracker() {
  return (
    <div
      className="relative z-50 overflow-hidden border-y border-[#edf1f9] bg-white py-5"
      aria-label="Integration partners"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent md:w-40" />
      <motion.div
        className="flex w-max items-center gap-14 whitespace-nowrap px-7 text-sm font-semibold tracking-[0.06em] text-[#52627a] sm:gap-20"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        {[...tickerLogos, ...tickerLogos].map((logo, index) => (
          <span key={`${logo}-${index}`} className="trusted-logo inline-flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#365cf3]" />
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
