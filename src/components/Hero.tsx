import { motion } from "motion/react";
import { Palette, Shirt, Sparkles, Scissors, Mic } from "lucide-react";
import girl from "@/assets/lumi-girl.png";

const bubbles = [
  { text: "Give her pink star hair ✨", pos: "left-0 top-6", delay: 0.5 },
  { text: "Make her dress blue 💙", pos: "right-0 top-40", delay: 0.9 },
  { text: "Add fairy wings 🪽", pos: "left-2 bottom-24", delay: 1.3 },
];

const controls = [
  { icon: Scissors, label: "Hair" },
  { icon: Shirt, label: "Clothes" },
  { icon: Palette, label: "Colors" },
  { icon: Sparkles, label: "Accessories" },
];

const sparkles = [
  { x: "12%", y: "18%", s: 10, d: 0 },
  { x: "78%", y: "12%", s: 14, d: 0.6 },
  { x: "88%", y: "58%", s: 8, d: 1.1 },
  { x: "22%", y: "72%", s: 12, d: 1.6 },
  { x: "60%", y: "88%", s: 9, d: 2.1 },
  { x: "45%", y: "8%", s: 7, d: 2.6 },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* dreamy layered background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blush via-cream to-lavender/50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-peach/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-[30rem] w-[30rem] rounded-full bg-lavender/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10rem] left-1/4 h-[24rem] w-[24rem] rounded-full bg-blush/70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-24">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-1.5 text-xs font-medium text-secondary-foreground backdrop-blur">
            <Sparkles size={13} className="text-primary" />
            AI-powered creativity for curious minds
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[0.98] tracking-tight text-foreground sm:text-5xl md:text-[3.75rem]">
            IMAGINE IT.
            <br />
            CREATE IT.
            <br />
            <span className="text-primary">MAKE IT YOURS.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg">
            ImagicMind helps children turn their ideas into characters, stories
            and creative experiences, with a safe AI companion by their side.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#waitlist"
              className="w-full rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Start Creating
            </a>
            <a
              href="#waitlist"
              className="w-full rounded-full border border-border bg-card/80 px-7 py-3.5 text-center text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card sm:w-auto"
            >
              Join the Waitlist
            </a>
          </div>
        </motion.div>

        {/* RIGHT — creative scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] border border-card/60 bg-gradient-to-b from-cream/80 via-blush/60 to-lavender/50 soft-shadow-lg backdrop-blur-sm sm:aspect-[5/5]">
            {/* organic glow behind character */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-peach/60 blur-3xl"
            />

            {/* sparkles */}
            {sparkles.map((sp, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute rounded-full bg-lumi/70"
                style={{ left: sp.x, top: sp.y, width: sp.s, height: sp.s }}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.25, 0.8] }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  delay: sp.d,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* character */}
            <motion.img
              src={girl}
              alt="A pink-haired girl character being created with the ImagicMind AI companion"
              width={1024}
              height={1024}
              className="absolute bottom-0 left-1/2 h-[86%] w-auto -translate-x-1/2 drop-shadow-[0_20px_40px_rgba(180,120,150,0.25)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Lumi companion */}
            <motion.div
              className="absolute right-[16%] top-[22%] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-lumi to-primary text-primary-foreground soft-shadow"
              animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-lumi/50 blur-xl" />
              <Sparkles size={24} className="relative" />
            </motion.div>

            {/* speech bubbles */}
            {bubbles.map((b) => (
              <motion.div
                key={b.text}
                initial={{ opacity: 0, y: 14, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: b.delay, ease: "easeOut" }}
                className={`absolute ${b.pos} max-w-[62%]`}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    delay: b.delay,
                    ease: "easeInOut",
                  }}
                  className="rounded-[1.5rem] rounded-bl-md border border-card bg-card/90 px-4 py-2.5 text-xs font-medium text-foreground soft-shadow backdrop-blur sm:text-sm"
                >
                  {b.text}
                </motion.div>
              </motion.div>
            ))}

            {/* styling controls */}
            <div className="absolute inset-x-4 bottom-4 rounded-[2rem] border border-card/70 bg-card/80 p-3 backdrop-blur-md soft-shadow">
              <div className="grid grid-cols-4 gap-2">
                {controls.map((c) => (
                  <motion.div
                    key={c.label}
                    whileHover={{ y: -3 }}
                    className="flex flex-col items-center gap-1.5 rounded-2xl bg-secondary/50 px-2 py-2.5"
                  >
                    <c.icon size={16} className="text-primary" />
                    <span className="text-[10px] font-semibold text-secondary-foreground sm:text-xs">
                      {c.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* voice pill */}
            <motion.div
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-semibold text-primary-foreground soft-shadow"
            >
              <Mic size={12} /> Listening…
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
