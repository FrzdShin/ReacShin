import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const links = [
    { label: "Features", href: "#features" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
];

export default function Nav() {
    const [isBrandTextPressed, setIsBrandTextPressed] = useState(false);

    const resetBrandText = () => setIsBrandTextPressed(false);

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav
                    aria-label="Main navigation"
                    className="flex min-h-16 items-center justify-between gap-4"
                >
                    <a
                        href="#home"
                        aria-label="ReacShin home"
                        onPointerUp={resetBrandText}
                        onPointerCancel={resetBrandText}
                        onPointerLeave={resetBrandText}
                        onBlur={resetBrandText}
                        className="inline-flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                        <span
                            aria-hidden="true"
                            className="grid size-9 place-items-center rounded-xl bg-ink text-[10px] font-black tracking-[0.12em] text-white transition-colors duration-200 hover:bg-brand"
                        >
              RS
            </span>

                        {/* brand-text press effect */}
                        <span
                            onPointerDown={() => setIsBrandTextPressed(true)}
                            className={`font-sans text-xl font-bold tracking-tight transition-colors duration-150 ${
                                isBrandTextPressed ? "text-brand" : "text-ink"
                            }`}
                        >
              ReacShin<span className="text-brand">.</span>
            </span>
                    </a>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded-md text-sm font-medium text-muted transition-colors duration-200 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <a
                        href="#contact"
                        className="hidden items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:inline-flex"
                    >
                        Let's talk
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                </nav>
            </div>
        </header>
    );
}