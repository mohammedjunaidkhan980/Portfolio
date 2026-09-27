import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingShape from './components/FloatingShape';
import SectionTitle from './components/SectionTitle';
import ProjectsCarousel from './components/ProjectsCarousel';
import SkillTile from './components/SkillTile';
import InfoCard from './components/InfoCard';
import TimelineItem from './components/TimelineItem';
import ContactButton from './components/ContactButton';
import Footer from './components/Footer';

import { projects, projectSections, skills, timeline } from './data';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const cursorRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    const raf = time => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Cursor
  useEffect(() => {
    const move = e => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Scroll animations
  useEffect(() => {
    gsap.utils.toArray('.fade-up').forEach(el => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    });
  }, []);

  const aboutCards = [
    { label: 'EXPERIENCE', value: 'Jul 2025 – Present', color: '#2F73FF' },
    { label: 'ROLE', value: 'Software Engineer', color: '#F8F8F5' },
    { label: 'STACK', value: 'Java Full Stack', color: '#76E36A' },
    { label: 'FOCUS', value: 'GCP Data Eng', color: '#F2388F' },
    { label: 'CERT', value: 'GCP Associate', color: '#EFCF35' },
    { label: 'LEETCODE', value: '350+ Problems', color: '#FFA116' },
    { label: 'LOCATION', value: 'Bengaluru', color: '#F8F8F5' },
  ];

  return (
    <div className="relative bg-[#EFCF35] min-h-screen">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="cursor-dot"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div
        className="cursor-star"
        style={{ left: cursorPos.x + 16, top: cursorPos.y - 16 }}
      >
        ✦
      </div>

      <Navbar />
      <Hero />

      {/* ── WORK SECTION ─────────────────────────────────── */}
      <section id="work" className="px-6 md:px-16 py-32 relative">
        <FloatingShape type="star" color="#F2388F" style={{ top: '-20px', right: '5%' }} />
        <div className="fade-up">
          <SectionTitle title="SELECTED WORK" subtitle="// PROJECTS" />
        </div>
        <div className="fade-up">
          <ProjectsCarousel projectSections={projectSections} />
        </div>
      </section>

      {/* Scribble divider */}
      <div className="px-6 md:px-16 py-4">
        <svg width="100%" height="20" viewBox="0 0 1200 20" preserveAspectRatio="none">
          <path d="M0 10 Q150 0 300 10 Q450 20 600 10 Q750 0 900 10 Q1050 20 1200 10"
            stroke="#111111" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* ── ABOUT SECTION ────────────────────────────────── */}
      <section id="about" className="px-6 md:px-16 py-32 relative">
        <FloatingShape type="square" color="#76E36A" style={{ top: '10%', right: '3%' }} />
        <div className="fade-up">
          <SectionTitle title="ABOUT ME" subtitle="// WHO AM I" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left - Portrait placeholder */}
          <div className="fade-up">
            <div className="border-brutal-thick shadow-brutal-lg bg-[#111111] aspect-square max-w-sm relative overflow-hidden">
              <img
                src="/images/Profile.png"
                alt="Mohammed Junaid Khan"
                className="w-full h-full object-cover"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full items-center justify-center bg-[#111111]">
                <span className="font-anton text-8xl text-[#EFCF35]">MJK</span>
              </div>
              {/* Corner badge */}
              <div className="absolute bottom-4 right-4 bg-[#EFCF35] border-brutal px-3 py-1">
                <span className="font-mono text-xs font-bold">@ BENGALURU</span>
              </div>
            </div>
          </div>

          {/* Right - Info cards + text */}
          <div className="fade-up space-y-6">
            <p className="font-inter text-base leading-relaxed max-w-lg">
              Software Engineer at <strong>Capgemini</strong> with experience building production-grade
              Java microservices and AI-powered applications. Worked with <strong>Spring Boot</strong>,
              Spring Cloud, LangChain4j and Azure OpenAI to ship real-world systems. Certified
              <strong> Google Cloud Associate Engineer</strong>, now fully focused on
              <strong> GCP Data Engineering</strong> — designing end-to-end pipelines using
              Pub/Sub, Dataflow, PySpark, dbt and Airflow. I don't just learn tools, I build with them.
            </p>
            <div className="flex flex-wrap gap-4">
              {aboutCards.map((card, i) => (
                <InfoCard key={card.label} {...card} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS SECTION ───────────────────────────────── */}
      <section id="skills" className="px-6 md:px-16 py-32 bg-[#111111] relative overflow-hidden">
        <FloatingShape type="star" color="#EFCF35" style={{ top: '10%', right: '5%' }} />
        <FloatingShape type="circle" color="#F2388F" style={{ bottom: '10%', left: '3%' }} />
        <div className="fade-up">
          <SectionTitle
            title={<span className="text-[#F8F8F5]">THE STACK</span>}
            subtitle="// SKILLS"
          />
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          {skills.map((skill, i) => (
            <div key={skill.name} className="fade-up">
              <SkillTile skill={skill} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE SECTION ─────────────────────────────── */}
      <section className="px-6 md:px-16 py-32 relative">
        <FloatingShape type="scribble" color="#2F73FF" style={{ top: '5%', right: '8%' }} />
        <div className="fade-up">
          <SectionTitle title="MY JOURNEY" subtitle="// TIMELINE" />
        </div>
        <div className="max-w-2xl mt-8">
          {timeline.map((item, i) => (
            <div key={item.year} className="fade-up">
              <TimelineItem item={item} index={i} isLast={i === timeline.length - 1} />
            </div>
          ))}
        </div>
      </section>

      {/* Scribble divider */}
      <div className="px-6 md:px-16 py-4">
        <svg width="100%" height="20" viewBox="0 0 1200 20" preserveAspectRatio="none">
          <path d="M0 10 Q150 20 300 10 Q450 0 600 10 Q750 20 900 10 Q1050 0 1200 10"
            stroke="#111111" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* ── CONTACT SECTION ──────────────────────────────── */}
      <section id="contact" className="px-6 md:px-16 py-32 text-center relative">
        <FloatingShape type="star" color="#F2388F" style={{ top: '10%', left: '5%' }} />
        <FloatingShape type="circle" color="#2F73FF" style={{ bottom: '15%', right: '5%' }} />

        <div className="fade-up">
          <span className="font-mono text-xs bg-[#111111] text-[#F8F8F5] px-3 py-1 inline-block mb-6 tracking-widest">
            // CONTACT
          </span>
          <h2 className="font-anton text-[clamp(40px,7vw,90px)] leading-none mb-4">
            LET'S BUILD
          </h2>
          <h2
            className="font-anton text-[clamp(40px,7vw,90px)] leading-none mb-10 text-[#F2388F]"
            style={{ WebkitTextStroke: '2px #111111', textShadow: '6px 6px 0px #111111' }}
          >
            SOMETHING COOL.
          </h2>
        </div>

        <div className="fade-up flex flex-wrap justify-center gap-4">
          <ContactButton
            href="mailto:junaidkhan91020@gmail.com"
            label="SEND EMAIL"
            icon={<FiMail />}
            bg="#F2388F"
            color="#F8F8F5"
          />
          <ContactButton
            href="https://github.com/mohammedjunaidkhan980"
            label="GITHUB"
            icon={<FiGithub />}
            bg="#111111"
            color="#F8F8F5"
          />
          <ContactButton
            href="https://www.linkedin.com/in/mohammed-junaid-khan/"
            label="LINKEDIN"
            icon={<FiLinkedin />}
            bg="#2F73FF"
            color="#F8F8F5"
          />
          <ContactButton
            href="https://leetcode.com/u/junaid_2318/"
            label="LEETCODE 350+"
            icon={<SiLeetcode />}
            bg="#FFA116"
            color="#111111"
          />
          <ContactButton
            href="#"
            label="RESUME"
            icon={<FiFileText />}
            bg="#76E36A"
            color="#111111"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
