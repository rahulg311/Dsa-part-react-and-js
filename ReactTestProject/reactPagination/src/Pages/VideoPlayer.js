import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Clock } from 'lucide-react';
import html2canvas from 'html2canvas';

function VideoPlayer() {
  const videoRef = useRef(null); // Reference to the video element
  const [currentTime, setCurrentTime] = useState(0); // State for current time
  const [duration, setDuration] = useState(0); // State for total duration

  // When video metadata is loaded, set the duration and the current time from localStorage
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);

      // Retrieve the saved time from localStorage and set it, if it exists
      const savedTime = localStorage.getItem('video');
      if (savedTime) {
        const parsedTime = parseFloat(savedTime);
        videoRef.current.currentTime = parsedTime;
        setCurrentTime(parsedTime);
      }

      console.log('videoRef.current.duration:', videoRef.current.duration);
    }
  };

  // When the video time updates, set the current time and store it in localStorage
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      localStorage.setItem('video', videoRef.current.currentTime.toString());
    }
  };

    // Prevent users from changing the video progress manually
    const handleSeeking = () => {
      if (videoRef.current) {
        // If the user tries to seek ahead, reset the time to the current time
        if (videoRef.current.currentTime > currentTime) {
          videoRef.current.currentTime = currentTime;
        }
      }
    };

    const screenshotRef = useRef();

    const handleScreenshot = () => {
      const element = screenshotRef.current;
  
      html2canvas(element, {
        useCORS: true, // This ensures cross-origin images like videos are captured
      }).then((canvas) => {
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'screenshot.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url); // Clean up the URL object after use
        }, 'image/png');
      });
    };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center" ref={screenshotRef}>
        <div className="col-md-8 text-center">
          <div className="card shadow-lg">
            <div className="card-body">
            <video
                ref={videoRef}
                className="img-fluid"
                controls
                onLoadedMetadata={handleLoadedMetadata} // Fires when metadata is loaded
                onTimeUpdate={handleTimeUpdate} // Fires when playback position changes
                onSeeking={handleSeeking} // Prevent seeking (manually changing time)
                style={{ borderRadius: '10px' }}
              >
                <source
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="mt-3">
                <p className=''>
                <div className="d-flex align-items-center mb-2">
                  <Clock className="text-primary me-2" />
                  <span className="fw-semibold">Current Time:</span>
                  <span className="ms-2">{currentTime.toFixed(2)} seconds /</span>
                </div>
                <div className="d-flex align-items-center">
                  <Clock className="text-warning me-2" />
                  <span className="fw-semibold">  Total Duration</span>
                  <span className="ms-2"> : {duration.toFixed(2)} seconds</span>
                </div>
                 
                <button onClick={handleScreenshot}>Take Screenshot</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
