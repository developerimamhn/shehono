import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
          observer.disconnect(); // Stop observing once the animation starts
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isCounting) return;

    let startValue = 0;
    const increment = endValue / (duration / 10);
    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        clearInterval(interval);
        setCount(endValue);
      } else {
        setCount(Math.round(startValue));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [isCounting, endValue, duration]);

  return (
    <div ref={counterRef} style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
      {count}
    </div>
  );
};

export default AnimatedCounter;
