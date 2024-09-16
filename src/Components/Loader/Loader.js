import React from "react";
import './loader.css'

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#4F46E5"
          className="spinner-svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset="75"
          />
        </svg>
      </div>
      <div className="loading-text">Loading...</div>
    </div>
  );
}
