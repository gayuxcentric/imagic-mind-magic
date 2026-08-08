import { motion } from "motion/react";
import { Mic, Keyboard, Scissors, Shirt, Palette, Sparkles, Star, Gem } from "lucide-react";
import girl from "@/assets/lumi-girl.png";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

function Particles({ count = 8 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const left = `${(i * 37) % 90 + 5}%`;
        const top = `${(i * 53) % 80 + 8}%`;
        const size = 5 + ((i * 7) % 9);
        return (
          <motion.span
            key={i}
            aria-hidden
            className="absolute rounded-full bg-lumi/70"
            style={{ left, top, width: size, height: size }}
            animate={{ opacity: [0.15, 1, 0.15], scale: [0.7, 1.3, 0.7] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
          />
        );
      })}
    </>
  );
}

function StageLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground soft-shadow">
        {n}
      </span>
      <h3 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">{title}</h3>
    </div>
  );
}

function Connector() {
  return (
    <div aria-hidden className="pointer-events-none flex justify-center py-2">
      <svg width="120" height="72" viewBox="0 0 120 72" fill="none" className="text-primary/40">
        <motion.path
          d="M60 2 C 12 22, 108 46, 60 68"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 10"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
        <motion.circle
          cx="60"
          cy="68"
          r="4"
          fill="currentColor"
          animate={{ y: [-4, 0, -4], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

const stageShell =
  "relative overflow-hidden rounded-[2.5rem] border border-card/70 soft-shadow-lg";

export function GameJourney() {
  return (
    <section id="how" className="relative overflow-hidden px-6 py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-blush/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-24 h-96 w-96 rounded-full bg-lavender/50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-foreground sm:text-5xl">
            FROM IMAGINATION
            <br />
            <span className="text-primary">TO ADVENTURE</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Imagine it. Create it. Customize it. Play it.
          </p>
        </motion.div>

        {/* 01 IMAGINE */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mt-14">
          <StageLabel n="01" title="IMAGINE" />
          <div className={`${stageShell} mt-5 bg-gradient-to-br from-cream via-blush/70 to-peach/60 p-8 sm:p-12`}>
            <Particles count={6} />
            <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <motion.img
                src={girl}
                alt="Pink-haired ImagicMind character dreaming up an idea"
                width={512}
                height={512}
                loading="lazy"
                className="h-40 w-auto drop-shadow-[0_18px_30px_rgba(180,120,150,0.25)] sm:h-52"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-1, 1.5, -1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative max-w-xs rounded-[2rem] rounded-bl-lg border border-card bg-card/90 px-6 py-5 text-center backdrop-blur soft-shadow"
              >
                <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
                  “Space princess with pink star hair”
                </p>
                <span className="absolute -bottom-4 left-6 h-4 w-4 rounded-full bg-card/90" />
                <span className="absolute -bottom-8 left-2 h-2.5 w-2.5 rounded-full bg-card/70" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <Connector />

        {/* 02 CREATE */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <StageLabel n="02" title="CREATE" />
          <div className={`${stageShell} mt-5 bg-gradient-to-br from-lavender/70 via-blush/60 to-cream p-8 sm:p-12`}>
            <Particles count={12} />
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <motion.div
                  aria-hidden
                  className="absolute inset-0 -m-10 rounded-full bg-lumi/40 blur-3xl"
                  animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                {[0, 1].map((r) => (
                  <motion.span
                    key={r}
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-primary/40"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18 + r * 8, repeat: Infinity, ease: "linear" }}
                    style={{ scale: 1 + r * 0.28 }}
                  />
                ))}
                <motion.img
                  src={girl}
                  alt="Character being generated with magical AI sparkles"
                  width={512}
                  height={512}
                  loading="lazy"
                  className="relative h-44 w-auto sm:h-56"
                  initial={{ opacity: 0.3, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-card/85 px-4 py-2 text-xs font-semibold text-secondary-foreground backdrop-blur soft-shadow">
                <Sparkles size={14} className="text-primary" /> Creating your character…
              </div>
            </div>
          </div>
        </motion.div>

        <Connector />

        {/* 03 CUSTOMIZE */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <StageLabel n="03" title="CUSTOMIZE" />
          <div className={`${stageShell} mt-5 bg-gradient-to-br from-peach/60 via-cream to-lavender/60 p-8 sm:p-12`}>
            <Particles count={6} />
            <div className="relative grid items-center gap-8 sm:grid-cols-[1fr_1.1fr]">
              <div className="relative flex justify-center">
                <motion.img
                  src={girl}
                  alt="Character updating live as choices change"
                  width={512}
                  height={512}
                  loading="lazy"
                  className="h-44 w-auto sm:h-56"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute -right-2 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground soft-shadow"
                  animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                >
                  Updating ✨
                </motion.span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Scissors, label: "Hair", swatches: ["bg-primary", "bg-lumi", "bg-peach"] },
                    { icon: Shirt, label: "Clothing", swatches: ["bg-lavender", "bg-blush", "bg-cream"] },
                    { icon: Palette, label: "Colors", swatches: ["bg-peach", "bg-primary", "bg-lavender"] },
                    { icon: Gem, label: "Accessories", swatches: ["bg-lumi", "bg-cream", "bg-blush"] },
                  ].map((c) => (
                    <motion.div
                      key={c.label}
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-card bg-card/85 p-3 backdrop-blur soft-shadow"
                    >
                      <div className="flex items-center gap-2">
                        <c.icon size={15} className="text-primary" />
                        <span className="text-xs font-semibold text-secondary-foreground">{c.label}</span>
                      </div>
                      <div className="mt-2.5 flex gap-1.5">
                        {c.swatches.map((s) => (
                          <span key={s} className={`h-5 w-5 rounded-full ${s} ring-1 ring-border/60`} />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground soft-shadow">
                    <Mic size={12} /> “Make the dress blue.”
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-[11px] font-medium text-muted-foreground backdrop-blur">
                    <Keyboard size={12} /> Type your idea
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <Connector />

        {/* 04 PLAY */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <StageLabel n="04" title="PLAY" />
          <div className={`${stageShell} mt-5 bg-gradient-to-b from-lavender/70 via-blush/60 to-peach/70 p-8 pb-0 sm:p-12 sm:pb-0`}>
            <Particles count={10} />
            {/* collectibles */}
            {[
              { Icon: Star, pos: "left-[12%] top-[18%]", d: 0 },
              { Icon: Gem, pos: "right-[16%] top-[12%]", d: 0.6 },
              { Icon: Sparkles, pos: "right-[10%] bottom-[38%]", d: 1.2 },
              { Icon: Star, pos: "left-[20%] bottom-[42%]", d: 1.8 },
            ].map(({ Icon, pos, d }, i) => (
              <motion.span
                key={i}
                aria-hidden
                className={`absolute ${pos} flex h-10 w-10 items-center justify-center rounded-2xl bg-card/85 text-primary backdrop-blur soft-shadow`}
                animate={{ y: [0, -12, 0], rotate: [-6, 6, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: d, ease: "easeInOut" }}
              >
                <Icon size={18} />
              </motion.span>
            ))}
            <div className="relative flex flex-col items-center">
              <motion.img
                src={girl}
                alt="Finished character playing inside a magical game world"
                width={512}
                height={512}
                loading="lazy"
                className="h-48 w-auto drop-shadow-[0_20px_40px_rgba(180,120,150,0.28)] sm:h-64"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* game ground */}
              <div
                aria-hidden
                className="-mt-6 h-24 w-[130%] rounded-t-[100%] bg-gradient-to-b from-cream to-blush/70"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
