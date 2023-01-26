import LoremIpsunPage from './components/LoremIpsunPage';
import ScrollProgressBar from './components/ScrollProgressBar';
import AnimatedText from './components/AnimatedText';
import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <div>
      <ScrollProgressBar />
      <NavBar />
      <AnimatedText text="Alex Landavazo" className="text-9xl text-center" />
      <LoremIpsunPage />
    </div>
  );
}

export default App;
