import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
