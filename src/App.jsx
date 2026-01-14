import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import AboutSection from "./components/AboutSection";
import ImmersiveActivitiesSection from "./components/ImmersiveActivitiesSection";
import Carousel from "./components/Carousel";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import TripAdvisorSection from "./components/TripAdvisorSection";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <AboutSection />
      <TripAdvisorSection />
      <ImmersiveActivitiesSection />
      <Carousel />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
