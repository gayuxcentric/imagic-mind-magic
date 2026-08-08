import { motion } from "motion/react";
import { Sparkles, Wand2, Shirt, Palette, Crown, Star, Play } from "lucide-react";
import girl from "@/assets/lumi-girl.png";
import portalCreate from "@/assets/portal-create.png";
import portalStory from "@/assets/portal-story.png";
import portalWorld from "@/assets/portal-world.png";
import portalPlay from "@/assets/portal-play.png";

const portals = [
  {
    title: "Create Studio",
    desc: "Characters, outfits and objects.",
    img: portalCreate,
    tint: "from-blush to-peach",
    tag: "Create",
  },
  {
    title: "Story Adventures",
    desc: "Ideas become interactive stories.",
    img: portalStory,
    tint: "from-lavender/70 to-cream",
    tag: "Explore",
  },
  {
    title: "World Builder",
    desc: "Build and explore imaginative worlds.",
    img: portalWorld,
    tint: "from-cream to-lavender/60",
    tag: "Build",
  },
  {
    title: "Creative Challenges",
    desc: "Playful creativity challenges.",
    img: portalPlay,
    tint: "from-peach to-blush",
    tag: "Play",
  },
];

const styleChips = [
  { icon: Wand2, label: "Hair" },
  { icon: Shirt, label: "Clothes" },
  { icon: Palette, label: "Colors" },
  { icon: Crown, label: "Accessories" },
];

const floatWords = [
  { label: "Create", top: "12%", left: "6%", delay: 0 },
  { label: "Style", top: "68%", left: "3%", delay: 0.6 },
  { label: "Explore", top: "16%", right: "7%", delay: 1.1 },
  { label: "Play", top: "74%", right: "5%", delay: 1.6 },
];

export function GameJourney() {
  return (
    <section
      id="how"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      {/* dreamy world backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream via-blush/60 to-lavender/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-peach/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 bottom-10 h-[26rem] w-[26rem] rounded-full bg-lavender/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur">
            <Sparkles size={13} /> AI-powered creativity
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            FROM IMAGINATION TO ADVENTURE
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            One idea can become a hundred adventures.
          </p>
        </div>

        {/* the world */}
        <div className="relative mt-14 overflow-hidden rounded-[3rem] border border-border/50 bg-gradient-to-br from-cream/90 via-blush/70 to-lavender/50 p-6 soft-shadow-lg sm:p-10">
          {/* sparkles */}
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-primary/40"
              style={{
                top: `${(i * 37) % 92 + 3}%`,
                left: `${(i * 61) % 94 + 2}%`,
              }}
              animate={{ opacity: [0.15, 0.9, 0.15], scale: [0.7, 1.3, 0.7] }}
              transition={{
                duration: 3 + (i % 4),
                repeat: Infinity,
                delay: i * 0.23,
              }}
            />
          ))}

          {/* floating interaction words */}
          {floatWords.map((w) => (
            <motion.span
              key={w.label}
              className="pointer-events-none absolute hidden rounded-full bg-card/85 px-3.5 py-1.5 text-xs font-semibold text-foreground/80 backdrop-blur soft-shadow lg:block"
              style={{ top: w.top, left: w.left, right: w.right }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: w.delay }}
            >
              {w.label}
            </motion.span>
          ))}

          {/* center: character + live customization */}
          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                aria-hidden
                className="absolute inset-x-6 bottom-2 h-24 rounded-full bg-lumi/25 blur-2xl"
              />
              <img
                src={girl}
                alt="Pink-haired ImagicMind character standing in her creative world"
                width={520}
                height={520}
                loading="lazy"
                className="relative h-56 w-auto object-contain drop-shadow-xl sm:h-72"
              />
            </motion.div>

            {/* customization ring */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-2"
            >
              {styleChips.map((c, i) => (
                <motion.span
                  key={c.label}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/90 px-4 py-2 text-xs font-medium text-foreground/80 backdrop-blur soft-shadow"
                >
                  <c.icon size={14} className="text-primary" />
                  {c.label}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* portals */}
          <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {portals.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${p.tint} p-6 text-center soft-shadow`}
              >
                <span className="absolute left-4 top-4 rounded-full bg-card/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {p.tag}
                </span>
                <motion.img
                  src={p.img}
                  alt={p.title}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="mx-auto h-28 w-28 object-contain drop-shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3.5 py-1.5 text-xs font-semibold text-foreground/80 opacity-0 transition-opacity group-hover:opacity-100">
                  <Play size={12} className="text-primary" /> Enter
                </span>
              </motion.div>
            ))}
          </div>

          {/* loop hint */}
          <div className="relative mt-10 flex items-center justify-center gap-3 text-xs font-medium text-muted-foreground">
            <Star size={13} className="text-primary" />
            <span>
              Imagine → Create → Customize → Play → and a new adventure begins
            </span>
            <Star size={13} className="text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
