import React, { useState, useEffect } from 'react';

const Login_admin = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handlePlay = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleClear = () => {
    setIsRunning(false);
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{time.toLocaleTimeString()}</h1>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Login_admin;
