import HeroSection from './components/HeroSection';

export default function Home() {
  return (
        <div>
          <HeroSection id="hero-section" />
          <section id="about-pedal-tap-section" style={{ padding: '4rem', height: '100vh', backgroundColor: '#e0f7fa' }}>
            <h1>About Pedal Tap</h1>
          </section>
          <section id="about-us-section" style={{ padding: '4rem', height: '100vh', backgroundColor: '#ffe0b2' }}>
            <h1>About Us</h1>
          </section>
          <section id="contact-us-section" style={{ padding: '4rem', height: '100vh', backgroundColor: '#c8e6c9' }}>
            <h1>Contact Us</h1>
          </section>
        </div>
      );
    }
