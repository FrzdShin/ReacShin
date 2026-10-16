import Nav from "./components/Nav.jsx";
import MobileBottomNav from "./components/MobileBottomNav.jsx";
import Hero from "./components/Hero.jsx";

import {
    Features,
    Projects,
    About,
    Contact,
    SiteFooter,
} from "./components/HomeSections.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-surface pb-24 md:pb-0">
            <Nav />

            <main>
                <Hero />
                <Features />
                <Projects />
                <About />
                <Contact />
            </main>

            <SiteFooter />

            <MobileBottomNav />
        </div>
    );
}