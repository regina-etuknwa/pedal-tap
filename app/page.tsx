import AboutEtibuildSection from './components/AboutEtibuildSection';
import AboutPedalTapSection from './components/AboutPedalTapSection';
import ContactUsSection from './components/ContactUsSection';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
        <div>
          <HeroSection id="hero-section" />
          <AboutPedalTapSection id="about-pedal-tap-section" />
          <AboutEtibuildSection id="about-etibuild-section" />
          <ContactUsSection id="contact-us-section" />
        </div>
      );
    }
