import { useEffect, useMemo, useState } from "react";

const Timer = ({
  initialSeconds,
  onCountdownComplete,
}: {
  initialSeconds: number;
  onCountdownComplete: () => void;
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  const minutes = Math.floor(seconds / 60);

  const intervalId = useMemo(() => {
    return setInterval(() => {
      setSeconds(prev => {
        return prev - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("seconds: ", seconds);

    if (seconds === 0) {
      clearInterval(intervalId);
      onCountdownComplete();
    }
  }, [seconds]);

  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
};

export default Timer;
