export default function ContactButton({ href, label, icon, bg = '#F8F8F5', color = '#111111' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 font-grotesk font-bold text-sm border-brutal shadow-brutal px-6 py-3 transition-all duration-200 hover:-translate-y-2 hover:shadow-brutal-lg active:translate-y-0"
      style={{ background: bg, color }}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </a>
  );
}
