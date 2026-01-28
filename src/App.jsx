import { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RainStory from "./pages/RainStory";
import BickStory from "./pages/BickStory";

export default function App() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  const startMusic = () => {
    audioRef.current.play();
    setStarted(true);
  };

  return (
    <>
      {!started && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <button
            onClick={startMusic}
            className="px-8 py-4 bg-pink-500 text-white text-xl rounded-2xl shadow-lg animate-pulse"
          >
            💖 Tap to Enter 💖
          </button>
        </div>
      )}

      {/* GLOBAL SONG */}
      <audio ref={audioRef} loop>
        <source src="/birthday-song.mp3" type="audio/mpeg" />
      </audio>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rain" element={<RainStory />} />
        <Route path="/bick" element={<BickStory />} />
      </Routes>
    </>
  );
}
