import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Drum = (props) => {
  const [playing, setPlaying] = useState(false);

  const playSound = () => {
    setPlaying(true);

    new Audio(props.sound).play();

    setTimeout(() => {
      setPlaying(false);
    }, 150);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === props.letter.toLowerCase()) {
        playSound();
      }
    });
  }, []);

  return (
    <div className={`drum ${playing ? "playing" : ""}`}>
      <div className="key" onClick={playSound}>
        {props.letter}
      </div>
    </div>
  );
};

export default Drum;
