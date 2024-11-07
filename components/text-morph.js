import React, { useState, useEffect } from 'react';

export const TextMorph2 = () => {
  return <div className="font-junicode">
    {
      Array.from("Brian and Aagam's Lab").map((char, idx) => (
        <span key={idx} className="transition-opacity duration-2000 ease-in-out" style={{transform: "scale(0.5)"}}>
          {char}
        </span>
      ))
    }
  </div>
}

const TextMorph = () => {
  const [stage, setStage] = useState(0);
  const [opacity, setOpacity] = useState({});
  const [width, setWidth] = useState({});
  
  useEffect(() => {
    let timer;
    
    const animate = () => {
      if (stage === 0) {
        // Fade out non-key letters very slowly
        setOpacity({
          l: 0,
          o: 0,
          r: 0,
          t: 0,
          y: 0
        });
        timer = setTimeout(() => setStage(1), 2000);
      } else if (stage === 1) {
        // Expand and simultaneously fade in new letters
        setWidth({
          aa: '200px',
          br: '200px'
        });
        setOpacity(prev => ({
          ...prev,
          ian: 1,
          gam: 1
        }));
        timer = setTimeout(() => setStage(2), 2500);
      } else if (stage === 2) {
        // Fade in remaining text very smoothly
        setOpacity(prev => ({
          ...prev,
          and: 1,
          s: 1,
          lab: 1
        }));
        timer = setTimeout(() => setStage(3), 2000);
      } else if (stage === 3) {
        // Pause at the end before resetting
        timer = setTimeout(() => {
          setStage(0);
          setOpacity({});
          setWidth({});
        }, 3000);
      }
    };

    timer = setTimeout(animate, 100);
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div className="flex items-center justify-center min-h-[200px] bg-gray-100 rounded-lg p-8 text-4xl font-serif">
      <div className="relative whitespace-nowrap">
        {stage === 0 && (
          <div className="transition-opacity duration-[2000ms] ease-in-out">
            laaboratory
          </div>
        )}
        
        {stage >= 1 && (
          <div className="flex items-baseline gap-2">
            <div 
              className="inline-block transition-all duration-[2500ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] origin-left overflow-hidden"
              style={{ 
                width: width.aa || 'auto',
                minWidth: '1.2em'
              }}
            >
              <span className="inline-block whitespace-nowrap">
                a
                <span 
                  className="transition-opacity duration-[2500ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
                  style={{ opacity: opacity.gam || 0 }}
                >
                  agam
                </span>
              </span>
            </div>
            
            <span 
              className="transition-opacity duration-[2000ms] ease-in-out"
              style={{ opacity: opacity.and || 0 }}
            >
              and
            </span>
            
            <div 
              className="inline-block transition-all duration-[2500ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] origin-left overflow-hidden"
              style={{ 
                width: width.br || 'auto',
                minWidth: '1.2em'
              }}
            >
              <span className="inline-block whitespace-nowrap">
                b
                <span 
                  className="transition-opacity duration-[2500ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
                  style={{ opacity: opacity.ian || 0 }}
                >
                  rian
                </span>
              </span>
            </div>
            
            <span 
              className="transition-opacity duration-[2000ms] ease-in-out"
              style={{ opacity: opacity.s || 0 }}
            >
              's
            </span>
            
            <span 
              className="transition-opacity duration-[2000ms] ease-in-out"
              style={{ opacity: opacity.lab || 0 }}
            >
              lab
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextMorph;