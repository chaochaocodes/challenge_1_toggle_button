import React from "react";
import { yogaPoses, audioSymbols } from "../src/media/gifs/animationRoster";
import Toggle from "./components/Toggle";
import "./App.css";
import { forestAmbience, relaxMusic, whipSound } from "./media/audio/playList";

function App() {
  const toggleAmbienceMusic = stateIndex => {
    const bgAudio = document.getElementById("backgroundSound");
    const bgMusic = document.getElementById("music");

    bgAudio.volume = 0.3;
    bgMusic.volume = 0.3;

    if (bgAudio.paused) {
      bgAudio.play();
      bgMusic.play();
    } else {
      bgAudio.pause();
      bgMusic.pause();
    }
  };

  const playWhipSound = () => {
    document.getElementById("whip").play();
  };

  return (
    <div className="App">
      <Toggle
        collection={yogaPoses}
        buttonStyle="bearButton"
        onClickEvent={playWhipSound}
      />

      <Toggle
        collection={audioSymbols}
        buttonStyle="audioButton"
        onClickEvent={toggleAmbienceMusic}
      />

      <audio id="backgroundSound" loop>
        <source src={forestAmbience} type="audio/flac" />
      </audio>

      <audio id="music" loop>
        <source src={relaxMusic} type="audio/wav" />
      </audio>

      <audio id="whip">
        <source src={whipSound} type="audio/wav" />
      </audio>
    </div>
  );
}

export default App;
