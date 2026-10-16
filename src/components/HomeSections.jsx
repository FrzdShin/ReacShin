import {
    ArrowUpRight,
    Code2,
    Layers3,
    Smartphone,
    Target,
} from "lucide-react";

const features = [
    {
        icon: Smartphone,
        title: "Mobile-first, always.",
        description:
            "Start with small screens, then scale layouts up for tablets and desktops.",
    },
    {
        icon: Target,
        title: "Every detail matters.",
        description:
            "Consistent typography, balanced spacing, and a clear visual hierarchy.",
    },
    {
        icon: Code2,
        title: "Built with purpose.",
        description:
            "Reusable React components and clean, maintainable UI code.",
    },
];

/*
 * mark:      [plain part, red part] of the preview logo
 * link:      GitHub URL or local path; use null for no link
 * external:  true if the link opens a new tab
 * linkLabel: visible text for the project's specific action
 */
const projects = [
    {
        category: "WEB EXPERIENCE",
        title: "Shinland",
        mark: ["Shin", "land."],
        description:
            "A personal portfolio built with React, TypeScript, Tailwind CSS, and Vite.",
        canvas: "bg-[#F1E8E3]",
        artwork: "bg-ink text-white",
        icon: Layers3,
        link: "https://github.com/FrzdShin/Shinland",
        external: true,
        linkLabel: "View source code",
    },
    {
        category: "PORTFOLIO",
        title: "Shin — Animated Portfolio",
        mark: ["Shin", "."],
        description:
            "A dark, interactive portfolio featuring bold visuals, animated details, and a responsive layout.",
        canvas: "bg-[#E9E9E7]",
        artwork: "bg-brand text-white",
        icon: Code2,
        link: "/projects/shin-portfolio.html",
        external: false,
        linkLabel: "View live demo",
    },
];

const steps = [
    "Start with a clear purpose.",
    "Design a consistent experience.",
    "Build and refine for every screen.",
];

export function Features() {
    return (
        <section
            id="features"
            aria-labelledby="features-heading"
            className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <p className="text-xs font-bold tracking-[0.2em] text-brand">
                        THE APPROACH
                    </p>

                    <h2
                        id="features-heading"
                        className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
                    >
                        Good design goes beyond looks.
                    </h2>

                    <p className="mt-4 max-w-xl leading-7 text-muted">
                        A great interface should feel clear, work reliably, and adapt
                        naturally to the person using it.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                key={feature.title}
                                className="rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-brand/40 motion-reduce:transition-none sm:p-7"
                            >
                                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>

                                    <span className="text-xs font-semibold tracking-widest text-muted">
                    0{index + 1}
                  </span>
                                </div>

                                <h3 className="mt-6 text-lg font-bold text-ink">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-muted">
                                    {feature.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export function Projects() {
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="scroll-mt-20 bg-surface py-16 sm:py-20 lg:py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-xs font-bold tracking-[0.2em] text-brand">
                            SELECTED PROJECTS
                        </p>

                        <h2
                            id="projects-heading"
                            className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
                        >
                            Ideas, made tangible.
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-muted">
                        Things I&apos;ve built, and the thinking behind each one.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {projects.map((project, index) => {
                        const Icon = project.icon;

                        return (
                            <article
                                key={project.title}
                                className="group min-w-0 rounded-2xl border border-line bg-white p-3 shadow-sm transition-[border-color,box-shadow] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-brand/30 hover:shadow-lg hover:shadow-black/5 active:border-brand/50 motion-reduce:transition-none sm:p-4"
                            >
                                {/* decorative preview — not clickable */}
                                <div
                                    className={`aspect-[5/4] overflow-hidden rounded-xl p-4 sm:p-5 ${project.canvas}`}
                                >
                                    <div className="flex h-full flex-col justify-between rounded-xl border border-black/5 bg-white/75 p-3 shadow-sm sm:p-4">
                                        <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-black tracking-tight text-ink">
                        {project.mark[0]}
                          <span className="text-brand">
                          {project.mark[1]}
                        </span>
                      </span>

                                            <span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold tracking-wide text-muted">
                        PROJECT 0{index + 1}
                      </span>
                                        </div>

                                        <div className="grid grid-cols-[1fr_0.8fr] items-end gap-3">
                                            <div aria-hidden="true">
                                                <div className="h-2 w-11/12 rounded-full bg-ink" />
                                                <div className="mt-2 h-2 w-2/3 rounded-full bg-muted/50" />
                                                <div className="mt-4 h-6 w-20 rounded-md bg-brand" />
                                            </div>

                                            <div
                                                className={`grid aspect-square place-items-center rounded-xl transition-colors duration-[400ms] ${project.artwork}`}
                                            >
                                                <Icon
                                                    className="size-9 transition-transform duration-[400ms] ease-out md:group-hover:rotate-3 motion-reduce:transform-none motion-reduce:transition-none"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* info */}
                                <div className="px-2 pb-2 pt-5">
                                    <p className="text-[11px] font-bold tracking-[0.15em] text-brand">
                                        {project.category}
                                    </p>

                                    <h3 className="mt-2 text-lg font-bold text-ink">
                                        {project.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-muted">
                                        {project.description}
                                    </p>

                                    {/* Only this specific action navigates */}
                                    <a
                                        href={project.link}
                                        target={project.external ? "_blank" : undefined}
                                        rel={
                                            project.external
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        aria-label={
                                            project.external
                                                ? `${project.linkLabel}: ${project.title} (opens in a new tab)`
                                                : `${project.linkLabel}: ${project.title}`
                                        }
                                        className="group/cta mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg text-sm font-semibold text-brand transition-colors duration-200 hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none"
                                    >
                                        {project.linkLabel}

                                        <ArrowUpRight
                                            className="size-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="scroll-mt-20 bg-ink py-16 text-white sm:py-20 lg:py-24"
        >
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
                <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-brand-soft">
                        ABOUT ME
                    </p>

                    <h2
                        id="about-heading"
                        className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                    >
                        Less noise.
                        <span className="block text-brand-soft">
              More intention.
            </span>
                    </h2>

                    <p className="mt-5 max-w-xl leading-7 text-white/70">
                        I&apos;m a front-end developer focused on interfaces that feel
                        polished: clear hierarchy, mobile-first layouts, accessible
                        markup, and components that stay easy to maintain.
                    </p>

                    <p className="mt-4 max-w-xl leading-7 text-white/70">
                        I learn by building, and this site is my sandbox. I&apos;m
                        looking for a team where I can ship real work and keep growing.
                    </p>
                </div>

                <ol className="rounded-2xl border border-white/10 bg-white/4 p-5 sm:p-7">
                    {steps.map((step, index) => (
                        <li
                            key={step}
                            className={`flex items-start gap-4 py-5 ${
                                index !== steps.length - 1
                                    ? "border-b border-white/10"
                                    : ""
                            }`}
                        >
              <span className="text-sm font-semibold text-brand-soft">
                0{index + 1}
              </span>

                            <p className="text-base font-medium text-white/90">
                                {step}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="scroll-mt-20 bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-brand px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-28 size-72 rounded-full border border-white/20"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-16 size-52 rounded-full border border-white/15"
                />

                <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-xs font-bold tracking-[0.2em] text-white/80">
                            OPEN TO WORK
                        </p>

                        <h2
                            id="contact-heading"
                            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                        >
                            Let&apos;s build something together.
                        </h2>

                        <p className="mt-4 max-w-xl leading-7 text-white/85">
                            I&apos;d love to contribute to real projects and work with a
                            team. If that sounds like yours, send me a message.
                        </p>
                    </div>

                    <a
                        href="mailto:farzaad.shin@gmail.com"
                        className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-brand-deep px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-darker focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:self-auto"
                    >
                        Let&apos;s talk

                        <ArrowUpRight
                            className="size-4"
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export function SiteFooter() {
    return (
        <footer className="border-t border-line bg-surface">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <a
                    href="#home"
                    aria-label="ReacShin home"
                    className="w-fit rounded-lg text-lg font-bold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                    ReacShin<span className="text-brand">.</span>
                </a>

                <p className="text-xs leading-5 text-muted">
                    Thoughtful design. Clean code. Better experiences.
                </p>

                <a
                    href="#home"
                    className="inline-flex w-fit items-center gap-1 rounded-lg text-xs font-semibold text-muted transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                    Back to top

                    <ArrowUpRight
                        className="size-3.5"
                        aria-hidden="true"
                    />
                </a>
            </div>
        </footer>
    );
}