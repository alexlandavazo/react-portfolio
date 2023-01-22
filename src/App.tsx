import LoremIpsunPage from './components/LoremIpsunPage';
import ScrollProgressBar from './components/ScrollProgressBar';
import AnimatedText from './components/AnimatedText';
import './App.css';

function App() {
  return (
    <div>
      <ScrollProgressBar />
      <AnimatedText text="Alex Landavazo" className="text-9xl text-center" />
      <LoremIpsunPage />
    </div>
  );
}

export default App;
