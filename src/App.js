// import About from "./components/About";
import Carrousel from "./components/Carrousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
// import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <SocialLinks /> */}
      {/* <About /> */}
      <Services />
      <Carrousel />
      <Contact />
      <Footer />
    </div>
  );
}
