import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Navbar() {
  const navRef = useRef(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 0.3 }
    );
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const links = ['Work', 'About', 'Skills', 'Contact'];

  return (
    <nav ref={navRef} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="bg-[#F8F8F5] border-brutal-thick shadow-brutal rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <span className="font-anton text-xl tracking-wider flex items-center gap-2">
          MJK
          <span className="w-2 h-2 rounded-full bg-[#76E36A] border border-[#111111] animate-pulse" title="Open to Work" />
        </span>

        {/* Links */}
        <ul className="hidden md:flex gap-6 font-grotesk font-semibold text-sm">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative group px-3 py-1 rounded-full transition-all duration-200 hover:bg-[#EFCF35] hover:scale-105 inline-block"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side — clock + social icons */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs hidden sm:block">{time}</span>
          <div className="flex items-center gap-3">
            <a href="mailto:junaidkhan91020@gmail.com" title="Email"
              className="hover:scale-110 transition-transform duration-200 hover:text-[#F2388F]">
              <FiMail size={16} />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-junaid-khan/" target="_blank" rel="noreferrer" title="LinkedIn"
              className="hover:scale-110 transition-transform duration-200 hover:text-[#2F73FF]">
              <FiLinkedin size={16} />
            </a>
            <a href="https://github.com/mohammedjunaidkhan980" target="_blank" rel="noreferrer" title="GitHub"
              className="hover:scale-110 transition-transform duration-200">
              <FiGithub size={16} />
            </a>
            <a href="https://leetcode.com/u/junaid_2318/" target="_blank" rel="noreferrer" title="LeetCode"
              className="hover:scale-110 transition-transform duration-200 hover:text-[#FFA116]">
              <SiLeetcode size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
