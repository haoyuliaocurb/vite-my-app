import React, { useState, useEffect, useCallback } from 'react';

const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

function Timer() {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined = undefined;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeInSeconds(prevTime => prevTime + 1);
      }, 1000);
    } else if (intervalId) {
      clearInterval(intervalId);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const handleTogglePlay = useCallback(() => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  }, []);

  const handleReset = useCallback(() => {
    setTimeInSeconds(0);
    setIsRunning(false);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Timer</h1>
      <div style={{ fontSize: '3em', margin: '20px' }}>
        {formatTime(timeInSeconds)}
      </div>
      <div>
        <button onClick={handleTogglePlay} style={{ fontSize: '1.2em', marginRight: '10px' }}>
          {isRunning ? 'Stop' : 'Play'}
        </button>
        <button onClick={handleReset} style={{ fontSize: '1.2em' }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
