
import './App.css';
import PhilosophySection from './views/PhilosophySection/PhilosophySection';
import HeroSection from './views/HeroSection/HeroSection';
import BenefitSection from './views/BenefitSection/BenefitSection';
import ProductSection from './views/ProductSection/ProductSection';
import CallToActionSection from './views/CallToActionSection/CallToActionSection';
import Footer from './views/Footer/Footer'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <PhilosophySection />
      <BenefitSection />
      <ProductSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App;