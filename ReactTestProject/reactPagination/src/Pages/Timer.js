import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timer = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");




  useEffect(() => {
    if (isActive && time > 0) {
      ref.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(ref.current);
      setIsActive(false);
    }

    return () => {
      clearInterval(ref.current); // Cleanup interval
    };
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const handleClear = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
    clearInterval(ref.current);
  };

  


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center p-4 border rounded shadow">
          <h1 className="display-6 text-primary mb-4">React Timer</h1>
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Enter time in minutes"
            onChange={(e) => setTime(parseInt(e.target.value * 60, 10))}
          />
          <div className="mb-4">
            <span className="display-4 text-secondary">
              {minutes}:{seconds}
            </span>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <button
              className={`btn btn-lg ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={handleStart}
            >
              Start
            </button>
            <button
              className={`btn btn-lg ${isPaused && !isActive ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={handlePause}
            >
              Pause
            </button>
            <button
              className={`btn btn-lg ${!isActive && !isPaused ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
