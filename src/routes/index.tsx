import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { Hero } from "@/components/Hero";
import kathrinaPhoto from "@/assets/kathrina.jpeg.asset.json";
import gayathriPhoto from "@/assets/gayathri.jpeg.asset.json";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ImagicMind — Where Young Minds Imagine Without Limits" },
      {
        name: "description",
        content:
          "ImagicMind is a safe AI-powered creative companion where children aged 5–12 imagine, create, and learn through magical experiences.",
      },
      { property: "og:title", content: "ImagicMind — Where Young Minds Imagine Without Limits" },
      {
        property: "og:description",
        content:
          "ImagicMind is a safe AI-powered creative companion where children aged 5–12 imagine, create, and learn through magical experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <Hero />
      <HowItWorks />
      <WhyTrust />
      <Storytelling />
      <Founders />
      <Waitlist />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-lumi text-lg font-bold text-primary-foreground font-display">
            i
          </span>
          <span className="text-lg font-semibold tracking-tight font-display">
            ImagicMind
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#how" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#trust" className="transition-colors hover:text-foreground">
            For parents
          </a>
          <a href="#founders" className="transition-colors hover:text-foreground">
            Founders
          </a>
        </div>
        <a
          href="#waitlist"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  );
}



const trusts = [
  {
    title: "Safe AI",
    desc: "Every interaction is designed for children — guarded, age-appropriate, and built with wellbeing at the center.",
  },
  {
    title: "Privacy First",
    desc: "Your family's data stays yours. We follow the strictest standards, including GDPR, with no ads and no tracking.",
  },
  {
    title: "Learning Through Play",
    desc: "Creativity meets curiosity. Children build confidence and problem-solving skills while having fun.",
  },
];

function WhyTrust() {
  return (
    <section id="trust" className="bg-gradient-to-b from-transparent via-cream/50 to-transparent py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="For parents"
          title="Why parents trust ImagicMind"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trusts.map((t) => (
            <div
              key={t.title}
              className="rounded-3xl border border-border/70 bg-card p-8 soft-shadow"
            >
              <h3 className="font-display text-xl font-semibold text-foreground">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Storytelling() {
  return (
    <section
      id="story"
      className="relative w-full overflow-hidden bg-gradient-to-br from-blush via-cream to-lavender/40 px-6 py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-peach/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-lavender/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          Created by Two Mothers.
          <br />
          <span className="text-primary">Built for Every Child.</span>
        </h2>
        <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            As mothers and technology leaders, we created ImagicMind because we
            wanted our own children to experience AI in a safe, creative and
            inspiring way.
          </p>
          <p>
            We believe AI should encourage imagination, build confidence and
            help children learn through play, rather than replace their
            creativity.
          </p>
        </div>
        <a
          href="#founders"
          className="mt-9 inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
        >
          Meet the Founders
        </a>
      </div>
    </section>
  );
}

const founders = [
  {
    name: "Kathrina Jall",
    role: "Co-Founder & CEO",
    bio: "Systems Engineer, Philips Healthcare. Mother of two with firsthand insight into children's digital experiences. Leads customer discovery, partnerships, and German go-to-market strategy.",
    linkedin: "https://www.linkedin.com/in/kathrinajall/",
    photo: kathrinaPhoto.url,
  },
  {
    name: "Gayathri Sekar",
    role: "Co-Founder & CTO",
    bio: "MBA in International Management. 10+ years of experience in software engineering and product development. Leads AI strategy, technology, and product innovation.",
    linkedin: "https://www.linkedin.com/in/gayathri-sekar-18858924/",
    photo: gayathriPhoto.url,
  },
];

function Founders() {
  return (
    <section id="founders" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <SectionHeading eyebrow="Our story" title="Meet the founders" />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {founders.map((f) => (
          <div
            key={f.name}
            className="rounded-3xl border border-border/70 bg-card p-8 soft-shadow"
          >
            <div className="flex items-center gap-5">
              <img
                src={f.photo}
                alt={`Portrait of ${f.name}`}
                width={128}
                height={128}
                loading="lazy"
                className="h-16 w-16 shrink-0 rounded-2xl object-cover soft-shadow"
              />
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {f.name}
                </h3>
                <p className="text-sm font-medium text-primary">{f.role}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {f.bio}
            </p>
            <a
              href={f.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${f.name} on LinkedIn`}
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section id="waitlist" className="px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush via-cream to-lavender/50 p-10 text-center soft-shadow-lg md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-peach/40 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-lavender/40 blur-2xl"
        />
        <div className="relative">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Join the First Families
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Be among the first to bring ImagicMind home. We'll let you know as
            soon as early access opens.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email address"
              className="w-full rounded-full border border-border bg-card/80 px-5 py-3.5 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Join Waitlist
            </button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-lumi text-sm font-bold text-primary-foreground font-display">
            i
          </span>
          <span className="font-display text-base font-semibold">
            ImagicMind
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#top" className="transition-colors hover:text-foreground">
            Contact
          </a>
          <a href="#top" className="transition-colors hover:text-foreground">
            Privacy
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ImagicMind on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ImagicMind. Made with care for young imaginations.
      </p>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
