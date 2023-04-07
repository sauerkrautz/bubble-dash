import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import SlidingMenu from "./components/SlidingMenu";
import Hero from "./components/Main/Hero";
import Nav from "./components/Main/Nav";
import SecondSection from "./components/Main/SecondSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mainContainer">
      <Nav />
      <Hero>
        <SlidingMenu />
      </Hero>
      <SecondSection />
    </div>
  );
}

export default App;
