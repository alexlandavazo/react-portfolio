import LoremIpsunPage from "./components/LoremIpsunPage";
import ScrollProgressBar from "./components/ScrollProgressBar";
import AnimatedText from "./components/AnimatedText";
import AnimatedImage from "./components/AnimatedImage";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div>
      <ScrollProgressBar />
      <NavBar />
      <AnimatedText text="Alejandro Landavazo" className="text-9xl w-[800px]" />
      <AnimatedImage />
    </div>
  );
}

export default App;
