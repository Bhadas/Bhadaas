import React from "react";
import './loader.css'
function LoadingAnimation() {
  return (
    <div className="loader-container">
    <div className="loader">
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
    </div>
  </div>
  );
}

export default LoadingAnimation;
