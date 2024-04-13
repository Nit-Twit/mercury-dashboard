"use client"
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = (position / maxScroll) * 100;
      setScrollPosition(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-[0.5vh] bg-secondary">
      <div
        className="h-full bg-primary"
        style={{ width: `${scrollPosition}%` }}
      />
    </div>
  );
};

export default ProgressBar;
