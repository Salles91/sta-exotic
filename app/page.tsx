import AnimatedSection from "@/components/AnimatedSection";
import HeroMesh from "@/components/HeroMesh";
import Nav from "@/components/Nav";
import RetailerForm from "@/components/RetailerForm";
import PressForm from "@/components/PressForm";
import StoreLocator from "@/components/StoreLocator";

const stats = [
  { number: "84K", label: "Community strong" },
  { number: "80+", label: "Licensed retailers" },
  { number: "NY · CA", label: "State footprint" },
  { number: "'24", label: "OCM licensed" },
];

const products = [
  {
    name: "THC Bomb",
    tag: "Hybrid · Flower",
    desc: "Small batch indoor, hand trimmed. Dense nugs, loud terp profile. Each jar traces back to phenotype and cultivator notes.",
    image: "/images/strain-thc-bomb.webp",
    accent: "rgba(233, 79, 111, 0.6)",
  },
  {
    name: "Notorious THC",
    tag: "Sativa · Flower",
    desc: "Daytime gas cultivar. Structured bud, clean burn, bright terp nose. Rotating small batches as phenos hit spec.",
    image: "/images/strain-notorious.webp",
    accent: "rgba(217, 140, 60, 0.55)",
  },
  {
    name: "Mac x Cruffin",
    tag: "Indica · Flower",
    desc: "Heavy hitter. Washed terp profile, tight nose, slow cured. In and out as cultivators finish cycles.",
    image: "/images/strain-mac-cruffin.webp",
    accent: "rgba(99, 133, 104, 0.5)",
  },
  {
    name: "Pre-Rolls",
    tag: "Single strain",
    desc: "Ground and packed in house. No shake, no stems. Unbleached paper. Rolled to burn clean, not fast.",
    image: "/images/preroll-premium.jpg",
    accent: "rgba(169, 36, 63, 0.55)",
  },
];

const pressLogos = [
  "High Times",
  "Green Market Report",
  "MJBizDaily",
  "Leafly",
  "Rolling Stone",
  "Forbes",
  "The New York Times",
  "Vice",
];

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <Nav />

      {/* ================== HERO ================== */}
      <section className="relative flex min-h-[100svh] items-center px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:pb-24">
        <HeroMesh />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Text column, left on desktop */}
          <div className="text-left">
            <AnimatedSection delay={0.1} y={16}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-black/30 px-3.5 py-1.5 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
                <span className="font-mono-xs text-[var(--color-ink-muted)]">
                  OCM-PROC-24-000010 · Processor license
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25} y={24}>
              <h1 className="font-display mt-6 text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] text-[var(--color-ink)]">
                Legacy,<br />
                <span className="italic text-[var(--color-accent)]">licensed</span>
                ,<br />
                stocked.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.45}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-muted)] sm:mt-7 sm:text-[17px]">
                STA Exotic is a New York processor. We flower, pack, and move
                small batch cannabis into 80+ licensed dispensaries across NY
                and CA. Eighty four thousand strong on the feed. Built by
                cultivators, for the culture.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a href="#retailers" className="btn-primary justify-center">
                  Request wholesale
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
                <a href="#press" className="btn-ghost justify-center">
                  Press inquiries
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <p className="mt-8 font-mono-xs text-[var(--color-ink-soft)]">
                For 21+ · Trade and credentialed press only
              </p>
            </AnimatedSection>
          </div>

          {/* Visual column, right on desktop, below text on mobile.
              1 foto dominante de produto (strain macro) + 2 thumbs empilhados
              como "stack" de catalog, mostrando variedade sem poluir. */}
          <AnimatedSection delay={0.35}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Big hero product, strain macro */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-line-strong)]"
                style={{
                  background: "radial-gradient(circle at 30% 20%, rgba(233,79,111,0.45), rgba(10,8,8,0.8) 70%)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/strain-thc-bomb.webp"
                  alt="STA Exotic THC Bomb, small batch indoor flower"
                  className="img-grade-sta absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
                {/* Fade pro info label respirar */}
                <div
                  className="absolute inset-x-0 bottom-0 h-28"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,8,8,0.92) 0%, rgba(10,8,8,0.3) 60%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-mono-xs text-[var(--color-ink-soft)]">
                      Hybrid · Flower
                    </p>
                    <p className="font-display mt-1 text-2xl text-[var(--color-ink)] sm:text-3xl">
                      THC Bomb
                    </p>
                  </div>
                  <span className="font-mono-xs text-[var(--color-accent)]">
                    01 / 04
                  </span>
                </div>
              </div>

              {/* 2 thumbs stacked, overflowing corners pra efeito catalog */}
              <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 overflow-hidden rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] shadow-2xl sm:block sm:h-32 sm:w-32 lg:-bottom-8 lg:-left-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/preroll-premium.jpg"
                  alt="Pre-Rolls Premium"
                  className="img-grade-sta absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -top-5 -right-4 hidden h-20 w-20 overflow-hidden rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] shadow-2xl sm:block sm:h-28 sm:w-28 lg:-top-6 lg:-right-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/strain-notorious.webp"
                  alt="Notorious THC"
                  className="img-grade-sta absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* scroll indicator */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
          <span className="font-mono-xs text-[var(--color-ink-soft)]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-[var(--color-ink-soft)] to-transparent" />
        </div>
      </section>

      {/* ================== MARQUEE ================== */}
      <div className="overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-bg)] py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-10 pr-10 font-mono-xs text-[var(--color-ink-soft)]"
            >
              <span>Legacy to Legal</span>
              <span className="text-[var(--color-accent)]">◆</span>
              <span>OCM licensed processor</span>
              <span className="text-[var(--color-accent)]">◆</span>
              <span>Small batch</span>
              <span className="text-[var(--color-accent)]">◆</span>
              <span>NY Grown</span>
              <span className="text-[var(--color-accent)]">◆</span>
              <span>CA distribution</span>
              <span className="text-[var(--color-accent)]">◆</span>
              <span>84K strong</span>
              <span className="text-[var(--color-accent)]">◆</span>
              <span>Verified</span>
              <span className="text-[var(--color-accent)]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ================== STATS ================== */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="font-mono-xs text-[var(--color-ink-soft)]">
              By the numbers
            </p>
          </AnimatedSection>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-[var(--color-line)] sm:mt-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="flex h-full flex-col justify-between bg-[var(--color-bg)] p-6 sm:p-8">
                  <p className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                    {stat.number}
                  </p>
                  <p className="mt-6 font-mono-xs text-[var(--color-ink-muted)] sm:mt-12">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================== PRODUCTS ================== */}
      <section
        id="products"
        className="relative border-b border-[var(--color-line)] bg-[var(--color-bg)] py-20 sm:py-28 lg:py-36"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-end">
              <div>
                <p className="font-mono-xs text-[var(--color-ink-soft)]">
                  What we make
                </p>
                <h2 className="font-display mt-3 text-[clamp(2.25rem,6vw,4.5rem)] text-[var(--color-ink)]">
                  Four lines.<br />One <span className="italic">standard</span>.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[var(--color-ink-muted)] sm:text-base sm:justify-self-end sm:text-right">
                We process what we would buy ourselves. Jar after jar, batch
                after batch. Consistency is the only language retailers and
                consumers trust.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-[var(--color-line)] sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <div className="card-tilt relative flex h-full flex-col overflow-hidden bg-[var(--color-bg)]">
                  {/* Real product photo. Aspect ratio 4:5 mantem leitura boa
                      em mobile (grid 2 cols no sm+) e desktop (grid 4 cols).
                      Fallback: accent tint fica atras caso imagem nao carregue. */}
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, ${p.accent}, rgba(0,0,0,0.4) 70%)`,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={`${p.name} — ${p.tag}`}
                      className="img-grade-sta absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    {/* Fade bottom pro texto respirar contra imagem */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-16"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,8,8,0.95), transparent)",
                      }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="font-mono-xs text-[var(--color-ink-soft)]">
                      {p.tag}
                    </p>
                    <h3 className="font-display mt-2 text-2xl text-[var(--color-ink)] sm:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p className="mt-8 text-xs text-[var(--color-ink-soft)]">
              COAs available on request. Potency and terpene profiles updated per
              batch.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================== STORE LOCATOR ================== */}
      <section
        id="locator"
        className="border-b border-[var(--color-line)] bg-[var(--color-bg)] py-20 sm:py-28 lg:py-36"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="font-mono-xs text-[var(--color-ink-soft)]">
                Where to find us
              </p>
              <h2 className="font-display mt-3 text-[clamp(2.25rem,6vw,4.5rem)] text-[var(--color-ink)]">
                Stocked in <span className="italic">eighty</span><br />
                dispensaries.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--color-ink-muted)] sm:text-base">
                From the Bronx to the Bay. If you are 21+ and shopping legal, we
                are probably already on the shelf. Filter by borough, search by
                name.
              </p>
            </div>
          </AnimatedSection>

          {/* Banner landscape no topo do locator: mostra produto STA
              na prateleira, quebra a monotonia visual antes do mapa. */}
          <AnimatedSection delay={0.15}>
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--color-line-strong)] sm:mt-12 sm:aspect-[21/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/strain-catalog.webp"
                alt="STA Exotic product catalog, small batch flower stocked across NY + CA dispensaries"
                className="img-grade-sta absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              {/* Vinheta editorial — pulls focus, blends with bg */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 0%, rgba(10,8,8,0.55) 85%), linear-gradient(to top, rgba(10,8,8,0.9) 0%, transparent 35%, transparent 70%, rgba(10,8,8,0.5) 100%)",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="font-mono-xs text-[var(--color-ink-soft)]">
                    Retail footprint
                  </p>
                  <p className="font-display mt-1 text-xl text-[var(--color-ink)] sm:text-2xl">
                    NY · CA · 80+ shelves
                  </p>
                </div>
                <span className="font-mono-xs text-[var(--color-accent)]">
                  Live
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="mt-10 sm:mt-14">
              <StoreLocator />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================== RETAILERS CTA ================== */}
      <section
        id="retailers"
        className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg-raised)] py-20 sm:py-28 lg:py-36"
      >
        {/* subtle accent gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(233,79,111,0.35) 0%, transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <AnimatedSection>
              <p className="font-mono-xs text-[var(--color-ink-soft)]">
                For retailers
              </p>
              <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3.75rem)] text-[var(--color-ink)]">
                New dispensary?<br />
                Want to stock<br />
                <span className="italic text-[var(--color-accent)]">STA</span>?
              </h2>
              <div className="hairline-accent mt-7" />
              <p className="mt-7 max-w-md text-sm leading-relaxed text-[var(--color-ink-muted)]">
                Tell us who you are. License verified, wholesale team responds in
                48h, samples ship within a week of onboarding. We keep buyer
                relationships direct.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-[var(--color-ink-muted)]">
                {[
                  "Direct buyer relationship, no middle distributor",
                  "COA + marketing asset pack on every batch",
                  "Reorder via phone, email, or portal",
                  "Net 15 terms for established retailers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Editorial packaging shot — portrait, ancora a coluna esquerda
                  contra o form na direita. Mobile: empilha abaixo da lista.
                  Desktop: cresce natural, aspect 4/5 bate com imagem original. */}
              <div className="relative mt-10 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-[var(--color-line-strong)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/editorial-1.jpg"
                  alt="STA Exotic packaging, wholesale catalog shot"
                  className="img-grade-sta absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,8,8,0.85) 0%, transparent 40%, transparent 70%, rgba(10,8,8,0.35) 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-mono-xs text-[var(--color-ink-soft)]">
                    Wholesale catalog
                  </p>
                  <p className="font-display mt-1 text-lg text-[var(--color-ink)]">
                    Small batch, packed in house
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg)] p-6 sm:p-8">
                <RetailerForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================== PRESS ================== */}
      <section
        id="press"
        className="border-b border-[var(--color-line)] bg-[var(--color-bg)] py-20 sm:py-28 lg:py-36"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <AnimatedSection>
              <p className="font-mono-xs text-[var(--color-ink-soft)]">
                Press · Editorial
              </p>
              <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3.75rem)] text-[var(--color-ink)]">
                Writing about us?<br />
                <span className="italic">Let's make it easy</span>.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-[var(--color-ink-muted)] sm:text-base">
                Download the press kit (founder bios, brand photography, license
                documentation, key stats, high res logos). For sampling requests,
                include angle and publication date. We track outreach and follow
                up.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#press-form" className="btn-ghost">
                  Download press kit
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  </svg>
                </a>
                <span className="font-mono-xs text-[var(--color-ink-soft)]">
                  12 MB · PDF + assets
                </span>
              </div>

              <div className="mt-12">
                <p className="font-mono-xs text-[var(--color-ink-soft)]">
                  As featured in
                </p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                  {pressLogos.map((l) => (
                    <span
                      key={l}
                      className="font-display text-base text-[var(--color-ink-muted)] italic sm:text-lg"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col gap-6">
                {/* Editorial press kit shot — ancora coluna direita, fecha
                    vacuum visual acima do form. Aspect 4/5 portrait bate
                    com foto original 785x1024. */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-line-strong)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/editorial-2.jpg"
                    alt="STA Exotic editorial press kit, product photography for media"
                    className="img-grade-sta absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,8,8,0.9) 0%, transparent 40%, transparent 65%, rgba(10,8,8,0.4) 100%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-mono-xs text-[var(--color-ink-soft)]">
                        Press photography
                      </p>
                      <p className="font-display mt-1 text-lg text-[var(--color-ink)]">
                        Editorial ready
                      </p>
                    </div>
                    <span className="font-mono-xs text-[var(--color-accent)]">
                      HI-RES
                    </span>
                  </div>
                </div>

                <div
                  id="press-form"
                  className="rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)] p-6 sm:p-7"
                >
                  <p className="font-mono-xs text-[var(--color-ink-muted)]">
                    Request samples
                  </p>
                  <h3 className="font-display mt-2 text-2xl text-[var(--color-ink)]">
                    Press access
                  </h3>
                  <div className="mt-5">
                    <PressForm />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================== STORY ================== */}
      <section
        id="story"
        className="border-b border-[var(--color-line)] bg-[var(--color-bg)] py-20 sm:py-28 lg:py-36"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-20">
            <div>
              <AnimatedSection>
                <p className="font-mono-xs text-[var(--color-ink-soft)]">
                  The story
                </p>
                <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3.75rem)] text-[var(--color-ink)]">
                  Before there was<br />
                  a <span className="italic text-[var(--color-accent)]">license</span>,<br />
                  there was us.
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="mt-10 space-y-6 text-[15px] leading-[1.75] text-[var(--color-ink-muted)] sm:text-base">
                  <p>
                    STA started in the boroughs, years before New York regulators
                    drew up OCM. We learned the plant from people who grew it in
                    basements and back rooms, the way most real cannabis knowledge
                    moves. That education does not show up on a CV. It shows up in
                    the jar.
                  </p>
                  <p>
                    In 2024 we took the harder path on purpose. We sat for the
                    processor license, filed the paperwork, paid the fees, passed
                    inspection. OCM-PROC-24-000010. Not because the legal way is
                    prettier, but because we wanted the brand to live past the
                    decade.
                  </p>
                  <p>
                    Today we run small batch. We know the cultivators we source
                    from. We pack in house, we hand off only to licensed
                    distribution, we keep buyer relationships direct. If you are a
                    dispensary that actually reads the jar, we want to meet you.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    {/* Logo real STA mantido como selo da marca */}
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-raised)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/logo.png"
                        alt="STA Exotic logo"
                        className="absolute inset-0 h-full w-full object-contain p-1.5"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-ink)]">
                        Founding team
                      </p>
                      <p className="font-mono-xs text-[var(--color-ink-soft)]">
                        New York · Since the legacy years
                      </p>
                    </div>
                  </div>
                  <a
                    href="#retailers"
                    className="text-sm text-[var(--color-accent)] link-underline self-start sm:self-auto"
                  >
                    Work with us
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Editorial lateral — puxa pra direita no desktop, empilha
                acima em mobile (order-first via flex, ou no grid fica
                abaixo do copy porque é ordem natural). Pra priorizar
                foto antes do copy no mobile, usa order. */}
            <AnimatedSection delay={0.15}>
              <div className="order-first mb-6 lg:order-none lg:mb-0 lg:sticky lg:top-24">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-line-strong)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/editorial-3.jpg"
                    alt="STA Exotic legacy process, small batch flower from seed to shelf"
                    className="img-grade-sta absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,8,8,0.9) 0%, rgba(10,8,8,0.2) 40%, transparent 70%, rgba(10,8,8,0.3) 100%)",
                    }}
                  />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-mono-xs text-[var(--color-ink-soft)]">
                      From legacy to licensed
                    </p>
                    <p className="font-display mt-1 text-xl text-[var(--color-ink)] sm:text-2xl">
                      The work speaks
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================== QUOTE ================== */}
      <section className="relative grain bg-[var(--color-bg)] py-20 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(233,79,111,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <AnimatedSection>
            <p className="font-display text-[clamp(1.75rem,4.5vw,3rem)] italic leading-[1.2] text-[var(--color-ink)]">
              &ldquo;If you know, you know. And now you know where to
              buy it.&rdquo;
            </p>
            <p className="mt-8 font-mono-xs text-[var(--color-ink-soft)]">
              STA Exotic · NY + CA
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================== FOOTER ================== */}
      <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2">
                <FooterMark />
                <span className="font-display text-xl text-[var(--color-ink)]">
                  STA Exotic
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-ink-muted)]">
                Legacy to Legal. New York processor distributing small batch
                cannabis to 80+ licensed retailers across NY and CA.
              </p>
              <p className="mt-5 font-mono-xs text-[var(--color-ink-soft)]">
                License · OCM-PROC-24-000010
              </p>
            </div>

            <FooterCol
              title="Explore"
              links={[
                { label: "Products", href: "#products" },
                { label: "Find us", href: "#locator" },
                { label: "The story", href: "#story" },
              ]}
            />
            <FooterCol
              title="Business"
              links={[
                { label: "Wholesale", href: "#retailers" },
                { label: "Press", href: "#press" },
                { label: "Contact", href: "mailto:hello@staexotic.com" },
              ]}
            />
            <FooterCol
              title="Follow"
              links={[
                {
                  label: "Instagram",
                  href: "https://instagram.com/slapthatassexotics",
                  external: true,
                },
                {
                  label: "YouTube",
                  href: "https://youtube.com",
                  external: true,
                },
                {
                  label: "Twitter",
                  href: "https://x.com",
                  external: true,
                },
              ]}
            />
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[var(--color-ink-soft)]">
              &copy; 2026 STA Exotic Enterprises · For 21+ · Not for sale direct
              to consumer
            </p>
            <p className="font-mono-xs text-[var(--color-ink-soft)]">
              Site preview crafted by Salles · DevFull Engineering
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <p className="font-mono-xs text-[var(--color-ink-soft)]">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-sm text-[var(--color-ink-muted)] transition hover:text-[var(--color-accent)]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterMark() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      className="text-[var(--color-accent)]"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 16c2.5-4 9.5-4 12 0-2.5 4-9.5 4-12 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}
