import { useState, useEffect } from "react";

const Timer = ({ onTimeUpdate }: any) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const totalDuration = 3600;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prevElapsed) => {
        if (prevElapsed >= totalDuration) {
          clearInterval(timer); // Stop when the timer reaches 14:59
          return prevElapsed;
        }
        const newElapsed = prevElapsed + 1;

        // Calculate hours, minutes, and seconds
        const newHours = 14 + Math.floor(newElapsed / 3600);
        const newMinutes = Math.floor((newElapsed % 3600) / 60);
        const newSeconds = newElapsed % 60;

        setHours(newHours);
        setMinutes(newMinutes);
        setSeconds(newSeconds);

        onTimeUpdate(newElapsed, totalDuration);

        return newElapsed;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="employee-hrs pt-4">
      {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds} Hours
    </span>
  );
};

export default Timer;
