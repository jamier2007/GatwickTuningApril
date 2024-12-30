import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TuningGauge = ({ label, beforeValue, afterValue, unit }) => {
  const [currentAfterValue, setCurrentAfterValue] = useState(beforeValue);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    let animationFrame;
    let startTime;

    if (inView) {
      setCurrentAfterValue(beforeValue);
      const animationDuration = 2500;
      startTime = Date.now();
      
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / animationDuration, 1);
        
        if (progress < 1) {
          setCurrentAfterValue(beforeValue + progress * (afterValue - beforeValue));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCurrentAfterValue(afterValue);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    } else {
      // Reset when out of view
      setCurrentAfterValue(beforeValue);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, beforeValue, afterValue]);

  const percentage = ((afterValue - beforeValue) / beforeValue) * 100;
  const formattedPercentage = percentage.toFixed(1);

  return (
    <div className="w-full bg-[#1E2532] text-white rounded-lg p-2 sm:p-6" ref={ref}>
      {/* Title */}
      <div className="text-center mb-2 sm:mb-4">
        <h2 className="text-lg sm:text-2xl font-bold uppercase">{label}</h2>
      </div>

      {/* Main Display */}
      <div className="flex flex-col justify-between gap-2 sm:gap-4 mb-2 sm:mb-4">
        {/* Before */}
        <div className="flex-1 bg-[#252B3B] rounded-lg p-2 sm:p-4 flex flex-col items-center justify-center">
          <div className="text-gray-400 text-xs sm:text-base mb-0.5 sm:mb-2">BEFORE</div>
          <div className={`text-2xl sm:text-5xl font-bold mb-0.5 transition-all duration-800 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {beforeValue}
          </div>
          <div className="text-gray-400 text-xs sm:text-base">{unit}</div>
        </div>

        {/* After */}
        <div className="flex-1 bg-[#252B3B] rounded-lg p-2 sm:p-4 flex flex-col items-center justify-center">
          <div className="text-blue-400 text-xs sm:text-base mb-0.5 sm:mb-2">AFTER</div>
          <div className={`text-2xl sm:text-5xl font-bold mb-0.5 text-blue-400 transition-all duration-800 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {Math.round(currentAfterValue)}
          </div>
          <div className="text-blue-400 text-xs sm:text-base">{unit}</div>
        </div>
      </div>

      {/* Percentage Increase */}
      <div className={`text-center text-green-400 text-sm sm:text-xl font-bold transition-all duration-800 delay-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        +{formattedPercentage}% Increase
      </div>
    </div>
  );
};

export default TuningGauge;