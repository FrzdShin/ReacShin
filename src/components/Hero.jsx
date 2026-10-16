import {
    ArrowDownRight,
    ArrowUpRight,
    Code2,
    Layers3,
    Sparkles,
} from "lucide-react";

const previewStats = [
    { label: "LAYOUT", value: "Flexible" },
    { label: "DETAIL", value: "Intentional" },
    { label: "BUILD", value: "Responsive" },
];

const strengths = [
    "Mobile-first",
    "Accessible",
    "Clean components",
];

export default function Hero() {
    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className="relative isolate scroll-mt-20 overflow-hidden bg-surface"
        >
            {/* rings */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-8 hidden size-[26rem] rounded-full border border-line lg:block"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 top-20 hidden size-80 rounded-full border border-brand/15 lg:block"
            />

            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
                {/* introduction */}
                <div className="relative z-10">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2">
                        <Sparkles
                            className="size-4 text-brand"
                            aria-hidden="true"
                        />

                        <span className="text-xs font-semibold tracking-wide text-ink sm:text-sm">
              FRONT-END DEVELOPER
            </span>
                    </div>

                    <h1
                        id="hero-heading"
                        className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-7xl"
                    >
                        Hi, I&apos;m Shin.
                        <span className="mt-1 block text-brand">
              I build polished interfaces.
            </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                        I work with React and Tailwind CSS to build responsive,
                        accessible web interfaces with reusable components and
                        maintainable code. Open to front-end opportunities.
                    </p>

                    {/* actions */}
                    <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row">
                        <a
                            href="#projects"
                            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        >
                            View projects

                            <ArrowUpRight
                                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                                aria-hidden="true"
                            />
                        </a>

                        <a
                            href="#about"
                            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        >
                            About me

                            <ArrowDownRight
                                className="size-4 transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                                aria-hidden="true"
                            />
                        </a>
                    </div>

                    <ul className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
                        {strengths.map((item) => (
                            <li
                                key={item}
                                className="inline-flex items-center gap-2"
                            >
                <span
                    aria-hidden="true"
                    className="size-2 rounded-full bg-brand"
                />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    aria-hidden="true"
                    className="relative mx-auto w-full max-w-xl lg:ml-auto"
                >
                    <div className="absolute -inset-4 rounded-[2rem] bg-brand/5 blur-2xl" />

                    <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-soft bg-ink p-4 shadow-2xl shadow-black/10 sm:p-6">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-brand text-[10px] font-black tracking-[0.12em] text-white">
                  RS
                </span>

                                <div>
                                    <p className="text-xs font-semibold text-white">
                                        ReacShin
                                    </p>

                                    <p className="mt-0.5 text-[10px] text-white/60">
                                        Developer portfolio / 001
                                    </p>
                                </div>
                            </div>

                            <Code2
                                className="size-5 text-white/60"
                                aria-hidden="true"
                            />
                        </div>

                        <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_0.85fr] sm:items-center">
                            <div>
                                <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-soft">
                                    FEATURED CONCEPT
                                </p>

                                <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                                    Make good ideas
                                    <span className="block text-brand-soft">
                    visible.
                  </span>
                                </h2>

                                <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
                                    A considered mix of structure, contrast, and
                                    personality.
                                </p>

                                <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-white/80">
                                    <span className="size-1.5 rounded-full bg-brand" />
                                    Design meets development
                                </div>
                            </div>

                            <div className="flex min-h-44 items-center justify-center overflow-hidden rounded-2xl bg-brand p-5">
                                <div className="relative grid size-28 rotate-[-8deg] place-items-center rounded-3xl border border-white/30 bg-brand-deep shadow-xl">
                                    <div className="absolute inset-3 rounded-2xl border border-white/20" />

                                    <Layers3
                                        className="size-12 text-white"
                                        strokeWidth={1.5}
                                    />

                                    <Sparkles className="absolute -right-2 -top-2 size-7 rounded-full bg-surface p-1.5 text-brand" />
                                </div>
                            </div>
                        </div>

                        {/* detail cards */}
                        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                            {previewStats.map((item) => (
                                <div
                                    key={item.label}
                                    className="min-w-0 rounded-xl border border-white/10 bg-white/4 p-3"
                                >
                                    <p className="text-[10px] font-semibold tracking-wider text-white/60">
                                        {item.label}
                                    </p>

                                    <p className="mt-2 truncate text-[11px] font-medium text-white sm:text-xs">
                                        {item.value}
                                    </p>

                                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                                        <div className="h-full w-2/3 rounded-full bg-brand" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}