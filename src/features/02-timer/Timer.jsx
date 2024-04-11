import React, { useEffect, useRef, useState } from "react";
import startSound from "../../sounds/start.mp3";
import pauseSound from "../../sounds/pause.mp3";
import endSound from "../../sounds/end.mp3";
import Button from "../../utils/Button";

function Timer() {
  const [inputTime, setInputTime] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startAudioRef = useRef(null);
  const pauseAudioRef = useRef(null);
  const endAudioRef = useRef(null);

  useEffect(() => {
    let intervalId;

    if (isActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 1) {
      clearInterval(intervalId);
      setIsActive(false);
      endAudioRef.current.play(); // Play end sound when timer finishes
    }

    return () => clearInterval(intervalId);
  }, [isActive, seconds]);

  function formatTime(secs) {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const remainingSeconds = secs % 60;

    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  function resetTimer() {
    setSeconds(0);
    setInputTime("");
    setIsActive(false);
  }

  function toggleTimer() {
    setIsActive((prev) => !prev);
    setInputTime("");

    if (!isActive)
      startAudioRef.current.play(); // Play start sound when timer starts
    else pauseAudioRef.current.play(); // Play pause sound when timer pauses
  }

  function handleInputChange(e) {
    e.preventDefault();
    const event = e.target.value;
    setInputTime(event);
  }

  // function handleStartTimer(e) {
  //   e.preventDefault();
  //   setIsActive(true);
  //   setSeconds(Number(inputTime) * 60);
  //   setInputTime("");
  // }

  function handleSetTimer(e) {
    e.preventDefault();
    if (!inputTime) return;

    setSeconds(inputTime * 60);
  }

  if (isActive || seconds > 0)
    return (
      <div className="bg-custom-bgInput  drop-shadow flex flex-col border-none rounded-[5px] pl-5 pr-5 py-5 items-center justify-center gap-4 h-40 ">
        <h2 className="text-custom-baseTextColor text-4xl p-2 rounded-[8px] drop-shadow">
          {formatTime(seconds)}
        </h2>
        <div className="flex flex-row items-start gap-2 mt-2">
          <Button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</Button>
          <audio ref={startAudioRef}>
            <source src={startSound} />
          </audio>
          <audio ref={pauseAudioRef}>
            <source src={pauseSound} />
          </audio>
          <audio ref={endAudioRef}>
            <source src={endSound} />
          </audio>
          <Button onClick={resetTimer}>Reset</Button>
        </div>
      </div>
    );

  if (!isActive)
    return (
      <>
        <div className="bg-custom-bgInput drop-shadow flex flex-col border-none rounded-[5px] pl-5 pr-5 py-5 items-center justify-center gap-4 h-40">
          <h1 className="text-custom-baseTextColor font-semibold">
            Timer to focus:
          </h1>
          <form
            onSubmit={handleSetTimer}
            className="flex flex-col gap-2 items-center"
          >
            <input
              className={
                "text-custom-baseTextColor bg-custom-bgTimer border border-solid hover:drop-shadow-md shadow-3xl  focus:ring ring-focusRing focus:outline-focusRing  shadow-sm rounded-[5px] px-1 py-1  my-2 w-full focus:outline-none  focus:border-blue-500 text-center"
              }
              type="number"
              value={inputTime}
              onChange={handleInputChange}
              placeholder="Enter time in minutes"
              disabled={isActive && seconds > 1}
            />
            <Button onClick={handleSetTimer}>Set timer</Button>
          </form>
        </div>
      </>
    );
}

export default Timer;
