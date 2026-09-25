import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const shapes = ['star', 'circle', 'square', 'scribble'];

function StarSVG({ color }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 2L24.5 15.5H38.5L27.5 24L31.5 38L20 30L8.5 38L12.5 24L1.5 15.5H15.5L20 2Z"
        fill={color} stroke="#111111" strokeWidth="2.5" />
    </svg>
  );
}

function ScribbleSVG({ color }) {
  return (
    <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
      <path d="M2 15 Q10 2 20 15 Q30 28 40 15 Q50 2 58 15"
        stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function FloatingShape({ type, color = '#F2388F', style = {} }) {
  const ref = useRef(null);
  const shapeType = type || shapes[Math.floor(Math.random() * shapes.length)];

  useEffect(() => {
    const delay = Math.random() * 3;
    const duration = 3 + Math.random() * 3;
    gsap.to(ref.current, {
      y: -25,
      rotation: shapeType === 'star' ? 360 : 15,
      duration,
      delay,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  const renderShape = () => {
    switch (shapeType) {
      case 'star': return <StarSVG color={color} />;
      case 'circle': return (
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: color, border: '3px solid #111111' }} />
      );
      case 'square': return (
        <div style={{ width: 36, height: 36, background: color, border: '3px solid #111111', transform: 'rotate(15deg)' }} />
      );
      case 'scribble': return <ScribbleSVG color={color} />;
      default: return <StarSVG color={color} />;
    }
  };

  return (
    <div ref={ref} className="absolute pointer-events-none select-none" style={style}>
      {renderShape()}
    </div>
  );
}
