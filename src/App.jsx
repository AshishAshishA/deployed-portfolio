import { FaBeer } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Trophy from "./components/trophy";
import Work from "./components/work";
import Contact from "./components/contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Trophy />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}
