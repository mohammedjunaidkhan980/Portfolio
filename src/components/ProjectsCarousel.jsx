import { useState } from 'react';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <div className="bg-[#F8F8F5] border-brutal-thick h-full flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden border-b-4 border-[#111111]" style={{ height: '220px', background: project.color }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="hidden w-full h-full items-center justify-center absolute inset-0" style={{ background: project.color }}>
          <span className="font-anton text-6xl text-[#F8F8F5]" style={{ WebkitTextStroke: '2px #111111' }}>
            {project.title.charAt(0)}
          </span>
        </div>
        <div className="absolute top-3 left-3 w-4 h-4 border-2 border-[#111111] rounded-full" style={{ background: project.color }} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-anton text-2xl mb-2 leading-tight">{project.title}</h3>
        <p className="font-inter text-sm text-[#444] mb-4 leading-relaxed flex-1">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map(t => (
            <span key={t} className="font-mono text-xs border-brutal px-2 py-0.5 bg-[#EFCF35]">{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 font-grotesk font-bold text-xs border-brutal px-4 py-2 bg-[#111111] text-[#F8F8F5] hover:bg-[#EFCF35] hover:text-[#111111] transition-colors duration-200">
            <FiGithub /> CODE
          </a>
          <a href={project.live} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 font-grotesk font-bold text-xs border-brutal px-4 py-2 hover:bg-[#111111] hover:text-[#F8F8F5] transition-colors duration-200">
            <FiExternalLink /> VIEW
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsCarousel({ projectSections }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent(i => (i === 0 ? projectSections.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent(i => (i === projectSections.length - 1 ? 0 : i + 1));
  };

  const section = projectSections[current];

  const variants = {
    enter:  dir => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   dir => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative w-full">
      {/* Section tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {projectSections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className="font-grotesk font-bold text-sm border-brutal px-5 py-2 transition-all duration-200 hover:-translate-y-1"
            style={{
              background: i === current ? s.color : '#F8F8F5',
              color: i === current && s.color === '#111111' ? '#F8F8F5' : '#111111',
              boxShadow: i === current ? '4px 4px 0px #111111' : '3px 3px 0px #111111',
            }}
          >
            {s.section}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {/* Section header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-5 h-5 border-brutal rounded-full" style={{ background: section.color }} />
              <span className="font-mono text-xs tracking-widest text-[#666]">{section.subtitle}</span>
            </div>

            {/* 2 project cards side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-3">
          <button onClick={prev}
            className="border-brutal p-3 bg-[#F8F8F5] shadow-brutal hover:-translate-y-1 hover:bg-[#111111] hover:text-[#F8F8F5] transition-all duration-200">
            <FiChevronLeft size={20} />
          </button>
          <button onClick={next}
            className="border-brutal p-3 bg-[#F8F8F5] shadow-brutal hover:-translate-y-1 hover:bg-[#111111] hover:text-[#F8F8F5] transition-all duration-200">
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {projectSections.map((s, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="border-brutal transition-all duration-200"
              style={{
                width: i === current ? '32px' : '12px',
                height: '12px',
                background: i === current ? section.color : '#F8F8F5',
              }}
            />
          ))}
        </div>

        <span className="font-mono text-xs text-[#666] hidden md:block">
          {current + 1} / {projectSections.length} SECTIONS
        </span>
      </div>
    </div>
  );
}
