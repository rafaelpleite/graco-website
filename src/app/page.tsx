import Hero from '../sections/Hero';
import CoreTracks from '../sections/CoreTracks';
import Moviments from '../sections/Moviments';
import Contact from '../sections/Contact';

function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <CoreTracks />
      <Moviments />
      <Contact/>
    </div>
  );
}

export default Home;
