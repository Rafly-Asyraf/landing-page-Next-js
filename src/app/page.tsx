import About from "./componen/about";
import Contact from "./componen/contact";
import Feature from "./componen/feature";
import Hero from "./componen/hero";


export default function Home() {
  return (
    <div >
      <Hero />
      <Feature/>
      <About/>
      <Contact/>
    </div>
  );
}
