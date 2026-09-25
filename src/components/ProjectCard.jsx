import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const rotation = index % 2 === 0 ? '-1deg' : '1deg';

  return (
    <div
      ref={cardRef}
      className="bg-[#F8F8F5] border-brutal-thick shadow-brutal-lg group cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:rotate-0 hover:shadow-[12px_12px_0px_#111111]"
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* Image */}
      <div className="overflow-hidden border-b-4 border-[#111111] h-52 bg-[#111111] relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: project.color }}
          >
            <span className="font-anton text-4xl text-[#F8F8F5]" style={{ WebkitTextStroke: '2px #111111' }}>
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        {/* Color tag */}
        <div
          className="absolute top-3 left-3 w-4 h-4 border-2 border-[#111111] rounded-full"
          style={{ background: project.color }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-anton text-2xl mb-2 leading-tight">{project.title}</h3>
        <p className="font-inter text-sm text-[#444] mb-4 leading-relaxed">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map(t => (
            <span key={t} className="font-mono text-xs border-brutal px-2 py-0.5 bg-[#EFCF35]">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-grotesk font-bold text-xs border-brutal px-4 py-2 bg-[#111111] text-[#F8F8F5] hover:bg-[#EFCF35] hover:text-[#111111] transition-colors duration-200"
          >
            <FiGithub /> CODE
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-grotesk font-bold text-xs border-brutal px-4 py-2 hover:bg-[#111111] hover:text-[#F8F8F5] transition-colors duration-200"
          >
            <FiExternalLink /> VIEW
          </a>
        </div>
      </div>
    </div>
  );
}
