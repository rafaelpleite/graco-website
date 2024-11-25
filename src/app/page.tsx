import Hero from '../sections/Hero';
import CoreTracks from '../sections/CoreTracks';
import Moviments from '../sections/Moviments';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <CoreTracks />
      <Moviments />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
