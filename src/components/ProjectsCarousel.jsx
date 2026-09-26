import { useState } from 'react';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsCarousel({ projects }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent(i => (i === 0 ? projects.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent(i => (i === projects.length - 1 ? 0 : i + 1));
  };

  const project = projects[current];

  const variants = {
    enter:  dir => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   dir => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative w-full">
      {/* Main card */}
      <div className="relative overflow-hidden border-brutal-thick shadow-brutal-lg bg-[#F8F8F5]" style={{ minHeight: '520px' }}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

              {/* Left — Image */}
              <div
                className="relative overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-[#111111]"
                style={{ minHeight: '300px', background: project.color }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center absolute inset-0" style={{ background: project.color }}>
                  <span className="font-anton text-8xl text-[#F8F8F5]" style={{ WebkitTextStroke: '3px #111111' }}>
                    {current + 1 < 10 ? `0${current + 1}` : current + 1}
                  </span>
                </div>

                {/* Counter badge */}
                <div className="absolute top-4 left-4 bg-[#111111] text-[#F8F8F5] font-mono text-xs px-3 py-1 border-2 border-[#F8F8F5]">
                  {current + 1 < 10 ? `0${current + 1}` : current + 1} / {projects.length < 10 ? `0${projects.length}` : projects.length}
                </div>
              </div>

              {/* Right — Content */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  {/* Color dot + title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-4 border-brutal rounded-full flex-shrink-0" style={{ background: project.color }} />
                    <span className="font-mono text-xs tracking-widest text-[#666]">// PROJECT</span>
                  </div>

                  <h3 className="font-anton text-[clamp(28px,4vw,52px)] leading-tight mb-6">
                    {project.title}
                  </h3>

                  <p className="font-inter text-base text-[#444] leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="font-mono text-xs border-brutal px-3 py-1"
                        style={{ background: project.color === '#EFCF35' ? '#EFCF35' : '#EFCF35' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-grotesk font-bold text-sm border-brutal px-6 py-3 bg-[#111111] text-[#F8F8F5] hover:-translate-y-1 hover:shadow-brutal transition-all duration-200"
                  >
                    <FiGithub /> CODE
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-grotesk font-bold text-sm border-brutal px-6 py-3 hover:bg-[#111111] hover:text-[#F8F8F5] hover:-translate-y-1 transition-all duration-200"
                  >
                    <FiExternalLink /> VIEW
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        {/* Prev / Next buttons */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="border-brutal p-3 bg-[#F8F8F5] shadow-brutal hover:-translate-y-1 hover:bg-[#111111] hover:text-[#F8F8F5] transition-all duration-200"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="border-brutal p-3 bg-[#F8F8F5] shadow-brutal hover:-translate-y-1 hover:bg-[#111111] hover:text-[#F8F8F5] transition-all duration-200"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="border-brutal transition-all duration-200"
              style={{
                width: i === current ? '32px' : '12px',
                height: '12px',
                background: i === current ? '#111111' : '#F8F8F5',
              }}
            />
          ))}
        </div>

        {/* Swipe hint */}
        <span className="font-mono text-xs text-[#666] hidden md:block">
          ← SWIPE →
        </span>
      </div>
    </div>
  );
}
