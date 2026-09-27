import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import FloatingShape from './FloatingShape';

export default function Hero() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });
    tl.fromTo(line1Ref.current,
      { y: 120, opacity: 0, skewY: 8 },
      { y: 0, opacity: 1, skewY: 0, duration: 0.9, ease: 'expo.out' }
    )
    .fromTo(line2Ref.current,
      { y: 120, opacity: 0, skewY: 8 },
      { y: 0, opacity: 1, skewY: 0, duration: 0.9, ease: 'expo.out' }, '-=0.6'
    )
    .fromTo(subtitleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.3'
    )
    .fromTo(badgeRef.current,
      { scale: 0, rotation: -10 },
      { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(2)' }, '-=0.3'
    )
    .fromTo(btnRef.current,
      { scale: 0, rotation: 20 },
      { scale: 1, rotation: 12, duration: 0.7, ease: 'back.out(2)' }, '-=0.4'
    );
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 md:px-16 overflow-hidden">

      {/* Floating decorations */}
      <FloatingShape type="star" color="#F2388F" style={{ top: '12%', right: '8%' }} />
      <FloatingShape type="circle" color="#2F73FF" style={{ top: '25%', right: '20%' }} />
      <FloatingShape type="square" color="#76E36A" style={{ bottom: '30%', left: '5%' }} />
      <FloatingShape type="scribble" color="#111111" style={{ bottom: '20%', right: '10%' }} />
      <FloatingShape type="star" color="#2F73FF" style={{ top: '60%', left: '15%' }} />

      {/* Hero text */}
      <div className="overflow-hidden mb-4">
        <h1
          ref={line1Ref}
          className="font-anton text-[clamp(72px,14vw,180px)] leading-none tracking-tight text-[#111111]"
          style={{ WebkitTextStroke: '2px #111111' }}
        >
          MOHAMMED
        </h1>
      </div>
      <div className="overflow-hidden mb-4">
        <h1
          ref={line2Ref}
          className="font-anton text-[clamp(72px,14vw,180px)] leading-none tracking-tight text-[#F2388F]"
          style={{
            WebkitTextStroke: '2px #111111',
            textShadow: '8px 8px 0px #111111',
            transform: 'rotate(-2deg)',
            display: 'inline-block'
          }}
        >
          JUNAID
        </h1>
      </div>

      {/* Social links below name */}
      <div className="flex items-center gap-4 mt-4 mb-6">
        <a
          href="mailto:junaidkhan91020@gmail.com"
          className="flex items-center gap-2 font-mono text-xs border-brutal px-3 py-2 bg-[#F8F8F5] shadow-brutal hover:-translate-y-1 transition-all duration-200"
        >
          <FiMail size={14} /> junaidkhan91020@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-junaid-khan/"
          target="_blank" rel="noreferrer"
          className="flex items-center gap-2 font-mono text-xs border-brutal px-3 py-2 bg-[#2F73FF] text-[#F8F8F5] shadow-brutal hover:-translate-y-1 transition-all duration-200"
        >
          <FiLinkedin size={14} /> LinkedIn
        </a>
        <a
          href="https://github.com/mohammedjunaidkhan980"
          target="_blank" rel="noreferrer"
          className="flex items-center gap-2 font-mono text-xs border-brutal px-3 py-2 bg-[#111111] text-[#F8F8F5] shadow-brutal hover:-translate-y-1 transition-all duration-200"
        >
          <FiGithub size={14} /> GitHub
        </a>
        <a
          href="https://leetcode.com/u/junaid_2318/"
          target="_blank" rel="noreferrer"
          className="flex items-center gap-2 font-mono text-xs border-brutal px-3 py-2 shadow-brutal hover:-translate-y-1 transition-all duration-200"
          style={{ background: '#FFA116' }}
        >
          <SiLeetcode size={14} /> 350+ LeetCode
        </a>
      </div>

      {/* Subtitle */}
      <div ref={subtitleRef} className="mt-10 max-w-2xl">
        <p className="font-grotesk text-lg md:text-2xl font-medium leading-relaxed">
          I build{' '}
          <span className="bg-[#111111] text-[#F8F8F5] px-2 py-0.5 mx-1 inline-block">AI-first</span>
          {' '}data pipelines and{' '}
          <span className="bg-[#2F73FF] text-[#F8F8F5] px-2 py-0.5 mx-1 inline-block">web apps</span>
          {' '}on{' '}
          <span className="bg-[#F2388F] text-[#F8F8F5] px-2 py-0.5 mx-1 inline-block">GCP</span>
          {' '}with Java as my backbone.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 mt-12 items-center">
        <a
          href="#work"
          className="font-grotesk font-bold text-sm bg-[#F8F8F5] border-brutal shadow-brutal px-6 py-3 hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-200"
        >
          VIEW WORK →
        </a>
        <a
          href="mailto:junaidkhan91020@gmail.com"
          ref={btnRef}
          className="font-grotesk font-bold text-sm bg-[#2F73FF] text-[#F8F8F5] border-brutal shadow-brutal-white px-6 py-3 hover:translate-y-[-4px] transition-all duration-200 inline-block"
          style={{ transform: 'rotate(12deg)' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'rotate(12deg)'}
        >
          HIRE ME ✦
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs">SCROLL</span>
        <div className="w-0.5 h-8 bg-[#111111]" />
      </div>
    </section>
  );
}
