export default function SectionTitle({ title, subtitle, align = 'left' }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="font-mono text-xs bg-[#111111] text-[#F8F8F5] px-3 py-1 inline-block mb-4 tracking-widest">
          {subtitle}
        </span>
      )}
      <h2 className="font-anton text-[clamp(48px,8vw,100px)] leading-none tracking-tight">
        {title}
      </h2>
    </div>
  );
}
