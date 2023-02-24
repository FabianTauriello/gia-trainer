import { useEffect, useMemo, useState } from "react";

function useTimer() {
  const deadline = new Date().toString();
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);

  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(parsedDeadline - Date.now()), 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}

export default useTimer;
