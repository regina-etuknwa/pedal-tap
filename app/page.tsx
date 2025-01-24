import AboutEtibuildSection from './components/AboutEtibuildSection';
import AboutPedalTapSection from './components/AboutPedalTapSection';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
        <div>
          <HeroSection id="hero-section" />
          <AboutPedalTapSection id="about-pedal-tap-section" />
          <AboutEtibuildSection id="about-etibuild-section" />
          <section id="contact-us-section" style={{ padding: '4rem', height: '100vh', backgroundColor: '#c8e6c9' }}>
            <h1>Contact Us</h1>
          </section>
        </div>
      );
    }
