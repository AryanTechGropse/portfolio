"use client";
import Banner from "./Home/Banner";
import About from "./Home/About";
import SelectedWorks from "./Home/SelectedWorks";
import WhatIDo from "./Home/WhatIDo";
import ContactForm from "./Home/ContactForm";

export default function Home() {
    return (
        <main className="w-full">
            <section className="h-screen snap-start snap-always">
                <Banner />
            </section>
            <section className="h-screen snap-start snap-always">
                <About />
            </section>
            <section className="snap-start">
                <SelectedWorks />
            </section>
            <section className="snap-start">
                <WhatIDo />
            </section>
            <section className="snap-start">
                <ContactForm />
            </section>
        </main>
    );
}
