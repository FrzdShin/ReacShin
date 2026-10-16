import { useEffect, useState } from "react";
import {
    House,
    Sparkles,
    FolderKanban,
    UserRound,
    Mail,
} from "lucide-react";

const items = [
    { label: "Home", href: "#home", icon: House },
    { label: "Features", href: "#features", icon: Sparkles },
    { label: "Projects", href: "#projects", icon: FolderKanban },
    { label: "About", href: "#about", icon: UserRound },
    { label: "Contact", href: "#contact", icon: Mail },
];

export default function MobileBottomNav() {
    const [activeHref, setActiveHref] = useState("#home");

    // track the section crossing the middle of the viewport
    useEffect(() => {
        const sections = items
            .map((item) => document.querySelector(item.href))
            .filter(Boolean);

        let frameId = 0;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter(
                    (entry) => entry.isIntersecting,
                );

                if (visibleEntries.length === 0) return;

                // Resolve simultaneous entries by checking document order.
                const currentSection = sections.find((section) =>
                    visibleEntries.some((entry) => entry.target === section),
                );

                if (currentSection) {
                    setActiveHref(`#${currentSection.id}`);
                }
            },
            {
                rootMargin: "-45% 0px -50% 0px",
                threshold: 0,
            },
        );

        sections.forEach((section) => observer.observe(section));

        // ensure Contact becomes active when reaching the page bottom
        const handleScroll = () => {
            if (frameId) return;

            frameId = window.requestAnimationFrame(() => {
                const documentElement = document.documentElement;
                const atBottom =
                    window.innerHeight + window.scrollY >=
                    documentElement.scrollHeight - 2;

                if (atBottom) {
                    setActiveHref("#contact");
                }

                frameId = 0;
            });
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);

            if (frameId) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return (
        <nav
            aria-label="Mobile navigation"
            className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 px-2 pt-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(17,17,17,0.04)] backdrop-blur-md md:hidden"
        >
            <div className="mx-auto grid w-full max-w-md grid-cols-5 gap-1">
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeHref === item.href;

                    return (
                        <a
                            key={item.href}
                            href={item.href}
                            aria-current={isActive ? "location" : undefined}
                            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none ${
                                isActive
                                    ? "text-brand"
                                    : "text-muted hover:bg-line/70 hover:text-ink"
                            }`}
                        >
                            <Icon
                                className="size-5"
                                strokeWidth={isActive ? 2.2 : 1.8}
                                aria-hidden="true"
                            />

                            <span
                                className={`whitespace-nowrap text-[11px] ${
                                    isActive ? "font-semibold" : "font-medium"
                                }`}
                            >
                {item.label}
              </span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}