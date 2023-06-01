import { useEffect, useMemo, useState } from "react";

export function Timer({ initialSeconds, onCountdownComplete }: { initialSeconds: number; onCountdownComplete: () => void }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  const minutes = Math.floor(seconds / 60);

  const intervalId = useMemo(() => {
    return setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalId);
      onCountdownComplete();
    }
  }, [seconds]);

  return (
    <div className="border">
      {minutes}:{seconds}
    </div>
  );
}
