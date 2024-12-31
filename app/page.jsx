import About from "@/sections/about";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import Services from "@/sections/services";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
