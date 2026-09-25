export default function Footer() {
  const marqueeItems = ['OPEN TO WORK', 'JAVA', 'AI', 'GCP', 'DATA ENGINEERING', 'BUILDING COOL STUFF', 'SPRING BOOT', 'PYSPARK', 'dbt', 'BIGQUERY'];

  return (
    <footer className="border-t-4 border-[#111111] mt-0">
      {/* Marquee */}
      <div className="bg-[#111111] text-[#EFCF35] py-3 overflow-hidden">
        <div className="flex">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-mono text-sm font-bold tracking-widest flex items-center gap-4">
                {item} <span className="text-[#F2388F]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-anton text-4xl" style={{ WebkitTextStroke: '2px #111111', color: 'transparent' }}>
            MJK
          </span>
          <span className="animate-spin-slow text-2xl">✦</span>
        </div>
        <p className="font-mono text-xs text-[#555]">
          © 2025 Mohammed Junaid Khan · Built with React + Vite + Tailwind
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/mohammedjunaidkhan980" target="_blank" rel="noreferrer"
            className="font-mono text-xs hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/mohammed-junaid-khan/" target="_blank" rel="noreferrer"
            className="font-mono text-xs hover:underline">LinkedIn</a>
          <a href="mailto:junaidkhan91020@gmail.com"
            className="font-mono text-xs hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
