"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  CreditCard,
  Link2,
  Sparkles,
  WalletCards,
  Workflow,
} from "lucide-react";

const PANELS = [
  {
    id: "smart-purchase",
    label: "Smart Purchase",
    content: {
      title: "Smart Purchase",
      badge: "New",
      paragraph:
        "Tired of typing out the same purchase invoices by hand? This plugin reads your invoices and posts them straight into Tally. Less data entry, fewer errors, more time for things that actually matter.",
      subheading: "Features:",
      features: [
        "Reads invoice data automatically using OCR",
        "Posts directly into Tally ledgers",
        "Matches invoices to the right vendor",
        "Flags duplicates before they cause problems",
      ],
      cta: "Get Started",
      visual: "chat",
      disabled: false,
    },
  },
  {
    id: "smart-tds",
    label: "Smart TDS",
    content: {
      title: "Smart TDS",
      badge: "Most Popular",
      paragraph:
        "Managing TDS in Tally has always been more complicated than it needs to be. Smart TDS handles the calculations, creates the vouchers, and gets your statutory forms ready so you can stop worrying about it. And it's built right inside Tally, which means you never have to switch apps.",
      subheading: "Features:",
      features: [
        "Creates TDS vouchers automatically",
        "Calculates TDS by section every time",
        "Download 24Q and 26Q forms in one click",
        "Clear, complete TDS reports whenever you need them",
      ],
      cta: "Get Started",
      visual: "agents",
      disabled: false,
    },
  },
  {
    id: "smart-bank-recon",
    label: "Smart Bank Recon",
    content: {
      title: "Smart Bank Recon",
      badge: "",
      paragraph:
        "Reconciling bank statements by hand eats up hours every month. Smart Bank Recon lets you upload any bank PDF and handles the matching inside Tally. What used to take a full day now takes about 30 minutes.",
      subheading: "Features:",
      features: [
        "Accepts any bank PDF statement format",
        "Connects directly with Tally",
        "No more manual entries",
        "Books close clean every time",
      ],
      cta: "Get Started",
      visual: "builders",
      disabled: false,
    },
  },
  {
    id: "gst-recon",
    label: "GST Recon",
    content: {
      title: "GST Recon",
      badge: "",
      paragraph:
        "Keeping your GSTR-2A and GSTR-2B data in sync with your purchase register is one of the trickiest parts of GST compliance. GST Recon does the matching and shows exactly where the gaps are before they become a problem.",
      subheading: "Features:",
      features: [
        "Reconciles GSTR-2A and GSTR-2B data",
        "Clause 44 compliance built in",
        "Shows mismatches clearly so you can act fast",
        "GST reports whenever you need them",
      ],
      cta: "Get Started",
      visual: "banking",
      disabled: false,
    },
  },
  {
    id: "smart-reports",
    label: "Smart Reports",
    content: {
      title: "Smart Reports",
      badge: "",
      paragraph:
        "Built for manufacturers, wholesalers and retailers who need more than standard Tally reports. Get godown-wise stock, performance and MSME reports directly from Tally.",
      subheading: "Features:",
      features: [
        "Godown wise stock and movement reports",
        "Outstanding receivables on LIFO Basis",
        "Area, person and group wise performance",
        "MSME Supplier outstanding reports",
      ],
      cta: "Get Started",
      visual: "reports",
      disabled: false,
    },
  },
  {
    id: "anywhere-tally",
    label: "AnyWhereTally",
    content: {
      title: "AnyWhereTally",
      badge: "Coming Soon",
      paragraph:
        "Access your Tally data from anywhere, not just from the office. AnyWhereTally will let you and your team log in through a browser from any location, with everything synced in real time.",
      subheading: "Features:",
      features: [
        "Access Tally from any browser, anywhere",
        "Real-time sync across devices",
        "Multiple users at the same time",
        "Enterprise-level security",
      ],
      cta: "Notify Me",
      visual: "account",
      disabled: true,
    },
  },
];

function Dots() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(#cfd5de_0.8px,transparent_0.8px)] [background-size:6px_6px]" />
  );
}

function CardVisual({ type }) {
  if (type === "chat") {
    return (
      <div className="relative flex h-full justify-center overflow-hidden bg-[#f2f4f7] pt-5">
        <Dots />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#285bff] via-[#3563ff]/75 to-transparent" />
        <div className="relative w-[59%] min-w-[154px] overflow-hidden rounded-t-[15px] bg-white shadow-xl">
          <div className="bg-[#3562fa] px-4 py-3 text-[10px] font-semibold text-white">
            ▣ TallyKonnect OCR
          </div>
          <div className="space-y-2 px-3 py-3 text-[8px] text-[#606b7b]">
            <p className="text-center font-semibold text-slate-700">
              INVOICE CAPTURE
            </p>
            <p className="rounded-full bg-slate-50 p-2">
              Upload purchase invoice.pdf
            </p>
            <p className="ml-5 rounded-full bg-slate-50 p-2">
              Extract and post to Tally.
            </p>
            <p className="leading-relaxed">
              Vendor identified: ABC Traders
              <br />
              • GSTIN Matched ✓
              <br />
              • Ledger Selected ✓
            </p>
            <p className="font-semibold text-slate-700">
              Voucher Posted Successfully
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "agents") {
    const labels = [
      "TDS VOUCHER CREATED",
      "SECTION-WISE TAX",
      "24Q FORM READY",
      "26Q FORM READY",
      "STATUTORY REPORTS",
    ];

    return (
      <div className="relative flex h-full flex-col justify-center gap-3 overflow-hidden bg-[#f3f4f6] px-4">
        <Dots />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#285bff] via-[#285bff]/70 to-transparent" />
        {labels.map((label) => (
          <div
            key={label}
            className="relative rounded-full bg-white px-3 py-3 text-center text-[10px] font-medium text-slate-700 shadow-sm"
          >
            <Bot className="mr-1 inline h-3.5 w-3.5" /> AUTO/
            <span className="text-[#285bff]">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "builders") {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#eeeff1]">
        <Dots />
        <div className="relative z-10 grid grid-cols-2 items-center gap-7">
          <div className="flex h-[70px] w-[70px] items-center justify-center bg-gradient-to-br from-[#8baaff] to-[#1250ff] text-4xl italic text-white shadow-lg">
            ↗
          </div>
          <div className="flex h-[86px] w-[86px] flex-col items-center justify-center bg-white text-sm font-semibold shadow-sm">
            <Workflow className="mb-1 h-7 w-7 text-pink-500" />
            Tally
          </div>
          <div />
          <div className="flex h-[86px] w-[86px] items-center justify-center bg-white text-sm font-semibold shadow-sm">
            ▮ Bank PDF
          </div>
        </div>
      </div>
    );
  }

  if (type === "banking") {
    const labels = [
      "GSTR-2A IMPORT",
      "GSTR-2B IMPORT",
      "ITC MISMATCH FOUND",
      "GST REPORT READY",
      "COMPLIANT ✓",
    ];

    return (
      <div className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden bg-[#f3f4f6] px-8">
        <Dots />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#285bff] via-[#285bff]/65 to-transparent" />
        {labels.map((label, i) => (
          <div
            key={label}
            className={`relative w-full rounded-lg px-3 py-3 text-center text-[11px] ${
              i === 2
                ? "bg-white font-semibold text-slate-800"
                : "bg-white/55 text-slate-500"
            }`}
          >
            {label}
          </div>
        ))}
      </div>
    );
  }

  if (type === "reports") {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#edf3fd]">
        <Dots />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#285bff]/75 to-transparent" />
        <div className="relative w-[70%] space-y-4 rounded-2xl bg-white p-6 shadow-xl">
          {[
            "Godown Stock Report",
            "LIFO Receivables",
            "Area Performance",
            "MSME Outstanding",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg bg-slate-50 px-4 py-3 text-[13px] font-semibold text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "gateway") {
    return (
      <div className="flex h-full items-center justify-center bg-[#c9e5ea] px-7 pt-7">
        <div className="w-full overflow-hidden rounded-t-xl bg-white/80">
          {[
            "Bank balance",
            "Statement sync",
            "NEFT / RTGS",
            "IMPS payments",
            "Auto-reconciliation",
          ].map((item) => (
            <p
              key={item}
              className="flex gap-3 border-b border-[#d9e5e7] px-5 py-3 text-[13px] font-medium text-[#15566c]"
            >
              <CreditCard className="h-4 w-4 text-emerald-600" />
              {item}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (type === "button" || type === "links" || type === "pos") {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#badde7]">
        <span className="absolute right-4 top-4 rounded bg-[#86c6d1] px-3 py-2 text-[10px] font-semibold text-white">
          NO SETUP
        </span>
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-lg">
          {type === "links" ? (
            <Link2 className="h-10 w-10 text-[#3562fa]" />
          ) : type === "pos" ? (
            <CreditCard className="h-10 w-10 text-[#3562fa]" />
          ) : (
            <Sparkles className="h-10 w-10 text-[#3562fa]" />
          )}
        </div>
      </div>
    );
  }

  const Icon =
    type === "account" ? Building2 : type === "cards" ? CreditCard : WalletCards;

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#edf3fd]">
      <Dots />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#285bff]/75 to-transparent" />
      <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-lg">
        <Icon className="h-12 w-12 text-[#3562fa]" />
      </div>
    </div>
  );
}

function Panel({ panel }) {
  const content = panel.content;

  return (
    <div className="h-full overflow-hidden rounded-[5px] border border-[#edf1f5] bg-white shadow-[0_15px_38px_rgba(20,31,50,0.09)]">
      <div className="grid h-full items-center gap-10 px-5 py-8 sm:px-7 xl:grid-cols-2 xl:px-12">
        <div className="max-w-[650px]">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <h2 className="text-[34px] font-semibold tracking-[-0.05em] text-[#17263a] xl:text-[52px]">
              {content.title}
            </h2>

            {content.badge && (
              <span className="rounded-full bg-[#1b1d20] px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white">
                {content.badge}
              </span>
            )}
          </div>

          <p className="text-[16px] leading-[1.8] text-[#667085] xl:text-[19px]">
            {content.paragraph}
          </p>

          <h3 className="mt-8 text-[20px] font-semibold text-[#17263a]">
            {content.subheading}
          </h3>

          <ul className="mt-5 space-y-4 text-[15px] leading-[1.7] text-[#5f6b7a]">
            {content.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#3562fa]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-4">
            <button
              disabled={content.disabled}
              className={`flex items-center gap-2 rounded-[4px] px-5 py-4 text-[14px] font-semibold text-white ${
                content.disabled
                  ? "cursor-not-allowed bg-slate-400"
                  : "bg-[#3562fa]"
              }`}
            >
              {content.cta} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="h-[360px] overflow-hidden rounded-[4px] border border-[#dce3ed] bg-white shadow-[0_8px_20px_rgba(20,35,57,0.055)] xl:h-[520px]">
          <CardVisual type={content.visual} />
        </div>
      </div>
    </div>
  );
}

function EnteringPanel({ panel, index, total, progress }) {
  const start = index === 0 ? 0 : (index - 1) / total;
  const end = index === 0 ? 1 : index / total;

  const y = useTransform(
    progress,
    index === 0 ? [0, 1] : [start, end],
    index === 0 ? ["0%", "0%"] : ["103%", "0%"],
    { clamp: true }
  );

  return (
    <motion.div
      style={{ y, zIndex: index + 1 }}
      className="absolute inset-0 will-change-transform"
    >
      <Panel panel={panel} />
    </motion.div>
  );
}

function StackingStage({ topOffset, activeIndex, setActiveIndex }) {
  const trackRef = useRef(null);
  const [stageHeight, setStageHeight] = useState(0);
  const totalSteps = PANELS.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const measure = () =>
      setStageHeight(Math.max(window.innerHeight - topOffset - 12, 1));

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [topOffset]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(
      PANELS.length - 1,
      Math.max(0, Math.ceil(value * totalSteps - 0.02))
    );

    if (next !== activeIndex) setActiveIndex(next);
  });

  if (!stageHeight) return null;

  return (
    <div
      id="stack-track"
      ref={trackRef}
      className="relative"
      style={{ height: stageHeight * (totalSteps + 1) }}
    >
      <div
        className="sticky overflow-hidden"
        style={{ top: topOffset, height: stageHeight }}
      >
        {PANELS.map((panel, index) => (
          <EnteringPanel
            key={panel.id}
            panel={panel}
            index={index}
            total={totalSteps}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProductStackSection() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(72);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    if (!navRef.current) return undefined;

    const measure = () =>
      setNavHeight(navRef.current?.getBoundingClientRect().height ?? 72);

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(navRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToPanel = (index) => {
    const track = document.getElementById("stack-track");
    if (!track) return;

    const stageHeight = Math.max(window.innerHeight - navHeight - 12, 1);
    const targetY =
      track.getBoundingClientRect().top + window.scrollY + index * stageHeight;

    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section
      id="solutions"
      className="min-h-screen bg-[#f5f8fc] font-sans text-[#15263c]"
    >
      <header
        ref={navRef}
        className="sticky top-0 z-50 border-b border-[#edf1f6] bg-[#f5f8fc]/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1500px] items-center gap-6 px-4 py-3 sm:px-7">
          <nav className="flex flex-1 gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PANELS.map((panel, index) => (
              <button
                key={panel.id}
                type="button"
                onClick={() => scrollToPanel(index)}
                className={`relative shrink-0 py-3 text-[14px] font-semibold transition-colors lg:text-[16px] ${
                  activeIndex === index ? "text-[#17283f]" : "text-[#7890aa]"
                }`}
              >
                {panel.label}

                {activeIndex === index && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute inset-x-0 -bottom-[13px] h-[3px] bg-[#37c98b]"
                  />
                )}
              </button>
            ))}
          </nav>

          <button className="hidden rounded-[4px] bg-[#3562fa] px-7 py-4 text-[15px] font-semibold text-white md:block">
            Schedule a Demo
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-[1500px] px-3 pt-4 sm:px-6">
      <div className="pb-10 pt-16 text-left sm:pt-20 xl:pb-16 xl:pl-12">
        <h2 className="max-w-[980px] text-[34px] font-semibold leading-[1.08] tracking-[-0.06em] text-[#17263a] sm:text-[48px] xl:text-[60px]">
          Our{" "}
          <span className="text-[#3562fa]">
            Solutions
          </span>
        </h2>

        <h3 className="mt-4 max-w-[980px] text-[24px] font-semibold leading-[1.12] tracking-[-0.055em] text-[#17263a] sm:text-[48px] xl:text-[42px]">
          Everything Your Tally Needs
        </h3>

        <p className="mt-6 max-w-[860px] text-[16px] leading-[1.8] text-[#667085] sm:text-[18px] xl:text-[20px]">
          These are tools your accounting team will actually use every day. Each
          one is built specifically for Tally and takes just a few minutes to get up
          and running.
        </p>
      </div>

  <StackingStage
    topOffset={navHeight}
    activeIndex={activeIndex}
    setActiveIndex={setActiveIndex}
  />
      </div>  
    </section>
  );
}