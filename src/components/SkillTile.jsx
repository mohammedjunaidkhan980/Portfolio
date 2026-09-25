import { useState } from 'react';

const rotations = [-6, -3, 0, 3, 6, -4, 4, -2, 2];

export default function SkillTile({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  const rot = rotations[index % rotations.length];

  return (
    <div
      className="border-brutal px-4 py-3 font-grotesk font-bold text-sm cursor-default select-none transition-all duration-200"
      style={{
        background: hovered ? skill.color : '#F8F8F5',
        color: hovered && skill.color === '#111111' ? '#F8F8F5' : '#111111',
        transform: hovered ? `rotate(${rot * -1}deg) translateY(-6px)` : `rotate(${rot}deg)`,
        boxShadow: hovered ? `4px 4px 0px #111111` : '3px 3px 0px #111111',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {skill.name}
    </div>
  );
}
