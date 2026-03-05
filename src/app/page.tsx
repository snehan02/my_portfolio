import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050510] text-white">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </main>
    );
}
